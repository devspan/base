import { Suspense } from 'react'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { ThemeProvider } from '@/components/theme-provider'
import { AnalyticsProvider } from '@/components/providers/AnalyticsProvider'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'

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
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="rupaya-theme"
        >
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
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}