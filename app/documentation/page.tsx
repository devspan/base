// app/documentation/page.tsx
import StructuredData from '@/components/StructuredData';

export default function Page() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Rupaya & RUPX Documentation</h1>
        <p>Welcome to the Rupaya and RUPX documentation. Here you'll find comprehensive guides and documentation to help you start working with the Rupaya ecosystem and RUPX token as quickly as possible, as well as support if you get stuck.</p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">Getting Started with Rupaya and RUPX</h2>
        <ul className="list-disc list-inside">
          <li>Introduction to Rupaya's blockchain ecosystem</li>
          <li>Understanding RUPX: Rupaya's native token</li>
          <li>Setting up a Rupaya wallet for RUPX</li>
          <li>Using RUPX for transactions and DeFi on Rupaya</li>
          <li>Participating in Rupaya's governance with RUPX</li>
          {/* Add more documentation topics */}
        </ul>
        <StructuredData 
          type="FAQPage"
          data={{
            mainEntity: [
              {
                "@type": "Question",
                "name": "What is Rupaya?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Rupaya is a blockchain platform designed to revolutionize finance in South Asia through decentralized technology and innovative DeFi solutions."
                }
              },
              {
                "@type": "Question",
                "name": "What is RUPX?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "RUPX is the native cryptocurrency of the Rupaya blockchain platform, powering transactions, governance, and DeFi services within the Rupaya ecosystem."
                }
              },
              {
                "@type": "Question",
                "name": "How can I participate in the Rupaya ecosystem?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can participate by acquiring RUPX tokens, using Rupaya's DeFi services, contributing to governance decisions, or developing applications on the Rupaya blockchain."
                }
              },
              // Add more FAQs
            ]
          }}
        />
      </div>
    );
  }