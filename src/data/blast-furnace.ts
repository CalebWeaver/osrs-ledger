import { Method } from '@/lib/types';

export const blastFurnaceMethods: Method[] = [
  {
    id: 'bf-bronze-bar',
    name: 'Blast Furnace Bronze Bar',
    category: 'Smithing',
    requirements: [{ skill: 'Smithing', level: 1 }],
    inputs: [
      { id: 436, count: 1 }, // Copper ore
      { id: 438, count: 1 }, // Tin ore
    ],
    outputs: [{ id: 2349, count: 1 }], // Bronze bar
    exp: [{ skill: 'Smithing', amount: 6.2 }],
    ticksPerAction: 3,
    bankTimePerAction: 1,
    notes: 'Blast Furnace. Coffer cost ~72k gp/hr not included. Requires The Giant Dwarf quest for solo use.',
  },
  {
    id: 'bf-iron-bar',
    name: 'Blast Furnace Iron Bar',
    category: 'Smithing',
    requirements: [{ skill: 'Smithing', level: 15 }],
    inputs: [
      { id: 440, count: 1 }, // Iron ore
    ],
    outputs: [{ id: 2351, count: 1 }], // Iron bar
    exp: [{ skill: 'Smithing', amount: 12.5 }],
    ticksPerAction: 3,
    bankTimePerAction: 1,
    notes: 'Blast Furnace. 100% success rate (no 50% loss). Coffer cost ~72k gp/hr not included.',
  },
  {
    id: 'bf-silver-bar',
    name: 'Blast Furnace Silver Bar',
    category: 'Smithing',
    requirements: [{ skill: 'Smithing', level: 20 }],
    inputs: [
      { id: 442, count: 1 }, // Silver ore
    ],
    outputs: [{ id: 2355, count: 1 }], // Silver bar
    exp: [{ skill: 'Smithing', amount: 13.7 }],
    ticksPerAction: 3,
    bankTimePerAction: 1,
    notes: 'Blast Furnace. Coffer cost ~72k gp/hr not included.',
  },
  {
    id: 'bf-steel-bar',
    name: 'Blast Furnace Steel Bar',
    category: 'Smithing',
    requirements: [{ skill: 'Smithing', level: 30 }],
    inputs: [
      { id: 440, count: 1 }, // Iron ore
      { id: 453, count: 1 }, // Coal (half of normal 2)
    ],
    outputs: [{ id: 2353, count: 1 }], // Steel bar
    exp: [{ skill: 'Smithing', amount: 17.5 }],
    ticksPerAction: 3,
    bankTimePerAction: 1,
    notes: 'Blast Furnace. Uses half coal (1 instead of 2). Coffer cost ~72k gp/hr not included.',
  },
  {
    id: 'bf-gold-bar',
    name: 'Blast Furnace Gold Bar',
    category: 'Smithing',
    requirements: [{ skill: 'Smithing', level: 40 }],
    inputs: [
      { id: 444, count: 1 }, // Gold ore
    ],
    outputs: [{ id: 2357, count: 1 }], // Gold bar
    exp: [{ skill: 'Smithing', amount: 22.5 }],
    ticksPerAction: 3,
    bankTimePerAction: 1,
    notes: 'Blast Furnace. 56.2 xp with Goldsmith gauntlets. Coffer cost ~72k gp/hr not included.',
  },
  {
    id: 'bf-mithril-bar',
    name: 'Blast Furnace Mithril Bar',
    category: 'Smithing',
    requirements: [{ skill: 'Smithing', level: 50 }],
    inputs: [
      { id: 447, count: 1 }, // Mithril ore
      { id: 453, count: 2 }, // Coal (half of normal 4)
    ],
    outputs: [{ id: 2359, count: 1 }], // Mithril bar
    exp: [{ skill: 'Smithing', amount: 30 }],
    ticksPerAction: 3,
    bankTimePerAction: 1,
    notes: 'Blast Furnace. Uses half coal (2 instead of 4). Coffer cost ~72k gp/hr not included.',
  },
  {
    id: 'bf-adamantite-bar',
    name: 'Blast Furnace Adamantite Bar',
    category: 'Smithing',
    requirements: [{ skill: 'Smithing', level: 70 }],
    inputs: [
      { id: 449, count: 1 }, // Adamantite ore
      { id: 453, count: 3 }, // Coal (half of normal 6)
    ],
    outputs: [{ id: 2361, count: 1 }], // Adamantite bar
    exp: [{ skill: 'Smithing', amount: 37.5 }],
    ticksPerAction: 3,
    bankTimePerAction: 1,
    notes: 'Blast Furnace. Uses half coal (3 instead of 6). Coffer cost ~72k gp/hr not included.',
  },
  {
    id: 'bf-runite-bar',
    name: 'Blast Furnace Runite Bar',
    category: 'Smithing',
    requirements: [{ skill: 'Smithing', level: 85 }],
    inputs: [
      { id: 451, count: 1 }, // Runite ore
      { id: 453, count: 4 }, // Coal (half of normal 8)
    ],
    outputs: [{ id: 2363, count: 1 }], // Runite bar
    exp: [{ skill: 'Smithing', amount: 50 }],
    ticksPerAction: 3,
    bankTimePerAction: 1,
    notes: 'Blast Furnace. Uses half coal (4 instead of 8). Coffer cost ~72k gp/hr not included.',
  },
];
