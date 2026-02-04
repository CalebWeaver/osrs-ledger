"use client";

import { useState, useEffect, useMemo, useRef } from 'react';
import { PriceMap, ItemMapping } from '@/lib/types';
import { parseGpInput, normalizeGpInput } from '@/lib/parseGp';

const NATURE_RUNE_ID = 561;
const ALCHS_PER_HOUR = 1200; // 5-tick action
const ALCHS_PER_4HR = ALCHS_PER_HOUR * 4; // 4800 alchs in 4 hours
const ALCH_LS_KEY = 'osrs-ledger-alch-filters';

interface AlchFilters {
  search?: string;
  showAll?: boolean;
  sortKey?: SortKey;
  sortAsc?: boolean;
  minProfitPerLimit?: string;
  minProfitPerHour?: string;
  maxBuyPrice?: string;
  minBuyLimit?: string;
  minProfitPerAlch?: string;
  maxCostPerLimit?: string;
}

function loadAlchFilters(): AlchFilters {
  try {
    const raw = localStorage.getItem(ALCH_LS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

type SortKey = 'name' | 'alchValue' | 'buyPrice' | 'profitPerAlch' | 'profitPerHour' | 'buyLimit' | 'costPerLimit' | 'profitPerLimit';

interface AlchEvaluation {
  id: number;
  name: string;
  alchValue: number;
  buyPrice: number;
  natureRunePrice: number;
  profitPerAlch: number;
  profitPerHour: number;
  buyLimit: number | null;
  costPerLimit: number | null;
  profitPerLimit: number | null;
}

interface HighAlchTabProps {
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

export function HighAlchTab({ prices, mapping }: HighAlchTabProps) {
  const saved = useMemo(() => loadAlchFilters(), []);
  const [search, setSearch] = useState(saved.search ?? '');
  const [showAll, setShowAll] = useState(saved.showAll ?? false);
  const [sortKey, setSortKey] = useState<SortKey>(saved.sortKey ?? 'profitPerAlch');
  const [sortAsc, setSortAsc] = useState(saved.sortAsc ?? false);
  const [minProfitPerLimit, setMinProfitPerLimit] = useState(saved.minProfitPerLimit ?? '');
  const [minProfitPerHour, setMinProfitPerHour] = useState(saved.minProfitPerHour ?? '');
  const [maxBuyPrice, setMaxBuyPrice] = useState(saved.maxBuyPrice ?? '');
  const [minBuyLimit, setMinBuyLimit] = useState(saved.minBuyLimit ?? '');
  const [minProfitPerAlch, setMinProfitPerAlch] = useState(saved.minProfitPerAlch ?? '');
  const [maxCostPerLimit, setMaxCostPerLimit] = useState(saved.maxCostPerLimit ?? '');
  const [openFilter, setOpenFilter] = useState<SortKey | null>(null);

  useEffect(() => {
    localStorage.setItem(ALCH_LS_KEY, JSON.stringify({
      search, showAll, sortKey, sortAsc, minProfitPerLimit, minProfitPerHour, maxBuyPrice, minBuyLimit, minProfitPerAlch, maxCostPerLimit,
    }));
  }, [search, showAll, sortKey, sortAsc, minProfitPerLimit, minProfitPerHour, maxBuyPrice, minBuyLimit, minProfitPerAlch, maxCostPerLimit]);

  const natureRunePrice = prices[NATURE_RUNE_ID]?.avgHighPrice ?? prices[NATURE_RUNE_ID]?.high ?? 0;

  const evaluations = useMemo(() => {
    const results: AlchEvaluation[] = [];
    for (const item of mapping) {
      if (!item.highalch || item.highalch <= 0) continue;
      const priceData = prices[item.id];
      if (!priceData) continue;
      const buyPrice = priceData.avgHighPrice ?? priceData.high ?? 0;
      if (buyPrice <= 0) continue;

      const profitPerAlch = item.highalch - natureRunePrice - buyPrice;
      // 4hr profit is capped by alch rate (4800/4hr) or buy limit, whichever is lower
      const effectiveLimit = item.limit != null ? Math.min(item.limit, ALCHS_PER_4HR) : null;
      results.push({
        id: item.id,
        name: item.name,
        alchValue: item.highalch,
        buyPrice,
        natureRunePrice,
        profitPerAlch,
        profitPerHour: profitPerAlch * ALCHS_PER_HOUR,
        buyLimit: item.limit,
        costPerLimit: effectiveLimit != null ? buyPrice * effectiveLimit : null,
        profitPerLimit: effectiveLimit != null ? profitPerAlch * effectiveLimit : null,
      });
    }
    return results;
  }, [mapping, prices, natureRunePrice]);

  const filtered = useMemo(() => {
    let items = evaluations;
    if (!showAll) items = items.filter(e => e.profitPerAlch > 0);
    if (search) {
      const q = search.toLowerCase();
      items = items.filter(e => e.name.toLowerCase().includes(q));
    }
    const minPL = parseGpInput(minProfitPerLimit);
    if (minPL) items = items.filter(e => e.profitPerLimit != null && e.profitPerLimit >= minPL);
    const minPH = parseGpInput(minProfitPerHour);
    if (minPH) items = items.filter(e => e.profitPerHour >= minPH);
    const maxBP = parseGpInput(maxBuyPrice);
    if (maxBP) items = items.filter(e => e.buyPrice <= maxBP);
    const minBL = parseGpInput(minBuyLimit);
    if (minBL) items = items.filter(e => e.buyLimit != null && e.buyLimit >= minBL);
    const minPA = parseGpInput(minProfitPerAlch);
    if (minPA) items = items.filter(e => e.profitPerAlch >= minPA);

    const maxCPL = parseGpInput(maxCostPerLimit);
    if (maxCPL) items = items.filter(e => e.costPerLimit != null && e.costPerLimit <= maxCPL);

    items.sort((a, b) => {
      let av: number, bv: number;
      switch (sortKey) {
        case 'name': return sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
        case 'alchValue': av = a.alchValue; bv = b.alchValue; break;
        case 'buyPrice': av = a.buyPrice; bv = b.buyPrice; break;
        case 'profitPerAlch': av = a.profitPerAlch; bv = b.profitPerAlch; break;
        case 'profitPerHour': av = a.profitPerHour; bv = b.profitPerHour; break;
        case 'buyLimit': av = a.buyLimit ?? -Infinity; bv = b.buyLimit ?? -Infinity; break;
        case 'costPerLimit': av = a.costPerLimit ?? -Infinity; bv = b.costPerLimit ?? -Infinity; break;
        case 'profitPerLimit': av = a.profitPerLimit ?? -Infinity; bv = b.profitPerLimit ?? -Infinity; break;
        default: av = 0; bv = 0;
      }
      return sortAsc ? av - bv : bv - av;
    });
    return items;
  }, [evaluations, showAll, search, sortKey, sortAsc, minProfitPerLimit, minProfitPerHour, maxBuyPrice, minBuyLimit, minProfitPerAlch, maxCostPerLimit]);

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

  const activeFilterCount = [minProfitPerLimit, minProfitPerHour, maxBuyPrice, minBuyLimit, minProfitPerAlch, maxCostPerLimit].filter(v => v !== '').length;

  return (
    <div className="alch-tab">
      <div className="alch-controls">
        <input
          type="search"
          className="input-field alch-search"
          placeholder="Search items..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={showAll}
            onChange={e => setShowAll(e.target.checked)}
          />
          Show unprofitable
        </label>
        <span className="alch-count">
          {filtered.length} items
          {activeFilterCount > 0 && (
            <span className="flip-active-filters"> ({activeFilterCount} filter{activeFilterCount > 1 ? 's' : ''})</span>
          )}
        </span>
      </div>

      <div className="alch-table-wrapper">
        <table className="alch-table">
          <thead>
            <tr>
              <th className="alch-th alch-th-name" onClick={() => handleSort('name')}>Item{sortIndicator('name')}</th>
              <th className="alch-th" onClick={() => handleSort('alchValue')}>Alch Value{sortIndicator('alchValue')}</th>
              <FilterableHeader
                label="Buy Price"
                sortKey="buyPrice"
                currentSortKey={sortKey}
                sortAsc={sortAsc}
                onSort={handleSort}
                filterValue={maxBuyPrice}
                onFilterChange={setMaxBuyPrice}
                filterPlaceholder="Max price"
                filterType="gp"
                isOpen={openFilter === 'buyPrice'}
                onToggle={() => setOpenFilter(openFilter === 'buyPrice' ? null : 'buyPrice')}
                onClose={() => setOpenFilter(null)}
              />
              <FilterableHeader
                label="Profit/Alch"
                sortKey="profitPerAlch"
                currentSortKey={sortKey}
                sortAsc={sortAsc}
                onSort={handleSort}
                filterValue={minProfitPerAlch}
                onFilterChange={setMinProfitPerAlch}
                filterPlaceholder="Min profit"
                filterType="gp"
                isOpen={openFilter === 'profitPerAlch'}
                onToggle={() => setOpenFilter(openFilter === 'profitPerAlch' ? null : 'profitPerAlch')}
                onClose={() => setOpenFilter(null)}
              />
              <FilterableHeader
                label="Profit/Hr"
                sortKey="profitPerHour"
                currentSortKey={sortKey}
                sortAsc={sortAsc}
                onSort={handleSort}
                filterValue={minProfitPerHour}
                onFilterChange={setMinProfitPerHour}
                filterPlaceholder="Min profit/hr"
                filterType="gp"
                isOpen={openFilter === 'profitPerHour'}
                onToggle={() => setOpenFilter(openFilter === 'profitPerHour' ? null : 'profitPerHour')}
                onClose={() => setOpenFilter(null)}
              />
              <FilterableHeader
                label="Buy Limit"
                sortKey="buyLimit"
                currentSortKey={sortKey}
                sortAsc={sortAsc}
                onSort={handleSort}
                filterValue={minBuyLimit}
                onFilterChange={setMinBuyLimit}
                filterPlaceholder="Min limit (e.g. 1K)"
                filterType="gp"
                isOpen={openFilter === 'buyLimit'}
                onToggle={() => setOpenFilter(openFilter === 'buyLimit' ? null : 'buyLimit')}
                onClose={() => setOpenFilter(null)}
              />
              <FilterableHeader
                label="4hr Cost"
                sortKey="costPerLimit"
                currentSortKey={sortKey}
                sortAsc={sortAsc}
                onSort={handleSort}
                filterValue={maxCostPerLimit}
                onFilterChange={setMaxCostPerLimit}
                filterPlaceholder="Max cost"
                filterType="gp"
                isOpen={openFilter === 'costPerLimit'}
                onToggle={() => setOpenFilter(openFilter === 'costPerLimit' ? null : 'costPerLimit')}
                onClose={() => setOpenFilter(null)}
              />
              <FilterableHeader
                label="4hr Profit"
                sortKey="profitPerLimit"
                currentSortKey={sortKey}
                sortAsc={sortAsc}
                onSort={handleSort}
                filterValue={minProfitPerLimit}
                onFilterChange={setMinProfitPerLimit}
                filterPlaceholder="Min 4hr profit"
                filterType="gp"
                isOpen={openFilter === 'profitPerLimit'}
                onToggle={() => setOpenFilter(openFilter === 'profitPerLimit' ? null : 'profitPerLimit')}
                onClose={() => setOpenFilter(null)}
              />
            </tr>
          </thead>
          <tbody>
            {filtered.map(e => (
              <tr key={e.id} className="alch-tr">
                <td className="alch-td alch-td-name">
                  <img
                    src={`https://secure.runescape.com/m=itemdb_oldschool/obj_big.gif?id=${e.id}`}
                    alt={e.name}
                    className="alch-item-icon"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  {e.name}
                </td>
                <td className="alch-td">{e.alchValue.toLocaleString()}</td>
                <td className="alch-td">{e.buyPrice.toLocaleString()}</td>
                <td className={`alch-td ${profitClass(e.profitPerAlch)}`}>{e.profitPerAlch.toLocaleString()}</td>
                <td className={`alch-td ${profitClass(e.profitPerHour)}`}>{formatGp(e.profitPerHour)}</td>
                <td className="alch-td">{e.buyLimit != null ? e.buyLimit.toLocaleString() : '-'}</td>
                <td className="alch-td">{e.costPerLimit != null ? formatGp(e.costPerLimit) : '-'}</td>
                <td className={`alch-td ${profitClass(e.profitPerLimit ?? 0)}`}>{e.profitPerLimit != null ? formatGp(e.profitPerLimit) : '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
