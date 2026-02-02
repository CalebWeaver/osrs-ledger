import { describe, it, expect } from 'vitest';
import { ITEM_NAMES } from '@/lib/evaluator';
import { methods } from '@/data/methods';

interface WikiItem {
  id: number;
  name: string;
}

const wikiMapping: Promise<WikiItem[]> = fetch(
  'https://prices.runescape.wiki/api/v1/osrs/mapping',
  { headers: { 'User-Agent': 'osrs-ledger-tests' } },
).then((r) => r.json());

describe('ITEM_NAMES verification', () => {
  it('every ID in ITEM_NAMES exists on the wiki with a matching name', async () => {
    const items = await wikiMapping;
    const wikiById = new Map(items.map((i) => [i.id, i.name]));

    // IDs that aren't tradeable on the GE and won't appear in wiki price mapping
    const NON_GE_ITEMS = new Set([995]); // Coins

    const mismatches: string[] = [];
    for (const [idStr, name] of Object.entries(ITEM_NAMES)) {
      const id = Number(idStr);
      if (NON_GE_ITEMS.has(id)) continue;
      const wikiName = wikiById.get(id);
      if (wikiName === undefined) {
        mismatches.push(`ID ${id} ("${name}") not found in wiki mapping`);
      } else if (wikiName !== name) {
        mismatches.push(
          `ID ${id}: ITEM_NAMES has "${name}" but wiki has "${wikiName}"`,
        );
      }
    }

    expect(mismatches, mismatches.join('\n')).toEqual([]);
  });

  it('every item ID used in method inputs/outputs exists in ITEM_NAMES', () => {
    const missing: string[] = [];

    for (const method of methods) {
      for (const input of method.inputs) {
        if (!(input.id in ITEM_NAMES)) {
          missing.push(
            `Method "${method.name}" input ID ${input.id} missing from ITEM_NAMES`,
          );
        }
      }
      for (const output of method.outputs) {
        if (!(output.id in ITEM_NAMES)) {
          missing.push(
            `Method "${method.name}" output ID ${output.id} missing from ITEM_NAMES`,
          );
        }
      }
    }

    expect(missing, missing.join('\n')).toEqual([]);
  });
});
