import { Method } from '@/lib/types';

export const fishingMethods: Method[] = [
  {
    id: 'fish-shrimps',
    name: 'Fish Shrimps',
    category: 'Fishing',
    requirements: [{ skill: 'Fishing', level: 1 }],
    inputs: [],
    outputs: [{ id: 317, count: 1 }], // Raw shrimps
    exp: [{ skill: 'Fishing', amount: 10 }],
    ticksPerAction: 5,
    bankTimePerAction: 1,
  },
  {
    id: 'fish-trout',
    name: 'Fish Trout',
    category: 'Fishing',
    requirements: [{ skill: 'Fishing', level: 20 }],
    inputs: [
      { id: 314, count: 1 }, // Feather
    ],
    outputs: [{ id: 335, count: 1 }], // Raw trout
    exp: [{ skill: 'Fishing', amount: 50 }],
    ticksPerAction: 5,
    bankTimePerAction: 1,
    notes: 'Fly fishing. Requires fly fishing rod and feathers.',
  },
  {
    id: 'fish-salmon',
    name: 'Fish Salmon',
    category: 'Fishing',
    requirements: [{ skill: 'Fishing', level: 30 }],
    inputs: [
      { id: 314, count: 1 }, // Feather
    ],
    outputs: [{ id: 331, count: 1 }], // Raw salmon
    exp: [{ skill: 'Fishing', amount: 70 }],
    ticksPerAction: 5,
    bankTimePerAction: 1,
    notes: 'Fly fishing. Requires fly fishing rod and feathers.',
  },
  {
    id: 'fish-lobster',
    name: 'Fish Lobster',
    category: 'Fishing',
    requirements: [{ skill: 'Fishing', level: 40 }],
    inputs: [],
    outputs: [{ id: 377, count: 1 }], // Raw lobster
    exp: [{ skill: 'Fishing', amount: 90 }],
    ticksPerAction: 6,
    bankTimePerAction: 1,
  },
  {
    id: 'fish-swordfish',
    name: 'Fish Swordfish',
    category: 'Fishing',
    requirements: [{ skill: 'Fishing', level: 50 }],
    inputs: [],
    outputs: [{ id: 371, count: 1 }], // Raw swordfish
    exp: [{ skill: 'Fishing', amount: 100 }],
    ticksPerAction: 8,
    bankTimePerAction: 1,
  },
  {
    id: 'fish-monkfish',
    name: 'Fish Monkfish',
    category: 'Fishing',
    requirements: [{ skill: 'Fishing', level: 62 }],
    quests: ['Swan Song'],
    inputs: [],
    outputs: [{ id: 7944, count: 1 }], // Raw monkfish
    exp: [{ skill: 'Fishing', amount: 120 }],
    ticksPerAction: 7,
    bankTimePerAction: 1,
  },
  {
    id: 'fish-karambwan',
    name: 'Fish Karambwan',
    category: 'Fishing',
    requirements: [{ skill: 'Fishing', level: 65 }],
    quests: ['Tai Bwo Wannai Trio'],
    inputs: [],
    outputs: [{ id: 3142, count: 1 }], // Raw karambwan
    exp: [{ skill: 'Fishing', amount: 105 }],
    ticksPerAction: 5,
    bankTimePerAction: 1,
    notes: 'Requires raw karambwanji as bait (not modeled as cost).',
  },
  {
    id: 'fish-shark',
    name: 'Fish Shark',
    category: 'Fishing',
    requirements: [{ skill: 'Fishing', level: 76 }],
    inputs: [],
    outputs: [{ id: 383, count: 1 }], // Raw shark
    exp: [{ skill: 'Fishing', amount: 110 }],
    ticksPerAction: 10,
    bankTimePerAction: 1,
  },
  {
    id: 'fish-anglerfish',
    name: 'Fish Anglerfish',
    category: 'Fishing',
    requirements: [{ skill: 'Fishing', level: 82 }],
    inputs: [],
    outputs: [{ id: 13439, count: 1 }], // Raw anglerfish
    exp: [{ skill: 'Fishing', amount: 120 }],
    ticksPerAction: 9,
    bankTimePerAction: 1,
  },
  {
    id: 'fish-dark-crab',
    name: 'Fish Dark Crab',
    category: 'Fishing',
    requirements: [{ skill: 'Fishing', level: 85 }],
    inputs: [],
    outputs: [{ id: 11934, count: 1 }], // Raw dark crab
    exp: [{ skill: 'Fishing', amount: 130 }],
    ticksPerAction: 7,
    bankTimePerAction: 1,
    notes: 'Caught in the Wilderness Resource Area. Risk of PKers.',
  },
];
