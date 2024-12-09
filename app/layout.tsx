import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from '@/components/analytics'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}