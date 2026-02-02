# Story 001: Crafting Chains

**Status**: Done

## User Story
**As a** generic OSRS player
**I want to** build a custom crafting chain by linking methods together
**So that** I can see the total profit and workflow for a multi-step process (e.g. making my own ingredients).

## Conceptual Flow
1.  **Start**: User sees a method they like (e.g. "Enchant Sapphire Ring") and clicks a **"Start Chain"** button on the card.
2.  **Chain View**:
    - An **Abbreviated Card** for this method appears at the top of the interface.
    - It shows the visual formula (Inputs -> Outputs) and current GP/hr.
3.  **Adding Steps**:
    - User clicks on an **Input Item** in the formula (e.g. "Cosmic Rune").
    - A **Popup** appears showing methods to obtain that item (e.g. "Runecraft Cosmic Runes").
    - User selects a method.
4.  **Chain Update**:
    - The selected method is added as a **Pre-step** to the chain.
    - The UI updates to show: `Step 1: Runecraft Cosmics` -> `Step 2: Enchant Rings`.

## Components Needed
- **Start Button**: On standard `MethodCard`.
- **CraftingChain**: Container for the active chain steps.
- **AbbreviatedMethodCard**: Smaller version of the method card for the chain view.
- **ItemSourcePopup**: Modal/Popover to select source methods.

## Open Questions
- Deep chaining support (recursion)?
- Quantity syncing (matching input needs to output production)?
- Visual layout of the chain (vertical list vs horizontal nodes)?
