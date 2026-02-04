export interface PotionSet {
  id: string;
  name: string;
  doses: {
    1?: number;
    2?: number;
    3?: number;
    4?: number;
  };
  buyLimit: number;
  members: boolean;
}

export const potionSets: PotionSet[] = [
  // High-value potions
  {
    id: 'prayer-potion',
    name: 'Prayer potion',
    doses: { 1: 143, 2: 141, 3: 139, 4: 2434 },
    buyLimit: 2000,
    members: true,
  },
  {
    id: 'super-restore',
    name: 'Super restore',
    doses: { 1: 3030, 2: 3028, 3: 3026, 4: 3024 },
    buyLimit: 2000,
    members: true,
  },
  {
    id: 'saradomin-brew',
    name: 'Saradomin brew',
    doses: { 1: 6691, 2: 6689, 3: 6687, 4: 6685 },
    buyLimit: 2000,
    members: true,
  },
  {
    id: 'ranging-potion',
    name: 'Ranging potion',
    doses: { 1: 173, 2: 171, 3: 169, 4: 2444 },
    buyLimit: 2000,
    members: true,
  },
  {
    id: 'super-combat-potion',
    name: 'Super combat potion',
    doses: { 1: 12701, 2: 12699, 3: 12697, 4: 12695 },
    buyLimit: 2000,
    members: true,
  },
  {
    id: 'sanfew-serum',
    name: 'Sanfew serum',
    doses: { 1: 10931, 2: 10929, 3: 10927, 4: 10925 },
    buyLimit: 2000,
    members: true,
  },
  {
    id: 'stamina-potion',
    name: 'Stamina potion',
    doses: { 1: 12631, 2: 12629, 3: 12627, 4: 12625 },
    buyLimit: 2000,
    members: true,
  },
  {
    id: 'anti-venom-plus',
    name: 'Anti-venom+',
    doses: { 1: 12919, 2: 12917, 3: 12915, 4: 12913 },
    buyLimit: 2000,
    members: true,
  },
  // Combat potions
  {
    id: 'super-attack',
    name: 'Super attack',
    doses: { 1: 149, 2: 147, 3: 145, 4: 2436 },
    buyLimit: 2000,
    members: true,
  },
  {
    id: 'super-strength',
    name: 'Super strength',
    doses: { 1: 161, 2: 159, 3: 157, 4: 2440 },
    buyLimit: 2000,
    members: true,
  },
  {
    id: 'super-defence',
    name: 'Super defence',
    doses: { 1: 167, 2: 165, 3: 163, 4: 2442 },
    buyLimit: 2000,
    members: true,
  },
  {
    id: 'magic-potion',
    name: 'Magic potion',
    doses: { 1: 3046, 2: 3044, 3: 3042, 4: 3040 },
    buyLimit: 2000,
    members: true,
  },
  // Antifire potions
  {
    id: 'antifire-potion',
    name: 'Antifire potion',
    doses: { 1: 2458, 2: 2456, 3: 2454, 4: 2452 },
    buyLimit: 2000,
    members: true,
  },
  {
    id: 'extended-antifire',
    name: 'Extended antifire',
    doses: { 1: 11957, 2: 11955, 3: 11953, 4: 11951 },
    buyLimit: 2000,
    members: true,
  },
  {
    id: 'super-antifire',
    name: 'Super antifire potion',
    doses: { 1: 21987, 2: 21984, 3: 21981, 4: 21978 },
    buyLimit: 2000,
    members: true,
  },
  // Divine potions
  {
    id: 'divine-super-combat',
    name: 'Divine super combat potion',
    doses: { 1: 23694, 2: 23691, 3: 23688, 4: 23685 },
    buyLimit: 2000,
    members: true,
  },
  {
    id: 'divine-ranging',
    name: 'Divine ranging potion',
    doses: { 1: 23742, 2: 23739, 3: 23736, 4: 23733 },
    buyLimit: 2000,
    members: true,
  },
  // Basic potions
  {
    id: 'attack-potion',
    name: 'Attack potion',
    doses: { 1: 125, 2: 123, 3: 121, 4: 2428 },
    buyLimit: 2000,
    members: false,
  },
  {
    id: 'strength-potion',
    name: 'Strength potion',
    doses: { 1: 119, 2: 117, 3: 115, 4: 113 },
    buyLimit: 2000,
    members: false,
  },
  {
    id: 'defence-potion',
    name: 'Defence potion',
    doses: { 1: 137, 2: 135, 3: 133, 4: 2432 },
    buyLimit: 2000,
    members: true,
  },
  {
    id: 'restore-potion',
    name: 'Restore potion',
    doses: { 1: 131, 2: 129, 3: 127, 4: 2430 },
    buyLimit: 2000,
    members: true,
  },
  {
    id: 'energy-potion',
    name: 'Energy potion',
    doses: { 1: 3014, 2: 3012, 3: 3010, 4: 3008 },
    buyLimit: 2000,
    members: true,
  },
  {
    id: 'super-energy',
    name: 'Super energy potion',
    doses: { 1: 3022, 2: 3020, 3: 3018, 4: 3016 },
    buyLimit: 2000,
    members: true,
  },
  // Anti-poison potions
  {
    id: 'antipoison',
    name: 'Antipoison',
    doses: { 1: 179, 2: 177, 3: 175, 4: 2446 },
    buyLimit: 2000,
    members: false,
  },
  {
    id: 'superantipoison',
    name: 'Superantipoison',
    doses: { 1: 185, 2: 183, 3: 181, 4: 2448 },
    buyLimit: 2000,
    members: true,
  },
  {
    id: 'antidote-plus-plus',
    name: 'Antidote++',
    doses: { 1: 5958, 2: 5956, 3: 5954, 4: 5952 },
    buyLimit: 2000,
    members: true,
  },
  {
    id: 'anti-venom',
    name: 'Anti-venom',
    doses: { 1: 12911, 2: 12909, 3: 12907, 4: 12905 },
    buyLimit: 2000,
    members: true,
  },
  // Bastion and Battlemage
  {
    id: 'bastion-potion',
    name: 'Bastion potion',
    doses: { 1: 22470, 2: 22467, 3: 22464, 4: 22461 },
    buyLimit: 2000,
    members: true,
  },
  {
    id: 'battlemage-potion',
    name: 'Battlemage potion',
    doses: { 1: 22458, 2: 22455, 3: 22452, 4: 22449 },
    buyLimit: 2000,
    members: true,
  },
  // Zamorak brew
  {
    id: 'zamorak-brew',
    name: 'Zamorak brew',
    doses: { 1: 193, 2: 191, 3: 189, 4: 2450 },
    buyLimit: 2000,
    members: true,
  },
];
