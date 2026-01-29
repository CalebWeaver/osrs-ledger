# OSRS Money Maker MVP

A Next.js application that recommends OSRS money-making methods based on real-time GE prices and user stats.

## Features
- **Real-time Prices**: Fetches live prices from the OSRS Wiki API (cached for 5 minutes).
- **Profit Calculation**: computes profit/hour dynamically using **24h Volume-Weighted Average** prices for stability.
- **Requirement Checking**: marks methods as "Locked" if stats are insufficient.
- **Breakdown**: Detailed view of input costs and output revenues.

## core Architecture
- `src/lib/types.ts`: Core definitions (`Method`, `Requirement`, `PriceMap`).
- `src/data/methods.ts`: The registry of available methods.
- `src/lib/evaluator.ts`: Logic to calculate profit and check requirements.
- `src/lib/price-service.ts`: Fetches and caches Wiki prices (switched to `/24h` endpoint).

## How to Add a New Method
1. Open `src/data/methods.ts`.
2. Add a new object to the `methods` array.
3. Define the IDs for inputs and outputs (find IDs on OSRS Wiki or similar).
4. Example:
   ```typescript
   {
     id: 'high-alch-yew-long',
     name: 'High Alch Yew Longbow',
     category: 'Magic',
     requirements: [{ skill: 'Magic', level: 55 }],
     inputs: [
       { id: 561, count: 1 }, // Nature rune
       { id: 855, count: 1 }  // Yew longbow
     ],
     outputs: [
       { id: 995, count: 768 } // Coins (High Alch value)
     ],
     exp: [{ skill: 'Magic', amount: 65 }],
     actionsPerHour: 1200,
   }
   ```
5. The app will automatically fetch prices for these new IDs and render the method card.

## Running Locally
```bash
npm run dev
# Open http://localhost:3000
```
