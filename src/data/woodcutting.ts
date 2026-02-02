import { Method } from '@/lib/types';

export const woodcuttingMethods: Method[] = [
  {
    id: 'chop-logs',
    name: 'Chop Logs',
    category: 'Woodcutting',
    requirements: [{ skill: 'Woodcutting', level: 1 }],
    inputs: [],
    outputs: [{ id: 1511, count: 1 }], // Logs
    exp: [{ skill: 'Woodcutting', amount: 25 }],
    ticksPerAction: 8,
    bankTimePerAction: 6,
  },
  {
    id: 'chop-oak-logs',
    name: 'Chop Oak Logs',
    category: 'Woodcutting',
    requirements: [{ skill: 'Woodcutting', level: 15 }],
    inputs: [],
    outputs: [{ id: 1521, count: 1 }], // Oak logs
    exp: [{ skill: 'Woodcutting', amount: 37.5 }],
    ticksPerAction: 8,
    bankTimePerAction: 6,
  },
  {
    id: 'chop-willow-logs',
    name: 'Chop Willow Logs',
    category: 'Woodcutting',
    requirements: [{ skill: 'Woodcutting', level: 30 }],
    inputs: [],
    outputs: [{ id: 1519, count: 1 }], // Willow logs
    exp: [{ skill: 'Woodcutting', amount: 67.5 }],
    ticksPerAction: 8,
    bankTimePerAction: 6,
  },
  {
    id: 'chop-maple-logs',
    name: 'Chop Maple Logs',
    category: 'Woodcutting',
    requirements: [{ skill: 'Woodcutting', level: 45 }],
    inputs: [],
    outputs: [{ id: 1517, count: 1 }], // Maple logs
    exp: [{ skill: 'Woodcutting', amount: 100 }],
    ticksPerAction: 12,
    bankTimePerAction: 6,
  },
  {
    id: 'chop-yew-logs',
    name: 'Chop Yew Logs',
    category: 'Woodcutting',
    requirements: [{ skill: 'Woodcutting', level: 60 }],
    inputs: [],
    outputs: [{ id: 1515, count: 1 }], // Yew logs
    exp: [{ skill: 'Woodcutting', amount: 175 }],
    ticksPerAction: 20,
    bankTimePerAction: 6,
  },
  {
    id: 'chop-magic-logs',
    name: 'Chop Magic Logs',
    category: 'Woodcutting',
    requirements: [{ skill: 'Woodcutting', level: 75 }],
    inputs: [],
    outputs: [{ id: 1513, count: 1 }], // Magic logs
    exp: [{ skill: 'Woodcutting', amount: 250 }],
    ticksPerAction: 40,
    bankTimePerAction: 6,
  },
  {
    id: 'chop-redwood-logs',
    name: 'Chop Redwood Logs',
    category: 'Woodcutting',
    requirements: [{ skill: 'Woodcutting', level: 90 }],
    inputs: [],
    outputs: [{ id: 19669, count: 1 }], // Redwood logs
    exp: [{ skill: 'Woodcutting', amount: 380 }],
    ticksPerAction: 24,
    bankTimePerAction: 6,
  },
];
