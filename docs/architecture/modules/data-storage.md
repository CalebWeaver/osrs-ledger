# Module: Data Storage

## Responsibility
Stores the static definitions of OSRS money-making methods.

## Components
- **`src/data/methods.ts`**: The central registry that combines all method arrays into a single exported `methods` array.
- **`src/data/fletching.ts`**: Fletching-specific methods (bolt tipping). Exports `fletchingMethods`.
- **`src/lib/types.ts`**: Defines the `Method`, `Skill`, `Requirement`, `ItemAmount`, and `ExpGain` types.

## Current State
- 35 methods across 3 categories: Fletching (24), Magic (4), Crafting (7).
- Fletching methods are split into their own file; Magic and Crafting methods are inline in `methods.ts`.
- No database integration (file-based).

## Method Schema

Each method is a `Method` object with these fields:

| Field            | Type             | Description                                         |
|------------------|------------------|-----------------------------------------------------|
| `id`             | `string`         | Unique slug, e.g. `'fletch-opal-bolts'`             |
| `name`           | `string`         | Display name                                        |
| `category`       | `Skill`          | One of the 23 OSRS skills                           |
| `requirements`   | `Requirement[]`  | Skill level requirements                            |
| `inputs`         | `ItemAmount[]`   | GE item IDs + quantities consumed per action        |
| `outputs`        | `ItemAmount[]`   | GE item IDs + quantities produced per action        |
| `exp`            | `ExpGain[]`      | XP awarded per action (can span multiple skills)    |
| `ticksPerAction` | `number`         | Game ticks per action (6000 ticks = 1 hour)         |
| `notes`          | `string?`        | Optional notes                                      |

Items with `count: 0` represent tools that are required but not consumed (e.g. ring mould).

## Adding a New Method Category

Follow the pattern established by `fletching.ts`:

1. **Create `src/data/<skillname>.ts`** exporting a named array:
   ```ts
   import { Method } from '@/lib/types';

   export const <skillname>Methods: Method[] = [
     {
       id: '<category>-<item>',
       name: 'Method Name',
       category: '<Skill>',
       requirements: [{ skill: '<Skill>', level: 1 }],
       inputs: [{ id: 123, count: 1 }],
       outputs: [{ id: 456, count: 1 }],
       exp: [{ skill: '<Skill>', amount: 10 }],
       ticksPerAction: 4,
     },
   ];
   ```

2. **Import and spread into `src/data/methods.ts`**:
   ```ts
   import { <skillname>Methods } from './<skillname>';

   export const methods: Method[] = [
     ...fletchingMethods,
     ...<skillname>Methods,
   ];
   ```

3. **Add item names** to the `ITEM_NAMES` map in `src/lib/evaluator.ts` for any new item IDs so they display correctly in the UI.

### Notes
- Item IDs must match OSRS Grand Exchange IDs.
- The inline Magic and Crafting methods in `methods.ts` should eventually be extracted into their own files (`magic.ts`, `crafting.ts`) for consistency.
- `category` is typed as `Skill`, so only the 23 OSRS skills are valid categories. Non-skill activities (e.g. Clue Scrolls) would require extending the type.
