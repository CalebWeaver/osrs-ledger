import { Method } from '@/lib/types';
import { blastFurnaceMethods } from './blast-furnace';
import { cookingMethods } from './cooking';
import { craftingMethods } from './crafting';
import { fishingMethods } from './fishing';
import { fletchingMethods } from './fletching';
import { herbloreMethods } from './herblore';
import { hunterMethods } from './hunter';
import { magicMethods } from './magic';
import { runecraftMethods } from './runecraft';
import { smithingMethods } from './smithing';

export const methods: Method[] = [
  ...fletchingMethods,
  ...craftingMethods,
  ...herbloreMethods,
  ...smithingMethods,
  ...blastFurnaceMethods,
  ...cookingMethods,
  ...magicMethods,
  ...runecraftMethods,
  ...fishingMethods,
  ...hunterMethods,
  {
    id: 'enchant-sapphire-ring',
    name: 'Enchant Sapphire Ring',
    category: 'Magic',
    requirements: [
      { skill: 'Magic', level: 7 }
    ],
    inputs: [
      { id: 1637, count: 1 }, // Sapphire ring
      { id: 564, count: 1 },  // Cosmic rune
      { id: 555, count: 1 }   // Water rune
    ],
    outputs: [
      { id: 2550, count: 1 }  // Ring of recoil
    ],
    exp: [
      { skill: 'Magic', amount: 17.5 }
    ],
    ticksPerAction: 4,
    notes: 'Requires a Staff of Water or Water Runes.'
  },
  {
    id: 'enchant-sapphire-necklace',
    name: 'Enchant Sapphire Necklace',
    category: 'Magic',
    requirements: [
      { skill: 'Magic', level: 7 }
    ],
    inputs: [
      { id: 1656, count: 1 }, // Sapphire necklace
      { id: 564, count: 1 },  // Cosmic rune
      { id: 555, count: 1 }   // Water rune
    ],
    outputs: [
      { id: 3853, count: 1 }  // Games necklace(8)
    ],
    exp: [{ skill: 'Magic', amount: 17.5 }],
    ticksPerAction: 4,
    notes: 'Produces Games Necklace(8)'
  },
  {
    id: 'enchant-sapphire-amulet',
    name: 'Enchant Sapphire Amulet',
    category: 'Magic',
    requirements: [
      { skill: 'Magic', level: 7 }
    ],
    inputs: [
      { id: 1694, count: 1 }, // Sapphire amulet
      { id: 564, count: 1 },  // Cosmic rune
      { id: 555, count: 1 }   // Water rune
    ],
    outputs: [
      { id: 1727, count: 1 }  // Amulet of magic
    ],
    exp: [{ skill: 'Magic', amount: 17.5 }],
    ticksPerAction: 4,
  },
  {
    id: 'enchant-sapphire-bracelet',
    name: 'Enchant Sapphire Bracelet',
    category: 'Magic',
    requirements: [
      { skill: 'Magic', level: 7 }
    ],
    inputs: [
      { id: 11072, count: 1 }, // Sapphire bracelet
      { id: 564, count: 1 },   // Cosmic rune
      { id: 555, count: 1 }    // Water rune
    ],
    outputs: [
      { id: 11074, count: 1 }  // Bracelet of clay
    ],
    exp: [{ skill: 'Magic', amount: 17.5 }],
    ticksPerAction: 4,
  },
  // Lvl-1 Enchant (Opal) - Enchant Crossbow Bolt uses same spell
  {
    id: 'enchant-opal-ring',
    name: 'Enchant Opal Ring',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 7 }],
    inputs: [
      { id: 21081, count: 1 }, // Opal ring
      { id: 564, count: 1 },   // Cosmic rune
      { id: 555, count: 1 }    // Water rune
    ],
    outputs: [{ id: 21126, count: 1 }], // Ring of pursuit
    exp: [{ skill: 'Magic', amount: 17.5 }],
    ticksPerAction: 4,
  },
  {
    id: 'enchant-opal-necklace',
    name: 'Enchant Opal Necklace',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 7 }],
    inputs: [
      { id: 21090, count: 1 }, // Opal necklace
      { id: 564, count: 1 },   // Cosmic rune
      { id: 555, count: 1 }    // Water rune
    ],
    outputs: [{ id: 21143, count: 1 }], // Dodgy necklace
    exp: [{ skill: 'Magic', amount: 17.5 }],
    ticksPerAction: 4,
  },
  {
    id: 'enchant-opal-amulet',
    name: 'Enchant Opal Amulet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 7 }],
    inputs: [
      { id: 21108, count: 1 }, // Opal amulet
      { id: 564, count: 1 },   // Cosmic rune
      { id: 555, count: 1 }    // Water rune
    ],
    outputs: [{ id: 21160, count: 1 }], // Amulet of bounty
    exp: [{ skill: 'Magic', amount: 17.5 }],
    ticksPerAction: 4,
  },
  {
    id: 'enchant-opal-bracelet',
    name: 'Enchant Opal Bracelet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 7 }],
    inputs: [
      { id: 21117, count: 1 }, // Opal bracelet
      { id: 564, count: 1 },   // Cosmic rune
      { id: 555, count: 1 }    // Water rune
    ],
    outputs: [{ id: 21177, count: 1 }], // Expeditious bracelet
    exp: [{ skill: 'Magic', amount: 17.5 }],
    ticksPerAction: 4,
  },
  // Lvl-2 Enchant (Jade)
  {
    id: 'enchant-jade-ring',
    name: 'Enchant Jade Ring',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 27 }],
    inputs: [
      { id: 21084, count: 1 }, // Jade ring
      { id: 564, count: 1 },   // Cosmic rune
      { id: 556, count: 3 }    // Air rune
    ],
    outputs: [{ id: 21129, count: 1 }], // Ring of returning(5)
    exp: [{ skill: 'Magic', amount: 37 }],
    ticksPerAction: 4,
  },
  {
    id: 'enchant-jade-necklace',
    name: 'Enchant Jade Necklace',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 27 }],
    inputs: [
      { id: 21093, count: 1 }, // Jade necklace
      { id: 564, count: 1 },   // Cosmic rune
      { id: 556, count: 3 }    // Air rune
    ],
    outputs: [{ id: 21146, count: 1 }], // Necklace of passage(5)
    exp: [{ skill: 'Magic', amount: 37 }],
    ticksPerAction: 4,
  },
  {
    id: 'enchant-jade-amulet',
    name: 'Enchant Jade Amulet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 27 }],
    inputs: [
      { id: 21111, count: 1 }, // Jade amulet
      { id: 564, count: 1 },   // Cosmic rune
      { id: 556, count: 3 }    // Air rune
    ],
    outputs: [{ id: 21163, count: 1 }], // Amulet of chemistry
    exp: [{ skill: 'Magic', amount: 37 }],
    ticksPerAction: 4,
  },
  {
    id: 'enchant-jade-bracelet',
    name: 'Enchant Jade Bracelet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 27 }],
    inputs: [
      { id: 21120, count: 1 }, // Jade bracelet
      { id: 564, count: 1 },   // Cosmic rune
      { id: 556, count: 3 }    // Air rune
    ],
    outputs: [{ id: 21180, count: 1 }], // Flamtaer bracelet
    exp: [{ skill: 'Magic', amount: 37 }],
    ticksPerAction: 4,
  },
  // Lvl-3 Enchant (Red Topaz)
  {
    id: 'enchant-topaz-ring',
    name: 'Enchant Topaz Ring',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 49 }],
    inputs: [
      { id: 21087, count: 1 }, // Topaz ring
      { id: 564, count: 1 },   // Cosmic rune
      { id: 554, count: 5 }    // Fire rune
    ],
    outputs: [{ id: 21140, count: 1 }], // Efaritay's aid
    exp: [{ skill: 'Magic', amount: 59 }],
    ticksPerAction: 4,
  },
  {
    id: 'enchant-topaz-necklace',
    name: 'Enchant Topaz Necklace',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 49 }],
    inputs: [
      { id: 21096, count: 1 }, // Topaz necklace
      { id: 564, count: 1 },   // Cosmic rune
      { id: 554, count: 5 }    // Fire rune
    ],
    outputs: [{ id: 21157, count: 1 }], // Necklace of faith
    exp: [{ skill: 'Magic', amount: 59 }],
    ticksPerAction: 4,
  },
  {
    id: 'enchant-topaz-amulet',
    name: 'Enchant Topaz Amulet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 49 }],
    inputs: [
      { id: 21114, count: 1 }, // Topaz amulet
      { id: 564, count: 1 },   // Cosmic rune
      { id: 554, count: 5 }    // Fire rune
    ],
    outputs: [{ id: 21166, count: 1 }], // Burning amulet(5)
    exp: [{ skill: 'Magic', amount: 59 }],
    ticksPerAction: 4,
  },
  {
    id: 'enchant-topaz-bracelet',
    name: 'Enchant Topaz Bracelet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 49 }],
    inputs: [
      { id: 21123, count: 1 }, // Topaz bracelet
      { id: 564, count: 1 },   // Cosmic rune
      { id: 554, count: 5 }    // Fire rune
    ],
    outputs: [{ id: 21183, count: 1 }], // Bracelet of slaughter
    exp: [{ skill: 'Magic', amount: 59 }],
    ticksPerAction: 4,
  },
  // Lvl-2 Enchant (Emerald)
  {
    id: 'enchant-emerald-ring',
    name: 'Enchant Emerald Ring',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 27 }],
    inputs: [
      { id: 1639, count: 1 }, // Emerald ring
      { id: 564, count: 1 },  // Cosmic rune
      { id: 556, count: 3 }   // Air rune
    ],
    outputs: [{ id: 2552, count: 1 }], // Ring of duelling(8)
    exp: [{ skill: 'Magic', amount: 37 }],
    ticksPerAction: 4,
  },
  {
    id: 'enchant-emerald-necklace',
    name: 'Enchant Emerald Necklace',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 27 }],
    inputs: [
      { id: 1658, count: 1 }, // Emerald necklace
      { id: 564, count: 1 },  // Cosmic rune
      { id: 556, count: 3 }   // Air rune
    ],
    outputs: [{ id: 5521, count: 1 }], // Binding necklace
    exp: [{ skill: 'Magic', amount: 37 }],
    ticksPerAction: 4,
  },
  {
    id: 'enchant-emerald-amulet',
    name: 'Enchant Emerald Amulet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 27 }],
    inputs: [
      { id: 1696, count: 1 }, // Emerald amulet
      { id: 564, count: 1 },  // Cosmic rune
      { id: 556, count: 3 }   // Air rune
    ],
    outputs: [{ id: 1729, count: 1 }], // Amulet of defence
    exp: [{ skill: 'Magic', amount: 37 }],
    ticksPerAction: 4,
  },
  {
    id: 'enchant-emerald-bracelet',
    name: 'Enchant Emerald Bracelet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 27 }],
    inputs: [
      { id: 11076, count: 1 }, // Emerald bracelet
      { id: 564, count: 1 },   // Cosmic rune
      { id: 556, count: 3 }    // Air rune
    ],
    outputs: [{ id: 11079, count: 1 }], // Castle wars bracelet(3)
    exp: [{ skill: 'Magic', amount: 37 }],
    ticksPerAction: 4,
  },
  // Lvl-3 Enchant (Ruby)
  {
    id: 'enchant-ruby-ring',
    name: 'Enchant Ruby Ring',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 49 }],
    inputs: [
      { id: 1641, count: 1 }, // Ruby ring
      { id: 564, count: 1 },  // Cosmic rune
      { id: 554, count: 5 }   // Fire rune
    ],
    outputs: [{ id: 2568, count: 1 }], // Ring of forging
    exp: [{ skill: 'Magic', amount: 59 }],
    ticksPerAction: 4,
  },
  {
    id: 'enchant-ruby-amulet',
    name: 'Enchant Ruby Amulet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 49 }],
    inputs: [
      { id: 1698, count: 1 }, // Ruby amulet
      { id: 564, count: 1 },  // Cosmic rune
      { id: 554, count: 5 }   // Fire rune
    ],
    outputs: [{ id: 1725, count: 1 }], // Amulet of strength
    exp: [{ skill: 'Magic', amount: 59 }],
    ticksPerAction: 4,
  },
  {
    id: 'enchant-ruby-bracelet',
    name: 'Enchant Ruby Bracelet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 49 }],
    inputs: [
      { id: 11085, count: 1 }, // Ruby bracelet
      { id: 564, count: 1 },   // Cosmic rune
      { id: 554, count: 5 }    // Fire rune
    ],
    outputs: [{ id: 11088, count: 1 }], // Inoculation bracelet
    exp: [{ skill: 'Magic', amount: 59 }],
    ticksPerAction: 4,
  },
  // Lvl-4 Enchant (Diamond)
  {
    id: 'enchant-diamond-ring',
    name: 'Enchant Diamond Ring',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 57 }],
    inputs: [
      { id: 1643, count: 1 }, // Diamond ring
      { id: 564, count: 1 },  // Cosmic rune
      { id: 557, count: 10 }  // Earth rune
    ],
    outputs: [{ id: 2570, count: 1 }], // Ring of life
    exp: [{ skill: 'Magic', amount: 67 }],
    ticksPerAction: 4,
  },
  {
    id: 'enchant-diamond-necklace',
    name: 'Enchant Diamond Necklace',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 57 }],
    inputs: [
      { id: 1662, count: 1 }, // Diamond necklace
      { id: 564, count: 1 },  // Cosmic rune
      { id: 557, count: 10 }  // Earth rune
    ],
    outputs: [{ id: 11090, count: 1 }], // Phoenix necklace
    exp: [{ skill: 'Magic', amount: 67 }],
    ticksPerAction: 4,
  },
  {
    id: 'enchant-diamond-amulet',
    name: 'Enchant Diamond Amulet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 57 }],
    inputs: [
      { id: 1700, count: 1 }, // Diamond amulet
      { id: 564, count: 1 },  // Cosmic rune
      { id: 557, count: 10 }  // Earth rune
    ],
    outputs: [{ id: 1731, count: 1 }], // Amulet of power
    exp: [{ skill: 'Magic', amount: 67 }],
    ticksPerAction: 4,
  },
  {
    id: 'enchant-diamond-bracelet',
    name: 'Enchant Diamond Bracelet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 57 }],
    inputs: [
      { id: 11092, count: 1 }, // Diamond bracelet
      { id: 564, count: 1 },   // Cosmic rune
      { id: 557, count: 10 }   // Earth rune
    ],
    outputs: [{ id: 11095, count: 1 }], // Abyssal bracelet(5)
    exp: [{ skill: 'Magic', amount: 67 }],
    ticksPerAction: 4,
  },
  // Lvl-5 Enchant (Dragonstone)
  {
    id: 'enchant-dragonstone-ring',
    name: 'Enchant Dragonstone Ring',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 68 }],
    inputs: [
      { id: 1645, count: 1 }, // Dragonstone ring
      { id: 564, count: 1 },  // Cosmic rune
      { id: 555, count: 15 }, // Water rune
      { id: 557, count: 15 }  // Earth rune
    ],
    outputs: [{ id: 2572, count: 1 }], // Ring of wealth
    exp: [{ skill: 'Magic', amount: 78 }],
    ticksPerAction: 4,
  },
  {
    id: 'enchant-dragonstone-necklace',
    name: 'Enchant Dragonstone Necklace',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 68 }],
    inputs: [
      { id: 1664, count: 1 }, // Dragon necklace
      { id: 564, count: 1 },  // Cosmic rune
      { id: 555, count: 15 }, // Water rune
      { id: 557, count: 15 }  // Earth rune
    ],
    outputs: [{ id: 11105, count: 1 }], // Skills necklace(4)
    exp: [{ skill: 'Magic', amount: 78 }],
    ticksPerAction: 4,
  },
  {
    id: 'enchant-dragonstone-amulet',
    name: 'Enchant Dragonstone Amulet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 68 }],
    inputs: [
      { id: 1702, count: 1 }, // Dragonstone amulet
      { id: 564, count: 1 },  // Cosmic rune
      { id: 555, count: 15 }, // Water rune
      { id: 557, count: 15 }  // Earth rune
    ],
    outputs: [{ id: 1712, count: 1 }], // Amulet of glory(4)
    exp: [{ skill: 'Magic', amount: 78 }],
    ticksPerAction: 4,
  },
  {
    id: 'enchant-dragonstone-bracelet',
    name: 'Enchant Dragonstone Bracelet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 68 }],
    inputs: [
      { id: 11115, count: 1 }, // Dragonstone bracelet
      { id: 564, count: 1 },   // Cosmic rune
      { id: 555, count: 15 },  // Water rune
      { id: 557, count: 15 }   // Earth rune
    ],
    outputs: [{ id: 11118, count: 1 }], // Combat bracelet(4)
    exp: [{ skill: 'Magic', amount: 78 }],
    ticksPerAction: 4,
  },
  // Lvl-6 Enchant (Onyx)
  {
    id: 'enchant-onyx-ring',
    name: 'Enchant Onyx Ring',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 87 }],
    inputs: [
      { id: 6575, count: 1 },  // Onyx ring
      { id: 564, count: 1 },   // Cosmic rune
      { id: 554, count: 20 },  // Fire rune
      { id: 557, count: 20 }   // Earth rune
    ],
    outputs: [{ id: 6583, count: 1 }], // Ring of stone
    exp: [{ skill: 'Magic', amount: 97 }],
    ticksPerAction: 4,
  },
  {
    id: 'enchant-onyx-necklace',
    name: 'Enchant Onyx Necklace',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 87 }],
    inputs: [
      { id: 6577, count: 1 },  // Onyx necklace
      { id: 564, count: 1 },   // Cosmic rune
      { id: 554, count: 20 },  // Fire rune
      { id: 557, count: 20 }   // Earth rune
    ],
    outputs: [{ id: 11128, count: 1 }], // Berserker necklace
    exp: [{ skill: 'Magic', amount: 97 }],
    ticksPerAction: 4,
  },
  {
    id: 'enchant-onyx-amulet',
    name: 'Enchant Onyx Amulet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 87 }],
    inputs: [
      { id: 6581, count: 1 },  // Onyx amulet
      { id: 564, count: 1 },   // Cosmic rune
      { id: 554, count: 20 },  // Fire rune
      { id: 557, count: 20 }   // Earth rune
    ],
    outputs: [{ id: 6585, count: 1 }], // Amulet of fury
    exp: [{ skill: 'Magic', amount: 97 }],
    ticksPerAction: 4,
  },
  {
    id: 'enchant-onyx-bracelet',
    name: 'Enchant Onyx Bracelet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 87 }],
    inputs: [
      { id: 11130, count: 1 }, // Onyx bracelet
      { id: 564, count: 1 },   // Cosmic rune
      { id: 554, count: 20 },  // Fire rune
      { id: 557, count: 20 }   // Earth rune
    ],
    outputs: [{ id: 11133, count: 1 }], // Regen bracelet
    exp: [{ skill: 'Magic', amount: 97 }],
    ticksPerAction: 4,
  },
  // Standard Spellbook - Teleport Tablets
  {
    id: 'tablet-varrock-teleport',
    name: 'Make Varrock Teleport Tablet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 25 }],
    inputs: [
      { id: 1761, count: 1 }, // Soft clay
      { id: 556, count: 3 },  // Air rune
      { id: 554, count: 1 },  // Fire rune
      { id: 563, count: 1 }   // Law rune
    ],
    outputs: [{ id: 8007, count: 1 }], // Varrock teleport (tablet)
    exp: [{ skill: 'Magic', amount: 35 }],
    ticksPerAction: 4,
    bankTimePerAction: 1.45,
  },
  {
    id: 'tablet-lumbridge-teleport',
    name: 'Make Lumbridge Teleport Tablet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 31 }],
    inputs: [
      { id: 1761, count: 1 }, // Soft clay
      { id: 556, count: 3 },  // Air rune
      { id: 557, count: 1 },  // Earth rune
      { id: 563, count: 1 }   // Law rune
    ],
    outputs: [{ id: 8008, count: 1 }], // Lumbridge teleport (tablet)
    exp: [{ skill: 'Magic', amount: 41 }],
    ticksPerAction: 4,
    bankTimePerAction: 1.45,
  },
  {
    id: 'tablet-falador-teleport',
    name: 'Make Falador Teleport Tablet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 37 }],
    inputs: [
      { id: 1761, count: 1 }, // Soft clay
      { id: 556, count: 3 },  // Air rune
      { id: 555, count: 1 },  // Water rune
      { id: 563, count: 1 }   // Law rune
    ],
    outputs: [{ id: 8009, count: 1 }], // Falador teleport (tablet)
    exp: [{ skill: 'Magic', amount: 48 }],
    ticksPerAction: 4,
    bankTimePerAction: 1.45,
  },
  {
    id: 'tablet-teleport-to-house',
    name: 'Make Teleport to House Tablet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 40 }],
    inputs: [
      { id: 1761, count: 1 }, // Soft clay
      { id: 556, count: 1 },  // Air rune
      { id: 557, count: 1 },  // Earth rune
      { id: 563, count: 1 }   // Law rune
    ],
    outputs: [{ id: 8013, count: 1 }], // Teleport to house (tablet)
    exp: [{ skill: 'Magic', amount: 30 }],
    ticksPerAction: 4,
    bankTimePerAction: 1.45,
  },
  {
    id: 'tablet-camelot-teleport',
    name: 'Make Camelot Teleport Tablet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 45 }],
    inputs: [
      { id: 1761, count: 1 }, // Soft clay
      { id: 556, count: 5 },  // Air rune
      { id: 563, count: 1 }   // Law rune
    ],
    outputs: [{ id: 8010, count: 1 }], // Camelot teleport (tablet)
    exp: [{ skill: 'Magic', amount: 55.5 }],
    ticksPerAction: 4,
    bankTimePerAction: 1.45,
  },
  {
    id: 'tablet-kourend-castle-teleport',
    name: 'Make Kourend Castle Teleport Tablet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 48 }],
    inputs: [
      { id: 1761, count: 1 }, // Soft clay
      { id: 554, count: 1 },  // Fire rune
      { id: 555, count: 1 },  // Water rune
      { id: 563, count: 2 }   // Law rune
    ],
    outputs: [{ id: 28790, count: 1 }], // Kourend castle teleport (tablet)
    exp: [{ skill: 'Magic', amount: 58 }],
    ticksPerAction: 4,
    bankTimePerAction: 1.45,
  },
  {
    id: 'tablet-ardougne-teleport',
    name: 'Make Ardougne Teleport Tablet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 51 }],
    inputs: [
      { id: 1761, count: 1 }, // Soft clay
      { id: 555, count: 2 },  // Water rune
      { id: 563, count: 2 }   // Law rune
    ],
    outputs: [{ id: 8011, count: 1 }], // Ardougne teleport (tablet)
    exp: [{ skill: 'Magic', amount: 61 }],
    ticksPerAction: 4,
    bankTimePerAction: 1.45,
  },
  {
    id: 'tablet-civitas-illa-fortis-teleport',
    name: 'Make Civitas illa Fortis Teleport Tablet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 54 }],
    inputs: [
      { id: 1761, count: 1 }, // Soft clay
      { id: 557, count: 1 },  // Earth rune
      { id: 554, count: 1 },  // Fire rune
      { id: 563, count: 2 }   // Law rune
    ],
    outputs: [{ id: 28824, count: 1 }], // Civitas illa fortis teleport (tablet)
    exp: [{ skill: 'Magic', amount: 64 }],
    ticksPerAction: 4,
    bankTimePerAction: 1.45,
  },
  {
    id: 'tablet-summon-boat',
    name: 'Make Summon Boat Tablet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 56 }],
    inputs: [
      { id: 1761, count: 1 }, // Soft clay
      { id: 557, count: 1 },  // Earth rune
      { id: 555, count: 1 },  // Water rune
      { id: 563, count: 2 }   // Law rune
    ],
    outputs: [{ id: 31441, count: 1 }], // Summon boat (tablet)
    exp: [{ skill: 'Magic', amount: 66 }],
    ticksPerAction: 4,
    bankTimePerAction: 1.45,
  },
  {
    id: 'tablet-watchtower-teleport',
    name: 'Make Watchtower Teleport Tablet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 58 }],
    inputs: [
      { id: 1761, count: 1 }, // Soft clay
      { id: 557, count: 2 },  // Earth rune
      { id: 563, count: 2 }   // Law rune
    ],
    outputs: [{ id: 8012, count: 1 }], // Watchtower teleport (tablet)
    exp: [{ skill: 'Magic', amount: 68 }],
    ticksPerAction: 4,
    bankTimePerAction: 1.45,
  },
  {
    id: 'tablet-teleport-to-boat',
    name: 'Make Teleport to Boat Tablet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 67 }],
    inputs: [
      { id: 1761, count: 1 }, // Soft clay
      { id: 557, count: 2 },  // Earth rune
      { id: 555, count: 2 },  // Water rune
      { id: 563, count: 2 }   // Law rune
    ],
    outputs: [{ id: 31443, count: 1 }], // Teleport to boat (tablet)
    exp: [{ skill: 'Magic', amount: 77 }],
    ticksPerAction: 4,
    bankTimePerAction: 1.45,
  },
  // Ancient Magicks - Teleport Tablets
  {
    id: 'tablet-paddewwa-teleport',
    name: 'Make Paddewwa Teleport Tablet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 54 }],
    quests: ['Desert Treasure I'],
    inputs: [
      { id: 1761, count: 1 }, // Soft clay
      { id: 556, count: 1 },  // Air rune
      { id: 554, count: 1 },  // Fire rune
      { id: 563, count: 2 }   // Law rune
    ],
    outputs: [{ id: 12781, count: 1 }], // Paddewwa teleport (tablet)
    exp: [{ skill: 'Magic', amount: 64 }],
    ticksPerAction: 4,
    bankTimePerAction: 1.45,
  },
  {
    id: 'tablet-senntisten-teleport',
    name: 'Make Senntisten Teleport Tablet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 60 }],
    quests: ['Desert Treasure I'],
    inputs: [
      { id: 1761, count: 1 }, // Soft clay
      { id: 563, count: 2 },  // Law rune
      { id: 566, count: 1 }   // Soul rune
    ],
    outputs: [{ id: 12782, count: 1 }], // Senntisten teleport (tablet)
    exp: [{ skill: 'Magic', amount: 70 }],
    ticksPerAction: 4,
    bankTimePerAction: 1.45,
  },
  {
    id: 'tablet-kharyrll-teleport',
    name: 'Make Kharyrll Teleport Tablet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 66 }],
    quests: ['Desert Treasure I'],
    inputs: [
      { id: 1761, count: 1 }, // Soft clay
      { id: 565, count: 1 },  // Blood rune
      { id: 563, count: 2 }   // Law rune
    ],
    outputs: [{ id: 12779, count: 1 }], // Kharyrll teleport (tablet)
    exp: [{ skill: 'Magic', amount: 76 }],
    ticksPerAction: 4,
    bankTimePerAction: 1.45,
  },
  {
    id: 'tablet-lassar-teleport',
    name: 'Make Lassar Teleport Tablet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 72 }],
    quests: ['Desert Treasure I'],
    inputs: [
      { id: 1761, count: 1 }, // Soft clay
      { id: 555, count: 4 },  // Water rune
      { id: 563, count: 2 }   // Law rune
    ],
    outputs: [{ id: 12780, count: 1 }], // Lassar teleport (tablet)
    exp: [{ skill: 'Magic', amount: 82 }],
    ticksPerAction: 4,
    bankTimePerAction: 1.45,
  },
  {
    id: 'tablet-dareeyak-teleport',
    name: 'Make Dareeyak Teleport Tablet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 78 }],
    quests: ['Desert Treasure I'],
    inputs: [
      { id: 1761, count: 1 }, // Soft clay
      { id: 556, count: 2 },  // Air rune
      { id: 554, count: 3 },  // Fire rune
      { id: 563, count: 2 }   // Law rune
    ],
    outputs: [{ id: 12777, count: 1 }], // Dareeyak teleport (tablet)
    exp: [{ skill: 'Magic', amount: 88 }],
    ticksPerAction: 4,
    bankTimePerAction: 1.45,
  },
  {
    id: 'tablet-carrallanger-teleport',
    name: 'Make Carrallanger Teleport Tablet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 84 }],
    quests: ['Desert Treasure I'],
    inputs: [
      { id: 1761, count: 1 }, // Soft clay
      { id: 563, count: 2 },  // Law rune
      { id: 566, count: 2 }   // Soul rune
    ],
    outputs: [{ id: 12776, count: 1 }], // Carrallanger teleport (tablet)
    exp: [{ skill: 'Magic', amount: 94 }],
    ticksPerAction: 4,
    bankTimePerAction: 1.45,
  },
  {
    id: 'tablet-annakarl-teleport',
    name: 'Make Annakarl Teleport Tablet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 90 }],
    quests: ['Desert Treasure I'],
    inputs: [
      { id: 1761, count: 1 }, // Soft clay
      { id: 565, count: 2 },  // Blood rune
      { id: 563, count: 2 }   // Law rune
    ],
    outputs: [{ id: 12775, count: 1 }], // Annakarl teleport (tablet)
    exp: [{ skill: 'Magic', amount: 100 }],
    ticksPerAction: 4,
    bankTimePerAction: 1.45,
  },
  {
    id: 'tablet-ghorrock-teleport',
    name: 'Make Ghorrock Teleport Tablet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 96 }],
    quests: ['Desert Treasure I'],
    inputs: [
      { id: 1761, count: 1 }, // Soft clay
      { id: 555, count: 8 },  // Water rune
      { id: 563, count: 2 }   // Law rune
    ],
    outputs: [{ id: 12778, count: 1 }], // Ghorrock teleport (tablet)
    exp: [{ skill: 'Magic', amount: 106 }],
    ticksPerAction: 4,
    bankTimePerAction: 1.45,
  },
  // Lunar Spellbook - Teleport Tablets
  {
    id: 'tablet-moonclan-teleport',
    name: 'Make Moonclan Teleport Tablet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 69 }],
    quests: ['Lunar Diplomacy'],
    inputs: [
      { id: 1761, count: 1 },  // Soft clay
      { id: 557, count: 2 },   // Earth rune
      { id: 9075, count: 2 },  // Astral rune
      { id: 563, count: 1 }    // Law rune
    ],
    outputs: [{ id: 24949, count: 1 }], // Moonclan teleport (tablet)
    exp: [{ skill: 'Magic', amount: 66 }],
    ticksPerAction: 4,
    bankTimePerAction: 1.45,
  },
  {
    id: 'tablet-ourania-teleport',
    name: 'Make Ourania Teleport Tablet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 71 }],
    quests: ['Lunar Diplomacy'],
    inputs: [
      { id: 1761, count: 1 },  // Soft clay
      { id: 557, count: 6 },   // Earth rune
      { id: 9075, count: 2 },  // Astral rune
      { id: 563, count: 1 }    // Law rune
    ],
    outputs: [{ id: 24951, count: 1 }], // Ourania teleport (tablet)
    exp: [{ skill: 'Magic', amount: 69 }],
    ticksPerAction: 4,
    bankTimePerAction: 1.45,
  },
  {
    id: 'tablet-waterbirth-teleport',
    name: 'Make Waterbirth Teleport Tablet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 72 }],
    quests: ['Lunar Diplomacy'],
    inputs: [
      { id: 1761, count: 1 },  // Soft clay
      { id: 555, count: 1 },   // Water rune
      { id: 9075, count: 2 },  // Astral rune
      { id: 563, count: 1 }    // Law rune
    ],
    outputs: [{ id: 24953, count: 1 }], // Waterbirth teleport (tablet)
    exp: [{ skill: 'Magic', amount: 71 }],
    ticksPerAction: 4,
    bankTimePerAction: 1.45,
  },
  {
    id: 'tablet-barbarian-teleport',
    name: 'Make Barbarian Teleport Tablet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 75 }],
    quests: ['Lunar Diplomacy'],
    inputs: [
      { id: 1761, count: 1 },  // Soft clay
      { id: 554, count: 3 },   // Fire rune
      { id: 9075, count: 2 },  // Astral rune
      { id: 563, count: 2 }    // Law rune
    ],
    outputs: [{ id: 24955, count: 1 }], // Barbarian teleport (tablet)
    exp: [{ skill: 'Magic', amount: 72 }],
    ticksPerAction: 4,
    bankTimePerAction: 1.45,
  },
  {
    id: 'tablet-khazard-teleport',
    name: 'Make Khazard Teleport Tablet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 78 }],
    quests: ['Lunar Diplomacy'],
    inputs: [
      { id: 1761, count: 1 },  // Soft clay
      { id: 555, count: 4 },   // Water rune
      { id: 9075, count: 2 },  // Astral rune
      { id: 563, count: 2 }    // Law rune
    ],
    outputs: [{ id: 24957, count: 1 }], // Khazard teleport (tablet)
    exp: [{ skill: 'Magic', amount: 76 }],
    ticksPerAction: 4,
    bankTimePerAction: 1.45,
  },
  {
    id: 'tablet-fishing-guild-teleport',
    name: 'Make Fishing Guild Teleport Tablet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 85 }],
    quests: ['Lunar Diplomacy'],
    inputs: [
      { id: 1761, count: 1 },  // Soft clay
      { id: 555, count: 10 },  // Water rune
      { id: 9075, count: 3 },  // Astral rune
      { id: 563, count: 3 }    // Law rune
    ],
    outputs: [{ id: 24959, count: 1 }], // Fishing guild teleport (tablet)
    exp: [{ skill: 'Magic', amount: 80 }],
    ticksPerAction: 4,
    bankTimePerAction: 1.45,
  },
  {
    id: 'tablet-catherby-teleport',
    name: 'Make Catherby Teleport Tablet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 87 }],
    quests: ['Lunar Diplomacy'],
    inputs: [
      { id: 1761, count: 1 },  // Soft clay
      { id: 555, count: 10 },  // Water rune
      { id: 9075, count: 3 },  // Astral rune
      { id: 563, count: 3 }    // Law rune
    ],
    outputs: [{ id: 24961, count: 1 }], // Catherby teleport (tablet)
    exp: [{ skill: 'Magic', amount: 89 }],
    ticksPerAction: 4,
    bankTimePerAction: 1.45,
  },
  {
    id: 'tablet-ice-plateau-teleport',
    name: 'Make Ice Plateau Teleport Tablet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 89 }],
    quests: ['Lunar Diplomacy'],
    inputs: [
      { id: 1761, count: 1 },  // Soft clay
      { id: 555, count: 8 },   // Water rune
      { id: 9075, count: 3 },  // Astral rune
      { id: 563, count: 3 }    // Law rune
    ],
    outputs: [{ id: 24963, count: 1 }], // Ice plateau teleport (tablet)
    exp: [{ skill: 'Magic', amount: 92 }],
    ticksPerAction: 4,
    bankTimePerAction: 1.45,
  },
  // Arceuus Spellbook - Teleport Tablets
  {
    id: 'tablet-arceuus-library-teleport',
    name: 'Make Arceuus Library Teleport Tablet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 6 }],
    quests: ['Client of Kourend'],
    inputs: [
      { id: 557, count: 2 },   // Earth rune
      { id: 563, count: 1 }    // Law rune
    ],
    outputs: [{ id: 19613, count: 1 }], // Arceuus library teleport (tablet)
    exp: [{ skill: 'Magic', amount: 10 }],
    ticksPerAction: 4,
    bankTimePerAction: 16.83,
  },
  {
    id: 'tablet-draynor-manor-teleport',
    name: 'Make Draynor Manor Teleport Tablet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 17 }],
    quests: ['Client of Kourend'],
    inputs: [
      { id: 557, count: 1 },   // Earth rune
      { id: 555, count: 1 },   // Water rune
      { id: 563, count: 1 }    // Law rune
    ],
    outputs: [{ id: 19615, count: 1 }], // Draynor manor teleport (tablet)
    exp: [{ skill: 'Magic', amount: 16 }],
    ticksPerAction: 4,
    bankTimePerAction: 16.83,
  },
  {
    id: 'tablet-battlefront-teleport',
    name: 'Make Battlefront Teleport Tablet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 23 }],
    quests: ['Client of Kourend'],
    inputs: [
      { id: 557, count: 1 },   // Earth rune
      { id: 554, count: 1 },   // Fire rune
      { id: 563, count: 1 }    // Law rune
    ],
    outputs: [{ id: 22949, count: 1 }], // Battlefront teleport (tablet)
    exp: [{ skill: 'Magic', amount: 19 }],
    ticksPerAction: 4,
    bankTimePerAction: 16.83,
  },
  {
    id: 'tablet-mind-altar-teleport',
    name: 'Make Mind Altar Teleport Tablet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 28 }],
    quests: ['Client of Kourend'],
    inputs: [
      { id: 563, count: 1 },   // Law rune
      { id: 558, count: 2 }    // Mind rune
    ],
    outputs: [{ id: 19617, count: 1 }], // Mind altar teleport (tablet)
    exp: [{ skill: 'Magic', amount: 22 }],
    ticksPerAction: 4,
    bankTimePerAction: 16.83,
  },
  {
    id: 'tablet-salve-graveyard-teleport',
    name: 'Make Salve Graveyard Teleport Tablet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 40 }],
    quests: ['Client of Kourend'],
    inputs: [
      { id: 563, count: 1 },   // Law rune
      { id: 566, count: 2 }    // Soul rune
    ],
    outputs: [{ id: 19619, count: 1 }], // Salve graveyard teleport (tablet)
    exp: [{ skill: 'Magic', amount: 30 }],
    ticksPerAction: 4,
    bankTimePerAction: 16.83,
  },
  {
    id: 'tablet-fenkenstrains-castle-teleport',
    name: "Make Fenkenstrain's Castle Teleport Tablet",
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 48 }],
    quests: ['Client of Kourend'],
    inputs: [
      { id: 557, count: 1 },   // Earth rune
      { id: 563, count: 1 },   // Law rune
      { id: 566, count: 1 }    // Soul rune
    ],
    outputs: [{ id: 19621, count: 1 }], // Fenkenstrain's castle teleport (tablet)
    exp: [{ skill: 'Magic', amount: 50 }],
    ticksPerAction: 4,
    bankTimePerAction: 16.83,
  },
  {
    id: 'tablet-west-ardougne-teleport',
    name: 'Make West Ardougne Teleport Tablet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 61 }],
    quests: ['Client of Kourend'],
    inputs: [
      { id: 563, count: 2 },   // Law rune
      { id: 566, count: 2 }    // Soul rune
    ],
    outputs: [{ id: 19623, count: 1 }], // West ardougne teleport (tablet)
    exp: [{ skill: 'Magic', amount: 68 }],
    ticksPerAction: 4,
    bankTimePerAction: 16.83,
  },
  {
    id: 'tablet-harmony-island-teleport',
    name: 'Make Harmony Island Teleport Tablet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 65 }],
    quests: ['Client of Kourend'],
    inputs: [
      { id: 563, count: 1 },   // Law rune
      { id: 561, count: 1 },   // Nature rune
      { id: 566, count: 1 }    // Soul rune
    ],
    outputs: [{ id: 19625, count: 1 }], // Harmony island teleport (tablet)
    exp: [{ skill: 'Magic', amount: 74 }],
    ticksPerAction: 4,
    bankTimePerAction: 16.83,
  },
  {
    id: 'tablet-cemetery-teleport',
    name: 'Make Cemetery Teleport Tablet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 71 }],
    quests: ['Client of Kourend'],
    inputs: [
      { id: 565, count: 1 },   // Blood rune
      { id: 563, count: 1 },   // Law rune
      { id: 566, count: 1 }    // Soul rune
    ],
    outputs: [{ id: 19627, count: 1 }], // Cemetery teleport (tablet)
    exp: [{ skill: 'Magic', amount: 82 }],
    ticksPerAction: 4,
    bankTimePerAction: 16.83,
  },
  {
    id: 'tablet-barrows-teleport',
    name: 'Make Barrows Teleport Tablet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 83 }],
    quests: ['Client of Kourend'],
    inputs: [
      { id: 565, count: 1 },   // Blood rune
      { id: 563, count: 2 },   // Law rune
      { id: 566, count: 2 }    // Soul rune
    ],
    outputs: [{ id: 19629, count: 1 }], // Barrows teleport (tablet)
    exp: [{ skill: 'Magic', amount: 90 }],
    ticksPerAction: 4,
    bankTimePerAction: 16.83,
  },
  {
    id: 'tablet-ape-atoll-teleport',
    name: 'Make Ape Atoll Teleport Tablet',
    category: 'Magic',
    requirements: [{ skill: 'Magic', level: 90 }],
    quests: ['Client of Kourend'],
    inputs: [
      { id: 565, count: 2 },   // Blood rune
      { id: 563, count: 2 },   // Law rune
      { id: 566, count: 2 }    // Soul rune
    ],
    outputs: [{ id: 19631, count: 1 }], // Ape atoll teleport (tablet)
    exp: [{ skill: 'Magic', amount: 100 }],
    ticksPerAction: 4,
    bankTimePerAction: 16.83,
  },
  // Crafting - Necklaces
  {
    id: 'craft-gold-necklace',
    name: 'Craft Gold Necklace',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 6 }],
    inputs: [
      { id: 2357, count: 1 }, // Gold bar
      { id: 1597, count: 0 }  // Necklace mould (not consumed)
    ],
    outputs: [{ id: 1654, count: 1 }], // Gold necklace
    exp: [{ skill: 'Crafting', amount: 20 }],
    ticksPerAction: 4.6,
    notes: 'Requires Necklace Mould'
  },
  {
    id: 'craft-sapphire-necklace',
    name: 'Craft Sapphire Necklace',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 22 }],
    inputs: [
      { id: 2357, count: 1 }, // Gold bar
      { id: 1607, count: 1 }, // Sapphire
      { id: 1597, count: 0 }  // Necklace mould
    ],
    outputs: [{ id: 1656, count: 1 }], // Sapphire necklace
    exp: [{ skill: 'Crafting', amount: 55 }],
    ticksPerAction: 4.6,
    notes: 'Requires Necklace Mould'
  },
  {
    id: 'craft-emerald-necklace',
    name: 'Craft Emerald Necklace',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 29 }],
    inputs: [
      { id: 2357, count: 1 }, // Gold bar
      { id: 1605, count: 1 }, // Emerald
      { id: 1597, count: 0 }  // Necklace mould
    ],
    outputs: [{ id: 1658, count: 1 }], // Emerald necklace
    exp: [{ skill: 'Crafting', amount: 60 }],
    ticksPerAction: 4.6,
    notes: 'Requires Necklace Mould'
  },
  {
    id: 'craft-ruby-necklace',
    name: 'Craft Ruby Necklace',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 40 }],
    inputs: [
      { id: 2357, count: 1 }, // Gold bar
      { id: 1603, count: 1 }, // Ruby
      { id: 1597, count: 0 }  // Necklace mould
    ],
    outputs: [{ id: 1660, count: 1 }], // Ruby necklace
    exp: [{ skill: 'Crafting', amount: 75 }],
    ticksPerAction: 4.6,
    notes: 'Requires Necklace Mould'
  },
  {
    id: 'craft-diamond-necklace',
    name: 'Craft Diamond Necklace',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 56 }],
    inputs: [
      { id: 2357, count: 1 }, // Gold bar
      { id: 1601, count: 1 }, // Diamond
      { id: 1597, count: 0 }  // Necklace mould
    ],
    outputs: [{ id: 1662, count: 1 }], // Diamond necklace
    exp: [{ skill: 'Crafting', amount: 90 }],
    ticksPerAction: 4.6,
    notes: 'Requires Necklace Mould'
  },
  {
    id: 'craft-dragonstone-necklace',
    name: 'Craft Dragon Necklace',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 72 }],
    inputs: [
      { id: 2357, count: 1 }, // Gold bar
      { id: 1615, count: 1 }, // Dragonstone
      { id: 1597, count: 0 }  // Necklace mould
    ],
    outputs: [{ id: 1664, count: 1 }], // Dragon necklace
    exp: [{ skill: 'Crafting', amount: 105 }],
    ticksPerAction: 4.6,
    notes: 'Requires Necklace Mould'
  },
  {
    id: 'craft-onyx-necklace',
    name: 'Craft Onyx Necklace',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 82 }],
    inputs: [
      { id: 2357, count: 1 }, // Gold bar
      { id: 6573, count: 1 }, // Onyx
      { id: 1597, count: 0 }  // Necklace mould
    ],
    outputs: [{ id: 6577, count: 1 }], // Onyx necklace
    exp: [{ skill: 'Crafting', amount: 120 }],
    ticksPerAction: 4.6,
    notes: 'Requires Necklace Mould'
  },
  // Crafting - Bracelets
  {
    id: 'craft-gold-bracelet',
    name: 'Craft Gold Bracelet',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 7 }],
    inputs: [
      { id: 2357, count: 1 }, // Gold bar
      { id: 11065, count: 0 } // Bracelet mould (not consumed)
    ],
    outputs: [{ id: 11069, count: 1 }], // Gold bracelet
    exp: [{ skill: 'Crafting', amount: 25 }],
    ticksPerAction: 4.6,
    notes: 'Requires Bracelet Mould'
  },
  {
    id: 'craft-sapphire-bracelet',
    name: 'Craft Sapphire Bracelet',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 23 }],
    inputs: [
      { id: 2357, count: 1 }, // Gold bar
      { id: 1607, count: 1 }, // Sapphire
      { id: 11065, count: 0 } // Bracelet mould
    ],
    outputs: [{ id: 11072, count: 1 }], // Sapphire bracelet
    exp: [{ skill: 'Crafting', amount: 60 }],
    ticksPerAction: 4.6,
    notes: 'Requires Bracelet Mould'
  },
  {
    id: 'craft-emerald-bracelet',
    name: 'Craft Emerald Bracelet',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 30 }],
    inputs: [
      { id: 2357, count: 1 }, // Gold bar
      { id: 1605, count: 1 }, // Emerald
      { id: 11065, count: 0 } // Bracelet mould
    ],
    outputs: [{ id: 11076, count: 1 }], // Emerald bracelet
    exp: [{ skill: 'Crafting', amount: 65 }],
    ticksPerAction: 4.6,
    notes: 'Requires Bracelet Mould'
  },
  {
    id: 'craft-ruby-bracelet',
    name: 'Craft Ruby Bracelet',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 42 }],
    inputs: [
      { id: 2357, count: 1 }, // Gold bar
      { id: 1603, count: 1 }, // Ruby
      { id: 11065, count: 0 } // Bracelet mould
    ],
    outputs: [{ id: 11085, count: 1 }], // Ruby bracelet
    exp: [{ skill: 'Crafting', amount: 80 }],
    ticksPerAction: 4.6,
    notes: 'Requires Bracelet Mould'
  },
  {
    id: 'craft-diamond-bracelet',
    name: 'Craft Diamond Bracelet',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 58 }],
    inputs: [
      { id: 2357, count: 1 }, // Gold bar
      { id: 1601, count: 1 }, // Diamond
      { id: 11065, count: 0 } // Bracelet mould
    ],
    outputs: [{ id: 11092, count: 1 }], // Diamond bracelet
    exp: [{ skill: 'Crafting', amount: 95 }],
    ticksPerAction: 4.6,
    notes: 'Requires Bracelet Mould'
  },
  {
    id: 'craft-dragonstone-bracelet',
    name: 'Craft Dragonstone Bracelet',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 74 }],
    inputs: [
      { id: 2357, count: 1 }, // Gold bar
      { id: 1615, count: 1 }, // Dragonstone
      { id: 11065, count: 0 } // Bracelet mould
    ],
    outputs: [{ id: 11115, count: 1 }], // Dragonstone bracelet
    exp: [{ skill: 'Crafting', amount: 110 }],
    ticksPerAction: 4.6,
    notes: 'Requires Bracelet Mould'
  },
  {
    id: 'craft-onyx-bracelet',
    name: 'Craft Onyx Bracelet',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 84 }],
    inputs: [
      { id: 2357, count: 1 }, // Gold bar
      { id: 6573, count: 1 }, // Onyx
      { id: 11065, count: 0 } // Bracelet mould
    ],
    outputs: [{ id: 11130, count: 1 }], // Onyx bracelet
    exp: [{ skill: 'Crafting', amount: 125 }],
    ticksPerAction: 4.6,
    notes: 'Requires Bracelet Mould'
  },
  // Crafting - Amulets (unstrung)
  {
    id: 'craft-gold-amulet-u',
    name: 'Craft Gold Amulet (u)',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 8 }],
    inputs: [
      { id: 2357, count: 1 }, // Gold bar
      { id: 1595, count: 0 }  // Amulet mould (not consumed)
    ],
    outputs: [{ id: 1673, count: 1 }], // Gold amulet (u)
    exp: [{ skill: 'Crafting', amount: 30 }],
    ticksPerAction: 4.6,
    notes: 'Requires Amulet Mould'
  },
  {
    id: 'craft-sapphire-amulet-u',
    name: 'Craft Sapphire Amulet (u)',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 24 }],
    inputs: [
      { id: 2357, count: 1 }, // Gold bar
      { id: 1607, count: 1 }, // Sapphire
      { id: 1595, count: 0 }  // Amulet mould
    ],
    outputs: [{ id: 1675, count: 1 }], // Sapphire amulet (u)
    exp: [{ skill: 'Crafting', amount: 65 }],
    ticksPerAction: 4.6,
    notes: 'Requires Amulet Mould'
  },
  {
    id: 'craft-emerald-amulet-u',
    name: 'Craft Emerald Amulet (u)',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 31 }],
    inputs: [
      { id: 2357, count: 1 }, // Gold bar
      { id: 1605, count: 1 }, // Emerald
      { id: 1595, count: 0 }  // Amulet mould
    ],
    outputs: [{ id: 1677, count: 1 }], // Emerald amulet (u)
    exp: [{ skill: 'Crafting', amount: 70 }],
    ticksPerAction: 4.6,
    notes: 'Requires Amulet Mould'
  },
  {
    id: 'craft-ruby-amulet-u',
    name: 'Craft Ruby Amulet (u)',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 50 }],
    inputs: [
      { id: 2357, count: 1 }, // Gold bar
      { id: 1603, count: 1 }, // Ruby
      { id: 1595, count: 0 }  // Amulet mould
    ],
    outputs: [{ id: 1679, count: 1 }], // Ruby amulet (u)
    exp: [{ skill: 'Crafting', amount: 85 }],
    ticksPerAction: 4.6,
    notes: 'Requires Amulet Mould'
  },
  {
    id: 'craft-diamond-amulet-u',
    name: 'Craft Diamond Amulet (u)',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 70 }],
    inputs: [
      { id: 2357, count: 1 }, // Gold bar
      { id: 1601, count: 1 }, // Diamond
      { id: 1595, count: 0 }  // Amulet mould
    ],
    outputs: [{ id: 1681, count: 1 }], // Diamond amulet (u)
    exp: [{ skill: 'Crafting', amount: 100 }],
    ticksPerAction: 4.6,
    notes: 'Requires Amulet Mould'
  },
  {
    id: 'craft-dragonstone-amulet-u',
    name: 'Craft Dragonstone Amulet (u)',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 80 }],
    inputs: [
      { id: 2357, count: 1 }, // Gold bar
      { id: 1615, count: 1 }, // Dragonstone
      { id: 1595, count: 0 }  // Amulet mould
    ],
    outputs: [{ id: 1683, count: 1 }], // Dragonstone amulet (u)
    exp: [{ skill: 'Crafting', amount: 150 }],
    ticksPerAction: 4.6,
    notes: 'Requires Amulet Mould'
  },
  {
    id: 'craft-onyx-amulet-u',
    name: 'Craft Onyx Amulet (u)',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 90 }],
    inputs: [
      { id: 2357, count: 1 }, // Gold bar
      { id: 6573, count: 1 }, // Onyx
      { id: 1595, count: 0 }  // Amulet mould
    ],
    outputs: [{ id: 6579, count: 1 }], // Onyx amulet (u)
    exp: [{ skill: 'Crafting', amount: 165 }],
    ticksPerAction: 4.6,
    notes: 'Requires Amulet Mould'
  },
  // Crafting - Rings
  {
    id: 'craft-gold-ring',
    name: 'Craft Gold Ring',
    category: 'Crafting',
    requirements: [
      { skill: 'Crafting', level: 5 }
    ],
    inputs: [
      { id: 2357, count: 1 }, // Gold bar
      { id: 1592, count: 0 }  // Ring mould (not consumed)
    ],
    outputs: [
      { id: 1635, count: 1 }  // Gold ring
    ],
    exp: [{ skill: 'Crafting', amount: 15 }],
    ticksPerAction: 4.6,
    notes: 'Requires Ring Mould'
  },
  {
    id: 'craft-sapphire-ring',
    name: 'Craft Sapphire Ring',
    category: 'Crafting',
    requirements: [
      { skill: 'Crafting', level: 20 }
    ],
    inputs: [
      { id: 2357, count: 1 }, // Gold bar
      { id: 1607, count: 1 }, // Sapphire
      { id: 1592, count: 0 }  // Ring mould
    ],
    outputs: [
      { id: 1637, count: 1 }  // Sapphire ring
    ],
    exp: [{ skill: 'Crafting', amount: 40 }],
    ticksPerAction: 4.6,
    notes: 'Requires Ring Mould'
  },
  {
    id: 'craft-emerald-ring',
    name: 'Craft Emerald Ring',
    category: 'Crafting',
    requirements: [
      { skill: 'Crafting', level: 27 }
    ],
    inputs: [
      { id: 2357, count: 1 }, // Gold bar
      { id: 1605, count: 1 }, // Emerald
      { id: 1592, count: 0 }  // Ring mould
    ],
    outputs: [
      { id: 1639, count: 1 }  // Emerald ring
    ],
    exp: [{ skill: 'Crafting', amount: 55 }],
    ticksPerAction: 4.6,
    notes: 'Requires Ring Mould'
  },
  {
    id: 'craft-ruby-ring',
    name: 'Craft Ruby Ring',
    category: 'Crafting',
    requirements: [
      { skill: 'Crafting', level: 34 }
    ],
    inputs: [
      { id: 2357, count: 1 }, // Gold bar
      { id: 1603, count: 1 }, // Ruby
      { id: 1592, count: 0 }  // Ring mould
    ],
    outputs: [
      { id: 1641, count: 1 }  // Ruby ring
    ],
    exp: [{ skill: 'Crafting', amount: 70 }],
    ticksPerAction: 4.6,
    notes: 'Requires Ring Mould'
  },
  {
    id: 'craft-diamond-ring',
    name: 'Craft Diamond Ring',
    category: 'Crafting',
    requirements: [
      { skill: 'Crafting', level: 43 }
    ],
    inputs: [
      { id: 2357, count: 1 }, // Gold bar
      { id: 1601, count: 1 }, // Diamond
      { id: 1592, count: 0 }  // Ring mould
    ],
    outputs: [
      { id: 1643, count: 1 }  // Diamond ring
    ],
    exp: [{ skill: 'Crafting', amount: 85 }],
    ticksPerAction: 4.6,
    notes: 'Requires Ring Mould'
  },
  {
    id: 'craft-dragonstone-ring',
    name: 'Craft Dragonstone Ring',
    category: 'Crafting',
    requirements: [
      { skill: 'Crafting', level: 55 }
    ],
    inputs: [
      { id: 2357, count: 1 }, // Gold bar
      { id: 1615, count: 1 }, // Dragonstone
      { id: 1592, count: 0 }  // Ring mould
    ],
    outputs: [
      { id: 1645, count: 1 }  // Dragonstone ring
    ],
    exp: [{ skill: 'Crafting', amount: 100 }],
    ticksPerAction: 4.6,
    notes: 'Requires Ring Mould'
  },
  {
    id: 'craft-onyx-ring',
    name: 'Craft Onyx Ring',
    category: 'Crafting',
    requirements: [
      { skill: 'Crafting', level: 67 }
    ],
    inputs: [
      { id: 2357, count: 1 }, // Gold bar
      { id: 6573, count: 1 }, // Onyx
      { id: 1592, count: 0 }  // Ring mould
    ],
    outputs: [
      { id: 6575, count: 1 }  // Onyx ring
    ],
    exp: [{ skill: 'Crafting', amount: 115 }],
    ticksPerAction: 4.6,
    notes: 'Requires Ring Mould'
  },
  // Crafting - Silver (semiprecious gem jewelry)
  {
    id: 'craft-opal-ring',
    name: 'Craft Opal Ring',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 1 }],
    inputs: [
      { id: 2355, count: 1 }, // Silver bar
      { id: 1609, count: 1 }, // Opal
      { id: 1592, count: 0 }  // Ring mould
    ],
    outputs: [{ id: 21081, count: 1 }], // Opal ring
    exp: [{ skill: 'Crafting', amount: 10 }],
    ticksPerAction: 4.6,
    notes: 'Requires Ring Mould'
  },
  {
    id: 'craft-jade-ring',
    name: 'Craft Jade Ring',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 13 }],
    inputs: [
      { id: 2355, count: 1 }, // Silver bar
      { id: 1611, count: 1 }, // Jade
      { id: 1592, count: 0 }  // Ring mould
    ],
    outputs: [{ id: 21084, count: 1 }], // Jade ring
    exp: [{ skill: 'Crafting', amount: 32 }],
    ticksPerAction: 4.6,
    notes: 'Requires Ring Mould'
  },
  {
    id: 'craft-topaz-ring',
    name: 'Craft Topaz Ring',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 16 }],
    inputs: [
      { id: 2355, count: 1 }, // Silver bar
      { id: 1613, count: 1 }, // Red topaz
      { id: 1592, count: 0 }  // Ring mould
    ],
    outputs: [{ id: 21087, count: 1 }], // Topaz ring
    exp: [{ skill: 'Crafting', amount: 35 }],
    ticksPerAction: 4.6,
    notes: 'Requires Ring Mould'
  },
  {
    id: 'craft-opal-necklace',
    name: 'Craft Opal Necklace',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 16 }],
    inputs: [
      { id: 2355, count: 1 }, // Silver bar
      { id: 1609, count: 1 }, // Opal
      { id: 1597, count: 0 }  // Necklace mould
    ],
    outputs: [{ id: 21090, count: 1 }], // Opal necklace
    exp: [{ skill: 'Crafting', amount: 35 }],
    ticksPerAction: 4.6,
    notes: 'Requires Necklace Mould'
  },
  {
    id: 'craft-jade-necklace',
    name: 'Craft Jade Necklace',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 25 }],
    inputs: [
      { id: 2355, count: 1 }, // Silver bar
      { id: 1611, count: 1 }, // Jade
      { id: 1597, count: 0 }  // Necklace mould
    ],
    outputs: [{ id: 21093, count: 1 }], // Jade necklace
    exp: [{ skill: 'Crafting', amount: 54 }],
    ticksPerAction: 4.6,
    notes: 'Requires Necklace Mould'
  },
  {
    id: 'craft-topaz-necklace',
    name: 'Craft Topaz Necklace',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 32 }],
    inputs: [
      { id: 2355, count: 1 }, // Silver bar
      { id: 1613, count: 1 }, // Red topaz
      { id: 1597, count: 0 }  // Necklace mould
    ],
    outputs: [{ id: 21096, count: 1 }], // Topaz necklace
    exp: [{ skill: 'Crafting', amount: 70 }],
    ticksPerAction: 4.6,
    notes: 'Requires Necklace Mould'
  },
  {
    id: 'craft-opal-bracelet',
    name: 'Craft Opal Bracelet',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 22 }],
    inputs: [
      { id: 2355, count: 1 }, // Silver bar
      { id: 1609, count: 1 }, // Opal
      { id: 11065, count: 0 } // Bracelet mould
    ],
    outputs: [{ id: 21117, count: 1 }], // Opal bracelet
    exp: [{ skill: 'Crafting', amount: 45 }],
    ticksPerAction: 4.6,
    notes: 'Requires Bracelet Mould'
  },
  {
    id: 'craft-jade-bracelet',
    name: 'Craft Jade Bracelet',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 29 }],
    inputs: [
      { id: 2355, count: 1 }, // Silver bar
      { id: 1611, count: 1 }, // Jade
      { id: 11065, count: 0 } // Bracelet mould
    ],
    outputs: [{ id: 21120, count: 1 }], // Jade bracelet
    exp: [{ skill: 'Crafting', amount: 60 }],
    ticksPerAction: 4.6,
    notes: 'Requires Bracelet Mould'
  },
  {
    id: 'craft-topaz-bracelet',
    name: 'Craft Topaz Bracelet',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 38 }],
    inputs: [
      { id: 2355, count: 1 }, // Silver bar
      { id: 1613, count: 1 }, // Red topaz
      { id: 11065, count: 0 } // Bracelet mould
    ],
    outputs: [{ id: 21123, count: 1 }], // Topaz bracelet
    exp: [{ skill: 'Crafting', amount: 75 }],
    ticksPerAction: 4.6,
    notes: 'Requires Bracelet Mould'
  },
  {
    id: 'craft-opal-amulet-u',
    name: 'Craft Opal Amulet (u)',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 27 }],
    inputs: [
      { id: 2355, count: 1 }, // Silver bar
      { id: 1609, count: 1 }, // Opal
      { id: 1595, count: 0 }  // Amulet mould
    ],
    outputs: [{ id: 21099, count: 1 }], // Opal amulet (u)
    exp: [{ skill: 'Crafting', amount: 55 }],
    ticksPerAction: 4.6,
    notes: 'Requires Amulet Mould'
  },
  {
    id: 'craft-jade-amulet-u',
    name: 'Craft Jade Amulet (u)',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 34 }],
    inputs: [
      { id: 2355, count: 1 }, // Silver bar
      { id: 1611, count: 1 }, // Jade
      { id: 1595, count: 0 }  // Amulet mould
    ],
    outputs: [{ id: 21102, count: 1 }], // Jade amulet (u)
    exp: [{ skill: 'Crafting', amount: 70 }],
    ticksPerAction: 4.6,
    notes: 'Requires Amulet Mould'
  },
  {
    id: 'craft-topaz-amulet-u',
    name: 'Craft Topaz Amulet (u)',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 45 }],
    inputs: [
      { id: 2355, count: 1 }, // Silver bar
      { id: 1613, count: 1 }, // Red topaz
      { id: 1595, count: 0 }  // Amulet mould
    ],
    outputs: [{ id: 21105, count: 1 }], // Topaz amulet (u)
    exp: [{ skill: 'Crafting', amount: 80 }],
    ticksPerAction: 4.6,
    notes: 'Requires Amulet Mould'
  },
  // Crafting - Silver (other)
  {
    id: 'craft-holy-symbol-u',
    name: 'Craft Unstrung Holy Symbol',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 16 }],
    inputs: [
      { id: 2355, count: 1 }, // Silver bar
      { id: 1599, count: 0 }  // Holy mould (not consumed)
    ],
    outputs: [{ id: 1714, count: 1 }], // Unstrung symbol
    exp: [{ skill: 'Crafting', amount: 50 }],
    ticksPerAction: 4.6,
    notes: 'Requires Holy Mould'
  },
  {
    id: 'craft-unholy-symbol-u',
    name: 'Craft Unstrung Unholy Symbol',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 17 }],
    inputs: [
      { id: 2355, count: 1 }, // Silver bar
    ],
    outputs: [{ id: 1720, count: 1 }], // Unstrung emblem
    exp: [{ skill: 'Crafting', amount: 50 }],
    ticksPerAction: 4.6,
    notes: 'Requires Unholy Mould'
  },
  {
    id: 'craft-silver-sickle',
    name: 'Craft Silver Sickle',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 18 }],
    inputs: [
      { id: 2355, count: 1 }, // Silver bar
      { id: 2976, count: 0 }  // Sickle mould (not consumed)
    ],
    outputs: [{ id: 2961, count: 1 }], // Silver sickle
    exp: [{ skill: 'Crafting', amount: 50 }],
    ticksPerAction: 4.6,
    notes: 'Requires Sickle Mould'
  },
  {
    id: 'craft-silver-bolts-unf',
    name: 'Craft Silver Bolts (unf)',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 21 }],
    inputs: [
      { id: 2355, count: 1 }, // Silver bar
      { id: 9434, count: 0 }  // Bolt mould (not consumed)
    ],
    outputs: [{ id: 9382, count: 10 }], // Silver bolts (unf)
    exp: [{ skill: 'Crafting', amount: 50 }],
    ticksPerAction: 4.6,
    notes: 'Requires Bolt Mould. Produces 10 per bar.'
  },
  {
    id: 'craft-tiara',
    name: 'Craft Tiara',
    category: 'Crafting',
    requirements: [{ skill: 'Crafting', level: 23 }],
    inputs: [
      { id: 2355, count: 1 }, // Silver bar
      { id: 5523, count: 0 }  // Tiara mould (not consumed)
    ],
    outputs: [{ id: 5525, count: 1 }], // Tiara
    exp: [{ skill: 'Crafting', amount: 52.5 }],
    ticksPerAction: 4.6,
    notes: 'Requires Tiara Mould'
  }
];
