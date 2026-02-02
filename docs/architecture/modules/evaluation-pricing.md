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

## Current State
- ✅ Basic profit calculation (Revenue - Cost).
- ✅ Requirement checking (Level vs Method Requirement).
- ⚠️ Price fetching is per-request (no robust caching layer yet).
