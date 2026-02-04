# Module: Trading Tools

## Responsibility
Standalone GE trading analysis tools that operate on raw price data rather than method evaluations. These tabs help players identify profitable items for flipping and high alchemy.

## Components

### High Alch Tab
- **`src/components/HighAlchTab.tsx`**: Analyzes all tradeable items for high alchemy profit.
  - Calculates: `profit = alchValue - buyPrice - natureRunePrice`
  - Uses 24h average prices (`avgHighPrice`) for stable profit estimates
  - Column-integrated filters via popover UI (click filter icon on header)
  - Filters: search, show unprofitable, max buy price, min profit/alch, min profit/hr, min buy limit, max 4hr cost, min 4hr profit
  - Sortable columns: Item, Alch Value, Buy Price, Profit/Alch, Profit/Hr, Buy Limit, 4hr Cost, 4hr Profit

### Flipping Tab
- **`src/components/FlippingTab.tsx`**: Analyzes GE margins for flip trading.
  - Uses instant prices (`high`/`low`) for real-time spread analysis
  - Calculates: `margin = sellPrice (high) - buyPrice (low)`, `ROI = margin / buyPrice * 100`
  - Column-integrated filters via popover UI (click filter icon on header)
  - Filters: search, show unprofitable, max buy price, min margin, min ROI %, min volume, min buy limit, max 4hr cost, min 4hr profit
  - Sortable columns: Item, Buy Price, Sell Price, Margin, ROI %, Volume, Buy Limit, 4hr Cost, 4hr Profit

## Data Sources
Both tabs receive `prices: PriceMap` and `mapping: ItemMapping[]` from the server component via `ClientPage`.

- **PriceMap**: Real-time and 24h average prices from OSRS Wiki API
- **ItemMapping**: Item metadata (name, high alch value, GE buy limit, members status)

## Pricing Strategy

| Tab | Buy Price Source | Sell Price Source | Rationale |
|-----|------------------|-------------------|-----------|
| High Alch | `avgHighPrice` (24h avg) | N/A (alch value is fixed) | Stable estimates for bulk buying |
| Flipping | `low` (instant) | `high` (instant) | Current market spread for active trading |

## GE Tax

Flipping margins include the 2% GE tax (capped at 5M GP per transaction) deducted from the sell side. Certain items are exempt (bonds, energy potions, low-level combat consumables, low-level food, teleport items, and tools). High Alch is not affected since items are consumed, not sold. The tax calculation and exemption list are in `src/lib/geTax.ts`.

## State Persistence
Each tab persists its filter/sort state to localStorage:
- High Alch: `osrs-ledger-alch-filters`
- Flipping: `osrs-ledger-flip-filters`

## Current State
- ✅ High Alch tab with profit calculations and filtering
- ✅ Flipping tab with margin/ROI analysis
- ✅ Column-header filter popovers (Flipping tab)
- ✅ LocalStorage persistence for both tabs
