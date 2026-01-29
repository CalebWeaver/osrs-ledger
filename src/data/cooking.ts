import { Method } from '@/lib/types';

export const cookingMethods: Method[] = [
  {
    id: 'cook-shrimps',
    name: 'Cook Shrimps',
    category: 'Cooking',
    requirements: [{ skill: 'Cooking', level: 1 }],
    inputs: [{ id: 317, count: 1 }],   // Raw shrimps
    outputs: [{ id: 315, count: 1 }],   // Shrimps
    exp: [{ skill: 'Cooking', amount: 30 }],
    ticksPerAction: 4,
  },
  {
    id: 'cook-chicken',
    name: 'Cook Chicken',
    category: 'Cooking',
    requirements: [{ skill: 'Cooking', level: 1 }],
    inputs: [{ id: 2138, count: 1 }],   // Raw chicken
    outputs: [{ id: 2140, count: 1 }],   // Cooked chicken
    exp: [{ skill: 'Cooking', amount: 30 }],
    ticksPerAction: 4,
  },
  {
    id: 'cook-sardine',
    name: 'Cook Sardine',
    category: 'Cooking',
    requirements: [{ skill: 'Cooking', level: 1 }],
    inputs: [{ id: 327, count: 1 }],    // Raw sardine
    outputs: [{ id: 325, count: 1 }],    // Sardine
    exp: [{ skill: 'Cooking', amount: 40 }],
    ticksPerAction: 4,
  },
  {
    id: 'cook-herring',
    name: 'Cook Herring',
    category: 'Cooking',
    requirements: [{ skill: 'Cooking', level: 5 }],
    inputs: [{ id: 345, count: 1 }],    // Raw herring
    outputs: [{ id: 347, count: 1 }],    // Herring
    exp: [{ skill: 'Cooking', amount: 50 }],
    ticksPerAction: 4,
  },
  {
    id: 'cook-mackerel',
    name: 'Cook Mackerel',
    category: 'Cooking',
    requirements: [{ skill: 'Cooking', level: 10 }],
    inputs: [{ id: 353, count: 1 }],    // Raw mackerel
    outputs: [{ id: 355, count: 1 }],    // Mackerel
    exp: [{ skill: 'Cooking', amount: 60 }],
    ticksPerAction: 4,
  },
  {
    id: 'cook-trout',
    name: 'Cook Trout',
    category: 'Cooking',
    requirements: [{ skill: 'Cooking', level: 15 }],
    inputs: [{ id: 335, count: 1 }],    // Raw trout
    outputs: [{ id: 333, count: 1 }],    // Trout
    exp: [{ skill: 'Cooking', amount: 70 }],
    ticksPerAction: 4,
  },
  {
    id: 'cook-cod',
    name: 'Cook Cod',
    category: 'Cooking',
    requirements: [{ skill: 'Cooking', level: 18 }],
    inputs: [{ id: 341, count: 1 }],    // Raw cod
    outputs: [{ id: 339, count: 1 }],    // Cod
    exp: [{ skill: 'Cooking', amount: 75 }],
    ticksPerAction: 4,
  },
  {
    id: 'cook-pike',
    name: 'Cook Pike',
    category: 'Cooking',
    requirements: [{ skill: 'Cooking', level: 20 }],
    inputs: [{ id: 349, count: 1 }],    // Raw pike
    outputs: [{ id: 351, count: 1 }],    // Pike
    exp: [{ skill: 'Cooking', amount: 80 }],
    ticksPerAction: 4,
  },
  {
    id: 'cook-salmon',
    name: 'Cook Salmon',
    category: 'Cooking',
    requirements: [{ skill: 'Cooking', level: 25 }],
    inputs: [{ id: 331, count: 1 }],    // Raw salmon
    outputs: [{ id: 329, count: 1 }],    // Salmon
    exp: [{ skill: 'Cooking', amount: 90 }],
    ticksPerAction: 4,
  },
  {
    id: 'cook-tuna',
    name: 'Cook Tuna',
    category: 'Cooking',
    requirements: [{ skill: 'Cooking', level: 30 }],
    inputs: [{ id: 359, count: 1 }],    // Raw tuna
    outputs: [{ id: 361, count: 1 }],    // Tuna
    exp: [{ skill: 'Cooking', amount: 100 }],
    ticksPerAction: 4,
  },
  {
    id: 'cook-lobster',
    name: 'Cook Lobster',
    category: 'Cooking',
    requirements: [{ skill: 'Cooking', level: 40 }],
    inputs: [{ id: 377, count: 1 }],    // Raw lobster
    outputs: [{ id: 379, count: 1 }],    // Lobster
    exp: [{ skill: 'Cooking', amount: 120 }],
    ticksPerAction: 4,
  },
  {
    id: 'cook-swordfish',
    name: 'Cook Swordfish',
    category: 'Cooking',
    requirements: [{ skill: 'Cooking', level: 45 }],
    inputs: [{ id: 371, count: 1 }],    // Raw swordfish
    outputs: [{ id: 373, count: 1 }],    // Swordfish
    exp: [{ skill: 'Cooking', amount: 140 }],
    ticksPerAction: 4,
  },
  {
    id: 'cook-monkfish',
    name: 'Cook Monkfish',
    category: 'Cooking',
    requirements: [{ skill: 'Cooking', level: 62 }],
    inputs: [{ id: 7944, count: 1 }],   // Raw monkfish
    outputs: [{ id: 7946, count: 1 }],   // Monkfish
    exp: [{ skill: 'Cooking', amount: 150 }],
    ticksPerAction: 4,
  },
  {
    id: 'cook-karambwan',
    name: 'Cook Karambwan',
    category: 'Cooking',
    requirements: [{ skill: 'Cooking', level: 30 }],
    inputs: [{ id: 3142, count: 1 }],   // Raw karambwan
    outputs: [{ id: 3144, count: 1 }],   // Cooked karambwan
    exp: [{ skill: 'Cooking', amount: 190 }],
    ticksPerAction: 4,
  },
  {
    id: 'cook-shark',
    name: 'Cook Shark',
    category: 'Cooking',
    requirements: [{ skill: 'Cooking', level: 80 }],
    inputs: [{ id: 383, count: 1 }],    // Raw shark
    outputs: [{ id: 385, count: 1 }],    // Shark
    exp: [{ skill: 'Cooking', amount: 210 }],
    ticksPerAction: 4,
  },
  {
    id: 'cook-sea-turtle',
    name: 'Cook Sea Turtle',
    category: 'Cooking',
    requirements: [{ skill: 'Cooking', level: 82 }],
    inputs: [{ id: 395, count: 1 }],    // Raw sea turtle
    outputs: [{ id: 397, count: 1 }],    // Sea turtle
    exp: [{ skill: 'Cooking', amount: 211.3 }],
    ticksPerAction: 4,
  },
  {
    id: 'cook-manta-ray',
    name: 'Cook Manta Ray',
    category: 'Cooking',
    requirements: [{ skill: 'Cooking', level: 91 }],
    inputs: [{ id: 389, count: 1 }],    // Raw manta ray
    outputs: [{ id: 391, count: 1 }],    // Manta ray
    exp: [{ skill: 'Cooking', amount: 216.2 }],
    ticksPerAction: 4,
  },
  {
    id: 'cook-anglerfish',
    name: 'Cook Anglerfish',
    category: 'Cooking',
    requirements: [{ skill: 'Cooking', level: 84 }],
    inputs: [{ id: 13439, count: 1 }],  // Raw anglerfish
    outputs: [{ id: 13441, count: 1 }],  // Anglerfish
    exp: [{ skill: 'Cooking', amount: 230 }],
    ticksPerAction: 4,
  },
  {
    id: 'cook-dark-crab',
    name: 'Cook Dark Crab',
    category: 'Cooking',
    requirements: [{ skill: 'Cooking', level: 90 }],
    inputs: [{ id: 11934, count: 1 }],  // Raw dark crab
    outputs: [{ id: 11936, count: 1 }],  // Dark crab
    exp: [{ skill: 'Cooking', amount: 215 }],
    ticksPerAction: 4,
  },
];
