import { Method } from '@/lib/types';

export const miningMethods: Method[] = [
  {
    id: 'mine-clay',
    name: 'Mine Clay',
    category: 'Mining',
    requirements: [{ skill: 'Mining', level: 1 }],
    inputs: [],
    outputs: [{ id: 434, count: 1 }], // Clay
    exp: [{ skill: 'Mining', amount: 5 }],
    ticksPerAction: 8,
    bankTimePerAction: 6,
  },
  {
    id: 'mine-copper-ore',
    name: 'Mine Copper Ore',
    category: 'Mining',
    requirements: [{ skill: 'Mining', level: 1 }],
    inputs: [],
    outputs: [{ id: 436, count: 1 }], // Copper ore
    exp: [{ skill: 'Mining', amount: 17.5 }],
    ticksPerAction: 8,
    bankTimePerAction: 6,
  },
  {
    id: 'mine-tin-ore',
    name: 'Mine Tin Ore',
    category: 'Mining',
    requirements: [{ skill: 'Mining', level: 1 }],
    inputs: [],
    outputs: [{ id: 438, count: 1 }], // Tin ore
    exp: [{ skill: 'Mining', amount: 17.5 }],
    ticksPerAction: 8,
    bankTimePerAction: 6,
  },
  {
    id: 'mine-iron-ore',
    name: 'Mine Iron Ore',
    category: 'Mining',
    requirements: [{ skill: 'Mining', level: 15 }],
    inputs: [],
    outputs: [{ id: 440, count: 1 }], // Iron ore
    exp: [{ skill: 'Mining', amount: 35 }],
    ticksPerAction: 6,
    bankTimePerAction: 6,
  },
  {
    id: 'mine-silver-ore',
    name: 'Mine Silver Ore',
    category: 'Mining',
    requirements: [{ skill: 'Mining', level: 20 }],
    inputs: [],
    outputs: [{ id: 442, count: 1 }], // Silver ore
    exp: [{ skill: 'Mining', amount: 40 }],
    ticksPerAction: 12,
    bankTimePerAction: 6,
  },
  {
    id: 'mine-coal',
    name: 'Mine Coal',
    category: 'Mining',
    requirements: [{ skill: 'Mining', level: 30 }],
    inputs: [],
    outputs: [{ id: 453, count: 1 }], // Coal
    exp: [{ skill: 'Mining', amount: 50 }],
    ticksPerAction: 12,
    bankTimePerAction: 6,
  },
  {
    id: 'mine-gold-ore',
    name: 'Mine Gold Ore',
    category: 'Mining',
    requirements: [{ skill: 'Mining', level: 40 }],
    inputs: [],
    outputs: [{ id: 444, count: 1 }], // Gold ore
    exp: [{ skill: 'Mining', amount: 65 }],
    ticksPerAction: 12,
    bankTimePerAction: 6,
  },
  {
    id: 'mine-gem-rocks',
    name: 'Mine Gem Rocks',
    category: 'Mining',
    requirements: [{ skill: 'Mining', level: 40 }],
    inputs: [],
    outputs: [{ id: 1623, count: 1 }], // Uncut sapphire (modeled as average gem value)
    exp: [{ skill: 'Mining', amount: 65 }],
    ticksPerAction: 12,
    bankTimePerAction: 6,
    notes: 'Outputs modeled as uncut sapphires. Actual drops include opal, jade, topaz, sapphire, emerald, ruby, diamond.',
  },
  {
    id: 'mine-mithril-ore',
    name: 'Mine Mithril Ore',
    category: 'Mining',
    requirements: [{ skill: 'Mining', level: 55 }],
    inputs: [],
    outputs: [{ id: 447, count: 1 }], // Mithril ore
    exp: [{ skill: 'Mining', amount: 80 }],
    ticksPerAction: 16,
    bankTimePerAction: 6,
  },
  {
    id: 'mine-adamantite-ore',
    name: 'Mine Adamantite Ore',
    category: 'Mining',
    requirements: [{ skill: 'Mining', level: 70 }],
    inputs: [],
    outputs: [{ id: 449, count: 1 }], // Adamantite ore
    exp: [{ skill: 'Mining', amount: 95 }],
    ticksPerAction: 24,
    bankTimePerAction: 6,
  },
  {
    id: 'mine-runite-ore',
    name: 'Mine Runite Ore',
    category: 'Mining',
    requirements: [{ skill: 'Mining', level: 85 }],
    inputs: [],
    outputs: [{ id: 451, count: 1 }], // Runite ore
    exp: [{ skill: 'Mining', amount: 125 }],
    ticksPerAction: 40,
    bankTimePerAction: 6,
  },
  {
    id: 'mine-amethyst',
    name: 'Mine Amethyst',
    category: 'Mining',
    requirements: [{ skill: 'Mining', level: 92 }],
    inputs: [],
    outputs: [{ id: 21347, count: 1 }], // Amethyst
    exp: [{ skill: 'Mining', amount: 240 }],
    ticksPerAction: 36,
    bankTimePerAction: 6,
  },
];
