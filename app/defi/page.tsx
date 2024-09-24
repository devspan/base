import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Link from 'next/link';

export default function DeFiPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Rupaya's RUPX-Powered Decentralized Finance (DeFi) Solutions</h1>
      <p className="mb-8">Rupaya's blockchain platform leverages RUPX to provide accessible, efficient, and secure financial services to South Asia.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Rupaya's RUPX-Backed Lending and Borrowing</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Users can collateralize their RUPX tokens on Rupaya's platform to mint stablecoins or access loans. These services are structured to comply with Shariah principles, using concepts such as Murabaha and Ijara.</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Rupaya's P2P Trading with RUPX</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Our decentralized peer-to-peer trading platform facilitates direct exchanges between users on the Rupaya network, including RUPX-to-stablecoin trades, RUPX to cryptocurrency trades, and fiat-to-RUPX trades.</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Rupaya Liquidity Pools and RUPX Yield Farming</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Users can provide RUPX liquidity to Rupaya's decentralized pools and earn rewards. This is structured in a Shariah-compliant manner, with rewards based on actual profits from trading activities within the Rupaya ecosystem.</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Rupaya's RUPX-Powered Remittance Services</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Leveraging RUPX for blockchain transactions, Rupaya offers a remittance service that allows users to send money across borders quickly and cheaply using localized stablecoins backed by RUPX on the Rupaya network.</p>
          </CardContent>
        </Card>
      </div>
      <p className="mt-8">Learn more about <Link href="/tokenomics" className="text-blue-600 hover:underline">Rupaya's RUPX tokenomics</Link> and how it supports our DeFi ecosystem.</p>
    </div>
  );
}