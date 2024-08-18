// app/faq/page.tsx
export default function Page() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
        <dl className="space-y-8">
          <div>
            <dt className="text-lg font-semibold">What is Rupaya?</dt>
            <dd>Rupaya is a blockchain project aimed at empowering South Asia through decentralized finance solutions.</dd>
          </div>
          <div>
            <dt className="text-lg font-semibold">How does Rupaya work?</dt>
            <dd>Rupaya leverages blockchain technology to provide financial services such as stablecoins, remittances, and DeFi products tailored for South Asian markets.</dd>
          </div>
          {/* Add more FAQ items as needed */}
        </dl>
      </div>
    );
  }
  