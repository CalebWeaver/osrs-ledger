
import React from 'react';
import { Skill } from '@/lib/types';

interface SkillInputProps {
  skill: Skill;
  level: number;
  onChange: (level: number) => void;
  xpFilter?: boolean;
  onToggleXpFilter?: () => void;
}

const SKILL_ICONS: Partial<Record<Skill, string>> = {
  'Magic': '/icons/skills/Magic_icon.png',
  'Crafting': '/icons/skills/Crafting_icon.png',
  'Attack': '/icons/skills/Attack_icon.png',
  'Strength': '/icons/skills/Strength_icon.png',
  'Defence': '/icons/skills/Defence_icon.png',
  'Ranged': '/icons/skills/Ranged_icon.png',
  'Prayer': '/icons/skills/Prayer_icon.png',
  'Runecraft': '/icons/skills/Runecraft_icon.png',
  'Construction': '/icons/skills/Construction_icon.png',
  'Hitpoints': '/icons/skills/Hitpoints_icon.png',
  'Agility': '/icons/skills/Agility_icon.png',
  'Herblore': '/icons/skills/Herblore_icon.png',
  'Thieving': '/icons/skills/Thieving_icon.png',
  'Fletching': '/icons/skills/Fletching_icon.png',
  'Slayer': '/icons/skills/Slayer_icon.png',
  'Hunter': '/icons/skills/Hunter_icon.png',
  'Mining': '/icons/skills/Mining_icon.png',
  'Smithing': '/icons/skills/Smithing_icon.png',
  'Fishing': '/icons/skills/Fishing_icon.png',
  'Cooking': '/icons/skills/Cooking_icon.png',
  'Firemaking': '/icons/skills/Firemaking_icon.png',
  'Woodcutting': '/icons/skills/Woodcutting_icon.png',
  'Farming': '/icons/skills/Farming_icon.png',
  'Sailing': '/icons/skills/Sailing_icon.png',
};

export function SkillInput({ skill, level, onChange, xpFilter, onToggleXpFilter }: SkillInputProps) {
  const iconUrl = SKILL_ICONS[skill];

  return (
    <div className={`skill-input-container${xpFilter ? ' skill-input-container--xp-active' : ''}`} title={skill}>
      {iconUrl && (
        <img
          src={iconUrl}
          alt={skill}
          className={`skill-icon${onToggleXpFilter ? ' skill-icon--clickable' : ''}`}
          onClick={onToggleXpFilter}
/>
      )}
      <input
        type="number"
        min="1"
        max="99"
        value={level}
        onChange={(e) => {
          const val = parseInt(e.target.value);
          if (!isNaN(val)) onChange(val);
        }}
        className="skill-input"
        aria-label={`${skill} level`}
      />
    </div>
  );
}
