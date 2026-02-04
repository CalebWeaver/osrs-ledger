/**
 * Grand Exchange tax calculation.
 * Tax is 2% of sale value, capped at 5M GP per transaction.
 * Certain items are exempt from the tax.
 */

const TAX_RATE = 0.02;
const TAX_CAP = 5_000_000;

/**
 * Items exempt from GE tax.
 * Includes: bonds, energy potions, low-level combat consumables,
 * low-level food, teleport items, and tools.
 */
const TAX_EXEMPT_ITEMS = new Set([
  // Old school bond
  13190,

  // Energy potions (all doses)
  3010, 3012, 3014, 3016,

  // Low level combat consumables
  882,   // Bronze arrow
  806,   // Bronze dart
  884,   // Iron arrow
  807,   // Iron dart
  558,   // Mind rune
  886,   // Steel arrow
  808,   // Steel dart

  // Low level food
  365,   // Bass
  2309,  // Bread
  1891,  // Cake
  2140,  // Cooked chicken
  2142,  // Cooked meat
  347,   // Herring
  379,   // Lobster
  355,   // Mackerel
  2327,  // Meat pie
  351,   // Pike
  329,   // Salmon
  315,   // Shrimps
  361,   // Tuna

  // Teleport items
  8011,  // Ardougne teleport
  8010,  // Camelot teleport
  29335, // Civitas illa fortis teleport
  8009,  // Falador teleport
  3853,  // Games necklace(8)
  21557, // Kourend castle teleport
  8008,  // Lumbridge teleport
  2552,  // Ring of dueling(8)
  8013,  // Teleport to house
  8007,  // Varrock teleport

  // Tools
  1755,  // Chisel
  5325,  // Gardening trowel
  1785,  // Glassblowing pipe
  2347,  // Hammer
  1733,  // Needle
  233,   // Pestle and mortar
  5341,  // Rake
  8794,  // Saw
  5329,  // Secateurs
  5343,  // Seed dibber
  1735,  // Shears
  952,   // Spade
  5331,  // Watering can (empty)
  5333, 5334, 5335, 5336, 5337, 5338, 5339, 5340, // Watering can (1-8)
]);

/**
 * Check if an item is exempt from GE tax.
 * @param itemId - The item ID to check
 * @returns true if exempt from tax
 */
export function isGeTaxExempt(itemId: number): boolean {
  return TAX_EXEMPT_ITEMS.has(itemId);
}

/**
 * Calculate GE tax for a sale.
 * @param saleValue - Total value of the sale (price × quantity)
 * @param itemId - Optional item ID to check for exemption
 * @returns Tax amount to be deducted (0 if exempt)
 */
export function calculateGeTax(saleValue: number, itemId?: number): number {
  if (itemId !== undefined && isGeTaxExempt(itemId)) {
    return 0;
  }
  return Math.min(saleValue * TAX_RATE, TAX_CAP);
}

/**
 * Calculate net revenue after GE tax.
 * @param saleValue - Total value of the sale (price × quantity)
 * @param itemId - Optional item ID to check for exemption
 * @returns Net revenue after tax deduction
 */
export function calculateNetRevenue(saleValue: number, itemId?: number): number {
  return saleValue - calculateGeTax(saleValue, itemId);
}
