# Story 004: Potion Decanting Recipes

**Status**: Planning

## User Story
**As a** player looking for passive GE profit
**I want to** see profitable potion decanting opportunities
**So that** I can profit from price inefficiencies between different dose sizes.

## Background
Players can decant potions between dose sizes:
- **Bob Barter** (Grand Exchange) - Decants noted potions to any size for **free**. Defaults to 4-dose; bring empty vials to decant down to smaller doses.
- **Zahur** (Nardah) - Also decants noted potions but charges 200gp/potion output
- **Manual** - Players can manually combine/split doses

Since Bob Barter is free and handles noted potions, throughput is limited only by GE buy limits, not time or fees.

## Key Considerations

### Price Per Dose Analysis
The core insight: different dose sizes often have different price-per-dose values.

```
price_per_dose = item_price / doses
profit_per_dose = sell_price_per_dose - buy_price_per_dose
```

**Example**: Prayer potion
- (4) = 8,000gp → 2,000gp/dose
- (3) = 5,500gp → 1,833gp/dose  ← Cheaper per dose
- (2) = 4,000gp → 2,000gp/dose
- (1) = 2,500gp → 2,500gp/dose  ← Most expensive per dose

Buy (3), decant to (1), sell = profit.

### GE Buy Limits
Most potions have limits of 2,000/4hr per size variant:
- 2,000 × (1) = 2,000 doses/4hr
- 2,000 × (4) = 8,000 doses/4hr

**Limit matters for total profit**, not GP/hr since decanting is instant.

### Decanting Cost
- **Bob Barter** (any size, noted): **Free** — bring empty vials to decant down to smaller doses
- **Zahur** (any size, noted): 200gp per potion output (no reason to use over Bob)

Bob Barter is the clear choice. The only cost is empty vials when decanting down.

**Vial cost**: Decanting 4→1 doses requires 3 empty vials per potion. Vials are ~5gp each, negligible.

## Data Requirements

### Potions to Track (Priority)

**High Volume/Value**
- Prayer potion
- Super restore
- Saradomin brew
- Ranging potion
- Super combat potion
- Sanfew serum
- Stamina potion
- Anti-venom+

**Combat Potions**
- Super attack, strength, defence
- Divine potions (super combat, ranging, etc.)
- Bastion potion, Battlemage potion

**Utility Potions**
- Antifire, Extended antifire, Super antifire
- Antidote++
- Energy potion, Super energy

### Item ID Pattern
Each potion needs 4 item IDs (doses 1-4).

## UI/UX Considerations

### Display Format
Two possible views:

**Option A: Per-Potion View**
| Potion | (1) Price | (2) Price | (3) Price | (4) Price | Best Buy | Best Sell | Profit/dose |
|--------|-----------|-----------|-----------|-----------|----------|-----------|-------------|

**Option B: Recipe View**
| Recipe | Buy | Sell | Profit/dose | Doses/4hr | Max Profit/4hr |
|--------|-----|------|-------------|-----------|----------------|
| Prayer (3)→(1) | 3-dose | 1-dose | 167gp | 6,000 | 1M |

### Key Metrics
- **Price per dose** for each size
- **Optimal path**: Which size to buy, which to sell
- **Profit per dose**
- **Max profit per 4hr** (accounting for GE limits)

### Sorting & Filtering
- Sort by: Profit/dose, Max profit/4hr
- Filter: Hide unprofitable
- Filter: Show specific potions

## Implementation Approach

### Data Structure
```ts
interface PotionSet {
  id: string;
  name: string;           // e.g., "Prayer potion"
  doses: {
    1: number;            // Item ID for (1)
    2: number;            // Item ID for (2)
    3: number;            // Item ID for (3)
    4: number;            // Item ID for (4)
  };
  buyLimit: number;       // Per dose size (usually 2000)
  members: boolean;
}
```

### Evaluation
For each potion:
1. Calculate price/dose for each size
2. Find cheapest buy (lowest price/dose)
3. Find best sell (highest price/dose)
4. Calculate profit/dose and max 4hr profit

### Data File
Create `src/data/potions.ts` with potion definitions.

## Open Questions
- Show all permutations (1→4, 2→4, 3→4, etc.) or just optimal path?
- How to handle potions without all 4 doses (e.g., Antipoison has 3-dose only)?
- Include combination potions (Super combat = Super attack + strength + defence + torstol)?
- Real-time price per dose comparison chart?

## Acceptance Criteria
- [ ] Define data structure for potion dose sets
- [ ] Add at least 30 potion types with all dose variants
- [ ] Calculate price per dose for each size
- [ ] Identify optimal buy/sell dose for each potion
- [ ] Calculate profit per dose and max profit per 4hr
- [ ] Display in sortable table
- [ ] Account for empty vial cost when decanting down
- [ ] Filter by profitability threshold
