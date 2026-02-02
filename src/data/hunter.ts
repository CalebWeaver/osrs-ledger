import { Method } from '@/lib/types';

export const hunterMethods: Method[] = [
  {
    id: 'hunt-grey-chinchompa',
    name: 'Hunt Grey Chinchompa',
    category: 'Hunter',
    requirements: [{ skill: 'Hunter', level: 53 }],
    inputs: [],
    outputs: [{ id: 10033, count: 1 }], // Chinchompa
    exp: [{ skill: 'Hunter', amount: 198.4 }],
    ticksPerAction: 35,
    bankTimePerAction: 5,
    notes: 'Box trapping (~150/hr). Traps are not consumed.',
  },
  {
    id: 'hunt-red-chinchompa',
    name: 'Hunt Red Chinchompa',
    category: 'Hunter',
    requirements: [{ skill: 'Hunter', level: 63 }],
    inputs: [],
    outputs: [{ id: 10034, count: 1 }], // Red chinchompa
    exp: [{ skill: 'Hunter', amount: 265 }],
    ticksPerAction: 25,
    bankTimePerAction: 5,
    notes: 'Box trapping (~200/hr). Traps are not consumed.',
  },
  {
    id: 'hunt-black-chinchompa',
    name: 'Hunt Black Chinchompa',
    category: 'Hunter',
    requirements: [{ skill: 'Hunter', level: 73 }],
    inputs: [],
    outputs: [{ id: 11959, count: 1 }], // Black chinchompa
    exp: [{ skill: 'Hunter', amount: 315 }],
    ticksPerAction: 20,
    bankTimePerAction: 4,
    notes: 'Box trapping in the Wilderness (~250/hr). Risk of PKers. Traps are not consumed.',
  },
];
