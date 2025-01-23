import { Suspense } from 'react'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { AnalyticsProvider } from '@/components/providers/AnalyticsProvider'
import { AntiClickjack } from '@/components/AntiClickjack'
import { Providers } from './providers'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rupaya',
  description: 'Rupaya - Empowering South Asia through DeFi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <AntiClickjack />
      </head>
      <body className={inter.className}>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Suspense>
              <Header />
            </Suspense>
            <main className="flex-1">
              <Suspense fallback={<div>Loading...</div>}>
                {children}
              </Suspense>
            </main>
            <Suspense>
              <Footer />
            </Suspense>
          </div>
          <Suspense>
            <AnalyticsProvider />
          </Suspense>
        </Providers>
      </body>
    </html>
  )
}