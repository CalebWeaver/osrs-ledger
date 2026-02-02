# Architecture Overview

## System Context
The **OSRS Money Maker** is a client-side Next.js application that evaluates Old School RuneScape money-making methods based on real-time Grand Exchange prices.

## Data Flow
1.  **Price Fetching**: `page.tsx` fetches prices from the OSRS Wiki API and passes them to the client.
2.  **State Management**: `ClientPage.tsx` holds the user's calibration state (Levels, Filters).
3.  **Evaluation**: `evaluator.ts` combines static method data (`methods.ts`) with dynamic prices and user stats to produce a `MethodEvaluation`.
4.  **Presentation**: `MethodCard.tsx` renders the evaluation, handling "Locked" vs "Unlocked" states.

## Key Components

### Data Models
- **Method**: Static definition of a money-making activity (inputs, outputs, requirements).
- **PriceMap**: Map of Item ID -> GE Price Data.
- **MethodEvaluation**: The computed result containing profit margins and status (locked/unlocked).

### UI Hierarcy
- `Home` (Server Component) -> Fetches Prices
  - `ClientPage` (Client Component) -> Manages `magicLevel`, `showUnavailable`
    - `MethodCard` (Component) -> Displays individual method details
