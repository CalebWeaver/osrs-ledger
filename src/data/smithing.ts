import { Method } from '@/lib/types';

export const smithingMethods: Method[] = [
  // Bar Smelting (ores → bar, 4 ticks per action at furnace)
  {
    id: 'smelt-bronze-bar',
    name: 'Smelt Bronze Bar',
    category: 'Smithing',
    requirements: [{ skill: 'Smithing', level: 1 }],
    inputs: [
      { id: 436, count: 1 },  // Copper ore
      { id: 438, count: 1 },  // Tin ore
    ],
    outputs: [{ id: 2349, count: 1 }], // Bronze bar
    exp: [{ skill: 'Smithing', amount: 6.2 }],
    ticksPerAction: 4,
  },
  {
    id: 'smelt-iron-bar',
    name: 'Smelt Iron Bar',
    category: 'Smithing',
    requirements: [{ skill: 'Smithing', level: 15 }],
    inputs: [
      { id: 440, count: 1 },  // Iron ore
    ],
    outputs: [{ id: 2351, count: 1 }], // Iron bar
    exp: [{ skill: 'Smithing', amount: 12.5 }],
    ticksPerAction: 4,
  },
  {
    id: 'smelt-silver-bar',
    name: 'Smelt Silver Bar',
    category: 'Smithing',
    requirements: [{ skill: 'Smithing', level: 20 }],
    inputs: [
      { id: 442, count: 1 },  // Silver ore
    ],
    outputs: [{ id: 2355, count: 1 }], // Silver bar
    exp: [{ skill: 'Smithing', amount: 13.7 }],
    ticksPerAction: 4,
  },
  {
    id: 'smelt-steel-bar',
    name: 'Smelt Steel Bar',
    category: 'Smithing',
    requirements: [{ skill: 'Smithing', level: 30 }],
    inputs: [
      { id: 440, count: 1 },  // Iron ore
      { id: 453, count: 2 },  // Coal
    ],
    outputs: [{ id: 2353, count: 1 }], // Steel bar
    exp: [{ skill: 'Smithing', amount: 17.5 }],
    ticksPerAction: 4,
  },
  {
    id: 'smelt-gold-bar',
    name: 'Smelt Gold Bar',
    category: 'Smithing',
    requirements: [{ skill: 'Smithing', level: 40 }],
    inputs: [
      { id: 444, count: 1 },  // Gold ore
    ],
    outputs: [{ id: 2357, count: 1 }], // Gold bar
    exp: [{ skill: 'Smithing', amount: 22.5 }],
    ticksPerAction: 4,
  },
  {
    id: 'smelt-mithril-bar',
    name: 'Smelt Mithril Bar',
    category: 'Smithing',
    requirements: [{ skill: 'Smithing', level: 50 }],
    inputs: [
      { id: 447, count: 1 },  // Mithril ore
      { id: 453, count: 4 },  // Coal
    ],
    outputs: [{ id: 2359, count: 1 }], // Mithril bar
    exp: [{ skill: 'Smithing', amount: 30 }],
    ticksPerAction: 4,
  },
  {
    id: 'smelt-adamantite-bar',
    name: 'Smelt Adamantite Bar',
    category: 'Smithing',
    requirements: [{ skill: 'Smithing', level: 70 }],
    inputs: [
      { id: 449, count: 1 },  // Adamantite ore
      { id: 453, count: 6 },  // Coal
    ],
    outputs: [{ id: 2361, count: 1 }], // Adamantite bar
    exp: [{ skill: 'Smithing', amount: 37.5 }],
    ticksPerAction: 4,
  },
  {
    id: 'smelt-runite-bar',
    name: 'Smelt Runite Bar',
    category: 'Smithing',
    requirements: [{ skill: 'Smithing', level: 85 }],
    inputs: [
      { id: 451, count: 1 },  // Runite ore
      { id: 453, count: 8 },  // Coal
    ],
    outputs: [{ id: 2363, count: 1 }], // Runite bar
    exp: [{ skill: 'Smithing', amount: 50 }],
    ticksPerAction: 4,
  },

  // Cannonballs (steel bar → 4 cannonballs, 6 ticks per action)
  {
    id: 'smith-cannonballs',
    name: 'Smith Cannonballs',
    category: 'Smithing',
    requirements: [{ skill: 'Smithing', level: 35 }],
    inputs: [
      { id: 2353, count: 1 }, // Steel bar
      { id: 4, count: 0 },    // Ammo mould (not consumed)
    ],
    outputs: [{ id: 2, count: 4 }], // Cannonball
    exp: [{ skill: 'Smithing', amount: 25.6 }],
    ticksPerAction: 6,
    notes: 'Requires completion of Dwarf Cannon quest.',
  },

  // Smithing Items on Anvil (bars + hammer → item, 4 ticks per action)

  // Platebodies
  {
    id: 'smith-bronze-platebody',
    name: 'Smith Bronze Platebody',
    category: 'Smithing',
    requirements: [{ skill: 'Smithing', level: 18 }],
    inputs: [
      { id: 2349, count: 5 }, // Bronze bar
      { id: 2347, count: 0 }, // Hammer (not consumed)
    ],
    outputs: [{ id: 1117, count: 1 }], // Bronze platebody
    exp: [{ skill: 'Smithing', amount: 62.5 }],
    ticksPerAction: 4,
  },
  {
    id: 'smith-iron-platebody',
    name: 'Smith Iron Platebody',
    category: 'Smithing',
    requirements: [{ skill: 'Smithing', level: 33 }],
    inputs: [
      { id: 2351, count: 5 }, // Iron bar
      { id: 2347, count: 0 }, // Hammer (not consumed)
    ],
    outputs: [{ id: 1115, count: 1 }], // Iron platebody
    exp: [{ skill: 'Smithing', amount: 125 }],
    ticksPerAction: 4,
  },
  {
    id: 'smith-steel-platebody',
    name: 'Smith Steel Platebody',
    category: 'Smithing',
    requirements: [{ skill: 'Smithing', level: 48 }],
    inputs: [
      { id: 2353, count: 5 }, // Steel bar
      { id: 2347, count: 0 }, // Hammer (not consumed)
    ],
    outputs: [{ id: 1119, count: 1 }], // Steel platebody
    exp: [{ skill: 'Smithing', amount: 187.5 }],
    ticksPerAction: 4,
  },
  {
    id: 'smith-mithril-platebody',
    name: 'Smith Mithril Platebody',
    category: 'Smithing',
    requirements: [{ skill: 'Smithing', level: 68 }],
    inputs: [
      { id: 2359, count: 5 }, // Mithril bar
      { id: 2347, count: 0 }, // Hammer (not consumed)
    ],
    outputs: [{ id: 1121, count: 1 }], // Mithril platebody
    exp: [{ skill: 'Smithing', amount: 250 }],
    ticksPerAction: 4,
  },
  {
    id: 'smith-adamant-platebody',
    name: 'Smith Adamant Platebody',
    category: 'Smithing',
    requirements: [{ skill: 'Smithing', level: 88 }],
    inputs: [
      { id: 2361, count: 5 }, // Adamantite bar
      { id: 2347, count: 0 }, // Hammer (not consumed)
    ],
    outputs: [{ id: 1123, count: 1 }], // Adamant platebody
    exp: [{ skill: 'Smithing', amount: 312.5 }],
    ticksPerAction: 4,
  },

  // Knives (1 bar → 5 knives)
  {
    id: 'smith-iron-knives',
    name: 'Smith Iron Knives',
    category: 'Smithing',
    requirements: [{ skill: 'Smithing', level: 22 }],
    inputs: [
      { id: 2351, count: 1 }, // Iron bar
      { id: 2347, count: 0 }, // Hammer (not consumed)
    ],
    outputs: [{ id: 863, count: 5 }], // Iron knives
    exp: [{ skill: 'Smithing', amount: 25 }],
    ticksPerAction: 4,
  },
  {
    id: 'smith-steel-knives',
    name: 'Smith Steel Knives',
    category: 'Smithing',
    requirements: [{ skill: 'Smithing', level: 37 }],
    inputs: [
      { id: 2353, count: 1 }, // Steel bar
      { id: 2347, count: 0 }, // Hammer (not consumed)
    ],
    outputs: [{ id: 865, count: 5 }], // Steel knives
    exp: [{ skill: 'Smithing', amount: 37.5 }],
    ticksPerAction: 4,
  },
  {
    id: 'smith-mithril-knives',
    name: 'Smith Mithril Knives',
    category: 'Smithing',
    requirements: [{ skill: 'Smithing', level: 52 }],
    inputs: [
      { id: 2359, count: 1 }, // Mithril bar
      { id: 2347, count: 0 }, // Hammer (not consumed)
    ],
    outputs: [{ id: 866, count: 5 }], // Mithril knives
    exp: [{ skill: 'Smithing', amount: 50 }],
    ticksPerAction: 4,
  },
  {
    id: 'smith-adamant-knives',
    name: 'Smith Adamant Knives',
    category: 'Smithing',
    requirements: [{ skill: 'Smithing', level: 67 }],
    inputs: [
      { id: 2361, count: 1 }, // Adamantite bar
      { id: 2347, count: 0 }, // Hammer (not consumed)
    ],
    outputs: [{ id: 867, count: 5 }], // Adamant knives
    exp: [{ skill: 'Smithing', amount: 62.5 }],
    ticksPerAction: 4,
  },
  {
    id: 'smith-rune-knives',
    name: 'Smith Rune Knives',
    category: 'Smithing',
    requirements: [{ skill: 'Smithing', level: 92 }],
    inputs: [
      { id: 2363, count: 1 }, // Runite bar
      { id: 2347, count: 0 }, // Hammer (not consumed)
    ],
    outputs: [{ id: 868, count: 5 }], // Rune knives
    exp: [{ skill: 'Smithing', amount: 75 }],
    ticksPerAction: 4,
  },

  // Dart tips (1 bar → 10 dart tips)
  {
    id: 'smith-iron-dart-tip',
    name: 'Smith Iron Dart Tips',
    category: 'Smithing',
    requirements: [{ skill: 'Smithing', level: 19 }],
    inputs: [
      { id: 2351, count: 1 }, // Iron bar
      { id: 2347, count: 0 }, // Hammer (not consumed)
    ],
    outputs: [{ id: 820, count: 10 }], // Iron dart tip
    exp: [{ skill: 'Smithing', amount: 25 }],
    ticksPerAction: 4,
  },
  {
    id: 'smith-steel-dart-tip',
    name: 'Smith Steel Dart Tips',
    category: 'Smithing',
    requirements: [{ skill: 'Smithing', level: 34 }],
    inputs: [
      { id: 2353, count: 1 }, // Steel bar
      { id: 2347, count: 0 }, // Hammer (not consumed)
    ],
    outputs: [{ id: 821, count: 10 }], // Steel dart tip
    exp: [{ skill: 'Smithing', amount: 37.5 }],
    ticksPerAction: 4,
  },
  {
    id: 'smith-mithril-dart-tip',
    name: 'Smith Mithril Dart Tips',
    category: 'Smithing',
    requirements: [{ skill: 'Smithing', level: 54 }],
    inputs: [
      { id: 2359, count: 1 }, // Mithril bar
      { id: 2347, count: 0 }, // Hammer (not consumed)
    ],
    outputs: [{ id: 822, count: 10 }], // Mithril dart tip
    exp: [{ skill: 'Smithing', amount: 50 }],
    ticksPerAction: 4,
  },
  {
    id: 'smith-adamant-dart-tip',
    name: 'Smith Adamant Dart Tips',
    category: 'Smithing',
    requirements: [{ skill: 'Smithing', level: 74 }],
    inputs: [
      { id: 2361, count: 1 }, // Adamantite bar
      { id: 2347, count: 0 }, // Hammer (not consumed)
    ],
    outputs: [{ id: 823, count: 10 }], // Adamant dart tip
    exp: [{ skill: 'Smithing', amount: 62.5 }],
    ticksPerAction: 4,
  },
  {
    id: 'smith-rune-dart-tip',
    name: 'Smith Rune Dart Tips',
    category: 'Smithing',
    requirements: [{ skill: 'Smithing', level: 89 }],
    inputs: [
      { id: 2363, count: 1 }, // Runite bar
      { id: 2347, count: 0 }, // Hammer (not consumed)
    ],
    outputs: [{ id: 824, count: 10 }], // Rune dart tip
    exp: [{ skill: 'Smithing', amount: 75 }],
    ticksPerAction: 4,
  },
];
