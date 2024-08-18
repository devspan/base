// Stablecoins.tsx
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function StablecoinsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Rupaya Stablecoins</h1>
      <p className="mb-8">Rupaya introduces a suite of localized stablecoins for each South Asian country, providing stable and reliable mediums of exchange.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>PKRT (Pakistani Rupee Token)</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Stablecoin pegged to the Pakistani Rupee</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>INRT (Indian Rupee Token)</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Stablecoin pegged to the Indian Rupee</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>BDTT (Bangladeshi Taka Token)</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Stablecoin pegged to the Bangladeshi Taka</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>LKRT (Sri Lankan Rupee Token)</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Stablecoin pegged to the Sri Lankan Rupee</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>NPRT (Nepalese Rupee Token)</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Stablecoin pegged to the Nepalese Rupee</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Stability Mechanism</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Implemented through a combination of collateralization and algorithmic methods to maintain the peg to local currencies.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
