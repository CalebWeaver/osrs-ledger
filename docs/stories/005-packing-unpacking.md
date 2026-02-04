# Story 005: Packing & Unpacking Recipes

**Status**: Planning

## User Story
**As a** player looking for quick GE margins
**I want to** see profitable pack/unpack opportunities for runes, bolts, and other stackables
**So that** I can profit from price differences between packed and unpacked items.

## Background
Several items can be exchanged between "pack" form and individual items:
- **Rune packs** (magic shop) - 100 runes per pack
- **Bolt packs** (crossbow shops) - 100 bolts per pack
- **Seed packs** (Seed vault) - Variable seeds
- **Feather packs** - 100 feathers per pack

## Key Considerations

### Pack Sources & Mechanics

**Rune Packs** (Aubury's shop, other magic shops)
- Contain 100 runes each
- Available: Air, Water, Earth, Fire, Mind, Chaos, Death, Blood, etc.
- Shop stock refreshes slowly
- Can buy from GE and unpack, or pack runes and sell

**Bolt Packs** (Crossbow shops)
- Contain 100 bolts each
- Available: Bronze through Runite (untipped)
- Similar shop mechanics

**Feather Packs**
- 100 feathers per pack
- High volume item

### GE Buy Limits
| Item Type | Pack Limit | Individual Limit |
|-----------|------------|------------------|
| Rune packs | 100/4hr | 20,000-25,000/4hr |
| Bolt packs | 100/4hr | 7,000-11,000/4hr |
| Feather pack | 100/4hr | 13,000/4hr |

The **pack is always the bottleneck** (100/4hr = 10,000 items/4hr max).

### Realistic Throughput
**Unpacking** (pack → items):
- Buy packs from GE or shop
- Click to unpack (instant, but requires inventory space)
- ~200-300 packs/hr if buying from shop and unpacking
- GE-only: Limited by 100 packs/4hr = 25/hr average

**Packing** (items → pack):
- Not possible for most items (packs are one-way)
- Seed packs are exception (can deposit seeds at Seed vault)

### Profit Calculation
```
Unpack profit = (item_price × 100) - pack_price
Pack profit = pack_price - (item_price × 100)  // If packable
```

## Data Requirements

### Rune Packs
| Pack Name | Pack ID | Rune ID | Runes/Pack |
|-----------|---------|---------|------------|
| Air rune pack | 12728 | 556 | 100 |
| Water rune pack | 12730 | 555 | 100 |
| Earth rune pack | 12732 | 557 | 100 |
| Fire rune pack | 12734 | 554 | 100 |
| Mind rune pack | 12736 | 558 | 100 |
| Chaos rune pack | 12738 | 562 | 100 |
| Death rune pack | TBD | 560 | 100 |
| Blood rune pack | TBD | 565 | 100 |

### Bolt Packs
| Pack Name | Pack ID | Bolt ID | Bolts/Pack |
|-----------|---------|---------|------------|
| Bronze bolts pack | TBD | 877 | 100 |
| Iron bolts pack | TBD | 9140 | 100 |
| Steel bolts pack | TBD | 9141 | 100 |
| Mithril bolts pack | TBD | 9142 | 100 |
| Adamant bolts pack | TBD | 9143 | 100 |
| Runite bolts pack | TBD | 9144 | 100 |

### Other Packs
| Pack Name | Pack ID | Item ID | Items/Pack |
|-----------|---------|---------|------------|
| Feather pack | 11881 | 314 | 100 |
| Bait pack | TBD | 313 | 100 |
| Bird snare pack | TBD | 10006 | 100 |
| Box trap pack | TBD | 10008 | 20 |

## UI/UX Considerations

### Display Columns
| Column | Description |
|--------|-------------|
| Recipe | Pack name + direction |
| Pack Price | GE price of pack |
| Item Price | Price × quantity |
| Profit | Per pack profit |
| Limit/4hr | Pack buy limit |
| Max Profit/4hr | Profit × limit |

### Sorting & Filtering
- Sort by: Profit per pack, Max profit/4hr
- Filter: Runes only, Bolts only, Other
- Filter: Hide unprofitable

## Implementation Approach

### Data Structure
```ts
interface PackRecipe {
  id: string;
  name: string;
  packItemId: number;
  contentItemId: number;
  quantity: number;        // Items per pack (usually 100)
  buyLimit: number;        // Pack buy limit (usually 100)
  reversible: boolean;     // Can items be re-packed?
  members: boolean;
}
```

### Evaluation
For each pack:
1. Calculate unpack profit: `(content_price × quantity) - pack_price`
2. If reversible, calculate pack profit: `pack_price - (content_price × quantity)`
3. Apply buy limits for max hourly/4hr profit

### Data File
Create `src/data/packs.ts` with pack definitions.

## Open Questions
- Include shop-buying strategies (restocking rune shops)?
- How to handle packs only available from shops (not GE)?
- Should we track shop restock rates for shop-to-GE flipping?
- Include non-standard packs (Amylase pack, Supply crate, etc.)?

## Acceptance Criteria
- [ ] Define data structure for pack recipes
- [ ] Add all standard rune packs (Air through Blood)
- [ ] Add all bolt packs (Bronze through Runite)
- [ ] Add utility packs (Feather, Bait, Traps)
- [ ] Calculate profit for unpacking each type
- [ ] Display in sortable table with profit metrics
- [ ] Account for GE buy limits
- [ ] Filter by category (runes/bolts/other)
