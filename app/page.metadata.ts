import type { Metadata } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://rupaya.io'

export const metadata: Metadata = {
  title: `Rupaya & RUPX - Empowering South Asia through Decentralized Finance | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
  description: `Rupaya: Revolutionizing finance in South Asia with RUPX, our native token. Join us in creating accessible, efficient, and secure blockchain-powered financial services for millions.`,
  keywords: 'Rupaya, RUPX, cryptocurrency, blockchain, DeFi, South Asia, financial inclusion, RUPX token',
  openGraph: {
    title: `Rupaya & RUPX - Empowering South Asia through Decentralized Finance | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
    description: `Rupaya's blockchain ecosystem, powered by RUPX. Join the financial revolution in South Asia with innovative DeFi solutions.`,
    url: baseUrl,
    siteName: process.env.NEXT_PUBLIC_SITE_NAME,
    images: [
      {
        url: process.env.NEXT_PUBLIC_OG_IMAGE_URL || `${baseUrl}/rupaya-rupx-og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `Rupaya & RUPX - Decentralized Finance for South Asia`,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Rupaya & RUPX - Empowering South Asia through DeFi | ${process.env.NEXT_PUBLIC_SITE_NAME}`,
    description: `Discover Rupaya's blockchain solutions and RUPX, our native token. Join the financial revolution in South Asia.`,
    images: [process.env.NEXT_PUBLIC_TWITTER_IMAGE_URL || `${baseUrl}/rupaya-rupx-twitter-image.jpg`],
    creator: process.env.NEXT_PUBLIC_TWITTER_HANDLE,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_SITE_VERIFICATION,
    yahoo: process.env.NEXT_PUBLIC_YAHOO_SITE_VERIFICATION,
  },
}