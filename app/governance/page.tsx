// Governance.tsx
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function GovernancePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Rupaya Governance</h1>
      <p className="mb-8">Rupaya implements a decentralized autonomous organization (DAO) structure to allow community members to participate in decision-making processes.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Voting on Protocol Upgrades</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Community members can participate in voting on proposed protocol upgrades and changes, ensuring the platform evolves according to user needs.</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Proposing New Features</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Users can propose and decide on new features or services, fostering innovation and community-driven development.</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Resource Allocation</CardTitle>
          </CardHeader>
          <CardContent>
            <p>The community has a say in allocating resources for various initiatives and development projects within the Rupaya ecosystem.</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>RUPX Token Utility</CardTitle>
          </CardHeader>
          <CardContent>
            <p>The RUPX token serves as the governance token, allowing holders to participate in the decision-making process and shape the future of the platform.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}