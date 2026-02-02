# Architecture Modules

Overview of the system modules that make up the OSRS Ledger application.

| Module | File | Description |
|--------|------|-------------|
| [Core Domain](core-domain.md) | `src/lib/types.ts` | Shared types and interfaces (`Method`, `Skill`, `ItemAmount`, `PriceMap`, `MethodEvaluation`) |
| [Data Storage](data-storage.md) | `src/data/` | Static method definitions (inputs, outputs, requirements, XP) |
| [Evaluation & Pricing](evaluation-pricing.md) | `src/lib/evaluator.ts`, `page.tsx` | Profit calculation and real-time GE price fetching |
| [User Interface](ui-main.md) | `src/app/`, `src/components/` | Method display, filtering, and crafting chain interaction |

## Data Flow

```
Data Storage  -->  Evaluation & Pricing  -->  User Interface
(methods)          (prices + profit calc)     (display + interaction)
                        ^
                        |
                   OSRS Wiki API
```

Core Domain types are shared across all modules.
