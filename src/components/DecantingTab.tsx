"use client";

import { useState, useEffect, useMemo, useRef } from 'react';
import { PriceMap, ItemMapping } from '@/lib/types';
import { parseGpInput, normalizeGpInput } from '@/lib/parseGp';
import { potionSets, PotionSet } from '@/data/potions';

const EMPTY_VIAL_ID = 229;
const DECANT_LS_KEY = 'osrs-ledger-decant-filters';

type DoseNumber = 1 | 2 | 3 | 4;

interface DecantFilters {
  search?: string;
  showUnprofitable?: boolean;
  sortKey?: SortKey;
  sortAsc?: boolean;
  minProfitPerDose?: string;
  minProfit4hr?: string;
  minVolume?: string;
}

function loadDecantFilters(): DecantFilters {
  try {
    const raw = localStorage.getItem(DECANT_LS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

type SortKey = 'name' | 'dose1' | 'dose2' | 'dose3' | 'dose4' | 'profitPerDose' | 'volume' | 'buyLimit' | 'profit4hr';

interface DecantEvaluation {
  id: string;
  name: string;
  iconId: number;
  pricePerDose: Record<DoseNumber, number | null>;
  buyPricePerDose: Record<DoseNumber, number | null>;
  sellPricePerDose: Record<DoseNumber, number | null>;
  bestBuyDose: DoseNumber | null;
  bestSellDose: DoseNumber | null;
  profitPerDose: number;
  vialCostPerDose: number;
  volume: number;
  buyLimit: number;
  profit4hr: number;
}

interface DecantingTabProps {
  prices: PriceMap;
  mapping: ItemMapping[];
}

function formatGp(value: number): string {
  if (Math.abs(value) >= 1_000_000) return (value / 1_000_000).toFixed(1) + 'M';
  if (Math.abs(value) >= 1_000) return (value / 1_000).toFixed(1) + 'K';
  return value.toLocaleString();
}

interface FilterableHeaderProps {
  label: string;
  sortKey: SortKey;
  currentSortKey: SortKey;
  sortAsc: boolean;
  onSort: (key: SortKey) => void;
  filterValue: string;
  onFilterChange: (value: string) => void;
  filterPlaceholder: string;
  filterType: 'gp' | 'number';
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

function FilterableHeader({
  label,
  sortKey,
  currentSortKey,
  sortAsc,
  onSort,
  filterValue,
  onFilterChange,
  filterPlaceholder,
  filterType,
  isOpen,
  onToggle,
  onClose,
}: FilterableHeaderProps) {
  const popoverRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    function handleClickOutside(e: MouseEvent) {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(e.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target as Node)
      ) {
        onClose();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  const sortIndicator = currentSortKey === sortKey ? (sortAsc ? ' ▲' : ' ▼') : '';
  const hasFilter = filterValue !== '';

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value;
    if (filterType === 'gp') {
      onFilterChange(normalizeGpInput(val));
    } else {
      onFilterChange(val.replace(/[^\d]/g, ''));
    }
  }

  return (
    <th className="alch-th flip-th-filterable">
      <div className="flip-th-content">
        <span className="flip-th-label" onClick={() => onSort(sortKey)}>
          {label}{sortIndicator}
        </span>
        <button
          ref={buttonRef}
          className={`flip-filter-btn ${hasFilter ? 'flip-filter-btn--active' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggle();
          }}
          title={hasFilter ? `Filter: ${filterValue}` : 'Add filter'}
        >
          <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
            <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z"/>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div ref={popoverRef} className="flip-filter-popover">
          <input
            type="text"
            inputMode="numeric"
            className="input-field flip-filter-input"
            placeholder={filterPlaceholder}
            value={filterValue}
            onChange={handleInputChange}
            autoFocus
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === 'Escape') {
                onClose();
              }
            }}
          />
          {hasFilter && (
            <button
              className="flip-filter-clear"
              onClick={() => {
                onFilterChange('');
                onClose();
              }}
            >
              Clear
            </button>
          )}
        </div>
      )}
    </th>
  );
}

function evaluatePotion(potion: PotionSet, prices: PriceMap): DecantEvaluation | null {
  const doses: DoseNumber[] = [1, 2, 3, 4];
  const vialPrice = prices[EMPTY_VIAL_ID]?.avgHighPrice ?? prices[EMPTY_VIAL_ID]?.high ?? 2;

  // Calculate price per dose for each size
  const buyPricePerDose: Record<DoseNumber, number | null> = { 1: null, 2: null, 3: null, 4: null };
  const sellPricePerDose: Record<DoseNumber, number | null> = { 1: null, 2: null, 3: null, 4: null };
  let totalVolume = 0;

  for (const dose of doses) {
    const itemId = potion.doses[dose];
    if (!itemId) continue;
    const priceData = prices[itemId];
    if (!priceData) continue;

    const buyPrice = priceData.avgHighPrice ?? priceData.high;
    const sellPrice = priceData.avgLowPrice ?? priceData.low;
    totalVolume += (priceData.highPriceVolume ?? 0) + (priceData.lowPriceVolume ?? 0);

    if (buyPrice && buyPrice > 0) {
      buyPricePerDose[dose] = buyPrice / dose;
    }
    if (sellPrice && sellPrice > 0) {
      sellPricePerDose[dose] = sellPrice / dose;
    }
  }

  // Find best buy (lowest buy price per dose)
  let bestBuyDose: DoseNumber | null = null;
  let lowestBuyPrice = Infinity;
  for (const dose of doses) {
    const price = buyPricePerDose[dose];
    if (price !== null && price < lowestBuyPrice) {
      lowestBuyPrice = price;
      bestBuyDose = dose;
    }
  }

  // Find best sell (highest sell price per dose)
  let bestSellDose: DoseNumber | null = null;
  let highestSellPrice = -Infinity;
  for (const dose of doses) {
    const price = sellPricePerDose[dose];
    if (price !== null && price > highestSellPrice) {
      highestSellPrice = price;
      bestSellDose = dose;
    }
  }

  if (bestBuyDose === null || bestSellDose === null) return null;

  // Calculate vial cost when decanting down (going from higher dose to lower dose)
  // When decanting down, you get extra vials back but need to provide empty vials
  // When decanting up, you provide vials
  let vialCostPerDose = 0;
  if (bestSellDose < bestBuyDose) {
    // Decanting down: need to provide empty vials (1 vial per potion created beyond the original)
    // e.g., (4) -> (1) means 1 x 4-dose becomes 4 x 1-dose, need 3 extra vials
    // Cost per dose = (vialsNeeded / totalDoses) * vialPrice
    // For each 4-dose bought: 4 doses, need 3 vials
    // vialCost per dose = 3/4 * vialPrice
    const vialsNeededPerBought = (bestBuyDose / bestSellDose) - 1;
    vialCostPerDose = (vialsNeededPerBought / bestBuyDose) * vialPrice;
  }
  // When decanting up, you get vials back - this is a negative cost (profit)
  // but typically players want to decant down for profit, so we'll skip this case

  const profitPerDose = highestSellPrice - lowestBuyPrice - vialCostPerDose;

  // Calculate max 4hr profit
  // Limited by both buy and sell GE limits
  const buyLimitDoses = potion.buyLimit * bestBuyDose;
  const sellLimitDoses = potion.buyLimit * bestSellDose;
  const effectiveDoses = Math.min(buyLimitDoses, sellLimitDoses);
  const profit4hr = effectiveDoses * profitPerDose;

  // Use 4-dose item for icon, or the highest dose available
  const iconId = potion.doses[4] ?? potion.doses[3] ?? potion.doses[2] ?? potion.doses[1] ?? 0;

  // Combined price per dose for display (use buy price as the "price" for comparison)
  const pricePerDose: Record<DoseNumber, number | null> = { 1: null, 2: null, 3: null, 4: null };
  for (const dose of doses) {
    pricePerDose[dose] = buyPricePerDose[dose];
  }

  return {
    id: potion.id,
    name: potion.name,
    iconId,
    pricePerDose,
    buyPricePerDose,
    sellPricePerDose,
    bestBuyDose,
    bestSellDose,
    profitPerDose,
    vialCostPerDose,
    volume: totalVolume,
    buyLimit: potion.buyLimit,
    profit4hr,
  };
}

export function DecantingTab({ prices }: DecantingTabProps) {
  const saved = useMemo(() => loadDecantFilters(), []);
  const [search, setSearch] = useState(saved.search ?? '');
  const [showUnprofitable, setShowUnprofitable] = useState(saved.showUnprofitable ?? false);
  const [sortKey, setSortKey] = useState<SortKey>(saved.sortKey ?? 'profit4hr');
  const [sortAsc, setSortAsc] = useState(saved.sortAsc ?? false);
  const [minProfitPerDose, setMinProfitPerDose] = useState(saved.minProfitPerDose ?? '');
  const [minProfit4hr, setMinProfit4hr] = useState(saved.minProfit4hr ?? '');
  const [minVolume, setMinVolume] = useState(saved.minVolume ?? '');
  const [openFilter, setOpenFilter] = useState<SortKey | null>(null);

  useEffect(() => {
    localStorage.setItem(DECANT_LS_KEY, JSON.stringify({
      search, showUnprofitable, sortKey, sortAsc, minProfitPerDose, minProfit4hr, minVolume,
    }));
  }, [search, showUnprofitable, sortKey, sortAsc, minProfitPerDose, minProfit4hr, minVolume]);

  const evaluations = useMemo(() => {
    const results: DecantEvaluation[] = [];
    for (const potion of potionSets) {
      const evaluation = evaluatePotion(potion, prices);
      if (evaluation) {
        results.push(evaluation);
      }
    }
    return results;
  }, [prices]);

  const filtered = useMemo(() => {
    let items = evaluations;

    if (!showUnprofitable) items = items.filter(e => e.profitPerDose > 0);

    if (search) {
      const q = search.toLowerCase();
      items = items.filter(e => e.name.toLowerCase().includes(q));
    }

    const minPPD = parseGpInput(minProfitPerDose);
    if (minPPD) items = items.filter(e => e.profitPerDose >= minPPD);

    const minP4 = parseGpInput(minProfit4hr);
    if (minP4) items = items.filter(e => e.profit4hr >= minP4);

    const minV = parseGpInput(minVolume);
    if (minV) items = items.filter(e => e.volume >= minV);

    items.sort((a, b) => {
      let av: number, bv: number;
      switch (sortKey) {
        case 'name': return sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
        case 'dose1': av = a.pricePerDose[1] ?? -Infinity; bv = b.pricePerDose[1] ?? -Infinity; break;
        case 'dose2': av = a.pricePerDose[2] ?? -Infinity; bv = b.pricePerDose[2] ?? -Infinity; break;
        case 'dose3': av = a.pricePerDose[3] ?? -Infinity; bv = b.pricePerDose[3] ?? -Infinity; break;
        case 'dose4': av = a.pricePerDose[4] ?? -Infinity; bv = b.pricePerDose[4] ?? -Infinity; break;
        case 'profitPerDose': av = a.profitPerDose; bv = b.profitPerDose; break;
        case 'volume': av = a.volume; bv = b.volume; break;
        case 'buyLimit': av = a.buyLimit; bv = b.buyLimit; break;
        case 'profit4hr': av = a.profit4hr; bv = b.profit4hr; break;
        default: av = 0; bv = 0;
      }
      return sortAsc ? av - bv : bv - av;
    });

    return items;
  }, [evaluations, showUnprofitable, search, sortKey, sortAsc, minProfitPerDose, minProfit4hr, minVolume]);

  function handleSort(key: SortKey) {
    if (sortKey === key) {
      setSortAsc(!sortAsc);
    } else {
      setSortKey(key);
      setSortAsc(false);
    }
  }

  function sortIndicator(key: SortKey) {
    if (sortKey !== key) return '';
    return sortAsc ? ' ▲' : ' ▼';
  }

  const profitClass = (v: number) => v > 0 ? 'text-green' : v < 0 ? 'text-red' : '';

  const activeFilterCount = [minProfitPerDose, minProfit4hr, minVolume].filter(v => v !== '').length;

  return (
    <div className="alch-tab">
      <div className="alch-controls">
        <input
          type="search"
          className="input-field alch-search"
          placeholder="Search potions..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={showUnprofitable}
            onChange={e => setShowUnprofitable(e.target.checked)}
          />
          Show unprofitable
        </label>
        <span className="alch-count">
          {filtered.length} potions
          {activeFilterCount > 0 && (
            <span className="flip-active-filters"> ({activeFilterCount} filter{activeFilterCount > 1 ? 's' : ''})</span>
          )}
        </span>
      </div>

      <div className="alch-table-wrapper">
        <table className="alch-table">
          <thead>
            <tr>
              <th className="alch-th alch-th-name" onClick={() => handleSort('name')}>Potion{sortIndicator('name')}</th>
              <th className="alch-th" onClick={() => handleSort('dose1')}>(1)/dose{sortIndicator('dose1')}</th>
              <th className="alch-th" onClick={() => handleSort('dose2')}>(2)/dose{sortIndicator('dose2')}</th>
              <th className="alch-th" onClick={() => handleSort('dose3')}>(3)/dose{sortIndicator('dose3')}</th>
              <th className="alch-th" onClick={() => handleSort('dose4')}>(4)/dose{sortIndicator('dose4')}</th>
              <th className="alch-th">Buy → Sell</th>
              <FilterableHeader
                label="Volume"
                sortKey="volume"
                currentSortKey={sortKey}
                sortAsc={sortAsc}
                onSort={handleSort}
                filterValue={minVolume}
                onFilterChange={setMinVolume}
                filterPlaceholder="Min volume (e.g. 10K)"
                filterType="gp"
                isOpen={openFilter === 'volume'}
                onToggle={() => setOpenFilter(openFilter === 'volume' ? null : 'volume')}
                onClose={() => setOpenFilter(null)}
              />
              <FilterableHeader
                label="Profit/dose"
                sortKey="profitPerDose"
                currentSortKey={sortKey}
                sortAsc={sortAsc}
                onSort={handleSort}
                filterValue={minProfitPerDose}
                onFilterChange={setMinProfitPerDose}
                filterPlaceholder="Min profit"
                filterType="gp"
                isOpen={openFilter === 'profitPerDose'}
                onToggle={() => setOpenFilter(openFilter === 'profitPerDose' ? null : 'profitPerDose')}
                onClose={() => setOpenFilter(null)}
              />
              <th className="alch-th" onClick={() => handleSort('buyLimit')}>Buy Limit{sortIndicator('buyLimit')}</th>
              <FilterableHeader
                label="4hr Profit"
                sortKey="profit4hr"
                currentSortKey={sortKey}
                sortAsc={sortAsc}
                onSort={handleSort}
                filterValue={minProfit4hr}
                onFilterChange={setMinProfit4hr}
                filterPlaceholder="Min 4hr profit"
                filterType="gp"
                isOpen={openFilter === 'profit4hr'}
                onToggle={() => setOpenFilter(openFilter === 'profit4hr' ? null : 'profit4hr')}
                onClose={() => setOpenFilter(null)}
              />
            </tr>
          </thead>
          <tbody>
            {filtered.map(e => (
              <tr key={e.id} className="alch-tr">
                <td className="alch-td alch-td-name">
                  <img
                    src={`https://secure.runescape.com/m=itemdb_oldschool/obj_big.gif?id=${e.iconId}`}
                    alt={e.name}
                    className="alch-item-icon"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  {e.name}
                </td>
                <td className={`alch-td ${e.bestBuyDose === 1 ? 'decant-best-buy' : e.bestSellDose === 1 ? 'decant-best-sell' : e.pricePerDose[1] === null ? 'decant-missing' : ''}`}>
                  {e.pricePerDose[1] !== null ? Math.round(e.pricePerDose[1]).toLocaleString() : '-'}
                </td>
                <td className={`alch-td ${e.bestBuyDose === 2 ? 'decant-best-buy' : e.bestSellDose === 2 ? 'decant-best-sell' : e.pricePerDose[2] === null ? 'decant-missing' : ''}`}>
                  {e.pricePerDose[2] !== null ? Math.round(e.pricePerDose[2]).toLocaleString() : '-'}
                </td>
                <td className={`alch-td ${e.bestBuyDose === 3 ? 'decant-best-buy' : e.bestSellDose === 3 ? 'decant-best-sell' : e.pricePerDose[3] === null ? 'decant-missing' : ''}`}>
                  {e.pricePerDose[3] !== null ? Math.round(e.pricePerDose[3]).toLocaleString() : '-'}
                </td>
                <td className={`alch-td ${e.bestBuyDose === 4 ? 'decant-best-buy' : e.bestSellDose === 4 ? 'decant-best-sell' : e.pricePerDose[4] === null ? 'decant-missing' : ''}`}>
                  {e.pricePerDose[4] !== null ? Math.round(e.pricePerDose[4]).toLocaleString() : '-'}
                </td>
                <td className="alch-td">
                  {e.bestBuyDose && e.bestSellDose ? `(${e.bestBuyDose}) → (${e.bestSellDose})` : '-'}
                </td>
                <td className="alch-td">{formatGp(e.volume)}</td>
                <td className={`alch-td ${profitClass(e.profitPerDose)}`}>
                  {Math.round(e.profitPerDose).toLocaleString()}
                </td>
                <td className="alch-td">{e.buyLimit.toLocaleString()}</td>
                <td className={`alch-td ${profitClass(e.profit4hr)}`}>{formatGp(Math.round(e.profit4hr))}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
