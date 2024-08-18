import { Metadata } from 'next'
import WhitepaperContent from './WhitePaperContent'

export const metadata: Metadata = {
  title: 'Rupaya Whitepaper - Empowering South Asia through DeFi',
  description: 'Explore the Rupaya whitepaper on GitHub to learn about our vision for revolutionizing finance in South Asia through decentralized technology and blockchain innovation.',
  openGraph: {
    title: 'Rupaya Whitepaper - Empowering South Asia through DeFi',
    description: 'Explore the Rupaya whitepaper on GitHub to learn about our vision for revolutionizing finance in South Asia through decentralized technology and blockchain innovation.',
    type: 'website',
    url: 'https://rupaya.io/whitepaper',
    images: [
      {
        url: 'https://rupaya.io/images/whitepaper-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Rupaya Whitepaper',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rupaya Whitepaper - Empowering South Asia through DeFi',
    description: 'Explore the Rupaya whitepaper on GitHub to learn about our vision for revolutionizing finance in South Asia through decentralized technology and blockchain innovation.',
    images: ['https://rupaya.io/images/whitepaper-twitter.jpg'],
  },
}

export default function WhitepaperPage() {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <WhitepaperContent />
      </div>
    </section>
  )
}