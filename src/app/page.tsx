import { fetchPrices } from '@/lib/price-service';
import { methods } from '@/data/methods';
import { ClientPage } from '@/components/ClientPage';
import { HelpButton } from '@/components/HelpModal';

// Server Component
export default async function Home() {
  const prices = await fetchPrices();

  // We pass data to a Client Component to handle interactivity (level input)
  return (
    <main className="main-container">
      <header className="app-header">
        <div className="app-header-title">
          <h1>OSRS Ledger</h1>
          <HelpButton />
        </div>
        <p>Live profitability based on real-time GE prices.</p>
      </header>

      <ClientPage prices={prices} methods={methods} />
    </main>
  );
}
