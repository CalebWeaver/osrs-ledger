import { Method } from '@/lib/types';

export const magicMethods: Method[] = [
  // Superheat Item (nature rune + ores → bar, 5 ticks per cast)
  {
    id: 'magic-superheat-iron',
    name: 'Superheat Iron',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 43 }],
    inputs: [
      { id: 561, count: 1 },  // Nature rune
      { id: 440, count: 1 },  // Iron ore
    ],
    outputs: [{ id: 2351, count: 1 }], // Iron bar
    exp: [
      { skill: 'Magic', amount: 53 },
      { skill: 'Smithing', amount: 12.5 },
    ],
    ticksPerAction: 5,
  },
  {
    id: 'magic-superheat-steel',
    name: 'Superheat Steel',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 43 }],
    inputs: [
      { id: 561, count: 1 },  // Nature rune
      { id: 440, count: 1 },  // Iron ore
      { id: 453, count: 2 },  // Coal
    ],
    outputs: [{ id: 2353, count: 1 }], // Steel bar
    exp: [
      { skill: 'Magic', amount: 53 },
      { skill: 'Smithing', amount: 17.5 },
    ],
    ticksPerAction: 5,
  },
  {
    id: 'magic-superheat-mithril',
    name: 'Superheat Mithril',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 43 }],
    inputs: [
      { id: 561, count: 1 },  // Nature rune
      { id: 447, count: 1 },  // Mithril ore
      { id: 453, count: 4 },  // Coal
    ],
    outputs: [{ id: 2359, count: 1 }], // Mithril bar
    exp: [
      { skill: 'Magic', amount: 53 },
      { skill: 'Smithing', amount: 30 },
    ],
    ticksPerAction: 5,
  },
  {
    id: 'magic-superheat-adamantite',
    name: 'Superheat Adamantite',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 43 }],
    inputs: [
      { id: 561, count: 1 },  // Nature rune
      { id: 449, count: 1 },  // Adamantite ore
      { id: 453, count: 6 },  // Coal
    ],
    outputs: [{ id: 2361, count: 1 }], // Adamantite bar
    exp: [
      { skill: 'Magic', amount: 53 },
      { skill: 'Smithing', amount: 37.5 },
    ],
    ticksPerAction: 5,
  },
  {
    id: 'magic-superheat-runite',
    name: 'Superheat Runite',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 43 }],
    inputs: [
      { id: 561, count: 1 },  // Nature rune
      { id: 451, count: 1 },  // Runite ore
      { id: 453, count: 8 },  // Coal
    ],
    outputs: [{ id: 2363, count: 1 }], // Runite bar
    exp: [
      { skill: 'Magic', amount: 53 },
      { skill: 'Smithing', amount: 50 },
    ],
    ticksPerAction: 5,
  },
  {
    id: 'magic-superheat-gold',
    name: 'Superheat Gold (Goldsmith Gauntlets)',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 43 }],
    inputs: [
      { id: 561, count: 1 },  // Nature rune
      { id: 444, count: 1 },  // Gold ore
    ],
    outputs: [{ id: 2357, count: 1 }], // Gold bar
    exp: [
      { skill: 'Magic', amount: 53 },
      { skill: 'Smithing', amount: 56.2 },
    ],
    ticksPerAction: 5,
    notes: 'With Goldsmith gauntlets',
  },

  // Plank Make (nature rune + 2 astral runes + log → plank, 4 ticks per cast)
  {
    id: 'magic-plank-make-logs',
    name: 'Plank Make (Logs)',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 86 }],
    inputs: [
      { id: 561, count: 1 },   // Nature rune
      { id: 9075, count: 2 },  // Astral rune
      { id: 1511, count: 1 },  // Logs
    ],
    outputs: [{ id: 960, count: 1 }], // Plank
    exp: [{ skill: 'Magic', amount: 90 }],
    ticksPerAction: 4,
    notes: 'Also costs 70 coins per cast',
  },
  {
    id: 'magic-plank-make-oak',
    name: 'Plank Make (Oak)',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 86 }],
    quests: ['Lunar Diplomacy', 'Dream Mentor'],
    inputs: [
      { id: 561, count: 1 },   // Nature rune
      { id: 9075, count: 2 },  // Astral rune
      { id: 1521, count: 1 },  // Oak logs
    ],
    outputs: [{ id: 8778, count: 1 }], // Oak plank
    exp: [{ skill: 'Magic', amount: 90 }],
    ticksPerAction: 4,
    notes: 'Also costs 175 coins per cast',
  },
  {
    id: 'magic-plank-make-teak',
    name: 'Plank Make (Teak)',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 86 }],
    quests: ['Lunar Diplomacy', 'Dream Mentor'],
    inputs: [
      { id: 561, count: 1 },   // Nature rune
      { id: 9075, count: 2 },  // Astral rune
      { id: 6333, count: 1 },  // Teak logs
    ],
    outputs: [{ id: 8780, count: 1 }], // Teak plank
    exp: [{ skill: 'Magic', amount: 90 }],
    ticksPerAction: 4,
    notes: 'Also costs 350 coins per cast',
  },
  {
    id: 'magic-plank-make-mahogany',
    name: 'Plank Make (Mahogany)',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 86 }],
    quests: ['Lunar Diplomacy', 'Dream Mentor'],
    inputs: [
      { id: 561, count: 1 },   // Nature rune
      { id: 9075, count: 2 },  // Astral rune
      { id: 6332, count: 1 },  // Mahogany logs
    ],
    outputs: [{ id: 8782, count: 1 }], // Mahogany plank
    exp: [{ skill: 'Magic', amount: 90 }],
    ticksPerAction: 4,
    notes: 'Also costs 1050 coins per cast',
  },

  // Tan Leather (2 nature runes + 5 astral runes → tans 5 hides per cast, 5 ticks)
  {
    id: 'magic-tan-green',
    name: "Tan Leather (Green D'hide)",
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 78 }],
    quests: ['Lunar Diplomacy', 'Dream Mentor'],
    inputs: [
      { id: 561, count: 2 },   // Nature rune
      { id: 9075, count: 5 },  // Astral rune
      { id: 1753, count: 5 },  // Green dragonhide
    ],
    outputs: [{ id: 1745, count: 5 }], // Green dragon leather
    exp: [{ skill: 'Magic', amount: 81 }],
    ticksPerAction: 5,
  },
  {
    id: 'magic-tan-blue',
    name: "Tan Leather (Blue D'hide)",
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 78 }],
    quests: ['Lunar Diplomacy', 'Dream Mentor'],
    inputs: [
      { id: 561, count: 2 },   // Nature rune
      { id: 9075, count: 5 },  // Astral rune
      { id: 1751, count: 5 },  // Blue dragonhide
    ],
    outputs: [{ id: 2505, count: 5 }], // Blue dragon leather
    exp: [{ skill: 'Magic', amount: 81 }],
    ticksPerAction: 5,
  },
  {
    id: 'magic-tan-red',
    name: "Tan Leather (Red D'hide)",
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 78 }],
    quests: ['Lunar Diplomacy', 'Dream Mentor'],
    inputs: [
      { id: 561, count: 2 },   // Nature rune
      { id: 9075, count: 5 },  // Astral rune
      { id: 1749, count: 5 },  // Red dragonhide
    ],
    outputs: [{ id: 2507, count: 5 }], // Red dragon leather
    exp: [{ skill: 'Magic', amount: 81 }],
    ticksPerAction: 5,
  },
  {
    id: 'magic-tan-black',
    name: "Tan Leather (Black D'hide)",
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 78 }],
    quests: ['Lunar Diplomacy', 'Dream Mentor'],
    inputs: [
      { id: 561, count: 2 },   // Nature rune
      { id: 9075, count: 5 },  // Astral rune
      { id: 1747, count: 5 },  // Black dragonhide
    ],
    outputs: [{ id: 2509, count: 5 }], // Black dragon leather
    exp: [{ skill: 'Magic', amount: 81 }],
    ticksPerAction: 5,
  },

  // Spin Flax (Lunar) - 76 Magic, spins 5 flax per cast
  {
    id: 'magic-spin-flax',
    name: 'Spin Flax',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 76 }],
    quests: ['Lunar Diplomacy', 'Dream Mentor'],
    inputs: [
      { id: 556, count: 5 },   // Air rune
      { id: 561, count: 1 },   // Nature rune
      { id: 9075, count: 2 },  // Astral rune
      { id: 1779, count: 5 },  // Flax
    ],
    outputs: [{ id: 1777, count: 5 }], // Bow string
    exp: [
      { skill: 'Magic', amount: 75 },
      { skill: 'Crafting', amount: 75 },
    ],
    ticksPerAction: 3,
    notes: 'Lunar spellbook. Spins 5 flax per cast.',
  },

  // Superglass Make (Lunar) - 77 Magic, converts sand + seaweed → molten glass
  {
    id: 'magic-superglass-make-seaweed',
    name: 'Superglass Make (Seaweed)',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 77 }],
    quests: ['Lunar Diplomacy', 'Dream Mentor'],
    inputs: [
      { id: 556, count: 10 },   // Air rune
      { id: 554, count: 6 },    // Fire rune
      { id: 9075, count: 2 },   // Astral rune
      { id: 1783, count: 13 },  // Bucket of sand
      { id: 401, count: 13 },   // Seaweed
    ],
    outputs: [{ id: 1775, count: 17 }], // Molten glass (~1.3x of 13)
    exp: [{ skill: 'Magic', amount: 78 }],
    ticksPerAction: 3,
    notes: 'Lunar spellbook. Processes entire inventory per cast. Output averages ~1.3x base.',
  },
  {
    id: 'magic-superglass-make-giant',
    name: 'Superglass Make (Giant Seaweed)',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 77 }],
    quests: ['Lunar Diplomacy', 'Dream Mentor'],
    inputs: [
      { id: 556, count: 10 },    // Air rune
      { id: 554, count: 6 },     // Fire rune
      { id: 9075, count: 2 },    // Astral rune
      { id: 1783, count: 18 },   // Bucket of sand
      { id: 21504, count: 3 },   // Giant seaweed
    ],
    outputs: [{ id: 1775, count: 23 }], // Molten glass (~1.3x of 18)
    exp: [{ skill: 'Magic', amount: 78 }],
    ticksPerAction: 3,
    notes: 'Lunar spellbook. Each giant seaweed = 6 seaweed. Output averages ~1.3x base.',
  },

  // String Jewellery (Lunar) - 80 Magic, strings unstrung amulets
  {
    id: 'magic-string-gold-amulet',
    name: 'String Gold Amulet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 80 }],
    quests: ['Lunar Diplomacy', 'Dream Mentor'],
    inputs: [
      { id: 557, count: 10 },  // Earth rune
      { id: 555, count: 5 },   // Water rune
      { id: 9075, count: 2 },  // Astral rune
      { id: 1673, count: 1 },  // Gold amulet (u)
    ],
    outputs: [{ id: 1692, count: 1 }], // Gold amulet
    exp: [{ skill: 'Magic', amount: 83 }],
    ticksPerAction: 3,
    notes: 'Lunar spellbook. Strings amulets automatically.',
  },
  {
    id: 'magic-string-sapphire-amulet',
    name: 'String Sapphire Amulet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 80 }],
    quests: ['Lunar Diplomacy', 'Dream Mentor'],
    inputs: [
      { id: 557, count: 10 },  // Earth rune
      { id: 555, count: 5 },   // Water rune
      { id: 9075, count: 2 },  // Astral rune
      { id: 1675, count: 1 },  // Sapphire amulet (u)
    ],
    outputs: [{ id: 1694, count: 1 }], // Sapphire amulet
    exp: [{ skill: 'Magic', amount: 83 }],
    ticksPerAction: 3,
    notes: 'Lunar spellbook.',
  },
  {
    id: 'magic-string-emerald-amulet',
    name: 'String Emerald Amulet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 80 }],
    quests: ['Lunar Diplomacy', 'Dream Mentor'],
    inputs: [
      { id: 557, count: 10 },  // Earth rune
      { id: 555, count: 5 },   // Water rune
      { id: 9075, count: 2 },  // Astral rune
      { id: 1677, count: 1 },  // Emerald amulet (u)
    ],
    outputs: [{ id: 1696, count: 1 }], // Emerald amulet
    exp: [{ skill: 'Magic', amount: 83 }],
    ticksPerAction: 3,
    notes: 'Lunar spellbook.',
  },
  {
    id: 'magic-string-ruby-amulet',
    name: 'String Ruby Amulet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 80 }],
    quests: ['Lunar Diplomacy', 'Dream Mentor'],
    inputs: [
      { id: 557, count: 10 },  // Earth rune
      { id: 555, count: 5 },   // Water rune
      { id: 9075, count: 2 },  // Astral rune
      { id: 1679, count: 1 },  // Ruby amulet (u)
    ],
    outputs: [{ id: 1698, count: 1 }], // Ruby amulet
    exp: [{ skill: 'Magic', amount: 83 }],
    ticksPerAction: 3,
    notes: 'Lunar spellbook.',
  },
  {
    id: 'magic-string-diamond-amulet',
    name: 'String Diamond Amulet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 80 }],
    quests: ['Lunar Diplomacy', 'Dream Mentor'],
    inputs: [
      { id: 557, count: 10 },  // Earth rune
      { id: 555, count: 5 },   // Water rune
      { id: 9075, count: 2 },  // Astral rune
      { id: 1681, count: 1 },  // Diamond amulet (u)
    ],
    outputs: [{ id: 1700, count: 1 }], // Diamond amulet
    exp: [{ skill: 'Magic', amount: 83 }],
    ticksPerAction: 3,
    notes: 'Lunar spellbook.',
  },
  {
    id: 'magic-string-dragonstone-amulet',
    name: 'String Dragonstone Amulet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 80 }],
    quests: ['Lunar Diplomacy', 'Dream Mentor'],
    inputs: [
      { id: 557, count: 10 },  // Earth rune
      { id: 555, count: 5 },   // Water rune
      { id: 9075, count: 2 },  // Astral rune
      { id: 1683, count: 1 },  // Dragonstone amulet (u)
    ],
    outputs: [{ id: 1702, count: 1 }], // Dragonstone amulet
    exp: [{ skill: 'Magic', amount: 83 }],
    ticksPerAction: 3,
    notes: 'Lunar spellbook.',
  },
  {
    id: 'magic-string-onyx-amulet',
    name: 'String Onyx Amulet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 80 }],
    quests: ['Lunar Diplomacy', 'Dream Mentor'],
    inputs: [
      { id: 557, count: 10 },  // Earth rune
      { id: 555, count: 5 },   // Water rune
      { id: 9075, count: 2 },  // Astral rune
      { id: 6579, count: 1 },  // Onyx amulet (u)
    ],
    outputs: [{ id: 6581, count: 1 }], // Onyx amulet
    exp: [{ skill: 'Magic', amount: 83 }],
    ticksPerAction: 3,
    notes: 'Lunar spellbook.',
  },
  {
    id: 'magic-string-opal-amulet',
    name: 'String Opal Amulet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 80 }],
    quests: ['Lunar Diplomacy', 'Dream Mentor'],
    inputs: [
      { id: 557, count: 10 },  // Earth rune
      { id: 555, count: 5 },   // Water rune
      { id: 9075, count: 2 },  // Astral rune
      { id: 21090, count: 1 }, // Opal amulet (u)
    ],
    outputs: [{ id: 21098, count: 1 }], // Opal amulet
    exp: [{ skill: 'Magic', amount: 83 }],
    ticksPerAction: 3,
    notes: 'Lunar spellbook.',
  },
  {
    id: 'magic-string-jade-amulet',
    name: 'String Jade Amulet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 80 }],
    quests: ['Lunar Diplomacy', 'Dream Mentor'],
    inputs: [
      { id: 557, count: 10 },  // Earth rune
      { id: 555, count: 5 },   // Water rune
      { id: 9075, count: 2 },  // Astral rune
      { id: 21093, count: 1 }, // Jade amulet (u)
    ],
    outputs: [{ id: 21101, count: 1 }], // Jade amulet
    exp: [{ skill: 'Magic', amount: 83 }],
    ticksPerAction: 3,
    notes: 'Lunar spellbook.',
  },
  {
    id: 'magic-string-topaz-amulet',
    name: 'String Topaz Amulet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 80 }],
    quests: ['Lunar Diplomacy', 'Dream Mentor'],
    inputs: [
      { id: 557, count: 10 },  // Earth rune
      { id: 555, count: 5 },   // Water rune
      { id: 9075, count: 2 },  // Astral rune
      { id: 21096, count: 1 }, // Topaz amulet (u)
    ],
    outputs: [{ id: 21104, count: 1 }], // Topaz amulet
    exp: [{ skill: 'Magic', amount: 83 }],
    ticksPerAction: 3,
    notes: 'Lunar spellbook.',
  },

  // Degrime (Arceuus) - 70 Magic, cleans all grimy herbs in inventory
  {
    id: 'magic-degrime-ranarr',
    name: 'Degrime (Ranarr)',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 70 }],
    quests: ['A Kingdom Divided'],
    inputs: [
      { id: 557, count: 4 },   // Earth rune
      { id: 561, count: 2 },   // Nature rune
      { id: 207, count: 27 },  // Grimy ranarr weed
    ],
    outputs: [{ id: 257, count: 27 }], // Ranarr weed
    exp: [
      { skill: 'Magic', amount: 70 },
      { skill: 'Herblore', amount: 191.7 },
    ],
    ticksPerAction: 3,
    notes: 'Arceuus spellbook. Cleans entire inventory per cast. 7.1 Herblore XP per herb.',
  },
  {
    id: 'magic-degrime-toadflax',
    name: 'Degrime (Toadflax)',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 70 }],
    quests: ['A Kingdom Divided'],
    inputs: [
      { id: 557, count: 4 },    // Earth rune
      { id: 561, count: 2 },    // Nature rune
      { id: 3049, count: 27 },  // Grimy toadflax
    ],
    outputs: [{ id: 2998, count: 27 }], // Toadflax
    exp: [
      { skill: 'Magic', amount: 70 },
      { skill: 'Herblore', amount: 216 },
    ],
    ticksPerAction: 3,
    notes: 'Arceuus spellbook. Cleans entire inventory per cast. 8 Herblore XP per herb.',
  },
  {
    id: 'magic-degrime-snapdragon',
    name: 'Degrime (Snapdragon)',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 70 }],
    quests: ['A Kingdom Divided'],
    inputs: [
      { id: 557, count: 4 },    // Earth rune
      { id: 561, count: 2 },    // Nature rune
      { id: 3051, count: 27 },  // Grimy snapdragon
    ],
    outputs: [{ id: 3000, count: 27 }], // Snapdragon
    exp: [
      { skill: 'Magic', amount: 70 },
      { skill: 'Herblore', amount: 297 },
    ],
    ticksPerAction: 3,
    notes: 'Arceuus spellbook. Cleans entire inventory per cast. 11 Herblore XP per herb.',
  },
  {
    id: 'magic-degrime-torstol',
    name: 'Degrime (Torstol)',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 70 }],
    quests: ['A Kingdom Divided'],
    inputs: [
      { id: 557, count: 4 },   // Earth rune
      { id: 561, count: 2 },   // Nature rune
      { id: 219, count: 27 },  // Grimy torstol
    ],
    outputs: [{ id: 269, count: 27 }], // Torstol
    exp: [
      { skill: 'Magic', amount: 70 },
      { skill: 'Herblore', amount: 405 },
    ],
    ticksPerAction: 3,
    notes: 'Arceuus spellbook. Cleans entire inventory per cast. 15 Herblore XP per herb.',
  },
  {
    id: 'magic-degrime-kwuarm',
    name: 'Degrime (Kwuarm)',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 70 }],
    quests: ['A Kingdom Divided'],
    inputs: [
      { id: 557, count: 4 },   // Earth rune
      { id: 561, count: 2 },   // Nature rune
      { id: 213, count: 27 },  // Grimy kwuarm
    ],
    outputs: [{ id: 263, count: 27 }], // Kwuarm
    exp: [
      { skill: 'Magic', amount: 70 },
      { skill: 'Herblore', amount: 324 },
    ],
    ticksPerAction: 3,
    notes: 'Arceuus spellbook. Cleans entire inventory per cast. 12 Herblore XP per herb.',
  },
  {
    id: 'magic-degrime-cadantine',
    name: 'Degrime (Cadantine)',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 70 }],
    quests: ['A Kingdom Divided'],
    inputs: [
      { id: 557, count: 4 },   // Earth rune
      { id: 561, count: 2 },   // Nature rune
      { id: 215, count: 27 },  // Grimy cadantine
    ],
    outputs: [{ id: 265, count: 27 }], // Cadantine
    exp: [
      { skill: 'Magic', amount: 70 },
      { skill: 'Herblore', amount: 351 },
    ],
    ticksPerAction: 3,
    notes: 'Arceuus spellbook. Cleans entire inventory per cast. 13 Herblore XP per herb.',
  },
  {
    id: 'magic-degrime-lantadyme',
    name: 'Degrime (Lantadyme)',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 70 }],
    quests: ['A Kingdom Divided'],
    inputs: [
      { id: 557, count: 4 },    // Earth rune
      { id: 561, count: 2 },    // Nature rune
      { id: 2485, count: 27 },  // Grimy lantadyme
    ],
    outputs: [{ id: 2481, count: 27 }], // Lantadyme
    exp: [
      { skill: 'Magic', amount: 70 },
      { skill: 'Herblore', amount: 351.7 },
    ],
    ticksPerAction: 3,
    notes: 'Arceuus spellbook. Cleans entire inventory per cast. 13.1 Herblore XP per herb.',
  },
  {
    id: 'magic-degrime-dwarf-weed',
    name: 'Degrime (Dwarf Weed)',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 70 }],
    quests: ['A Kingdom Divided'],
    inputs: [
      { id: 557, count: 4 },   // Earth rune
      { id: 561, count: 2 },   // Nature rune
      { id: 217, count: 27 },  // Grimy dwarf weed
    ],
    outputs: [{ id: 267, count: 27 }], // Dwarf weed
    exp: [
      { skill: 'Magic', amount: 70 },
      { skill: 'Herblore', amount: 378 },
    ],
    ticksPerAction: 3,
    notes: 'Arceuus spellbook. Cleans entire inventory per cast. 14 Herblore XP per herb.',
  },
];
