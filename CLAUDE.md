# OSRS Ledger

Client-side Next.js app that evaluates Old School RuneScape money-making methods using real-time Grand Exchange prices from the OSRS Wiki API.

## Commands

- `npm run dev` - Local dev server
- `npm run build` - Production build
- `npm run lint` - ESLint
- `npm test` - Vitest (validates item IDs against live wiki data)

## Architecture

**Server component** (`src/app/page.tsx`) fetches prices, passes them to **client component** (`src/components/ClientPage.tsx`) which manages all interactive state (skill levels, filters, quests, chains). The **evaluator** (`src/lib/evaluator.ts`) combines static method definitions with dynamic prices and player stats to produce `MethodEvaluation` results. **MethodCard** renders each evaluation.

### Key files

| Path | Purpose |
|------|---------|
| `src/lib/types.ts` | Core types: `Method`, `PriceMap`, `MethodEvaluation`, `Skill` |
| `src/lib/evaluator.ts` | Profit calculation engine (cost, revenue, actions/hr, XP/hr) |
| `src/lib/itemNames.ts` | Item ID to display name mapping (~537 items) |
| `src/lib/price-service.ts` | Fetches from Wiki API with 5-min cache |
| `src/lib/hiscores.ts` | Player stats lookup via hiscores API |
| `src/data/methods.ts` | Central method registry, imports from skill-specific files |
| `src/data/{skill}.ts` | Method definitions per skill (crafting, magic, smithing, fletching, herblore, cooking, runecraft) |
| `src/components/ClientPage.tsx` | Main app state container (levels, filters, sorting, chains) |
| `src/components/MethodCard.tsx` | Method display with expandable detail view |
| `src/components/CraftingChain.tsx` | Multi-step production chain UI |
| `src/app/api/hiscores/route.ts` | Server-side proxy to RuneScape hiscores API |

## Data model

A **Method** defines an activity: inputs (items consumed), outputs (items produced), requirements (skill levels, quests), tick timing, and optional success rate formula. The evaluator prices inputs at buy prices (`avgHighPrice`) and outputs at sell prices (`avgLowPrice`), computes actions/hour from game ticks (6000 ticks/hr), and derives profit/hr and XP/hr.

### Adding a new method

1. Add item IDs to `src/lib/itemNames.ts` if not already present
2. Define the method in the appropriate `src/data/{skill}.ts` file following the `Method` interface
3. Export it and add to the array in `src/data/methods.ts`
4. Run `npm test` to validate item IDs match the wiki

## Conventions

- **Method IDs**: kebab-case (e.g. `craft-gold-ring`, `magic-superheat-iron`)
- **Import aliases**: `@/lib/*`, `@/data/*`, `@/components/*`
- **Component files**: PascalCase `.tsx`
- **State persistence**: LocalStorage under key `osrs-ledger-settings`
- **Pricing**: Prefer 24h averages over instant prices; buy prices for inputs, sell prices for outputs
- **Game math**: 1 game tick = 0.6s, actions/hr = 6000 / (ticksPerAction + bankTimePerAction)

## Documentation

- `docs/methods.md` — Comprehensive catalog of all money-making methods organized by skill
- `docs/architecture/` — System architecture and module docs
- `docs/stories/` — Feature implementation stories

## Stack

Next.js 16, React 19, TypeScript 5, Vitest, deployed on Vercel.
