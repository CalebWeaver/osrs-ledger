import { Method } from '@/lib/types';

export const herbloreMethods: Method[] = [
  // Herb Cleaning (grimy herb → clean herb)
  {
    id: 'herb-clean-guam',
    name: 'Clean guam',
    category: 'Herblore',
    requirements: [{ skill: 'Herblore', level: 3 }],
    inputs: [{ id: 199, count: 1 }],  // Grimy guam
    outputs: [{ id: 249, count: 1 }], // Clean guam
    exp: [{ skill: 'Herblore', amount: 2.5 }],
    ticksPerAction: 2,
  },
  {
    id: 'herb-clean-marrentill',
    name: 'Clean marrentill',
    category: 'Herblore',
    requirements: [{ skill: 'Herblore', level: 5 }],
    inputs: [{ id: 201, count: 1 }],
    outputs: [{ id: 251, count: 1 }],
    exp: [{ skill: 'Herblore', amount: 3.8 }],
    ticksPerAction: 2,
  },
  {
    id: 'herb-clean-tarromin',
    name: 'Clean tarromin',
    category: 'Herblore',
    requirements: [{ skill: 'Herblore', level: 11 }],
    inputs: [{ id: 203, count: 1 }],
    outputs: [{ id: 253, count: 1 }],
    exp: [{ skill: 'Herblore', amount: 5 }],
    ticksPerAction: 2,
  },
  {
    id: 'herb-clean-harralander',
    name: 'Clean harralander',
    category: 'Herblore',
    requirements: [{ skill: 'Herblore', level: 20 }],
    inputs: [{ id: 205, count: 1 }],
    outputs: [{ id: 255, count: 1 }],
    exp: [{ skill: 'Herblore', amount: 6.3 }],
    ticksPerAction: 2,
  },
  {
    id: 'herb-clean-ranarr',
    name: 'Clean ranarr',
    category: 'Herblore',
    requirements: [{ skill: 'Herblore', level: 25 }],
    inputs: [{ id: 207, count: 1 }],
    outputs: [{ id: 257, count: 1 }],
    exp: [{ skill: 'Herblore', amount: 7.5 }],
    ticksPerAction: 2,
  },
  {
    id: 'herb-clean-toadflax',
    name: 'Clean toadflax',
    category: 'Herblore',
    requirements: [{ skill: 'Herblore', level: 30 }],
    inputs: [{ id: 3049, count: 1 }],
    outputs: [{ id: 2998, count: 1 }],
    exp: [{ skill: 'Herblore', amount: 8 }],
    ticksPerAction: 2,
  },
  {
    id: 'herb-clean-irit',
    name: 'Clean irit',
    category: 'Herblore',
    requirements: [{ skill: 'Herblore', level: 40 }],
    inputs: [{ id: 209, count: 1 }],
    outputs: [{ id: 259, count: 1 }],
    exp: [{ skill: 'Herblore', amount: 8.8 }],
    ticksPerAction: 2,
  },
  {
    id: 'herb-clean-avantoe',
    name: 'Clean avantoe',
    category: 'Herblore',
    requirements: [{ skill: 'Herblore', level: 48 }],
    inputs: [{ id: 211, count: 1 }],
    outputs: [{ id: 261, count: 1 }],
    exp: [{ skill: 'Herblore', amount: 10 }],
    ticksPerAction: 2,
  },
  {
    id: 'herb-clean-kwuarm',
    name: 'Clean kwuarm',
    category: 'Herblore',
    requirements: [{ skill: 'Herblore', level: 54 }],
    inputs: [{ id: 213, count: 1 }],
    outputs: [{ id: 263, count: 1 }],
    exp: [{ skill: 'Herblore', amount: 11.3 }],
    ticksPerAction: 2,
  },
  {
    id: 'herb-clean-snapdragon',
    name: 'Clean snapdragon',
    category: 'Herblore',
    requirements: [{ skill: 'Herblore', level: 59 }],
    inputs: [{ id: 3051, count: 1 }],
    outputs: [{ id: 3000, count: 1 }],
    exp: [{ skill: 'Herblore', amount: 11.8 }],
    ticksPerAction: 2,
  },
  {
    id: 'herb-clean-cadantine',
    name: 'Clean cadantine',
    category: 'Herblore',
    requirements: [{ skill: 'Herblore', level: 65 }],
    inputs: [{ id: 215, count: 1 }],
    outputs: [{ id: 265, count: 1 }],
    exp: [{ skill: 'Herblore', amount: 12.5 }],
    ticksPerAction: 2,
  },
  {
    id: 'herb-clean-lantadyme',
    name: 'Clean lantadyme',
    category: 'Herblore',
    requirements: [{ skill: 'Herblore', level: 67 }],
    inputs: [{ id: 2485, count: 1 }],
    outputs: [{ id: 2481, count: 1 }],
    exp: [{ skill: 'Herblore', amount: 13.1 }],
    ticksPerAction: 2,
  },
  {
    id: 'herb-clean-dwarf-weed',
    name: 'Clean dwarf weed',
    category: 'Herblore',
    requirements: [{ skill: 'Herblore', level: 70 }],
    inputs: [{ id: 217, count: 1 }],
    outputs: [{ id: 267, count: 1 }],
    exp: [{ skill: 'Herblore', amount: 13.8 }],
    ticksPerAction: 2,
  },
  {
    id: 'herb-clean-torstol',
    name: 'Clean torstol',
    category: 'Herblore',
    requirements: [{ skill: 'Herblore', level: 75 }],
    inputs: [{ id: 219, count: 1 }],
    outputs: [{ id: 269, count: 1 }],
    exp: [{ skill: 'Herblore', amount: 15 }],
    ticksPerAction: 2,
  },

  // Unfinished Potions (clean herb + vial of water → unf potion)
  {
    id: 'herb-unf-guam',
    name: 'Guam potion (unf)',
    category: 'Herblore',
    requirements: [{ skill: 'Herblore', level: 3 }],
    inputs: [
      { id: 249, count: 1 },  // Clean guam
      { id: 227, count: 1 },  // Vial of water
    ],
    outputs: [{ id: 91, count: 1 }],
    exp: [{ skill: 'Herblore', amount: 0 }],
    ticksPerAction: 2,
  },
  {
    id: 'herb-unf-marrentill',
    name: 'Marrentill potion (unf)',
    category: 'Herblore',
    requirements: [{ skill: 'Herblore', level: 5 }],
    inputs: [
      { id: 251, count: 1 },
      { id: 227, count: 1 },
    ],
    outputs: [{ id: 93, count: 1 }],
    exp: [{ skill: 'Herblore', amount: 0 }],
    ticksPerAction: 2,
  },
  {
    id: 'herb-unf-tarromin',
    name: 'Tarromin potion (unf)',
    category: 'Herblore',
    requirements: [{ skill: 'Herblore', level: 8 }],
    inputs: [
      { id: 253, count: 1 },
      { id: 227, count: 1 },
    ],
    outputs: [{ id: 95, count: 1 }],
    exp: [{ skill: 'Herblore', amount: 0 }],
    ticksPerAction: 2,
  },
  {
    id: 'herb-unf-harralander',
    name: 'Harralander potion (unf)',
    category: 'Herblore',
    requirements: [{ skill: 'Herblore', level: 22 }],
    inputs: [
      { id: 255, count: 1 },
      { id: 227, count: 1 },
    ],
    outputs: [{ id: 97, count: 1 }],
    exp: [{ skill: 'Herblore', amount: 0 }],
    ticksPerAction: 2,
  },
  {
    id: 'herb-unf-ranarr',
    name: 'Ranarr potion (unf)',
    category: 'Herblore',
    requirements: [{ skill: 'Herblore', level: 25 }],
    inputs: [
      { id: 257, count: 1 },
      { id: 227, count: 1 },
    ],
    outputs: [{ id: 99, count: 1 }],
    exp: [{ skill: 'Herblore', amount: 0 }],
    ticksPerAction: 2,
  },
  {
    id: 'herb-unf-toadflax',
    name: 'Toadflax potion (unf)',
    category: 'Herblore',
    requirements: [{ skill: 'Herblore', level: 30 }],
    inputs: [
      { id: 2998, count: 1 },
      { id: 227, count: 1 },
    ],
    outputs: [{ id: 3002, count: 1 }],
    exp: [{ skill: 'Herblore', amount: 0 }],
    ticksPerAction: 2,
  },
  {
    id: 'herb-unf-irit',
    name: 'Irit potion (unf)',
    category: 'Herblore',
    requirements: [{ skill: 'Herblore', level: 40 }],
    inputs: [
      { id: 259, count: 1 },
      { id: 227, count: 1 },
    ],
    outputs: [{ id: 101, count: 1 }],
    exp: [{ skill: 'Herblore', amount: 0 }],
    ticksPerAction: 2,
  },
  {
    id: 'herb-unf-avantoe',
    name: 'Avantoe potion (unf)',
    category: 'Herblore',
    requirements: [{ skill: 'Herblore', level: 48 }],
    inputs: [
      { id: 261, count: 1 },
      { id: 227, count: 1 },
    ],
    outputs: [{ id: 103, count: 1 }],
    exp: [{ skill: 'Herblore', amount: 0 }],
    ticksPerAction: 2,
  },
  {
    id: 'herb-unf-kwuarm',
    name: 'Kwuarm potion (unf)',
    category: 'Herblore',
    requirements: [{ skill: 'Herblore', level: 54 }],
    inputs: [
      { id: 263, count: 1 },
      { id: 227, count: 1 },
    ],
    outputs: [{ id: 105, count: 1 }],
    exp: [{ skill: 'Herblore', amount: 0 }],
    ticksPerAction: 2,
  },
  {
    id: 'herb-unf-snapdragon',
    name: 'Snapdragon potion (unf)',
    category: 'Herblore',
    requirements: [{ skill: 'Herblore', level: 59 }],
    inputs: [
      { id: 3000, count: 1 },
      { id: 227, count: 1 },
    ],
    outputs: [{ id: 3004, count: 1 }],
    exp: [{ skill: 'Herblore', amount: 0 }],
    ticksPerAction: 2,
  },
  {
    id: 'herb-unf-cadantine',
    name: 'Cadantine potion (unf)',
    category: 'Herblore',
    requirements: [{ skill: 'Herblore', level: 65 }],
    inputs: [
      { id: 265, count: 1 },
      { id: 227, count: 1 },
    ],
    outputs: [{ id: 107, count: 1 }],
    exp: [{ skill: 'Herblore', amount: 0 }],
    ticksPerAction: 2,
  },
  {
    id: 'herb-unf-lantadyme',
    name: 'Lantadyme potion (unf)',
    category: 'Herblore',
    requirements: [{ skill: 'Herblore', level: 67 }],
    inputs: [
      { id: 2481, count: 1 },
      { id: 227, count: 1 },
    ],
    outputs: [{ id: 2483, count: 1 }],
    exp: [{ skill: 'Herblore', amount: 0 }],
    ticksPerAction: 2,
  },
  {
    id: 'herb-unf-dwarf-weed',
    name: 'Dwarf weed potion (unf)',
    category: 'Herblore',
    requirements: [{ skill: 'Herblore', level: 70 }],
    inputs: [
      { id: 267, count: 1 },
      { id: 227, count: 1 },
    ],
    outputs: [{ id: 109, count: 1 }],
    exp: [{ skill: 'Herblore', amount: 0 }],
    ticksPerAction: 2,
  },
  {
    id: 'herb-unf-torstol',
    name: 'Torstol potion (unf)',
    category: 'Herblore',
    requirements: [{ skill: 'Herblore', level: 75 }],
    inputs: [
      { id: 269, count: 1 },
      { id: 227, count: 1 },
    ],
    outputs: [{ id: 111, count: 1 }],
    exp: [{ skill: 'Herblore', amount: 0 }],
    ticksPerAction: 2,
  },

  // Finished Potions (unf potion + secondary → finished potion)
  {
    id: 'herb-attack-potion',
    name: 'Attack potion (3)',
    category: 'Herblore',
    requirements: [{ skill: 'Herblore', level: 3 }],
    inputs: [
      { id: 91, count: 1 },   // Guam potion (unf)
      { id: 221, count: 1 },  // Eye of newt
    ],
    outputs: [{ id: 121, count: 1 }],
    exp: [{ skill: 'Herblore', amount: 25 }],
    ticksPerAction: 2,
  },
  {
    id: 'herb-antipoison',
    name: 'Antipoison (3)',
    category: 'Herblore',
    requirements: [{ skill: 'Herblore', level: 5 }],
    inputs: [
      { id: 93, count: 1 },   // Marrentill potion (unf)
      { id: 235, count: 1 },  // Unicorn horn dust
    ],
    outputs: [{ id: 175, count: 1 }],
    exp: [{ skill: 'Herblore', amount: 37.5 }],
    ticksPerAction: 2,
  },
  {
    id: 'herb-strength-potion',
    name: 'Strength potion (3)',
    category: 'Herblore',
    requirements: [{ skill: 'Herblore', level: 12 }],
    inputs: [
      { id: 95, count: 1 },   // Tarromin potion (unf)
      { id: 225, count: 1 },  // Limpwurt root
    ],
    outputs: [{ id: 115, count: 1 }],
    exp: [{ skill: 'Herblore', amount: 50 }],
    ticksPerAction: 2,
  },
  {
    id: 'herb-restore-potion',
    name: 'Restore potion (3)',
    category: 'Herblore',
    requirements: [{ skill: 'Herblore', level: 22 }],
    inputs: [
      { id: 97, count: 1 },   // Harralander potion (unf)
      { id: 223, count: 1 },  // Red spiders' eggs
    ],
    outputs: [{ id: 127, count: 1 }],
    exp: [{ skill: 'Herblore', amount: 62.5 }],
    ticksPerAction: 2,
  },
  {
    id: 'herb-energy-potion',
    name: 'Energy potion (3)',
    category: 'Herblore',
    requirements: [{ skill: 'Herblore', level: 26 }],
    inputs: [
      { id: 97, count: 1 },    // Harralander potion (unf)
      { id: 1975, count: 1 },  // Chocolate dust
    ],
    outputs: [{ id: 3010, count: 1 }],
    exp: [{ skill: 'Herblore', amount: 67.5 }],
    ticksPerAction: 2,
  },
  {
    id: 'herb-defence-potion',
    name: 'Defence potion (3)',
    category: 'Herblore',
    requirements: [{ skill: 'Herblore', level: 30 }],
    inputs: [
      { id: 99, count: 1 },   // Ranarr potion (unf)
      { id: 239, count: 1 },  // White berries
    ],
    outputs: [{ id: 133, count: 1 }],
    exp: [{ skill: 'Herblore', amount: 75 }],
    ticksPerAction: 2,
  },
  {
    id: 'herb-prayer-potion',
    name: 'Prayer potion (3)',
    category: 'Herblore',
    requirements: [{ skill: 'Herblore', level: 38 }],
    inputs: [
      { id: 99, count: 1 },   // Ranarr potion (unf)
      { id: 231, count: 1 },  // Snape grass
    ],
    outputs: [{ id: 139, count: 1 }],
    exp: [{ skill: 'Herblore', amount: 87.5 }],
    ticksPerAction: 2,
  },
  {
    id: 'herb-super-attack',
    name: 'Super attack (3)',
    category: 'Herblore',
    requirements: [{ skill: 'Herblore', level: 45 }],
    inputs: [
      { id: 101, count: 1 },  // Irit potion (unf)
      { id: 221, count: 1 },  // Eye of newt
    ],
    outputs: [{ id: 145, count: 1 }],
    exp: [{ skill: 'Herblore', amount: 100 }],
    ticksPerAction: 2,
  },
  {
    id: 'herb-superantipoison',
    name: 'Superantipoison (3)',
    category: 'Herblore',
    requirements: [{ skill: 'Herblore', level: 48 }],
    inputs: [
      { id: 101, count: 1 },  // Irit potion (unf)
      { id: 235, count: 1 },  // Unicorn horn dust
    ],
    outputs: [{ id: 181, count: 1 }],
    exp: [{ skill: 'Herblore', amount: 106.3 }],
    ticksPerAction: 2,
  },
  {
    id: 'herb-super-energy',
    name: 'Super energy (3)',
    category: 'Herblore',
    requirements: [{ skill: 'Herblore', level: 52 }],
    inputs: [
      { id: 103, count: 1 },   // Avantoe potion (unf)
      { id: 2970, count: 1 },  // Mort myre fungus
    ],
    outputs: [{ id: 3018, count: 1 }],
    exp: [{ skill: 'Herblore', amount: 117.5 }],
    ticksPerAction: 2,
  },
  {
    id: 'herb-super-strength',
    name: 'Super strength (3)',
    category: 'Herblore',
    requirements: [{ skill: 'Herblore', level: 55 }],
    inputs: [
      { id: 105, count: 1 },  // Kwuarm potion (unf)
      { id: 225, count: 1 },  // Limpwurt root
    ],
    outputs: [{ id: 157, count: 1 }],
    exp: [{ skill: 'Herblore', amount: 125 }],
    ticksPerAction: 2,
  },
  {
    id: 'herb-super-restore',
    name: 'Super restore (3)',
    category: 'Herblore',
    requirements: [{ skill: 'Herblore', level: 63 }],
    inputs: [
      { id: 3004, count: 1 },  // Snapdragon potion (unf)
      { id: 223, count: 1 },   // Red spiders' eggs
    ],
    outputs: [{ id: 3026, count: 1 }],
    exp: [{ skill: 'Herblore', amount: 142.5 }],
    ticksPerAction: 2,
  },
  {
    id: 'herb-super-defence',
    name: 'Super defence (3)',
    category: 'Herblore',
    requirements: [{ skill: 'Herblore', level: 66 }],
    inputs: [
      { id: 107, count: 1 },  // Cadantine potion (unf)
      { id: 239, count: 1 },  // White berries
    ],
    outputs: [{ id: 163, count: 1 }],
    exp: [{ skill: 'Herblore', amount: 150 }],
    ticksPerAction: 2,
  },
  {
    id: 'herb-ranging-potion',
    name: 'Ranging potion (3)',
    category: 'Herblore',
    requirements: [{ skill: 'Herblore', level: 72 }],
    inputs: [
      { id: 109, count: 1 },  // Dwarf weed potion (unf)
      { id: 245, count: 1 },  // Wine of zamorak
    ],
    outputs: [{ id: 169, count: 1 }],
    exp: [{ skill: 'Herblore', amount: 162.5 }],
    ticksPerAction: 2,
  },
  {
    id: 'herb-magic-potion',
    name: 'Magic potion (3)',
    category: 'Herblore',
    requirements: [{ skill: 'Herblore', level: 76 }],
    inputs: [
      { id: 2483, count: 1 },  // Lantadyme potion (unf)
      { id: 3138, count: 1 },  // Potato cactus
    ],
    outputs: [{ id: 3042, count: 1 }],
    exp: [{ skill: 'Herblore', amount: 172.5 }],
    ticksPerAction: 2,
  },
  {
    id: 'herb-saradomin-brew',
    name: 'Saradomin brew (3)',
    category: 'Herblore',
    requirements: [{ skill: 'Herblore', level: 81 }],
    inputs: [
      { id: 3004, count: 1 },  // Snapdragon potion (unf)
      { id: 6693, count: 1 },  // Crushed nest
    ],
    outputs: [{ id: 6687, count: 1 }],
    exp: [{ skill: 'Herblore', amount: 180 }],
    ticksPerAction: 2,
  },
];
