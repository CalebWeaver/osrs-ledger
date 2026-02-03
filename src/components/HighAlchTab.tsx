"use client";

import { useState, useEffect, useMemo } from 'react';
import { PriceMap, ItemMapping } from '@/lib/types';
import { parseGpInput, normalizeGpInput } from '@/lib/parseGp';
import { InfoTip } from './InfoTip';

const NATURE_RUNE_ID = 561;
const ALCHS_PER_HOUR = 1200; // 5-tick action
const ALCH_LS_KEY = 'osrs-ledger-alch-filters';

interface AlchFilters {
  search?: string;
  showAll?: boolean;
  sortKey?: SortKey;
  sortAsc?: boolean;
  minProfitPerLimit?: string;
  minProfitPerHour?: string;
  maxBuyPrice?: string;
}

function loadAlchFilters(): AlchFilters {
  try {
    const raw = localStorage.getItem(ALCH_LS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

type SortKey = 'name' | 'alchValue' | 'buyPrice' | 'profitPerAlch' | 'profitPerHour' | 'buyLimit' | 'profitPerLimit';

interface AlchEvaluation {
  id: number;
  name: string;
  alchValue: number;
  buyPrice: number;
  natureRunePrice: number;
  profitPerAlch: number;
  profitPerHour: number;
  buyLimit: number | null;
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

export function HighAlchTab({ prices, mapping }: HighAlchTabProps) {
  const saved = useMemo(() => loadAlchFilters(), []);
  const [search, setSearch] = useState(saved.search ?? '');
  const [showAll, setShowAll] = useState(saved.showAll ?? false);
  const [sortKey, setSortKey] = useState<SortKey>(saved.sortKey ?? 'profitPerAlch');
  const [sortAsc, setSortAsc] = useState(saved.sortAsc ?? false);
  const [minProfitPerLimit, setMinProfitPerLimit] = useState(saved.minProfitPerLimit ?? '');
  const [minProfitPerHour, setMinProfitPerHour] = useState(saved.minProfitPerHour ?? '');
  const [maxBuyPrice, setMaxBuyPrice] = useState(saved.maxBuyPrice ?? '');

  useEffect(() => {
    localStorage.setItem(ALCH_LS_KEY, JSON.stringify({
      search, showAll, sortKey, sortAsc, minProfitPerLimit, minProfitPerHour, maxBuyPrice,
    }));
  }, [search, showAll, sortKey, sortAsc, minProfitPerLimit, minProfitPerHour, maxBuyPrice]);

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
      results.push({
        id: item.id,
        name: item.name,
        alchValue: item.highalch,
        buyPrice,
        natureRunePrice,
        profitPerAlch,
        profitPerHour: profitPerAlch * ALCHS_PER_HOUR,
        buyLimit: item.limit,
        profitPerLimit: item.limit != null ? profitPerAlch * item.limit : null,
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
    items.sort((a, b) => {
      let av: number, bv: number;
      switch (sortKey) {
        case 'name': return sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
        case 'alchValue': av = a.alchValue; bv = b.alchValue; break;
        case 'buyPrice': av = a.buyPrice; bv = b.buyPrice; break;
        case 'profitPerAlch': av = a.profitPerAlch; bv = b.profitPerAlch; break;
        case 'profitPerHour': av = a.profitPerHour; bv = b.profitPerHour; break;
        case 'buyLimit': av = a.buyLimit ?? -Infinity; bv = b.buyLimit ?? -Infinity; break;
        case 'profitPerLimit': av = a.profitPerLimit ?? -Infinity; bv = b.profitPerLimit ?? -Infinity; break;
        default: av = 0; bv = 0;
      }
      return sortAsc ? av - bv : bv - av;
    });
    return items;
  }, [evaluations, showAll, search, sortKey, sortAsc, minProfitPerLimit, minProfitPerHour, maxBuyPrice]);

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
    return sortAsc ? ' \u25B2' : ' \u25BC';
  }

  const profitClass = (v: number) => v > 0 ? 'text-green' : v < 0 ? 'text-red' : '';

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
        <span className="alch-filter-with-info">
          <input
            type="text"
            inputMode="numeric"
            className="input-field alch-filter-input"
            placeholder="Min profit/limit"
            value={minProfitPerLimit}
            onChange={e => setMinProfitPerLimit(normalizeGpInput(e.target.value))}
          />
          <InfoTip text="Minimum total profit per GE buy limit cycle (profit per alch × buy limit). Filters out items that aren't worth buying in bulk every 4 hours." />
        </span>
        <span className="alch-filter-with-info">
          <input
            type="text"
            inputMode="numeric"
            className="input-field alch-filter-input"
            placeholder="Min profit/hr"
            value={minProfitPerHour}
            onChange={e => setMinProfitPerHour(normalizeGpInput(e.target.value))}
          />
          <InfoTip text="Minimum profit per hour (profit per alch × 1,200 alchs/hr). Filters out items with low GP/hr returns." />
        </span>
        <span className="alch-filter-with-info">
          <input
            type="text"
            inputMode="numeric"
            className="input-field alch-filter-input"
            placeholder="Max buy price"
            value={maxBuyPrice}
            onChange={e => setMaxBuyPrice(normalizeGpInput(e.target.value))}
          />
          <InfoTip text="Maximum GE buy price per item. Useful for finding items to alch when you have limited starting gold." />
        </span>
        <span className="alch-count">{filtered.length} items</span>
      </div>

      <div className="alch-table-wrapper">
        <table className="alch-table">
          <thead>
            <tr>
              <th className="alch-th alch-th-name" onClick={() => handleSort('name')}>Item{sortIndicator('name')}</th>
              <th className="alch-th" onClick={() => handleSort('alchValue')}>Alch Value{sortIndicator('alchValue')}</th>
              <th className="alch-th" onClick={() => handleSort('buyPrice')}>Buy Price{sortIndicator('buyPrice')}</th>

              <th className="alch-th" onClick={() => handleSort('profitPerAlch')}>Profit/Alch{sortIndicator('profitPerAlch')}</th>
              <th className="alch-th" onClick={() => handleSort('profitPerHour')}>Profit/Hr{sortIndicator('profitPerHour')}</th>
              <th className="alch-th" onClick={() => handleSort('buyLimit')}>Buy Limit{sortIndicator('buyLimit')}</th>
              <th className="alch-th" onClick={() => handleSort('profitPerLimit')}>Profit/Limit{sortIndicator('profitPerLimit')}</th>
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
                <td className={`alch-td ${profitClass(e.profitPerLimit ?? 0)}`}>{e.profitPerLimit != null ? formatGp(e.profitPerLimit) : '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
