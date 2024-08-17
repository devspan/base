import React from 'react';
import { Metadata } from 'next';

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

  React.useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [structuredData]);

  return null;
};

export default StructuredData;