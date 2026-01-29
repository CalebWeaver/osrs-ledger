import { PriceMap } from './types';

const WIKI_24H_URL = 'https://prices.runescape.wiki/api/v1/osrs/24h';
const WIKI_LATEST_URL = 'https://prices.runescape.wiki/api/v1/osrs/latest';
const USER_AGENT = 'OSRS-Money-Maker-MVP/1.0 (Contact: local-dev)';

export async function fetchPrices(): Promise<PriceMap> {
  try {
    const headers = { 'User-Agent': USER_AGENT };
    const opts = { headers, next: { revalidate: 300 } }; // Cache for 5 minutes

    const [avg24hRes, latestRes] = await Promise.all([
      fetch(WIKI_24H_URL, opts),
      fetch(WIKI_LATEST_URL, opts),
    ]);

    if (!avg24hRes.ok) {
      throw new Error(`Failed to fetch 24h prices: ${avg24hRes.status} ${avg24hRes.statusText}`);
    }
    if (!latestRes.ok) {
      throw new Error(`Failed to fetch latest prices: ${latestRes.status} ${latestRes.statusText}`);
    }

    const avg24hData = await avg24hRes.json();
    const latestData = await latestRes.json();

    // Start with latest instant prices, then merge 24h averages on top.
    // This ensures low-volume items still get prices from the latest endpoint.
    const prices: PriceMap = {};

    for (const [id, entry] of Object.entries(latestData.data)) {
      prices[Number(id)] = entry as PriceMap[number];
    }

    for (const [id, entry] of Object.entries(avg24hData.data)) {
      const numId = Number(id);
      prices[numId] = { ...prices[numId], ...(entry as PriceMap[number]) };
    }

    return prices;
  } catch (error) {
    console.error('Error fetching prices:', error);
    throw error;
  }
}
