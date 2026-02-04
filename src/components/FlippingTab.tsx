"use client";

import { useState, useEffect, useMemo, useRef } from 'react';
import { PriceMap, ItemMapping } from '@/lib/types';
import { parseGpInput, normalizeGpInput } from '@/lib/parseGp';
import { calculateGeTax } from '@/lib/geTax';

const FLIP_LS_KEY = 'osrs-ledger-flip-filters';

interface FlipFilters {
  search?: string;
  showUnprofitable?: boolean;
  sortKey?: SortKey;
  sortAsc?: boolean;
  minMargin?: string;
  minRoi?: string;
  minVolume?: string;
  maxBuyPrice?: string;
  minBuyLimit?: string;
  minProfitPerLimit?: string;
  maxCostPerLimit?: string;
}

function loadFlipFilters(): FlipFilters {
  try {
    const raw = localStorage.getItem(FLIP_LS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

type SortKey = 'name' | 'buyPrice' | 'sellPrice' | 'margin' | 'roi' | 'volume' | 'buyLimit' | 'costPerLimit' | 'profitPerLimit';

interface FlipEvaluation {
  id: number;
  name: string;
  buyPrice: number;
  sellPrice: number;
  margin: number;
  roi: number;
  volume: number;
  buyLimit: number | null;
  costPerLimit: number | null;
  profitPerLimit: number | null;
}

interface FlippingTabProps {
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
  filterType: 'gp' | 'number' | 'percent';
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
    } else if (filterType === 'percent') {
      onFilterChange(val.replace(/[^\d.]/g, ''));
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

export function FlippingTab({ prices, mapping }: FlippingTabProps) {
  const saved = useMemo(() => loadFlipFilters(), []);
  const [search, setSearch] = useState(saved.search ?? '');
  const [showUnprofitable, setShowUnprofitable] = useState(saved.showUnprofitable ?? false);
  const [sortKey, setSortKey] = useState<SortKey>(saved.sortKey ?? 'profitPerLimit');
  const [sortAsc, setSortAsc] = useState(saved.sortAsc ?? false);
  const [minMargin, setMinMargin] = useState(saved.minMargin ?? '');
  const [minRoi, setMinRoi] = useState(saved.minRoi ?? '');
  const [minVolume, setMinVolume] = useState(saved.minVolume ?? '');
  const [maxBuyPrice, setMaxBuyPrice] = useState(saved.maxBuyPrice ?? '');
  const [minBuyLimit, setMinBuyLimit] = useState(saved.minBuyLimit ?? '');
  const [minProfitPerLimit, setMinProfitPerLimit] = useState(saved.minProfitPerLimit ?? '');
  const [maxCostPerLimit, setMaxCostPerLimit] = useState(saved.maxCostPerLimit ?? '');
  const [openFilter, setOpenFilter] = useState<SortKey | null>(null);

  useEffect(() => {
    localStorage.setItem(FLIP_LS_KEY, JSON.stringify({
      search, showUnprofitable, sortKey, sortAsc, minMargin, minRoi, minVolume, maxBuyPrice, minBuyLimit, minProfitPerLimit, maxCostPerLimit,
    }));
  }, [search, showUnprofitable, sortKey, sortAsc, minMargin, minRoi, minVolume, maxBuyPrice, minBuyLimit, minProfitPerLimit, maxCostPerLimit]);

  const evaluations = useMemo(() => {
    const results: FlipEvaluation[] = [];
    for (const item of mapping) {
      const priceData = prices[item.id];
      if (!priceData) continue;

      const buyPrice = priceData.low;
      const sellPrice = priceData.high;

      if (!buyPrice || buyPrice <= 0 || !sellPrice || sellPrice <= 0) continue;

      // Margin accounts for 2% GE tax on sell (capped at 5M, some items exempt)
      const tax = calculateGeTax(sellPrice, item.id);
      const margin = sellPrice - tax - buyPrice;
      const roi = (margin / buyPrice) * 100;
      const volume = (priceData.highPriceVolume ?? 0) + (priceData.lowPriceVolume ?? 0);

      results.push({
        id: item.id,
        name: item.name,
        buyPrice,
        sellPrice,
        margin,
        roi,
        volume,
        buyLimit: item.limit,
        costPerLimit: item.limit != null ? buyPrice * item.limit : null,
        profitPerLimit: item.limit != null ? margin * item.limit : null,
      });
    }
    return results;
  }, [mapping, prices]);

  const filtered = useMemo(() => {
    let items = evaluations;

    if (!showUnprofitable) items = items.filter(e => e.margin > 0);

    if (search) {
      const q = search.toLowerCase();
      items = items.filter(e => e.name.toLowerCase().includes(q));
    }

    const minM = parseGpInput(minMargin);
    if (minM) items = items.filter(e => e.margin >= minM);

    const minR = parseFloat(minRoi);
    if (!isNaN(minR) && minR > 0) items = items.filter(e => e.roi >= minR);

    const minV = parseInt(minVolume, 10);
    if (!isNaN(minV) && minV > 0) items = items.filter(e => e.volume >= minV);

    const maxBP = parseGpInput(maxBuyPrice);
    if (maxBP) items = items.filter(e => e.buyPrice <= maxBP);

    const minBL = parseInt(minBuyLimit, 10);
    if (!isNaN(minBL) && minBL > 0) items = items.filter(e => e.buyLimit != null && e.buyLimit >= minBL);

    const minPPL = parseGpInput(minProfitPerLimit);
    if (minPPL) items = items.filter(e => e.profitPerLimit != null && e.profitPerLimit >= minPPL);

    const maxCPL = parseGpInput(maxCostPerLimit);
    if (maxCPL) items = items.filter(e => e.costPerLimit != null && e.costPerLimit <= maxCPL);

    items.sort((a, b) => {
      let av: number, bv: number;
      switch (sortKey) {
        case 'name': return sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
        case 'buyPrice': av = a.buyPrice; bv = b.buyPrice; break;
        case 'sellPrice': av = a.sellPrice; bv = b.sellPrice; break;
        case 'margin': av = a.margin; bv = b.margin; break;
        case 'roi': av = a.roi; bv = b.roi; break;
        case 'volume': av = a.volume; bv = b.volume; break;
        case 'buyLimit': av = a.buyLimit ?? -Infinity; bv = b.buyLimit ?? -Infinity; break;
        case 'costPerLimit': av = a.costPerLimit ?? -Infinity; bv = b.costPerLimit ?? -Infinity; break;
        case 'profitPerLimit': av = a.profitPerLimit ?? -Infinity; bv = b.profitPerLimit ?? -Infinity; break;
        default: av = 0; bv = 0;
      }
      return sortAsc ? av - bv : bv - av;
    });

    return items;
  }, [evaluations, showUnprofitable, search, sortKey, sortAsc, minMargin, minRoi, minVolume, maxBuyPrice, minBuyLimit, minProfitPerLimit, maxCostPerLimit]);

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

  const activeFilterCount = [minMargin, minRoi, minVolume, maxBuyPrice, minBuyLimit, minProfitPerLimit, maxCostPerLimit].filter(v => v !== '').length;

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
            checked={showUnprofitable}
            onChange={e => setShowUnprofitable(e.target.checked)}
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
              <th className="alch-th" onClick={() => handleSort('sellPrice')}>Sell Price{sortIndicator('sellPrice')}</th>
              <FilterableHeader
                label="Margin"
                sortKey="margin"
                currentSortKey={sortKey}
                sortAsc={sortAsc}
                onSort={handleSort}
                filterValue={minMargin}
                onFilterChange={setMinMargin}
                filterPlaceholder="Min margin"
                filterType="gp"
                isOpen={openFilter === 'margin'}
                onToggle={() => setOpenFilter(openFilter === 'margin' ? null : 'margin')}
                onClose={() => setOpenFilter(null)}
              />
              <FilterableHeader
                label="ROI %"
                sortKey="roi"
                currentSortKey={sortKey}
                sortAsc={sortAsc}
                onSort={handleSort}
                filterValue={minRoi}
                onFilterChange={setMinRoi}
                filterPlaceholder="Min ROI %"
                filterType="percent"
                isOpen={openFilter === 'roi'}
                onToggle={() => setOpenFilter(openFilter === 'roi' ? null : 'roi')}
                onClose={() => setOpenFilter(null)}
              />
              <FilterableHeader
                label="Volume"
                sortKey="volume"
                currentSortKey={sortKey}
                sortAsc={sortAsc}
                onSort={handleSort}
                filterValue={minVolume}
                onFilterChange={setMinVolume}
                filterPlaceholder="Min volume"
                filterType="number"
                isOpen={openFilter === 'volume'}
                onToggle={() => setOpenFilter(openFilter === 'volume' ? null : 'volume')}
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
                filterPlaceholder="Min limit"
                filterType="number"
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
                <td className="alch-td">{e.buyPrice.toLocaleString()}</td>
                <td className="alch-td">{e.sellPrice.toLocaleString()}</td>
                <td className={`alch-td ${profitClass(e.margin)}`}>{e.margin.toLocaleString()}</td>
                <td className={`alch-td ${profitClass(e.roi)}`}>{e.roi.toFixed(1)}%</td>
                <td className="alch-td">{formatGp(e.volume)}</td>
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
