import { fetchPrices, fetchMapping } from '@/lib/price-service';
import { ClientPage } from '@/components/ClientPage';
import { HelpButton } from '@/components/HelpModal';

// Server Component
export default async function Home() {
  const [prices, mapping] = await Promise.all([fetchPrices(), fetchMapping()]);

  // We pass data to a Client Component to handle interactivity (level input)
  return (
    <main className="main-container">
      <header className="app-header">
        <div className="app-header-title">
          <img
            src="/icons/Coins_10000.webp"
            alt="GP"
            className="header-coins-icon"
            width={32}
            height={32}
            referrerPolicy="no-referrer"
          />
          <h1>OSRS Ledger</h1>
          <HelpButton />
        </div>
        <p>Live profitability based on real-time GE prices.</p>
      </header>

      <ClientPage prices={prices} mapping={mapping} />
    </main>
  );
}
