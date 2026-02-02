import { Skill } from './types';

const SKILL_ORDER: Skill[] = [
  'Attack', 'Defence', 'Strength', 'Hitpoints', 'Ranged', 'Prayer', 'Magic',
  'Cooking', 'Woodcutting', 'Fletching', 'Fishing', 'Firemaking', 'Crafting',
  'Smithing', 'Mining', 'Herblore', 'Agility', 'Thieving', 'Slayer', 'Farming',
  'Runecraft', 'Hunter', 'Construction', 'Sailing',
];

export async function lookupHiscores(username: string): Promise<Record<string, number>> {
  const res = await fetch(`/api/hiscores?player=${encodeURIComponent(username)}`);
  if (!res.ok) {
    if (res.status === 404) throw new Error('Player not found');
    throw new Error('Hiscores unavailable');
  }

  const data = await res.json();
  const skills: Record<string, number> = {};

  if (data.skills && Array.isArray(data.skills)) {
    for (let i = 0; i < SKILL_ORDER.length && i + 1 < data.skills.length; i++) {
      const entry = data.skills[i + 1];
      if (entry) {
        skills[SKILL_ORDER[i]] = Math.max(1, entry.level ?? 1);
      }
    }
  }

  return skills;
}
