'use client'

import React from 'react';
import Script from 'next/script';

interface StructuredDataProps {
  type: 'Organization' | 'WebSite' | 'FAQPage';
  data: any;
}

const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };

  return (
    <Script id={`structured-data-${type}`} type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(structuredData)}
    </Script>
  );
};

export default StructuredData;