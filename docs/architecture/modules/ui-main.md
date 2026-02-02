# Module: User Interface

## Responsibility
Presenting the evaluated methods to the user and handling user interaction (filtering, settings).

## Components
- **`src/app/page.tsx`**: Server component. Entry point. Fetches initial data (Prices).
- **`src/components/ClientPage.tsx`**: Client component. Manages application state (`magicLevel`, filters).
- **`src/components/MethodCard.tsx`**: Displays a single method's profit, requirements, and breakdown.
- **`src/components/AbbreviatedMethodCard.tsx`**: Compact view for crafting chains.
- **`src/components/CraftingChain.tsx`**: Container for managing the active production chain.
- **`src/components/ItemSourcePopup.tsx`**: Modal for selecting method sources.

## Current State
- ✅ Displays a list of cards.
- ✅ Handles "Locked" state logic visually.
- ✅ Supports filtering by Magic Level.
- ✅ Crafting Chain feature implemented.
