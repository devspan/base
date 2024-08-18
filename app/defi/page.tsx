// DeFi.tsx
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function DeFiPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Decentralized Finance (DeFi) Solutions</h1>
      <p className="mb-8">Rupaya leverages DeFi to provide accessible, efficient, and secure financial services to South Asia.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Collateralized Lending and Borrowing</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Users can collateralize their crypto assets to mint stablecoins or access loans. These services are structured to comply with Shariah principles, using concepts such as Murabaha and Ijara.</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>P2P Trading</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Our decentralized peer-to-peer trading platform facilitates direct exchanges between users, including stablecoin-to-stablecoin trades, stablecoin to cryptocurrency trades, and fiat-to-stablecoin trades.</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Liquidity Pools and Yield Farming</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Users can provide liquidity to decentralized pools and earn rewards. This is structured in a Shariah-compliant manner, with rewards based on actual profits from trading activities.</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Remittance Services</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Leveraging blockchain transactions, Rupaya offers a remittance service that allows users to send money across borders quickly and cheaply using localized stablecoins.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}