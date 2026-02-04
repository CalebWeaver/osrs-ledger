# Module: Evaluation & Pricing

## Responsibility
Calculating the profitability of methods based on real-time prices and user stats.

## Components
- **`src/lib/evaluator.ts`**: Core logic.
  - Function `evaluateMethod(method, prices, stats)` -> `MethodEvaluation`.
  - Checks requirements (Skills).
  - Calculates: Profit/hr, Profit/action, ROI.
- **Price Fetching** (in `page.tsx`):
  - Fetches from OSRS Wiki API (`https://prices.runescape.wiki/api/v1/osrs/latest`).
  - Maps API response to `PriceMap`.

## GE Tax
Output revenue calculations include the 2% GE tax (capped at 5M GP per transaction) deducted from items sold on the Grand Exchange. Coins (item ID 995) are exempt since they are not sold. Certain other items are also exempt (bonds, energy potions, low-level combat consumables, low-level food, teleport items, and tools). Tax calculation and exemption list are in `src/lib/geTax.ts`.

## Current State
- ✅ Basic profit calculation (Revenue - Cost - Tax).
- ✅ Requirement checking (Level vs Method Requirement).
- ✅ GE tax applied to output revenues.
- ⚠️ Price fetching is per-request (no robust caching layer yet).
