import { fetchPrices } from '@/lib/price-service';
import { methods } from '@/data/methods';
import { ClientPage } from '@/components/ClientPage';

// Server Component
export default async function Home() {
  const prices = await fetchPrices();

  // We pass data to a Client Component to handle interactivity (level input)
  return (
    <main className="main-container">
      <header className="app-header">
        <h1>OSRS Ledger</h1>
        <p>Live profitability based on real-time GE prices.</p>
      </header>

      <ClientPage prices={prices} methods={methods} />
    </main>
  );
}
