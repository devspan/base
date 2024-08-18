// app/careers/page.tsx
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Join the Rupaya Team</h1>
      <p className="mb-8">We're currently seeking passionate volunteers to help us revolutionize finance in South Asia.</p>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Volunteer Opportunities</CardTitle>
        </CardHeader>
        <CardContent>
          <p>We're looking for volunteers in the following areas:</p>
          <ul className="list-disc list-inside mt-4">
            <li>Blockchain Development</li>
            <li>Community Management</li>
            <li>Content Creation</li>
            <li>Marketing and Outreach</li>
            <li>Translations</li>
          </ul>
          <p className="mt-4">If you're passionate about decentralized finance and want to make a difference in South Asia, we'd love to hear from you!</p>
        </CardContent>
      </Card>
      
      <div className="text-center">
        <p className="mb-4">Interested in joining our team? Please contact Aasim directly:</p>
        <Button>
          <a href="mailto:aasim@rupaya.io">Contact Aasim</a>
        </Button>
      </div>
    </div>
  );
}
