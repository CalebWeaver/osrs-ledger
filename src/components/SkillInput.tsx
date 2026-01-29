
import React from 'react';
import { Skill } from '@/lib/types';

interface SkillInputProps {
  skill: Skill;
  level: number;
  onChange: (level: number) => void;
}

const SKILL_ICONS: Partial<Record<Skill, string>> = {
  'Magic': 'https://oldschool.runescape.wiki/images/Magic_icon_%28detail%29.png?a30e2',
  'Crafting': 'https://oldschool.runescape.wiki/images/Crafting_icon_%28detail%29.png?a30e2',
  'Attack': 'https://oldschool.runescape.wiki/images/Attack_icon_%28detail%29.png?a30e2',
  'Strength': 'https://oldschool.runescape.wiki/images/Strength_icon_%28detail%29.png?a30e2',
  'Defence': 'https://oldschool.runescape.wiki/images/Defence_icon_%28detail%29.png?a30e2',
  'Ranged': 'https://oldschool.runescape.wiki/images/Ranged_icon_%28detail%29.png?a30e2',
  'Prayer': 'https://oldschool.runescape.wiki/images/Prayer_icon_%28detail%29.png?a30e2',
  'Runecraft': 'https://oldschool.runescape.wiki/images/Runecraft_icon_%28detail%29.png?a30e2',
  'Construction': 'https://oldschool.runescape.wiki/images/Construction_icon_%28detail%29.png?a30e2',
  'Hitpoints': 'https://oldschool.runescape.wiki/images/Hitpoints_icon_%28detail%29.png?a30e2',
  'Agility': 'https://oldschool.runescape.wiki/images/Agility_icon_%28detail%29.png?a30e2',
  'Herblore': 'https://oldschool.runescape.wiki/images/Herblore_icon_%28detail%29.png?a30e2',
  'Thieving': 'https://oldschool.runescape.wiki/images/Thieving_icon_%28detail%29.png?a30e2',
  'Fletching': 'https://oldschool.runescape.wiki/images/Fletching_icon_%28detail%29.png?a30e2',
  'Slayer': 'https://oldschool.runescape.wiki/images/Slayer_icon_%28detail%29.png?a30e2',
  'Hunter': 'https://oldschool.runescape.wiki/images/Hunter_icon_%28detail%29.png?a30e2',
  'Mining': 'https://oldschool.runescape.wiki/images/Mining_icon_%28detail%29.png?a30e2',
  'Smithing': 'https://oldschool.runescape.wiki/images/Smithing_icon_%28detail%29.png?a30e2',
  'Fishing': 'https://oldschool.runescape.wiki/images/Fishing_icon_%28detail%29.png?a30e2',
  'Cooking': 'https://oldschool.runescape.wiki/images/Cooking_icon_%28detail%29.png?a30e2',
  'Firemaking': 'https://oldschool.runescape.wiki/images/Firemaking_icon_%28detail%29.png?a30e2',
  'Woodcutting': 'https://oldschool.runescape.wiki/images/Woodcutting_icon_%28detail%29.png?a30e2',
  'Farming': 'https://oldschool.runescape.wiki/images/Farming_icon_%28detail%29.png?a30e2',
};

export function SkillInput({ skill, level, onChange }: SkillInputProps) {
  const iconUrl = SKILL_ICONS[skill];

  return (
    <div className="skill-input-container" title={skill}>
      {iconUrl && <img src={iconUrl} alt={skill} className="skill-icon" />}
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
