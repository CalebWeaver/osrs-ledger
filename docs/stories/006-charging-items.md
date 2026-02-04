# Story 006: Charging Items Recipes

**Status**: Planning

## User Story
**As a** player looking for active money-making methods
**I want to** see the profit from charging magical weapons and equipment
**So that** I can evaluate whether charging items is worth my time.

## Background
Several high-end weapons must be charged with runes, scales, or other resources before use. These are traded on the GE in both uncharged and charged states, creating a service-based money-making opportunity.

## Key Considerations

### Charging Mechanics
Unlike armor sets or decanting, charging items **takes real time**:
- Requires resources (runes, scales, shards, etc.)
- Often requires specific locations or interfaces
- Some have high resource costs per charge

### Items That Can Be Charged

**Trident-style Weapons**
| Item | Charges | Resources per Charge | Charge Action |
|------|---------|---------------------|---------------|
| Trident of the seas | 2,500 | 1 death, 1 chaos, 5 fire, 10 coins | Use runes on trident |
| Trident of the swamp | 2,500 | 1 death, 1 chaos, 5 fire, 1 zulrah scale | Use runes on trident |
| Sanguinesti staff | 20,000 | 3 blood runes | Use blood runes on staff |
| Tumeken's shadow | 20,000 | 2 soul, 5 chaos | Use runes on shadow |

**Scythe of Vitur**
- 20,000 charges max
- 1 blood rune + 1 vial of blood per 100 charges
- 300 blood + 3 vials per 3,000 charges (typical recharge)

**Blade of Saeldor / Bow of Faerdhinen**
- Charged with crystal shards
- 20,000 charges = 1,000 shards (corrupted) or variable (normal)

**Serpentine Helm**
- 11,000 charges
- Zulrah's scales (1 scale = 1 charge)

**Toxic Blowpipe**
- 16,383 charges
- Zulrah's scales (2 scales = 3 charges)

**Other Chargeable Items**
- Ring of suffering (rings of recoil)
- Amulet of the damned (barrows loot)
- Tome of fire/water (burnt/soaked pages)
- Bryophyta's staff (nature runes)

### Time Per Charge

**Fast (Interface-based)**
- Tridents: ~1-2 seconds per charge cycle (use runes, fills incrementally)
- Sanguinesti: Similar, use blood runes
- Realistic: ~1,000-2,000 charges per minute

**Medium (Bulk charging)**
- Full charge of trident (2,500): ~2-3 minutes
- Full Sanguinesti (20,000): ~10-15 minutes

**Slow (Per-item charging)**
- Ring of suffering: Must use individual rings of recoil
- Tome of fire: Use pages one at a time or in stacks

### Profit Calculation
```
charge_cost = sum(resource_price × resource_count) for all charges
profit = charged_item_price - uncharged_item_price - charge_cost
gp_per_hour = profit × items_charged_per_hour
```

### GE Limits
- Uncharged weapons: Usually 8/4hr
- Charged weapons: Usually 8/4hr
- Resources: Varies (runes 20,000+, scales 11,000)

Bottleneck is usually the **weapon** (8/4hr = 2/hr).

## Data Requirements

### Item IDs Needed
For each chargeable item:
- Uncharged variant ID
- Charged variant ID (if different, or same ID tracks charges)
- Resource item IDs

| Item | Uncharged ID | Charged ID | Key Resource |
|------|--------------|------------|--------------|
| Trident of the seas | 11907 | 11905 | Death, Chaos, Fire |
| Trident of the swamp | 12899 | 12900 | + Zulrah scales |
| Sanguinesti staff | 22481 | 22323 | Blood runes |
| Scythe of vitur | 22486 | 22325 | Blood + Vials |
| Toxic blowpipe | 12924 | 12926 | Scales + darts |
| Serpentine helm | 12929 | 12931 | Scales |

## UI/UX Considerations

### Display Columns
| Column | Description |
|--------|-------------|
| Item | Weapon/equipment name |
| Uncharged | Buy price |
| Charged | Sell price |
| Charge Cost | Resource cost for full charge |
| Profit | Per item profit |
| Time/Item | Minutes to fully charge |
| GP/hr | Profit ÷ time |
| Limit | Weapons per 4hr |

### Key Metrics
Users care about:
1. **Profit per item** - Is it worth doing at all?
2. **GP/hr** - How does it compare to other methods?
3. **Capital required** - Uncharged items are expensive

### Sorting & Filtering
- Sort by: Profit, GP/hr
- Filter: Hide unprofitable
- Filter: By resource type (runes, scales, shards)

## Implementation Approach

### Data Structure
```ts
interface ChargeableItem {
  id: string;
  name: string;
  unchargedId: number;
  chargedId: number;
  maxCharges: number;
  resourcesPerCharge: { id: number; count: number }[];
  secondsToCharge: number;  // Time to fully charge one item
  buyLimit: number;
  members: boolean;
  notes?: string;
}
```

### Evaluation
For each item:
1. Calculate total charge cost: `maxCharges × sum(resource_price × count)`
2. Profit: `charged_price - uncharged_price - charge_cost`
3. GP/hr: `profit × (3600 / secondsToCharge)`

### Data File
Create `src/data/chargeable.ts` with item definitions.

## Open Questions
- How to handle partial charging (e.g., only adding 1,000 charges)?
- Include items with non-GE resources (crystal shards)?
- Should we show resource breakdown per charge?
- How to handle items that are same ID charged vs uncharged?
- Include "uncharging" (some items can be reverted)?

## Acceptance Criteria
- [ ] Define data structure for chargeable items
- [ ] Add major chargeable weapons (Tridents, Sang, Scythe)
- [ ] Add chargeable equipment (Serp helm, Blowpipe)
- [ ] Calculate charge cost from current resource prices
- [ ] Calculate profit and GP/hr based on charge time
- [ ] Display in sortable table with all relevant metrics
- [ ] Account for GE buy limits
- [ ] Show resource breakdown on item expansion
