import { Method } from '@/lib/types';

export const runecraftMethods: Method[] = [
  {
    id: 'rc-air-runes',
    name: 'Craft Air runes',
    category: 'Runecraft',
    requirements: [{ skill: 'Runecraft', level: 1 }],
    inputs: [{ id: 7936, count: 1 }],  // Pure essence
    outputs: [{ id: 556, count: 1 }],   // Air rune
    exp: [{ skill: 'Runecraft', amount: 5 }],
    ticksPerAction: 4,
  },
  {
    id: 'rc-mind-runes',
    name: 'Craft Mind runes',
    category: 'Runecraft',
    requirements: [{ skill: 'Runecraft', level: 2 }],
    inputs: [{ id: 7936, count: 1 }],
    outputs: [{ id: 558, count: 1 }],   // Mind rune
    exp: [{ skill: 'Runecraft', amount: 5.5 }],
    ticksPerAction: 4,
  },
  {
    id: 'rc-water-runes',
    name: 'Craft Water runes',
    category: 'Runecraft',
    requirements: [{ skill: 'Runecraft', level: 5 }],
    inputs: [{ id: 7936, count: 1 }],
    outputs: [{ id: 555, count: 1 }],   // Water rune
    exp: [{ skill: 'Runecraft', amount: 6 }],
    ticksPerAction: 4,
  },
  {
    id: 'rc-earth-runes',
    name: 'Craft Earth runes',
    category: 'Runecraft',
    requirements: [{ skill: 'Runecraft', level: 9 }],
    inputs: [{ id: 7936, count: 1 }],
    outputs: [{ id: 557, count: 1 }],   // Earth rune
    exp: [{ skill: 'Runecraft', amount: 6.5 }],
    ticksPerAction: 4,
  },
  {
    id: 'rc-fire-runes',
    name: 'Craft Fire runes',
    category: 'Runecraft',
    requirements: [{ skill: 'Runecraft', level: 14 }],
    inputs: [{ id: 7936, count: 1 }],
    outputs: [{ id: 554, count: 1 }],   // Fire rune
    exp: [{ skill: 'Runecraft', amount: 7 }],
    ticksPerAction: 4,
  },
  {
    id: 'rc-body-runes',
    name: 'Craft Body runes',
    category: 'Runecraft',
    requirements: [{ skill: 'Runecraft', level: 20 }],
    inputs: [{ id: 7936, count: 1 }],
    outputs: [{ id: 559, count: 1 }],   // Body rune
    exp: [{ skill: 'Runecraft', amount: 7.5 }],
    ticksPerAction: 4,
  },
  {
    id: 'rc-cosmic-runes',
    name: 'Craft Cosmic runes',
    category: 'Runecraft',
    requirements: [{ skill: 'Runecraft', level: 27 }],
    inputs: [{ id: 7936, count: 1 }],
    outputs: [{ id: 564, count: 1 }],   // Cosmic rune
    exp: [{ skill: 'Runecraft', amount: 8 }],
    ticksPerAction: 4,
  },
  {
    id: 'rc-chaos-runes',
    name: 'Craft Chaos runes',
    category: 'Runecraft',
    requirements: [{ skill: 'Runecraft', level: 35 }],
    inputs: [{ id: 7936, count: 1 }],
    outputs: [{ id: 562, count: 1 }],   // Chaos rune
    exp: [{ skill: 'Runecraft', amount: 8.5 }],
    ticksPerAction: 4,
  },
  {
    id: 'rc-nature-runes',
    name: 'Craft Nature runes',
    category: 'Runecraft',
    requirements: [{ skill: 'Runecraft', level: 44 }],
    inputs: [{ id: 7936, count: 1 }],
    outputs: [{ id: 561, count: 1 }],   // Nature rune
    exp: [{ skill: 'Runecraft', amount: 9 }],
    ticksPerAction: 4,
  },
  {
    id: 'rc-law-runes',
    name: 'Craft Law runes',
    category: 'Runecraft',
    requirements: [{ skill: 'Runecraft', level: 54 }],
    inputs: [{ id: 7936, count: 1 }],
    outputs: [{ id: 563, count: 1 }],   // Law rune
    exp: [{ skill: 'Runecraft', amount: 9.5 }],
    ticksPerAction: 4,
  },
  {
    id: 'rc-death-runes',
    name: 'Craft Death runes',
    category: 'Runecraft',
    requirements: [{ skill: 'Runecraft', level: 65 }],
    inputs: [{ id: 7936, count: 1 }],
    outputs: [{ id: 560, count: 1 }],   // Death rune
    exp: [{ skill: 'Runecraft', amount: 10 }],
    ticksPerAction: 4,
  },
  {
    id: 'rc-blood-runes',
    name: 'Craft Blood runes',
    category: 'Runecraft',
    requirements: [{ skill: 'Runecraft', level: 77 }],
    inputs: [{ id: 7936, count: 1 }],
    outputs: [{ id: 565, count: 1 }],   // Blood rune
    exp: [{ skill: 'Runecraft', amount: 23.8 }],
    ticksPerAction: 4,
  },
  {
    id: 'rc-soul-runes',
    name: 'Craft Soul runes',
    category: 'Runecraft',
    requirements: [{ skill: 'Runecraft', level: 90 }],
    inputs: [{ id: 7936, count: 1 }],
    outputs: [{ id: 566, count: 1 }],   // Soul rune
    exp: [{ skill: 'Runecraft', amount: 29.7 }],
    ticksPerAction: 4,
  },
  {
    id: 'rc-wrath-runes',
    name: 'Craft Wrath runes',
    category: 'Runecraft',
    requirements: [{ skill: 'Runecraft', level: 95 }],
    inputs: [{ id: 7936, count: 1 }],
    outputs: [{ id: 21880, count: 1 }], // Wrath rune
    exp: [{ skill: 'Runecraft', amount: 8 }],
    ticksPerAction: 4,
  },
];
