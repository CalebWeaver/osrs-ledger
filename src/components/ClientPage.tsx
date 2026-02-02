"use client";

import { useState, useEffect } from 'react';
import { Method, PriceMap, Skill, MethodEvaluation } from '@/lib/types';
import { evaluateMethod } from '@/lib/evaluator';
import { methods } from '@/data/methods';
import { lookupHiscores } from '@/lib/hiscores';
import { MethodCard } from './MethodCard';
import { SkillInput } from './SkillInput';
import { CraftingChain } from './CraftingChain';

const ALL_SKILLS: Skill[] = [
  'Attack', 'Strength', 'Defence', 'Ranged', 'Prayer', 'Magic', 'Runecraft',
  'Construction', 'Hitpoints', 'Agility', 'Herblore', 'Thieving', 'Crafting',
  'Fletching', 'Slayer', 'Hunter', 'Mining', 'Smithing', 'Fishing', 'Cooking',
  'Firemaking', 'Woodcutting', 'Farming',
];

const DEFAULT_STATS: Record<Skill, number> = {
  'Attack': 1, 'Strength': 1, 'Defence': 1, 'Ranged': 1, 'Prayer': 1,
  'Magic': 1, 'Runecraft': 1, 'Construction': 1, 'Hitpoints': 10,
  'Agility': 1, 'Herblore': 1, 'Thieving': 1, 'Crafting': 1, 'Fletching': 1,
  'Slayer': 1, 'Hunter': 1, 'Mining': 1, 'Smithing': 1, 'Fishing': 1,
  'Cooking': 1, 'Firemaking': 1, 'Woodcutting': 1, 'Farming': 1,
};

const ALL_QUESTS = [
  'Lunar Diplomacy',
  'Dream Mentor',
  'Desert Treasure I',
  'A Kingdom Divided',
  'Client of Kourend',
];

interface ClientPageProps {
  prices: PriceMap;
}

const LS_KEY = 'osrs-ledger-settings';

interface SavedSettings {
  username?: string;
  playerStats?: Record<string, number>;
  showUnavailable?: boolean;
  availableGold?: string;
  sortBy?: string;
  minOutputVolume?: string;
  gpPerXp?: string;
  completedQuests?: string[];
}

function loadSettings(): SavedSettings {
  try {
    const raw = localStorage.getItem(LS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveSettings(s: SavedSettings) {
  localStorage.setItem(LS_KEY, JSON.stringify(s));
}

type SidebarTab = 'levels' | 'quests';

export function ClientPage({ prices }: ClientPageProps) {
  const [playerStats, setPlayerStats] = useState<Record<Skill, number>>({ ...DEFAULT_STATS });
  const [username, setUsername] = useState<string>('');
  const [lookupError, setLookupError] = useState<string>('');
  const [lookupLoading, setLookupLoading] = useState<boolean>(false);
  const [showUnavailable, setShowUnavailable] = useState<boolean>(true);
  const [availableGold, setAvailableGold] = useState<string>('');
  const [chain, setChain] = useState<MethodEvaluation[]>([]);
  const [sortBy, setSortBy] = useState<'default' | 'profitPerHour'>('profitPerHour');
  const [minOutputVolume, setMinOutputVolume] = useState<string>('20000');
  const [gpPerXp, setGpPerXp] = useState<string>('');
  const [completedQuests, setCompletedQuests] = useState<Set<string>>(new Set());
  const [hydrated, setHydrated] = useState(false);
  const [sidebarTab, setSidebarTab] = useState<SidebarTab>('levels');

  // Restore saved settings on mount
  useEffect(() => {
    const s = loadSettings();
    if (s.username) setUsername(s.username);
    if (s.playerStats) {
      setPlayerStats(prev => {
        const next = { ...prev };
        for (const [skill, level] of Object.entries(s.playerStats!)) {
          if (skill in next) next[skill as Skill] = level;
        }
        return next;
      });
    }
    if (s.showUnavailable !== undefined) setShowUnavailable(s.showUnavailable);
    if (s.availableGold !== undefined) setAvailableGold(s.availableGold);
    if (s.sortBy === 'default' || s.sortBy === 'profitPerHour') setSortBy(s.sortBy);
    if (s.minOutputVolume !== undefined) setMinOutputVolume(s.minOutputVolume);
    if (s.gpPerXp !== undefined) setGpPerXp(s.gpPerXp);
    if (s.completedQuests) setCompletedQuests(new Set(s.completedQuests));
    setHydrated(true);
  }, []);

  // Persist settings whenever they change (after initial hydration)
  useEffect(() => {
    if (!hydrated) return;
    saveSettings({
      username, playerStats, showUnavailable, availableGold, sortBy,
      minOutputVolume, gpPerXp, completedQuests: Array.from(completedQuests),
    });
  }, [hydrated, username, playerStats, showUnavailable, availableGold, sortBy, minOutputVolume, gpPerXp, completedQuests]);

  async function lookupPlayer(name: string) {
    const trimmed = name.trim();
    if (!trimmed) return;

    setLookupError('');
    setLookupLoading(true);
    try {
      const skills = await lookupHiscores(trimmed);
      setPlayerStats(prev => {
        const next = { ...prev };
        for (const [skill, level] of Object.entries(skills)) {
          if (skill in next) {
            next[skill as Skill] = level as number;
          }
        }
        return next;
      });
    } catch (err) {
      setLookupError(err instanceof Error ? err.message : 'Lookup failed');
    } finally {
      setLookupLoading(false);
    }
  }

  function setSkillLevel(skill: Skill, level: number) {
    setPlayerStats(prev => ({ ...prev, [skill]: level }));
  }

  function toggleQuest(quest: string) {
    setCompletedQuests(prev => {
      const next = new Set(prev);
      if (next.has(quest)) {
        next.delete(quest);
      } else {
        next.add(quest);
      }
      return next;
    });
  }

  const evaluations = methods
    .map(m => evaluateMethod(m, prices, playerStats, completedQuests))
    .filter(ev => {
      if (!showUnavailable && ev.isLocked) return false;
      if (availableGold !== '') {
        const goldLimit = parseInt(availableGold, 10);
        const costPerHour = ev.costPerAction * ev.actionsPerHour;
        if (!isNaN(goldLimit) && costPerHour > goldLimit) return false;
      }
      if (minOutputVolume !== '') {
        const volLimit = parseInt(minOutputVolume, 10);
        if (!isNaN(volLimit) && ev.outputRevenues.length > 0 &&
            ev.outputRevenues.every(o => o.volume < volLimit)) return false;
      }
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'profitPerHour') {
        const xpValue = parseFloat(gpPerXp) || 0;
        const effA = a.profitPerHour + a.totalExpPerHour * xpValue;
        const effB = b.profitPerHour + b.totalExpPerHour * xpValue;
        return effB - effA;
      }
      return 0;
    });

  // Chain Handlers
  const handleStartChain = (methodId: string) => {
    const method = methods.find(m => m.id === methodId);
    if (!method) return;
    const evalResult = evaluateMethod(method, prices, playerStats, completedQuests);
    setChain([evalResult]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddStep = (method: Method, index: number) => {
    const evalResult = evaluateMethod(method, prices, playerStats, completedQuests);
    const newChain = [...chain];
    newChain.splice(index, 0, evalResult);
    setChain(newChain);
  };

  const handleRemoveStep = (index: number) => {
    const newChain = [...chain];
    newChain.splice(index, 1);
    setChain(newChain);
  };

  return (
    <div className="content-wrapper">
      <div className="main-column">
        {chain.length > 0 && (
          <CraftingChain
            chain={chain}
            allMethods={methods}
            prices={prices}
            onAddStep={handleAddStep}
            onRemoveStep={handleRemoveStep}
            onClearChain={() => setChain([])}
          />
        )}

        <section className="results-section">
          <h3 className="section-title text-secondary mb-4">All Methods</h3>
          {evaluations.map(ev => (
            <MethodCard
              key={ev.methodId}
              evaluation={ev}
              gpPerXp={parseFloat(gpPerXp) || 0}
              onStartChain={() => handleStartChain(ev.methodId)}
            />
          ))}
        </section>
      </div>

      <section className="controls-section">
        <div className="sidebar-tabs">
          <button
            className={`sidebar-tab ${sidebarTab === 'levels' ? 'sidebar-tab--active' : ''}`}
            onClick={() => setSidebarTab('levels')}
          >
            Levels
          </button>
          <button
            className={`sidebar-tab ${sidebarTab === 'quests' ? 'sidebar-tab--active' : ''}`}
            onClick={() => setSidebarTab('quests')}
          >
            Quests
          </button>
        </div>

        {sidebarTab === 'levels' && (
          <>
            <div className="username-lookup">
              <label className="input-label">Player Lookup</label>
              <div className="username-row">
                <input
                  type="search"
                  className="input-field username-input"
                  placeholder="Username"
                  autoComplete="off"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter') lookupPlayer(username); }}
                />
                <button
                  className="lookup-btn"
                  onClick={() => lookupPlayer(username)}
                  disabled={lookupLoading}
                >
                  {lookupLoading ? '...' : 'Lookup'}
                </button>
              </div>
              {lookupError && <div className="lookup-error">{lookupError}</div>}
            </div>

            <div className="skills-grid">
              {ALL_SKILLS.map(skill => (
                <SkillInput
                  key={skill}
                  skill={skill}
                  level={playerStats[skill]}
                  onChange={(lvl) => setSkillLevel(skill, lvl)}
                />
              ))}
            </div>
          </>
        )}

        {sidebarTab === 'quests' && (
          <div className="quests-list">
            {ALL_QUESTS.map(quest => (
              <label key={quest} className="checkbox-label">
                <input
                  type="checkbox"
                  checked={completedQuests.has(quest)}
                  onChange={() => toggleQuest(quest)}
                />
                {quest}
              </label>
            ))}
          </div>
        )}

        <div className="control-group">
          <label className="input-label">Available Gold (GP/hr cost limit)</label>
          <input
            type="number"
            className="input-field w-full"
            placeholder="No Limit"
            value={availableGold}
            onChange={(e) => setAvailableGold(e.target.value)}
          />
        </div>

        <div className="control-group">
          <label className="input-label">Min Output Volume (24h)</label>
          <input
            type="number"
            className="input-field w-full"
            placeholder="No Limit"
            value={minOutputVolume}
            onChange={(e) => setMinOutputVolume(e.target.value)}
          />
        </div>

        <div className="control-group">
          <label className="input-label">Sort By</label>
          <select
            className="input-field w-full"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'default' | 'profitPerHour')}
          >
            <option value="default">Default</option>
            <option value="profitPerHour">Profit Per Hour</option>
          </select>
        </div>

        <div className="control-group">
          <label className="input-label">XP Value (GP per XP)</label>
          <input
            type="number"
            className="input-field w-full"
            placeholder="0"
            value={gpPerXp}
            onChange={(e) => setGpPerXp(e.target.value)}
          />
        </div>

        <div className="control-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={showUnavailable}
              onChange={(e) => setShowUnavailable(e.target.checked)}
            />
            Show Unavailable Methods
          </label>
        </div>
      </section>
    </div>
  );
}
