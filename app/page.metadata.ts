import type { Metadata } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://rupaya.io'

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_SITE_NAME} - Empowering South Asia through Decentralized Finance`,
  description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION,
  keywords: 'Rupaya, cryptocurrency, blockchain, DeFi, South Asia, financial inclusion, RUPX token',
  openGraph: {
    title: `${process.env.NEXT_PUBLIC_SITE_NAME} - Empowering South Asia through Decentralized Finance`,
    description: process.env.NEXT_PUBLIC_SITE_DESCRIPTION,
    url: baseUrl,
    siteName: process.env.NEXT_PUBLIC_SITE_NAME,
    images: [
      {
        url: process.env.NEXT_PUBLIC_OG_IMAGE_URL || `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${process.env.NEXT_PUBLIC_SITE_NAME} - Decentralized Finance for South Asia`,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${process.env.NEXT_PUBLIC_SITE_NAME} - Empowering South Asia through DeFi`,
    description: `Join the financial revolution in South Asia with ${process.env.NEXT_PUBLIC_SITE_NAME}'s blockchain solutions.`,
    images: [process.env.NEXT_PUBLIC_TWITTER_IMAGE_URL || `${baseUrl}/twitter-image.jpg`],
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