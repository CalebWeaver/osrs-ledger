import { Method, MethodEvaluation, PlayerModifiers, PriceMap, Requirement, Skill } from './types';
import { ITEM_NAMES } from './itemNames';
import { calculateGeTax } from './geTax';
export { ITEM_NAMES } from './itemNames';

export function calculateMethodCost(method: Method, prices: PriceMap): { costPerAction: number, inputCosts: { name: string; id: number; price: number; count: number; total: number }[] } {
  let costPerAction = 0;
  const inputCosts = method.inputs.map((input) => {
    const priceData = prices[input.id];
    // Use 'avgHighPrice' (24h buy avg) if available, else 'high' (latest buy instabuy)
    const price = priceData?.avgHighPrice ?? priceData?.high ?? 0;
    const total = price * input.count;
    costPerAction += total;
    return {
      name: ITEM_NAMES[input.id] || `Item ${input.id}`,
      id: input.id,
      price,
      count: input.count,
      total,
    };
  });

  return { costPerAction, inputCosts };
}

export function evaluateMethod(
  method: Method,
  prices: PriceMap,
  playerStats: Record<Skill, number>,
  completedQuests?: Set<string>,
  modifiers?: PlayerModifiers
): MethodEvaluation {
  // 1. Check Requirements
  const missingRequirements: Requirement[] = [];
  let isLocked = false;

  for (const req of method.requirements) {
    const playerLevel = playerStats[req.skill] || 0;
    if (playerLevel < req.level) {
      missingRequirements.push(req);
      isLocked = true;
    }
  }

  // 1b. Check Quest Requirements
  const missingQuests: string[] = [];
  if (method.quests) {
    for (const quest of method.quests) {
      if (!completedQuests || !completedQuests.has(quest)) {
        missingQuests.push(quest);
        isLocked = true;
      }
    }
  }

  // 2. Calculate Costs
  const { costPerAction, inputCosts } = calculateMethodCost(method, prices);

  // 3. Calculate Success Rate
  // OSRS uses 8-bit integer rolls (0–255) for skill success checks.
  // low/high are the success thresholds at levels 1 and 99, linearly interpolated.
  const successRate = method.successRate
    ? (() => {
        const { skill, low, high } = method.successRate;
        const level = playerStats[skill] || 1;
        return Math.min((low + (high - low) * (level - 1) / 98) / 256, 1);
      })()
    : undefined;
  const successMultiplier = successRate ?? 1;

  // 4. Calculate Revenue (scaled by success rate, minus GE tax)
  const lootMultiplier = (method.category === 'Thieving' && modifiers?.roguesOutfit) ? 2 : 1;
  let revenuePerAction = 0;
  const outputRevenues = method.outputs.map((output) => {
    const priceData = prices[output.id];
    // Coins are always worth 1 gp each and aren't sold on GE (no tax)
    // Use 'avgLowPrice' (24h sell avg) if available, else 'low' (latest sell instasell)
    const isCoins = output.id === 995;
    const price = isCoins ? 1 : (priceData?.avgLowPrice ?? priceData?.low ?? 0);
    const effectiveCount = output.count * successMultiplier * lootMultiplier;
    const grossTotal = price * effectiveCount;
    // Apply GE tax to items sold on GE (not coins, checks exemption list)
    const tax = isCoins ? 0 : calculateGeTax(grossTotal, output.id);
    const total = grossTotal - tax;
    revenuePerAction += total;
    const volume = (priceData?.highPriceVolume ?? 0) + (priceData?.lowPriceVolume ?? 0);
    return {
      name: ITEM_NAMES[output.id] || `Item ${output.id}`,
      id: output.id,
      price,
      count: effectiveCount,
      total,
      volume,
    };
  });

  // 5. Profit
  const profitPerAction = revenuePerAction - costPerAction;
  const stunPenalty = (method.stunTicks && successRate !== undefined) ? method.stunTicks * (1 - successRate) : 0;
  const effectiveTicksPerAction = method.ticksPerAction + (method.bankTimePerAction ?? 0) + stunPenalty;
  const actionsPerHour = 6000 / effectiveTicksPerAction;
  const profitPerHour = profitPerAction * actionsPerHour;

  const expPerHour = method.exp.map(exp => ({
    skill: exp.skill,
    amount: Math.floor(exp.amount * successMultiplier * actionsPerHour),
  }));
  const totalExpPerHour = expPerHour.reduce((sum, e) => sum + e.amount, 0);

  return {
    methodId: method.id,
    methodName: method.name,
    isLocked,
    missingRequirements,
    missingQuests,
    costPerAction,
    revenuePerAction,
    profitPerAction,
    profitPerHour,
    inputCosts,
    outputRevenues,
    expPerHour,
    totalExpPerHour,
    actionsPerHour,
    successRate,
  };
}
