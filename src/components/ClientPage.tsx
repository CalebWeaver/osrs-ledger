"use client";

import { useState, useEffect } from 'react';
import { Method, PriceMap, Skill, MethodEvaluation, ItemMapping, PlayerModifiers } from '@/lib/types';
import { evaluateMethod } from '@/lib/evaluator';
import { methods } from '@/data/methods';
import { lookupHiscores } from '@/lib/hiscores';
import { MethodCard } from './MethodCard';
import { SkillInput } from './SkillInput';
import { CraftingChain } from './CraftingChain';
import { HighAlchTab } from './HighAlchTab';
import { FlippingTab } from './FlippingTab';
import { DecantingTab } from './DecantingTab';
import { parseGpInput, normalizeGpInput } from '@/lib/parseGp';
import { InfoTip } from './InfoTip';

const ALL_SKILLS: Skill[] = [
  'Attack', 'Strength', 'Defence', 'Ranged', 'Prayer', 'Magic', 'Runecraft',
  'Construction', 'Hitpoints', 'Agility', 'Herblore', 'Thieving', 'Crafting',
  'Fletching', 'Slayer', 'Hunter', 'Mining', 'Smithing', 'Fishing', 'Cooking',
  'Firemaking', 'Woodcutting', 'Farming', 'Sailing',
];

const DEFAULT_STATS: Record<Skill, number> = {
  'Attack': 1, 'Strength': 1, 'Defence': 1, 'Ranged': 1, 'Prayer': 1,
  'Magic': 1, 'Runecraft': 1, 'Construction': 1, 'Hitpoints': 10,
  'Agility': 1, 'Herblore': 1, 'Thieving': 1, 'Crafting': 1, 'Fletching': 1,
  'Slayer': 1, 'Hunter': 1, 'Mining': 1, 'Smithing': 1, 'Fishing': 1,
  'Cooking': 1, 'Firemaking': 1, 'Woodcutting': 1, 'Farming': 1, 'Sailing': 1,
};

const ALL_QUESTS = [
  'Lunar Diplomacy',
  'Dream Mentor',
  'Desert Treasure I',
  'A Kingdom Divided',
  'Client of Kourend',
  'Sins of the Father',
  'Song of the Elves',
];

interface ClientPageProps {
  prices: PriceMap;
  mapping: ItemMapping[];
}

type AppTab = 'methods' | 'highalch' | 'flipping' | 'decanting';

const LS_KEY = 'osrs-ledger-settings';

interface SavedSettings {
  username?: string;
  playerStats?: Record<string, number>;
  showUnavailable?: boolean;
  availableGold?: string;
  minOutputVolume?: string;
  gpPerXp?: string;
  completedQuests?: string[];
  activeTab?: AppTab;
  xpSkillFilter?: string[];
  roguesOutfit?: boolean;
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

export function ClientPage({ prices, mapping }: ClientPageProps) {
  const [playerStats, setPlayerStats] = useState<Record<Skill, number>>({ ...DEFAULT_STATS });
  const [username, setUsername] = useState<string>('');
  const [lookupError, setLookupError] = useState<string>('');
  const [lookupLoading, setLookupLoading] = useState<boolean>(false);
  const [showUnavailable, setShowUnavailable] = useState<boolean>(true);
  const [availableGold, setAvailableGold] = useState<string>('');
  const [chain, setChain] = useState<MethodEvaluation[]>([]);
  const [minOutputVolume, setMinOutputVolume] = useState<string>('20000');
  const [gpPerXp, setGpPerXp] = useState<string>('');
  const [completedQuests, setCompletedQuests] = useState<Set<string>>(new Set());
  const [hydrated, setHydrated] = useState(false);
  const [sidebarTab, setSidebarTab] = useState<SidebarTab>('levels');
  const [activeTab, setActiveTab] = useState<AppTab>('methods');
  const [xpSkillFilter, setXpSkillFilter] = useState<Set<Skill>>(new Set());
  const [roguesOutfit, setRoguesOutfit] = useState<boolean>(false);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

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
    if (s.minOutputVolume !== undefined) setMinOutputVolume(s.minOutputVolume);
    if (s.gpPerXp !== undefined) setGpPerXp(s.gpPerXp);
    if (s.completedQuests) setCompletedQuests(new Set(s.completedQuests));
    if (s.activeTab === 'methods' || s.activeTab === 'highalch' || s.activeTab === 'flipping' || s.activeTab === 'decanting') setActiveTab(s.activeTab);
    if (s.xpSkillFilter) setXpSkillFilter(new Set(s.xpSkillFilter as Skill[]));
    if (s.roguesOutfit !== undefined) setRoguesOutfit(s.roguesOutfit);
    setHydrated(true);
  }, []);

  // Persist settings whenever they change (after initial hydration)
  useEffect(() => {
    if (!hydrated) return;
    saveSettings({
      username, playerStats, showUnavailable, availableGold,
      minOutputVolume, gpPerXp, completedQuests: Array.from(completedQuests), activeTab,
      xpSkillFilter: Array.from(xpSkillFilter), roguesOutfit,
    });
  }, [hydrated, username, playerStats, showUnavailable, availableGold, minOutputVolume, gpPerXp, completedQuests, activeTab, xpSkillFilter, roguesOutfit]);

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

  function toggleXpSkillFilter(skill: Skill) {
    setXpSkillFilter(prev => {
      const next = new Set(prev);
      if (next.has(skill)) {
        next.delete(skill);
      } else {
        next.add(skill);
      }
      return next;
    });
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

  const modifiers: PlayerModifiers = { roguesOutfit };

  const evaluations = methods
    .map(m => evaluateMethod(m, prices, playerStats, completedQuests, modifiers))
    .filter(ev => {
      if (!showUnavailable && ev.isLocked) return false;
      if (availableGold !== '') {
        const goldLimit = parseGpInput(availableGold);
        const costPerHour = ev.costPerAction * ev.actionsPerHour;
        if (!isNaN(goldLimit) && costPerHour > goldLimit) return false;
      }
      if (xpSkillFilter.size > 0) {
        const hasMatchingXp = ev.expPerHour.some(e => xpSkillFilter.has(e.skill));
        if (!hasMatchingXp) return false;
      }
      if (minOutputVolume !== '') {
        const volLimit = parseGpInput(minOutputVolume);
        if (!isNaN(volLimit) && volLimit > 0 && ev.outputRevenues.length > 0 &&
            ev.outputRevenues.every(o => o.volume < volLimit)) return false;
      }
      return true;
    })
    .sort((a, b) => {
      const xpValue = parseGpInput(gpPerXp) || 0;
      const effA = a.profitPerHour + a.totalExpPerHour * xpValue;
      const effB = b.profitPerHour + b.totalExpPerHour * xpValue;
      return effB - effA;
    });

  // Chain Handlers
  const handleStartChain = (methodId: string) => {
    const method = methods.find(m => m.id === methodId);
    if (!method) return;
    const evalResult = evaluateMethod(method, prices, playerStats, completedQuests, modifiers);
    setChain([evalResult]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddStep = (method: Method, index: number) => {
    const evalResult = evaluateMethod(method, prices, playerStats, completedQuests, modifiers);
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
    <>
      <div className="top-tabs">
        <button
          className={`top-tab ${activeTab === 'methods' ? 'top-tab--active' : ''}`}
          onClick={() => setActiveTab('methods')}
        >
          Methods
        </button>
        <button
          className={`top-tab ${activeTab === 'highalch' ? 'top-tab--active' : ''}`}
          onClick={() => setActiveTab('highalch')}
        >
          High Alch
        </button>
        <button
          className={`top-tab ${activeTab === 'flipping' ? 'top-tab--active' : ''}`}
          onClick={() => setActiveTab('flipping')}
        >
          Flipping
        </button>
        <button
          className={`top-tab ${activeTab === 'decanting' ? 'top-tab--active' : ''}`}
          onClick={() => setActiveTab('decanting')}
        >
          Decanting
        </button>
      </div>

      {activeTab === 'decanting' ? (
        <DecantingTab prices={prices} mapping={mapping} />
      ) : activeTab === 'flipping' ? (
        <FlippingTab prices={prices} mapping={mapping} />
      ) : activeTab === 'highalch' ? (
        <HighAlchTab prices={prices} mapping={mapping} />
      ) : (
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
        <button
          className="sidebar-toggle"
          onClick={() => setSidebarOpen(prev => !prev)}
        >
          {sidebarOpen ? 'Hide Controls ▲' : 'Show Controls ▼'}
        </button>
        <div className={`sidebar-content ${sidebarOpen ? 'sidebar-content--open' : ''}`}>
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
                  xpFilter={xpSkillFilter.has(skill)}
                  onToggleXpFilter={() => toggleXpSkillFilter(skill)}
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
          <label className="input-label">Equipment</label>
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={roguesOutfit}
              onChange={(e) => setRoguesOutfit(e.target.checked)}
            />
            {"Rogue's Outfit (2x pickpocket loot)"}
          </label>
        </div>

        <div className="control-group">
          <label className="input-label">Available Gold (GP/hr cost limit)<InfoTip text="Hides methods that cost more than this amount per hour in inputs. If you only have 1M to spend, set this to 1M to filter out expensive methods." /></label>
          <input
            type="text"
            inputMode="numeric"
            className="input-field w-full"
            placeholder="No Limit (e.g. 5M, 100K)"
            value={availableGold}
            onChange={(e) => setAvailableGold(normalizeGpInput(e.target.value))}
          />
        </div>

        <div className="control-group">
          <label className="input-label">Min Output Volume (24h)<InfoTip text="Hides methods whose outputs trade fewer than this many units per day on the Grand Exchange. Filters out items that may be hard to sell quickly." /></label>
          <input
            type="text"
            inputMode="numeric"
            className="input-field w-full"
            placeholder="No Limit (e.g. 20K)"
            value={minOutputVolume}
            onChange={(e) => setMinOutputVolume(normalizeGpInput(e.target.value))}
          />
        </div>

<div className="control-group">
          <label className="input-label">XP Value (GP per XP)<InfoTip text="Assigns a GP value to each XP gained. Methods are sorted by profit + (XP/hr × this value), so XP-rich methods rank higher. For example, setting this to 5 means 1 XP is worth 5 GP when ranking methods." /></label>
          <input
            type="text"
            inputMode="numeric"
            className="input-field w-full"
            placeholder="0"
            value={gpPerXp}
            onChange={(e) => setGpPerXp(normalizeGpInput(e.target.value))}
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
        </div>
      </section>
    </div>
      )}
    </>
  );
}
