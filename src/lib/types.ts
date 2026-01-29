export type Skill =
  | 'Attack' | 'Strength' | 'Defence' | 'Ranged' | 'Prayer' | 'Magic' | 'Runecraft'
  | 'Construction' | 'Hitpoints' | 'Agility' | 'Herblore' | 'Thieving' | 'Crafting'
  | 'Fletching' | 'Slayer' | 'Hunter' | 'Mining' | 'Smithing' | 'Fishing' | 'Cooking'
  | 'Firemaking' | 'Woodcutting' | 'Farming';

export interface Requirement {
  skill: Skill;
  level: number;
}

export interface ItemAmount {
  id: number;
  count: number;
}

export interface ExpGain {
  skill: Skill;
  amount: number;
}

export interface Method {
  id: string;
  name: string;
  category: Skill;
  requirements: Requirement[];
  inputs: ItemAmount[];
  outputs: ItemAmount[];
  exp: ExpGain[];
  ticksPerAction: number;
  bankTimePerAction?: number; // Extra ticks per action for banking overhead (travel, banking, etc.)
  notes?: string;
  quests?: string[];
}

export interface PriceData {
  high: number;
  highTime: number;
  low: number;
  lowTime: number;
  avgHighPrice?: number; // 24h average high (buy)
  avgLowPrice?: number;  // 24h average low (sell)
  highPriceVolume?: number;
  lowPriceVolume?: number;
}

export type PriceMap = Record<number, PriceData>;

export interface MethodEvaluation {
  methodId: string;
  methodName: string;
  isLocked: boolean;
  missingRequirements: Requirement[];
  missingQuests: string[];
  costPerAction: number;
  revenuePerAction: number;
  profitPerAction: number;
  profitPerHour: number;
  inputCosts: { name: string; id: number; price: number; count: number; total: number }[];
  outputRevenues: { name: string; id: number; price: number; count: number; total: number; volume: number }[];
  expPerHour: { skill: Skill; amount: number }[];
  totalExpPerHour: number;
  actionsPerHour: number;
}
