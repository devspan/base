import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Tokenomics from "@/components/Tokenomics";
import Roadmap from "@/components/Roadmap";
import Team from "@/components/Team";
import StructuredData from '@/components/StructuredData';
import { metadata } from "./page.metadata";
import { Suspense } from 'react'
import Loading from './loading'
import ErrorBoundary from '@/components/ErrorBoundary'
import { ClientWrapper } from '@/components/ClientWrapper'

export { metadata };

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://rupaya.io';

export default function HomePage() {
  return (
    <ClientWrapper>
      <StructuredData 
        type="Organization"
        data={{
          name: 'Rupaya',
          url: 'https://rupaya.io',
          logo: 'https://rupaya.io/logo.png',
          sameAs: [
            'https://twitter.com/RupayaOfficial',
            'https://t.me/rupayacoin',
            'https://github.com/rupayaproject',
            'https://discord.gg/rupaya'
          ],
        }}
      />
      <StructuredData 
        type="WebSite"
        data={{
          name: 'Rupaya',
          url: 'https://rupaya.io',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://rupaya.io/search?q={search_term_string}',
            'query-input': 'required name=search_term_string'
          }
        }}
      />
      <ErrorBoundary>
        <Suspense fallback={<Loading />}>
          <Hero />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Features />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Tokenomics />
        </Suspense>
        <Roadmap />
        <Team />
      </ErrorBoundary>
    </ClientWrapper>
  )
}
