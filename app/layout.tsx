import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from '@/components/analytics'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'
import { ScrollToTop } from '@/components/ScrollToTop'
import { cn } from '@/lib/utils'
import { PageTransition } from '@/components/PageTransition'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' }
  ],
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://rupaya.io'),
  title: {
    default: 'Rupaya - Empowering South Asia through DeFi',
    template: '%s | Rupaya'
  },
  description: 'Rupaya is a grassroots initiative leveraging decentralized finance (DeFi) and blockchain technology to tackle financial inclusion challenges in South Asia.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Rupaya',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Rupaya - Empowering South Asia through DeFi',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@RupayaOfficial',
    creator: '@RupayaOfficial',
  },
  keywords: 'Rupaya, DeFi, South Asia, blockchain, cryptocurrency, financial inclusion, RUPX',
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
  alternates: {
    canonical: 'https://rupaya.io',
    languages: {
      'en-US': '/en-US',
      'hi': '/hi',
      'ur': '/ur',
      'bn': '/bn',
    },
  },
}

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}');
            `,
          }}
        />
      </head>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.variable
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <PageTransition>
              <main className="flex-1">
                {children}
              </main>
            </PageTransition>
            <Footer />
            <ScrollToTop />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}