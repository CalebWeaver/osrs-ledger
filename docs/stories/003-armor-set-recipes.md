# Story 003: Armor Set Recipes

**Status**: Planning

## User Story
**As a** player looking for low-effort profit
**I want to** see profitable armor set making/breaking opportunities
**So that** I can profit from GE price inefficiencies between sets and individual pieces.

## Background
The Grand Exchange allows players to exchange armor sets (boxed) for individual pieces and vice versa via the GE Clerk. This is instant and free, but profit is limited by GE buy/sell limits.

## Key Considerations

### GE Buy Limits
Each item has a 4-hour buy limit. For armor sets:
- Most armor sets: 8/4hr
- Individual pieces: varies (typically 70-125/4hr for armor)

The bottleneck is usually the **set box** (8/4hr = 2/hr average).

### Realistic Actions Per Hour
The actual process:
1. Buy set OR pieces on GE
2. Walk to GE clerk (or use right-click on set)
3. Exchange (instant)
4. Sell components OR set on GE

**Time per exchange**: ~10-15 seconds including GE interaction
**GE limit bottleneck**: 2 sets/hour sustained

### Profit Calculation
```
Making set:   profit = set_price - (helm + body + legs + shield/weapon)
Breaking set: profit = (helm + body + legs + shield/weapon) - set_price
```

## Data Requirements

### Item IDs Needed
For each set, we need IDs for:
- The set box item
- Each individual component (typically 4 pieces)

### Sets to Include (Priority)

**High Value (Barrows, God)**
- Dharok's, Guthan's, Verac's, Torag's, Karil's, Ahrim's
- Bandos, Armadyl, Ancestral
- Justiciar, Inquisitor

**God Armor (Treasure Trail)**
- Saradomin, Zamorak, Guthix, Armadyl, Bandos, Ancient
- (lg) and (sk) variants

**Trimmed Sets**
- Bronze through Rune (t), (g), gold-trimmed variants

**Standard Sets**
- Bronze through Dragon (lg) and (sk)

## UI/UX Considerations

### Display Columns
| Column | Description |
|--------|-------------|
| Recipe | Set name + direction (Making/Breaking) |
| Inputs | Set OR pieces (with icons) |
| Outputs | Pieces OR set |
| Input Cost | Total buy price |
| Profit | Output value - Input cost |
| ROI | Profit / Input Cost as % |
| Limit/hr | Effective hourly limit (usually 2) |
| GP/hr | Profit × Limit/hr |

### Sorting & Filtering
- Sort by: Profit, ROI, GP/hr
- Filter: Show making only, breaking only, or both
- Filter: Hide negative profit
- Filter: Members/F2P

## Implementation Approach

### New Data Structure
```ts
interface ArmorSetRecipe {
  id: string;
  name: string;
  setItemId: number;
  components: { id: number; count: number }[];
  members: boolean;
  buyLimit: number; // 4hr limit for set box
}
```

### Evaluation
Generate two "virtual methods" per set:
1. Making: inputs=components, outputs=set
2. Breaking: inputs=set, outputs=components

### Data File
Create `src/data/armor-sets.ts` with set definitions.

## Open Questions
- Should we show both directions for every set, or only profitable ones?
- How to handle sets with variable components (e.g., weapon + shield vs 2h)?
- Include cosmetic/ornament kit combinations?
- How to source the full list of sets efficiently (wiki scrape vs manual)?

## Acceptance Criteria
- [ ] Define data structure for armor set recipes
- [ ] Add at least 50 armor sets (Barrows, God, Trimmed, Standard)
- [ ] Calculate profit for making and breaking each set
- [ ] Display in a sortable table with profit, ROI, GP/hr
- [ ] Account for GE buy limits in GP/hr calculation
- [ ] Filter by making/breaking direction
- [ ] Filter by members/F2P
