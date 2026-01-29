import { Method } from '@/lib/types';

export const fletchingMethods: Method[] = [
  // Standard gem-tipped bolts (bolt tips + base bolts → gem bolts, 10 per action)
  {
    id: 'fletch-opal-bolts',
    name: 'Tip Opal Bolts',
    category: 'Fletching',
    requirements: [{ skill: 'Fletching', level: 11 }],
    inputs: [
      { id: 45, count: 10 },  // Opal bolt tips
      { id: 877, count: 10 }  // Bronze bolts
    ],
    outputs: [
      { id: 879, count: 10 }  // Opal bolts
    ],
    exp: [{ skill: 'Fletching', amount: 16 }],
    ticksPerAction: 2,
  },
  {
    id: 'fletch-pearl-bolts',
    name: 'Tip Pearl Bolts',
    category: 'Fletching',
    requirements: [{ skill: 'Fletching', level: 41 }],
    inputs: [
      { id: 46, count: 10 },   // Pearl bolt tips
      { id: 9140, count: 10 }  // Iron bolts
    ],
    outputs: [
      { id: 880, count: 10 }   // Pearl bolts
    ],
    exp: [{ skill: 'Fletching', amount: 32 }],
    ticksPerAction: 2,
  },
  {
    id: 'fletch-topaz-bolts',
    name: 'Tip Topaz Bolts',
    category: 'Fletching',
    requirements: [{ skill: 'Fletching', level: 48 }],
    inputs: [
      { id: 9188, count: 10 },  // Topaz bolt tips
      { id: 9141, count: 10 }   // Steel bolts
    ],
    outputs: [
      { id: 9336, count: 10 }   // Topaz bolts
    ],
    exp: [{ skill: 'Fletching', amount: 39 }],
    ticksPerAction: 2,
  },
  {
    id: 'fletch-sapphire-bolts',
    name: 'Tip Sapphire Bolts',
    category: 'Fletching',
    requirements: [{ skill: 'Fletching', level: 56 }],
    inputs: [
      { id: 9189, count: 10 },  // Sapphire bolt tips
      { id: 9142, count: 10 }   // Mithril bolts
    ],
    outputs: [
      { id: 9337, count: 10 }   // Sapphire bolts
    ],
    exp: [{ skill: 'Fletching', amount: 47 }],
    ticksPerAction: 2,
  },
  {
    id: 'fletch-emerald-bolts',
    name: 'Tip Emerald Bolts',
    category: 'Fletching',
    requirements: [{ skill: 'Fletching', level: 58 }],
    inputs: [
      { id: 9190, count: 10 },  // Emerald bolt tips
      { id: 9142, count: 10 }   // Mithril bolts
    ],
    outputs: [
      { id: 9338, count: 10 }   // Emerald bolts
    ],
    exp: [{ skill: 'Fletching', amount: 55 }],
    ticksPerAction: 2,
  },
  {
    id: 'fletch-ruby-bolts',
    name: 'Tip Ruby Bolts',
    category: 'Fletching',
    requirements: [{ skill: 'Fletching', level: 63 }],
    inputs: [
      { id: 9191, count: 10 },  // Ruby bolt tips
      { id: 9143, count: 10 }   // Adamant bolts
    ],
    outputs: [
      { id: 9339, count: 10 }   // Ruby bolts
    ],
    exp: [{ skill: 'Fletching', amount: 63 }],
    ticksPerAction: 2,
  },
  {
    id: 'fletch-diamond-bolts',
    name: 'Tip Diamond Bolts',
    category: 'Fletching',
    requirements: [{ skill: 'Fletching', level: 65 }],
    inputs: [
      { id: 9192, count: 10 },  // Diamond bolt tips
      { id: 9143, count: 10 }   // Adamant bolts
    ],
    outputs: [
      { id: 9340, count: 10 }   // Diamond bolts
    ],
    exp: [{ skill: 'Fletching', amount: 70 }],
    ticksPerAction: 2,
  },
  {
    id: 'fletch-dragonstone-bolts',
    name: 'Tip Dragonstone Bolts',
    category: 'Fletching',
    requirements: [{ skill: 'Fletching', level: 71 }],
    inputs: [
      { id: 9193, count: 10 },  // Dragonstone bolt tips
      { id: 9144, count: 10 }   // Runite bolts
    ],
    outputs: [
      { id: 9341, count: 10 }   // Dragonstone bolts
    ],
    exp: [{ skill: 'Fletching', amount: 82 }],
    ticksPerAction: 2,
  },
  {
    id: 'fletch-onyx-bolts',
    name: 'Tip Onyx Bolts',
    category: 'Fletching',
    requirements: [{ skill: 'Fletching', level: 73 }],
    inputs: [
      { id: 9194, count: 10 },  // Onyx bolt tips
      { id: 9144, count: 10 }   // Runite bolts
    ],
    outputs: [
      { id: 9342, count: 10 }   // Onyx bolts
    ],
    exp: [{ skill: 'Fletching', amount: 94 }],
    ticksPerAction: 2,
  },

  // Dragon gem-tipped bolts (bolt tips + dragon bolts → gem dragon bolts, 10 per action)
  {
    id: 'fletch-opal-dragon-bolts',
    name: 'Tip Opal Dragon Bolts',
    category: 'Fletching',
    requirements: [{ skill: 'Fletching', level: 11 }],
    inputs: [
      { id: 45, count: 10 },     // Opal bolt tips
      { id: 21905, count: 10 }   // Dragon bolts
    ],
    outputs: [
      { id: 21955, count: 10 }   // Opal dragon bolts
    ],
    exp: [{ skill: 'Fletching', amount: 16 }],
    ticksPerAction: 2,
  },
  {
    id: 'fletch-pearl-dragon-bolts',
    name: 'Tip Pearl Dragon Bolts',
    category: 'Fletching',
    requirements: [{ skill: 'Fletching', level: 41 }],
    inputs: [
      { id: 46, count: 10 },     // Pearl bolt tips
      { id: 21905, count: 10 }   // Dragon bolts
    ],
    outputs: [
      { id: 21959, count: 10 }   // Pearl dragon bolts
    ],
    exp: [{ skill: 'Fletching', amount: 32 }],
    ticksPerAction: 2,
  },
  {
    id: 'fletch-topaz-dragon-bolts',
    name: 'Tip Topaz Dragon Bolts',
    category: 'Fletching',
    requirements: [{ skill: 'Fletching', level: 48 }],
    inputs: [
      { id: 9188, count: 10 },   // Topaz bolt tips
      { id: 21905, count: 10 }   // Dragon bolts
    ],
    outputs: [
      { id: 21961, count: 10 }   // Topaz dragon bolts
    ],
    exp: [{ skill: 'Fletching', amount: 39 }],
    ticksPerAction: 2,
  },
  {
    id: 'fletch-sapphire-dragon-bolts',
    name: 'Tip Sapphire Dragon Bolts',
    category: 'Fletching',
    requirements: [{ skill: 'Fletching', level: 56 }],
    inputs: [
      { id: 9189, count: 10 },   // Sapphire bolt tips
      { id: 21905, count: 10 }   // Dragon bolts
    ],
    outputs: [
      { id: 21963, count: 10 }   // Sapphire dragon bolts
    ],
    exp: [{ skill: 'Fletching', amount: 47 }],
    ticksPerAction: 2,
  },
  {
    id: 'fletch-emerald-dragon-bolts',
    name: 'Tip Emerald Dragon Bolts',
    category: 'Fletching',
    requirements: [{ skill: 'Fletching', level: 58 }],
    inputs: [
      { id: 9190, count: 10 },   // Emerald bolt tips
      { id: 21905, count: 10 }   // Dragon bolts
    ],
    outputs: [
      { id: 21965, count: 10 }   // Emerald dragon bolts
    ],
    exp: [{ skill: 'Fletching', amount: 55 }],
    ticksPerAction: 2,
  },
  {
    id: 'fletch-ruby-dragon-bolts',
    name: 'Tip Ruby Dragon Bolts',
    category: 'Fletching',
    requirements: [{ skill: 'Fletching', level: 63 }],
    inputs: [
      { id: 9191, count: 10 },   // Ruby bolt tips
      { id: 21905, count: 10 }   // Dragon bolts
    ],
    outputs: [
      { id: 21967, count: 10 }   // Ruby dragon bolts
    ],
    exp: [{ skill: 'Fletching', amount: 63 }],
    ticksPerAction: 2,
  },
  {
    id: 'fletch-diamond-dragon-bolts',
    name: 'Tip Diamond Dragon Bolts',
    category: 'Fletching',
    requirements: [{ skill: 'Fletching', level: 65 }],
    inputs: [
      { id: 9192, count: 10 },   // Diamond bolt tips
      { id: 21905, count: 10 }   // Dragon bolts
    ],
    outputs: [
      { id: 21969, count: 10 }   // Diamond dragon bolts
    ],
    exp: [{ skill: 'Fletching', amount: 70 }],
    ticksPerAction: 2,
  },
  {
    id: 'fletch-dragonstone-dragon-bolts',
    name: 'Tip Dragonstone Dragon Bolts',
    category: 'Fletching',
    requirements: [{ skill: 'Fletching', level: 71 }],
    inputs: [
      { id: 9193, count: 10 },   // Dragonstone bolt tips
      { id: 21905, count: 10 }   // Dragon bolts
    ],
    outputs: [
      { id: 21971, count: 10 }   // Dragonstone dragon bolts
    ],
    exp: [{ skill: 'Fletching', amount: 82 }],
    ticksPerAction: 2,
  },
  {
    id: 'fletch-onyx-dragon-bolts',
    name: 'Tip Onyx Dragon Bolts',
    category: 'Fletching',
    requirements: [{ skill: 'Fletching', level: 73 }],
    inputs: [
      { id: 9194, count: 10 },   // Onyx bolt tips
      { id: 21905, count: 10 }   // Dragon bolts
    ],
    outputs: [
      { id: 21973, count: 10 }   // Onyx dragon bolts
    ],
    exp: [{ skill: 'Fletching', amount: 94 }],
    ticksPerAction: 2,
  },

  // Darts (feather + dart tip → darts, 10 per action)
  {
    id: 'fletch-bronze-darts',
    name: 'Fletch Bronze Darts',
    category: 'Fletching',
    requirements: [{ skill: 'Fletching', level: 1 }],
    inputs: [
      { id: 819, count: 10 },  // Bronze dart tip
      { id: 314, count: 10 }   // Feather
    ],
    outputs: [
      { id: 806, count: 10 }   // Bronze dart
    ],
    exp: [{ skill: 'Fletching', amount: 18 }],
    ticksPerAction: 2,
  },
  {
    id: 'fletch-iron-darts',
    name: 'Fletch Iron Darts',
    category: 'Fletching',
    requirements: [{ skill: 'Fletching', level: 22 }],
    inputs: [
      { id: 820, count: 10 },  // Iron dart tip
      { id: 314, count: 10 }   // Feather
    ],
    outputs: [
      { id: 807, count: 10 }   // Iron dart
    ],
    exp: [{ skill: 'Fletching', amount: 37 }],
    ticksPerAction: 2,
  },
  {
    id: 'fletch-steel-darts',
    name: 'Fletch Steel Darts',
    category: 'Fletching',
    requirements: [{ skill: 'Fletching', level: 37 }],
    inputs: [
      { id: 821, count: 10 },  // Steel dart tip
      { id: 314, count: 10 }   // Feather
    ],
    outputs: [
      { id: 808, count: 10 }   // Steel dart
    ],
    exp: [{ skill: 'Fletching', amount: 75 }],
    ticksPerAction: 2,
  },
  {
    id: 'fletch-mithril-darts',
    name: 'Fletch Mithril Darts',
    category: 'Fletching',
    requirements: [{ skill: 'Fletching', level: 52 }],
    inputs: [
      { id: 822, count: 10 },  // Mithril dart tip
      { id: 314, count: 10 }   // Feather
    ],
    outputs: [
      { id: 809, count: 10 }   // Mithril dart
    ],
    exp: [{ skill: 'Fletching', amount: 112 }],
    ticksPerAction: 2,
  },
  {
    id: 'fletch-adamant-darts',
    name: 'Fletch Adamant Darts',
    category: 'Fletching',
    requirements: [{ skill: 'Fletching', level: 67 }],
    inputs: [
      { id: 823, count: 10 },  // Adamant dart tip
      { id: 314, count: 10 }   // Feather
    ],
    outputs: [
      { id: 810, count: 10 }   // Adamant dart
    ],
    exp: [{ skill: 'Fletching', amount: 150 }],
    ticksPerAction: 2,
  },
  {
    id: 'fletch-rune-darts',
    name: 'Fletch Rune Darts',
    category: 'Fletching',
    requirements: [{ skill: 'Fletching', level: 81 }],
    inputs: [
      { id: 824, count: 10 },  // Rune dart tip
      { id: 314, count: 10 }   // Feather
    ],
    outputs: [
      { id: 811, count: 10 }   // Rune dart
    ],
    exp: [{ skill: 'Fletching', amount: 188 }],
    ticksPerAction: 2,
  },
  {
    id: 'fletch-dragon-darts',
    name: 'Fletch Dragon Darts',
    category: 'Fletching',
    requirements: [{ skill: 'Fletching', level: 95 }],
    inputs: [
      { id: 11232, count: 10 },  // Dragon dart tip
      { id: 314, count: 10 }     // Feather
    ],
    outputs: [
      { id: 11230, count: 10 }   // Dragon dart
    ],
    exp: [{ skill: 'Fletching', amount: 250 }],
    ticksPerAction: 2,
  },

  // Arrows (arrowhead + headless arrow → arrows, 15 per action)
  {
    id: 'fletch-bronze-arrows',
    name: 'Fletch Bronze Arrows',
    category: 'Fletching',
    requirements: [{ skill: 'Fletching', level: 1 }],
    inputs: [
      { id: 39, count: 15 },  // Bronze arrowheads
      { id: 53, count: 15 }   // Headless arrow
    ],
    outputs: [
      { id: 882, count: 15 }  // Bronze arrow
    ],
    exp: [{ skill: 'Fletching', amount: 15 }],
    ticksPerAction: 2,
  },
  {
    id: 'fletch-iron-arrows',
    name: 'Fletch Iron Arrows',
    category: 'Fletching',
    requirements: [{ skill: 'Fletching', level: 15 }],
    inputs: [
      { id: 40, count: 15 },  // Iron arrowheads
      { id: 53, count: 15 }   // Headless arrow
    ],
    outputs: [
      { id: 884, count: 15 }  // Iron arrow
    ],
    exp: [{ skill: 'Fletching', amount: 37.5 }],
    ticksPerAction: 2,
  },
  {
    id: 'fletch-steel-arrows',
    name: 'Fletch Steel Arrows',
    category: 'Fletching',
    requirements: [{ skill: 'Fletching', level: 30 }],
    inputs: [
      { id: 41, count: 15 },  // Steel arrowheads
      { id: 53, count: 15 }   // Headless arrow
    ],
    outputs: [
      { id: 886, count: 15 }  // Steel arrow
    ],
    exp: [{ skill: 'Fletching', amount: 75 }],
    ticksPerAction: 2,
  },
  {
    id: 'fletch-mithril-arrows',
    name: 'Fletch Mithril Arrows',
    category: 'Fletching',
    requirements: [{ skill: 'Fletching', level: 45 }],
    inputs: [
      { id: 42, count: 15 },  // Mithril arrowheads
      { id: 53, count: 15 }   // Headless arrow
    ],
    outputs: [
      { id: 888, count: 15 }  // Mithril arrow
    ],
    exp: [{ skill: 'Fletching', amount: 112.5 }],
    ticksPerAction: 2,
  },
  {
    id: 'fletch-adamant-arrows',
    name: 'Fletch Adamant Arrows',
    category: 'Fletching',
    requirements: [{ skill: 'Fletching', level: 60 }],
    inputs: [
      { id: 43, count: 15 },  // Adamant arrowheads
      { id: 53, count: 15 }   // Headless arrow
    ],
    outputs: [
      { id: 890, count: 15 }  // Adamant arrow
    ],
    exp: [{ skill: 'Fletching', amount: 150 }],
    ticksPerAction: 2,
  },
  {
    id: 'fletch-rune-arrows',
    name: 'Fletch Rune Arrows',
    category: 'Fletching',
    requirements: [{ skill: 'Fletching', level: 75 }],
    inputs: [
      { id: 44, count: 15 },  // Rune arrowheads
      { id: 53, count: 15 }   // Headless arrow
    ],
    outputs: [
      { id: 892, count: 15 }  // Rune arrow
    ],
    exp: [{ skill: 'Fletching', amount: 187.5 }],
    ticksPerAction: 2,
  },
  {
    id: 'fletch-dragon-arrows',
    name: 'Fletch Dragon Arrows',
    category: 'Fletching',
    requirements: [{ skill: 'Fletching', level: 90 }],
    inputs: [
      { id: 11237, count: 15 },  // Dragon arrowheads
      { id: 53, count: 15 }      // Headless arrow
    ],
    outputs: [
      { id: 11212, count: 15 }   // Dragon arrow
    ],
    exp: [{ skill: 'Fletching', amount: 225 }],
    ticksPerAction: 2,
  },

  // Unstrung shortbows (log → unstrung shortbow, 1 per action, 5 ticks)
  {
    id: 'fletch-shortbow-u',
    name: 'Fletch Shortbow (u)',
    category: 'Fletching',
    requirements: [{ skill: 'Fletching', level: 5 }],
    inputs: [
      { id: 1511, count: 1 }  // Logs
    ],
    outputs: [
      { id: 50, count: 1 }    // Shortbow (u)
    ],
    exp: [{ skill: 'Fletching', amount: 5 }],
    ticksPerAction: 5,
  },
  {
    id: 'fletch-oak-shortbow-u',
    name: 'Fletch Oak Shortbow (u)',
    category: 'Fletching',
    requirements: [{ skill: 'Fletching', level: 20 }],
    inputs: [
      { id: 1521, count: 1 }  // Oak logs
    ],
    outputs: [
      { id: 54, count: 1 }    // Oak shortbow (u)
    ],
    exp: [{ skill: 'Fletching', amount: 16.5 }],
    ticksPerAction: 5,
  },
  {
    id: 'fletch-willow-shortbow-u',
    name: 'Fletch Willow Shortbow (u)',
    category: 'Fletching',
    requirements: [{ skill: 'Fletching', level: 35 }],
    inputs: [
      { id: 1519, count: 1 }  // Willow logs
    ],
    outputs: [
      { id: 60, count: 1 }    // Willow shortbow (u)
    ],
    exp: [{ skill: 'Fletching', amount: 33.3 }],
    ticksPerAction: 5,
  },
  {
    id: 'fletch-maple-shortbow-u',
    name: 'Fletch Maple Shortbow (u)',
    category: 'Fletching',
    requirements: [{ skill: 'Fletching', level: 50 }],
    inputs: [
      { id: 1517, count: 1 }  // Maple logs
    ],
    outputs: [
      { id: 64, count: 1 }    // Maple shortbow (u)
    ],
    exp: [{ skill: 'Fletching', amount: 50 }],
    ticksPerAction: 5,
  },
  {
    id: 'fletch-yew-shortbow-u',
    name: 'Fletch Yew Shortbow (u)',
    category: 'Fletching',
    requirements: [{ skill: 'Fletching', level: 65 }],
    inputs: [
      { id: 1515, count: 1 }  // Yew logs
    ],
    outputs: [
      { id: 68, count: 1 }    // Yew shortbow (u)
    ],
    exp: [{ skill: 'Fletching', amount: 67.5 }],
    ticksPerAction: 5,
  },
  {
    id: 'fletch-magic-shortbow-u',
    name: 'Fletch Magic Shortbow (u)',
    category: 'Fletching',
    requirements: [{ skill: 'Fletching', level: 80 }],
    inputs: [
      { id: 1513, count: 1 }  // Magic logs
    ],
    outputs: [
      { id: 72, count: 1 }    // Magic shortbow (u)
    ],
    exp: [{ skill: 'Fletching', amount: 83.3 }],
    ticksPerAction: 5,
  },

  // Unstrung longbows (log → unstrung longbow, 1 per action, 7 ticks)
  {
    id: 'fletch-longbow-u',
    name: 'Fletch Longbow (u)',
    category: 'Fletching',
    requirements: [{ skill: 'Fletching', level: 10 }],
    inputs: [
      { id: 1511, count: 1 }  // Logs
    ],
    outputs: [
      { id: 48, count: 1 }    // Longbow (u)
    ],
    exp: [{ skill: 'Fletching', amount: 10 }],
    ticksPerAction: 7,
  },
  {
    id: 'fletch-oak-longbow-u',
    name: 'Fletch Oak Longbow (u)',
    category: 'Fletching',
    requirements: [{ skill: 'Fletching', level: 25 }],
    inputs: [
      { id: 1521, count: 1 }  // Oak logs
    ],
    outputs: [
      { id: 56, count: 1 }    // Oak longbow (u)
    ],
    exp: [{ skill: 'Fletching', amount: 25 }],
    ticksPerAction: 7,
  },
  {
    id: 'fletch-willow-longbow-u',
    name: 'Fletch Willow Longbow (u)',
    category: 'Fletching',
    requirements: [{ skill: 'Fletching', level: 40 }],
    inputs: [
      { id: 1519, count: 1 }  // Willow logs
    ],
    outputs: [
      { id: 58, count: 1 }    // Willow longbow (u)
    ],
    exp: [{ skill: 'Fletching', amount: 41.5 }],
    ticksPerAction: 7,
  },
  {
    id: 'fletch-maple-longbow-u',
    name: 'Fletch Maple Longbow (u)',
    category: 'Fletching',
    requirements: [{ skill: 'Fletching', level: 55 }],
    inputs: [
      { id: 1517, count: 1 }  // Maple logs
    ],
    outputs: [
      { id: 62, count: 1 }    // Maple longbow (u)
    ],
    exp: [{ skill: 'Fletching', amount: 58.3 }],
    ticksPerAction: 7,
  },
  {
    id: 'fletch-yew-longbow-u',
    name: 'Fletch Yew Longbow (u)',
    category: 'Fletching',
    requirements: [{ skill: 'Fletching', level: 70 }],
    inputs: [
      { id: 1515, count: 1 }  // Yew logs
    ],
    outputs: [
      { id: 66, count: 1 }    // Yew longbow (u)
    ],
    exp: [{ skill: 'Fletching', amount: 75 }],
    ticksPerAction: 7,
  },
  {
    id: 'fletch-magic-longbow-u',
    name: 'Fletch Magic Longbow (u)',
    category: 'Fletching',
    requirements: [{ skill: 'Fletching', level: 85 }],
    inputs: [
      { id: 1513, count: 1 }  // Magic logs
    ],
    outputs: [
      { id: 70, count: 1 }    // Magic longbow (u)
    ],
    exp: [{ skill: 'Fletching', amount: 91.5 }],
    ticksPerAction: 7,
  },

  // Stringing shortbows (unstrung + bowstring → strung bow, 2 ticks)
  {
    id: 'string-shortbow',
    name: 'String Shortbow',
    category: 'Fletching',
    requirements: [{ skill: 'Fletching', level: 5 }],
    inputs: [
      { id: 50, count: 1 },    // Shortbow (u)
      { id: 1777, count: 1 }   // Bowstring
    ],
    outputs: [
      { id: 841, count: 1 }    // Shortbow
    ],
    exp: [{ skill: 'Fletching', amount: 5 }],
    ticksPerAction: 2,
  },
  {
    id: 'string-oak-shortbow',
    name: 'String Oak Shortbow',
    category: 'Fletching',
    requirements: [{ skill: 'Fletching', level: 20 }],
    inputs: [
      { id: 54, count: 1 },    // Oak shortbow (u)
      { id: 1777, count: 1 }   // Bowstring
    ],
    outputs: [
      { id: 843, count: 1 }    // Oak shortbow
    ],
    exp: [{ skill: 'Fletching', amount: 16.5 }],
    ticksPerAction: 2,
  },
  {
    id: 'string-willow-shortbow',
    name: 'String Willow Shortbow',
    category: 'Fletching',
    requirements: [{ skill: 'Fletching', level: 35 }],
    inputs: [
      { id: 60, count: 1 },    // Willow shortbow (u)
      { id: 1777, count: 1 }   // Bowstring
    ],
    outputs: [
      { id: 849, count: 1 }    // Willow shortbow
    ],
    exp: [{ skill: 'Fletching', amount: 33.3 }],
    ticksPerAction: 2,
  },
  {
    id: 'string-maple-shortbow',
    name: 'String Maple Shortbow',
    category: 'Fletching',
    requirements: [{ skill: 'Fletching', level: 50 }],
    inputs: [
      { id: 64, count: 1 },    // Maple shortbow (u)
      { id: 1777, count: 1 }   // Bowstring
    ],
    outputs: [
      { id: 853, count: 1 }    // Maple shortbow
    ],
    exp: [{ skill: 'Fletching', amount: 50 }],
    ticksPerAction: 2,
  },
  {
    id: 'string-yew-shortbow',
    name: 'String Yew Shortbow',
    category: 'Fletching',
    requirements: [{ skill: 'Fletching', level: 65 }],
    inputs: [
      { id: 68, count: 1 },    // Yew shortbow (u)
      { id: 1777, count: 1 }   // Bowstring
    ],
    outputs: [
      { id: 857, count: 1 }    // Yew shortbow
    ],
    exp: [{ skill: 'Fletching', amount: 67.5 }],
    ticksPerAction: 2,
  },
  {
    id: 'string-magic-shortbow',
    name: 'String Magic Shortbow',
    category: 'Fletching',
    requirements: [{ skill: 'Fletching', level: 80 }],
    inputs: [
      { id: 72, count: 1 },    // Magic shortbow (u)
      { id: 1777, count: 1 }   // Bowstring
    ],
    outputs: [
      { id: 861, count: 1 }    // Magic shortbow
    ],
    exp: [{ skill: 'Fletching', amount: 83.3 }],
    ticksPerAction: 2,
  },

  // Stringing longbows (unstrung + bowstring → strung bow, 2 ticks)
  {
    id: 'string-longbow',
    name: 'String Longbow',
    category: 'Fletching',
    requirements: [{ skill: 'Fletching', level: 10 }],
    inputs: [
      { id: 48, count: 1 },    // Longbow (u)
      { id: 1777, count: 1 }   // Bowstring
    ],
    outputs: [
      { id: 839, count: 1 }    // Longbow
    ],
    exp: [{ skill: 'Fletching', amount: 10 }],
    ticksPerAction: 2,
  },
  {
    id: 'string-oak-longbow',
    name: 'String Oak Longbow',
    category: 'Fletching',
    requirements: [{ skill: 'Fletching', level: 25 }],
    inputs: [
      { id: 56, count: 1 },    // Oak longbow (u)
      { id: 1777, count: 1 }   // Bowstring
    ],
    outputs: [
      { id: 845, count: 1 }    // Oak longbow
    ],
    exp: [{ skill: 'Fletching', amount: 25 }],
    ticksPerAction: 2,
  },
  {
    id: 'string-willow-longbow',
    name: 'String Willow Longbow',
    category: 'Fletching',
    requirements: [{ skill: 'Fletching', level: 40 }],
    inputs: [
      { id: 58, count: 1 },    // Willow longbow (u)
      { id: 1777, count: 1 }   // Bowstring
    ],
    outputs: [
      { id: 847, count: 1 }    // Willow longbow
    ],
    exp: [{ skill: 'Fletching', amount: 41.5 }],
    ticksPerAction: 2,
  },
  {
    id: 'string-maple-longbow',
    name: 'String Maple Longbow',
    category: 'Fletching',
    requirements: [{ skill: 'Fletching', level: 55 }],
    inputs: [
      { id: 62, count: 1 },    // Maple longbow (u)
      { id: 1777, count: 1 }   // Bowstring
    ],
    outputs: [
      { id: 851, count: 1 }    // Maple longbow
    ],
    exp: [{ skill: 'Fletching', amount: 58.3 }],
    ticksPerAction: 2,
  },
  {
    id: 'string-yew-longbow',
    name: 'String Yew Longbow',
    category: 'Fletching',
    requirements: [{ skill: 'Fletching', level: 70 }],
    inputs: [
      { id: 66, count: 1 },    // Yew longbow (u)
      { id: 1777, count: 1 }   // Bowstring
    ],
    outputs: [
      { id: 855, count: 1 }    // Yew longbow
    ],
    exp: [{ skill: 'Fletching', amount: 75 }],
    ticksPerAction: 2,
  },
  {
    id: 'string-magic-longbow',
    name: 'String Magic Longbow',
    category: 'Fletching',
    requirements: [{ skill: 'Fletching', level: 85 }],
    inputs: [
      { id: 70, count: 1 },    // Magic longbow (u)
      { id: 1777, count: 1 }   // Bowstring
    ],
    outputs: [
      { id: 859, count: 1 }    // Magic longbow
    ],
    exp: [{ skill: 'Fletching', amount: 91.5 }],
    ticksPerAction: 2,
  },
];
