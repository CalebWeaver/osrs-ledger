import { Method } from '@/lib/types';

export const sailingMethods: Method[] = [
  {
    id: 'sailing-deep-sea-trawl-marlin',
    name: 'Deep Sea Trawling (Marlin)',
    category: 'Sailing',
    requirements: [
      { skill: 'Fishing', level: 91 },
      { skill: 'Sailing', level: 78 },
      { skill: 'Construction', level: 72 },
    ],
    quests: ['Pandemonium'],
    inputs: [],
    outputs: [
      { id: 32349, count: 0.87 }, // Raw marlin (87%)
      { id: 32341, count: 0.13 }, // Raw bluefin (13%)
    ],
    exp: [
      { skill: 'Sailing', amount: 33.3 },
      { skill: 'Fishing', amount: 64.914 },
    ],
    ticksPerAction: 13,
    bankTimePerAction: 0.3,
    notes: 'Deep sea trawling. ~450 catches/hr producing ~392 raw marlin and ~58 raw bluefin.',
  },
  {
    id: 'sailing-cut-yellowfin',
    name: 'Cut Raw Yellowfin',
    category: 'Sailing',
    requirements: [
      { skill: 'Sailing', level: 1 },
    ],
    inputs: [
      { id: 32325, count: 1 }, // Raw yellowfin
    ],
    outputs: [
      { id: 32360, count: 3 }, // Yellow fin
      { id: 32307, count: 1 }, // Fine fish offcuts
    ],
    exp: [],
    ticksPerAction: 3,
    notes: 'Cut raw yellowfin into yellow fin and fine fish offcuts.',
  },
  {
    id: 'sailing-cut-marlin',
    name: 'Cut Raw Marlin',
    category: 'Sailing',
    requirements: [
      { skill: 'Sailing', level: 1 },
    ],
    inputs: [
      { id: 32349, count: 1 }, // Raw marlin
    ],
    outputs: [
      { id: 32362, count: 3 }, // Marlin scales
      { id: 32307, count: 1 }, // Fine fish offcuts
    ],
    exp: [],
    ticksPerAction: 3,
    notes: 'Cut raw marlin into marlin scales and fine fish offcuts.',
  },
];
