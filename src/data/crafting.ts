import { Method } from '@/lib/types';


export const craftingMethods: Method[] = [
  // Leather (regular) - requires needle + thread consumed
  {
    id: 'craft-leather-gloves',
    name: 'Craft Leather Gloves',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 1 }],
    inputs: [
      { id: 1741, count: 1 },  // Leather
      { id: 1734, count: 1 },  // Thread (1 per 4 items, simplified to 1)
    ],
    outputs: [{ id: 1059, count: 1 }], // Leather gloves
    exp: [{ skill: 'Crafting', amount: 13.8 }],
    ticksPerAction: 3,
  },
  {
    id: 'craft-leather-boots',
    name: 'Craft Leather Boots',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 7 }],
    inputs: [
      { id: 1741, count: 1 },
      { id: 1734, count: 1 },
    ],
    outputs: [{ id: 1061, count: 1 }], // Leather boots
    exp: [{ skill: 'Crafting', amount: 16.25 }],
    ticksPerAction: 3,
  },
  {
    id: 'craft-leather-cowl',
    name: 'Craft Leather Cowl',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 9 }],
    inputs: [
      { id: 1741, count: 1 },
      { id: 1734, count: 1 },
    ],
    outputs: [{ id: 1167, count: 1 }], // Leather cowl
    exp: [{ skill: 'Crafting', amount: 18.5 }],
    ticksPerAction: 3,
  },
  {
    id: 'craft-leather-vambraces',
    name: 'Craft Leather Vambraces',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 11 }],
    inputs: [
      { id: 1741, count: 1 },
      { id: 1734, count: 1 },
    ],
    outputs: [{ id: 1063, count: 1 }], // Leather vambraces
    exp: [{ skill: 'Crafting', amount: 22 }],
    ticksPerAction: 3,
  },
  {
    id: 'craft-leather-body',
    name: 'Craft Leather Body',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 14 }],
    inputs: [
      { id: 1741, count: 1 },
      { id: 1734, count: 1 },
    ],
    outputs: [{ id: 1129, count: 1 }], // Leather body
    exp: [{ skill: 'Crafting', amount: 25 }],
    ticksPerAction: 3,
  },
  {
    id: 'craft-leather-chaps',
    name: 'Craft Leather Chaps',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 18 }],
    inputs: [
      { id: 1741, count: 1 },
      { id: 1734, count: 1 },
    ],
    outputs: [{ id: 1095, count: 1 }], // Leather chaps
    exp: [{ skill: 'Crafting', amount: 27 }],
    ticksPerAction: 3,
  },
  {
    id: 'craft-coif',
    name: 'Craft Coif',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 38 }],
    inputs: [
      { id: 1741, count: 1 },
      { id: 1734, count: 1 },
    ],
    outputs: [{ id: 1169, count: 1 }], // Coif
    exp: [{ skill: 'Crafting', amount: 37 }],
    ticksPerAction: 3,
  },

  // Hard leather
  {
    id: 'craft-hardleather-body',
    name: 'Craft Hardleather Body',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 28 }],
    inputs: [
      { id: 1743, count: 1 },  // Hard leather
      { id: 1734, count: 1 },
    ],
    outputs: [{ id: 1131, count: 1 }], // Hardleather body
    exp: [{ skill: 'Crafting', amount: 35 }],
    ticksPerAction: 3,
  },

  // Studded leather
  {
    id: 'craft-studded-body',
    name: 'Craft Studded Body',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 41 }],
    inputs: [
      { id: 1129, count: 1 },  // Leather body
      { id: 2370, count: 1 },  // Steel studs
    ],
    outputs: [{ id: 1133, count: 1 }], // Studded body
    exp: [{ skill: 'Crafting', amount: 40 }],
    ticksPerAction: 2,
  },
  {
    id: 'craft-studded-chaps',
    name: 'Craft Studded Chaps',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 44 }],
    inputs: [
      { id: 1095, count: 1 },  // Leather chaps
      { id: 2370, count: 1 },  // Steel studs
    ],
    outputs: [{ id: 1097, count: 1 }], // Studded chaps
    exp: [{ skill: 'Crafting', amount: 42 }],
    ticksPerAction: 2,
  },

  // Green dragonhide
  {
    id: 'craft-green-dhide-vambraces',
    name: "Craft Green D'hide Vambraces",
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 57 }],
    inputs: [
      { id: 1745, count: 1 },  // Green dragon leather
      { id: 1734, count: 1 },
    ],
    outputs: [{ id: 1065, count: 1 }], // Green d'hide vambraces
    exp: [{ skill: 'Crafting', amount: 62 }],
    ticksPerAction: 3,
  },
  {
    id: 'craft-green-dhide-chaps',
    name: "Craft Green D'hide Chaps",
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 60 }],
    inputs: [
      { id: 1745, count: 2 },  // Green dragon leather
      { id: 1734, count: 1 },
    ],
    outputs: [{ id: 1099, count: 1 }], // Green d'hide chaps
    exp: [{ skill: 'Crafting', amount: 124 }],
    ticksPerAction: 3,
  },
  {
    id: 'craft-green-dhide-body',
    name: "Craft Green D'hide Body",
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 63 }],
    inputs: [
      { id: 1745, count: 3 },  // Green dragon leather
      { id: 1734, count: 1 },
    ],
    outputs: [{ id: 1135, count: 1 }], // Green d'hide body
    exp: [{ skill: 'Crafting', amount: 186 }],
    ticksPerAction: 3,
  },

  // Blue dragonhide
  {
    id: 'craft-blue-dhide-vambraces',
    name: "Craft Blue D'hide Vambraces",
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 66 }],
    inputs: [
      { id: 2505, count: 1 },  // Blue dragon leather
      { id: 1734, count: 1 },
    ],
    outputs: [{ id: 2487, count: 1 }], // Blue d'hide vambraces
    exp: [{ skill: 'Crafting', amount: 70 }],
    ticksPerAction: 3,
  },
  {
    id: 'craft-blue-dhide-chaps',
    name: "Craft Blue D'hide Chaps",
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 68 }],
    inputs: [
      { id: 2505, count: 2 },  // Blue dragon leather
      { id: 1734, count: 1 },
    ],
    outputs: [{ id: 2493, count: 1 }], // Blue d'hide chaps
    exp: [{ skill: 'Crafting', amount: 140 }],
    ticksPerAction: 3,
  },
  {
    id: 'craft-blue-dhide-body',
    name: "Craft Blue D'hide Body",
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 71 }],
    inputs: [
      { id: 2505, count: 3 },  // Blue dragon leather
      { id: 1734, count: 1 },
    ],
    outputs: [{ id: 2499, count: 1 }], // Blue d'hide body
    exp: [{ skill: 'Crafting', amount: 210 }],
    ticksPerAction: 3,
  },

  // Red dragonhide
  {
    id: 'craft-red-dhide-vambraces',
    name: "Craft Red D'hide Vambraces",
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 73 }],
    inputs: [
      { id: 2507, count: 1 },  // Red dragon leather
      { id: 1734, count: 1 },
    ],
    outputs: [{ id: 2489, count: 1 }], // Red d'hide vambraces
    exp: [{ skill: 'Crafting', amount: 78 }],
    ticksPerAction: 3,
  },
  {
    id: 'craft-red-dhide-chaps',
    name: "Craft Red D'hide Chaps",
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 75 }],
    inputs: [
      { id: 2507, count: 2 },  // Red dragon leather
      { id: 1734, count: 1 },
    ],
    outputs: [{ id: 2495, count: 1 }], // Red d'hide chaps
    exp: [{ skill: 'Crafting', amount: 156 }],
    ticksPerAction: 3,
  },
  {
    id: 'craft-red-dhide-body',
    name: "Craft Red D'hide Body",
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 77 }],
    inputs: [
      { id: 2507, count: 3 },  // Red dragon leather
      { id: 1734, count: 1 },
    ],
    outputs: [{ id: 2501, count: 1 }], // Red d'hide body
    exp: [{ skill: 'Crafting', amount: 234 }],
    ticksPerAction: 3,
  },

  // Black dragonhide
  {
    id: 'craft-black-dhide-vambraces',
    name: "Craft Black D'hide Vambraces",
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 79 }],
    inputs: [
      { id: 2509, count: 1 },  // Black dragon leather
      { id: 1734, count: 1 },
    ],
    outputs: [{ id: 2491, count: 1 }], // Black d'hide vambraces
    exp: [{ skill: 'Crafting', amount: 86 }],
    ticksPerAction: 3,
  },
  {
    id: 'craft-black-dhide-chaps',
    name: "Craft Black D'hide Chaps",
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 82 }],
    inputs: [
      { id: 2509, count: 2 },  // Black dragon leather
      { id: 1734, count: 1 },
    ],
    outputs: [{ id: 2497, count: 1 }], // Black d'hide chaps
    exp: [{ skill: 'Crafting', amount: 172 }],
    ticksPerAction: 3,
  },
  {
    id: 'craft-black-dhide-body',
    name: "Craft Black D'hide Body",
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 84 }],
    inputs: [
      { id: 2509, count: 3 },  // Black dragon leather
      { id: 1734, count: 1 },
    ],
    outputs: [{ id: 2503, count: 1 }], // Black d'hide body
    exp: [{ skill: 'Crafting', amount: 258 }],
    ticksPerAction: 3,
  },

  // Snakeskin
  {
    id: 'craft-snakeskin-boots',
    name: 'Craft Snakeskin Boots',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 45 }],
    inputs: [
      { id: 6289, count: 6 },  // Snakeskin
      { id: 1734, count: 1 },
    ],
    outputs: [{ id: 6328, count: 1 }], // Snakeskin boots
    exp: [{ skill: 'Crafting', amount: 30 }],
    ticksPerAction: 3,
  },
  {
    id: 'craft-snakeskin-vambraces',
    name: 'Craft Snakeskin Vambraces',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 47 }],
    inputs: [
      { id: 6289, count: 8 },  // Snakeskin
      { id: 1734, count: 1 },
    ],
    outputs: [{ id: 6330, count: 1 }], // Snakeskin vambraces
    exp: [{ skill: 'Crafting', amount: 35 }],
    ticksPerAction: 3,
  },
  {
    id: 'craft-snakeskin-bandana',
    name: 'Craft Snakeskin Bandana',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 48 }],
    inputs: [
      { id: 6289, count: 5 },  // Snakeskin
      { id: 1734, count: 1 },
    ],
    outputs: [{ id: 6326, count: 1 }], // Snakeskin bandana
    exp: [{ skill: 'Crafting', amount: 45 }],
    ticksPerAction: 3,
  },
  {
    id: 'craft-snakeskin-chaps',
    name: 'Craft Snakeskin Chaps',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 51 }],
    inputs: [
      { id: 6289, count: 12 }, // Snakeskin
      { id: 1734, count: 1 },
    ],
    outputs: [{ id: 6324, count: 1 }], // Snakeskin chaps
    exp: [{ skill: 'Crafting', amount: 50 }],
    ticksPerAction: 3,
  },
  {
    id: 'craft-snakeskin-body',
    name: 'Craft Snakeskin Body',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 53 }],
    inputs: [
      { id: 6289, count: 15 }, // Snakeskin
      { id: 1734, count: 1 },
    ],
    outputs: [{ id: 6322, count: 1 }], // Snakeskin body
    exp: [{ skill: 'Crafting', amount: 55 }],
    ticksPerAction: 3,
  },

  // Glass blowing (glassblowing pipe + molten glass)
  {
    id: 'craft-beer-glass',
    name: 'Blow Beer Glass',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 1 }],
    inputs: [{ id: 1775, count: 1 }], // Molten glass
    outputs: [{ id: 1919, count: 1 }], // Beer glass
    exp: [{ skill: 'Crafting', amount: 17.5 }],
    ticksPerAction: 3,
  },
  {
    id: 'craft-candle-lantern',
    name: 'Blow Candle Lantern',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 4 }],
    inputs: [{ id: 1775, count: 1 }],
    outputs: [{ id: 4527, count: 1 }], // Candle lantern (empty)
    exp: [{ skill: 'Crafting', amount: 19 }],
    ticksPerAction: 3,
  },
  {
    id: 'craft-oil-lamp',
    name: 'Blow Oil Lamp',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 12 }],
    inputs: [{ id: 1775, count: 1 }],
    outputs: [{ id: 4525, count: 1 }], // Oil lamp (empty)
    exp: [{ skill: 'Crafting', amount: 25 }],
    ticksPerAction: 3,
  },
  {
    id: 'craft-vial',
    name: 'Blow Vial',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 33 }],
    inputs: [{ id: 1775, count: 1 }],
    outputs: [{ id: 229, count: 1 }], // Vial
    exp: [{ skill: 'Crafting', amount: 35 }],
    ticksPerAction: 3,
  },
  {
    id: 'craft-fishbowl',
    name: 'Blow Fishbowl',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 42 }],
    inputs: [{ id: 1775, count: 1 }],
    outputs: [{ id: 6667, count: 1 }], // Fishbowl
    exp: [{ skill: 'Crafting', amount: 42.5 }],
    ticksPerAction: 3,
  },
  {
    id: 'craft-unpowered-orb',
    name: 'Blow Unpowered Orb',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 46 }],
    inputs: [{ id: 1775, count: 1 }],
    outputs: [{ id: 567, count: 1 }], // Unpowered orb
    exp: [{ skill: 'Crafting', amount: 52.5 }],
    ticksPerAction: 3,
  },
  {
    id: 'craft-lantern-lens',
    name: 'Blow Lantern Lens',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 49 }],
    inputs: [{ id: 1775, count: 1 }],
    outputs: [{ id: 4542, count: 1 }], // Lantern lens
    exp: [{ skill: 'Crafting', amount: 55 }],
    ticksPerAction: 3,
  },
  {
    id: 'craft-light-orb',
    name: 'Blow Light Orb',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 87 }],
    inputs: [{ id: 1775, count: 1 }],
    outputs: [{ id: 10973, count: 1 }], // Light orb
    exp: [{ skill: 'Crafting', amount: 70 }],
    ticksPerAction: 3,
  },

  // Gem cutting (chisel + uncut gem)
  {
    id: 'cut-opal',
    name: 'Cut Opal',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 1 }],
    inputs: [{ id: 1625, count: 1 }], // Uncut opal
    outputs: [{ id: 1609, count: 1 }], // Opal
    exp: [{ skill: 'Crafting', amount: 15 }],
    ticksPerAction: 3,
    successRate: { skill: 'Crafting', low: 129, high: 251 },
  },
  {
    id: 'cut-jade',
    name: 'Cut Jade',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 13 }],
    inputs: [{ id: 1627, count: 1 }], // Uncut jade
    outputs: [{ id: 1611, count: 1 }], // Jade
    exp: [{ skill: 'Crafting', amount: 20 }],
    ticksPerAction: 3,
    successRate: { skill: 'Crafting', low: 101, high: 246 },
  },
  {
    id: 'cut-red-topaz',
    name: 'Cut Red Topaz',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 16 }],
    inputs: [{ id: 1629, count: 1 }], // Uncut red topaz
    outputs: [{ id: 1613, count: 1 }], // Red topaz
    exp: [{ skill: 'Crafting', amount: 25 }],
    ticksPerAction: 3,
    successRate: { skill: 'Crafting', low: 91, high: 241 },
  },
  {
    id: 'cut-sapphire',
    name: 'Cut Sapphire',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 20 }],
    inputs: [{ id: 1623, count: 1 }], // Uncut sapphire
    outputs: [{ id: 1607, count: 1 }], // Sapphire
    exp: [{ skill: 'Crafting', amount: 50 }],
    ticksPerAction: 3,
  },
  {
    id: 'cut-emerald',
    name: 'Cut Emerald',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 27 }],
    inputs: [{ id: 1621, count: 1 }], // Uncut emerald
    outputs: [{ id: 1605, count: 1 }], // Emerald
    exp: [{ skill: 'Crafting', amount: 67.5 }],
    ticksPerAction: 3,
  },
  {
    id: 'cut-ruby',
    name: 'Cut Ruby',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 63 }],
    inputs: [{ id: 1619, count: 1 }], // Uncut ruby
    outputs: [{ id: 1603, count: 1 }], // Ruby
    exp: [{ skill: 'Crafting', amount: 85 }],
    ticksPerAction: 3,
  },
  {
    id: 'cut-diamond',
    name: 'Cut Diamond',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 43 }],
    inputs: [{ id: 1617, count: 1 }], // Uncut diamond
    outputs: [{ id: 1601, count: 1 }], // Diamond
    exp: [{ skill: 'Crafting', amount: 107.5 }],
    ticksPerAction: 3,
  },
  {
    id: 'cut-dragonstone',
    name: 'Cut Dragonstone',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 55 }],
    inputs: [{ id: 1631, count: 1 }], // Uncut dragonstone
    outputs: [{ id: 1615, count: 1 }], // Dragonstone
    exp: [{ skill: 'Crafting', amount: 137.5 }],
    ticksPerAction: 3,
  },
  {
    id: 'cut-onyx',
    name: 'Cut Onyx',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 67 }],
    inputs: [{ id: 6571, count: 1 }], // Uncut onyx
    outputs: [{ id: 6573, count: 1 }], // Onyx
    exp: [{ skill: 'Crafting', amount: 167.5 }],
    ticksPerAction: 3,
  },
  {
    id: 'cut-zenyte',
    name: 'Cut Zenyte',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 89 }],
    inputs: [{ id: 19496, count: 1 }], // Uncut zenyte
    outputs: [{ id: 19493, count: 1 }], // Zenyte
    exp: [{ skill: 'Crafting', amount: 200 }],
    ticksPerAction: 3,
  },

  // Battlestaves (orb + battlestaff)
  {
    id: 'craft-water-battlestaff',
    name: 'Craft Water Battlestaff',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 54 }],
    inputs: [
      { id: 571, count: 1 },  // Water orb
      { id: 1391, count: 1 }, // Battlestaff
    ],
    outputs: [{ id: 1395, count: 1 }], // Water battlestaff
    exp: [{ skill: 'Crafting', amount: 100 }],
    ticksPerAction: 2,
  },
  {
    id: 'craft-earth-battlestaff',
    name: 'Craft Earth Battlestaff',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 58 }],
    inputs: [
      { id: 575, count: 1 },  // Earth orb
      { id: 1391, count: 1 }, // Battlestaff
    ],
    outputs: [{ id: 1399, count: 1 }], // Earth battlestaff
    exp: [{ skill: 'Crafting', amount: 112.5 }],
    ticksPerAction: 2,
  },
  {
    id: 'craft-fire-battlestaff',
    name: 'Craft Fire Battlestaff',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 62 }],
    inputs: [
      { id: 569, count: 1 },  // Fire orb
      { id: 1391, count: 1 }, // Battlestaff
    ],
    outputs: [{ id: 1393, count: 1 }], // Fire battlestaff
    exp: [{ skill: 'Crafting', amount: 125 }],
    ticksPerAction: 2,
  },
  {
    id: 'craft-air-battlestaff',
    name: 'Craft Air Battlestaff',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 66 }],
    inputs: [
      { id: 573, count: 1 },  // Air orb
      { id: 1391, count: 1 }, // Battlestaff
    ],
    outputs: [{ id: 1397, count: 1 }], // Air battlestaff
    exp: [{ skill: 'Crafting', amount: 137.5 }],
    ticksPerAction: 2,
  },

  // Spinning wheel
  {
    id: 'spin-ball-of-wool',
    name: 'Spin Ball of Wool',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 1 }],
    inputs: [{ id: 1737, count: 1 }], // Wool
    outputs: [{ id: 1759, count: 1 }], // Ball of wool
    exp: [{ skill: 'Crafting', amount: 2.5 }],
    ticksPerAction: 3,
  },
  {
    id: 'spin-bowstring',
    name: 'Spin Bowstring',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 10 }],
    inputs: [{ id: 1779, count: 1 }], // Flax
    outputs: [{ id: 1777, count: 1 }], // Bowstring
    exp: [{ skill: 'Crafting', amount: 15 }],
    ticksPerAction: 3,
  },
  {
    id: 'spin-crossbow-string',
    name: 'Spin Crossbow String',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 10 }],
    inputs: [{ id: 9436, count: 1 }], // Sinew
    outputs: [{ id: 9438, count: 1 }], // Crossbow string
    exp: [{ skill: 'Crafting', amount: 15 }],
    ticksPerAction: 3,
  },
  {
    id: 'spin-magic-string',
    name: 'Spin Magic String',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 19 }],
    inputs: [{ id: 6051, count: 1 }], // Magic roots
    outputs: [{ id: 6038, count: 1 }], // Magic string
    exp: [{ skill: 'Crafting', amount: 30 }],
    ticksPerAction: 3,
  },
  {
    id: 'spin-rope',
    name: 'Spin Rope',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 1 }],
    inputs: [{ id: 10814, count: 1 }], // Hair
    outputs: [{ id: 954, count: 1 }], // Rope
    exp: [{ skill: 'Crafting', amount: 2.5 }],
    ticksPerAction: 3,
  },

  // Stringing amulets (ball of wool + unstrung amulet)
  {
    id: 'string-gold-amulet',
    name: 'String Gold Amulet',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 8 }],
    inputs: [
      { id: 1673, count: 1 }, // Gold amulet (u)
      { id: 1759, count: 1 }, // Ball of wool
    ],
    outputs: [{ id: 1692, count: 1 }], // Gold amulet
    exp: [{ skill: 'Crafting', amount: 4 }],
    ticksPerAction: 2,
  },
  {
    id: 'string-sapphire-amulet',
    name: 'String Sapphire Amulet',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 24 }],
    inputs: [
      { id: 1675, count: 1 }, // Sapphire amulet (u)
      { id: 1759, count: 1 },
    ],
    outputs: [{ id: 1694, count: 1 }], // Sapphire amulet
    exp: [{ skill: 'Crafting', amount: 4 }],
    ticksPerAction: 2,
  },
  {
    id: 'string-emerald-amulet',
    name: 'String Emerald Amulet',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 31 }],
    inputs: [
      { id: 1677, count: 1 }, // Emerald amulet (u)
      { id: 1759, count: 1 },
    ],
    outputs: [{ id: 1696, count: 1 }], // Emerald amulet
    exp: [{ skill: 'Crafting', amount: 4 }],
    ticksPerAction: 2,
  },
  {
    id: 'string-ruby-amulet',
    name: 'String Ruby Amulet',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 50 }],
    inputs: [
      { id: 1679, count: 1 }, // Ruby amulet (u)
      { id: 1759, count: 1 },
    ],
    outputs: [{ id: 1698, count: 1 }], // Ruby amulet
    exp: [{ skill: 'Crafting', amount: 4 }],
    ticksPerAction: 2,
  },
  {
    id: 'string-diamond-amulet',
    name: 'String Diamond Amulet',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 70 }],
    inputs: [
      { id: 1681, count: 1 }, // Diamond amulet (u)
      { id: 1759, count: 1 },
    ],
    outputs: [{ id: 1700, count: 1 }], // Diamond amulet
    exp: [{ skill: 'Crafting', amount: 4 }],
    ticksPerAction: 2,
  },
  {
    id: 'string-dragonstone-amulet',
    name: 'String Dragonstone Amulet',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 80 }],
    inputs: [
      { id: 1683, count: 1 }, // Dragonstone amulet (u)
      { id: 1759, count: 1 },
    ],
    outputs: [{ id: 1702, count: 1 }], // Dragonstone amulet
    exp: [{ skill: 'Crafting', amount: 4 }],
    ticksPerAction: 2,
  },
  {
    id: 'string-onyx-amulet',
    name: 'String Onyx Amulet',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 90 }],
    inputs: [
      { id: 6579, count: 1 }, // Onyx amulet (u)
      { id: 1759, count: 1 },
    ],
    outputs: [{ id: 6581, count: 1 }], // Onyx amulet
    exp: [{ skill: 'Crafting', amount: 4 }],
    ticksPerAction: 2,
  },
  {
    id: 'string-zenyte-amulet',
    name: 'String Zenyte Amulet',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 98 }],
    inputs: [
      { id: 19501, count: 1 }, // Zenyte amulet (u)
      { id: 1759, count: 1 },
    ],
    outputs: [{ id: 19541, count: 1 }], // Zenyte amulet
    exp: [{ skill: 'Crafting', amount: 4 }],
    ticksPerAction: 2,
  },
];
