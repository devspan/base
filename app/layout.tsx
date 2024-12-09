import { Suspense } from 'react'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { ThemeProvider } from '@/components/theme-provider'
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
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="rupaya-theme"
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
              <Suspense fallback={null}>
                {children}
              </Suspense>
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}