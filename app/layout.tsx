import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rupaya - Empowering South Asia through DeFi',
  description: 'Rupaya is a grassroots initiative leveraging decentralized finance (DeFi) and blockchain technology to tackle financial inclusion challenges in South Asia.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rupaya.io',
    siteName: 'Rupaya',
    images: [
      {
        url: 'https://via.placeholder.com/1200x630.png?text=Rupaya',
        width: 1200,
        height: 630,
        alt: 'Rupaya - Empowering South Asia through DeFi',
      },
    ],
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
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="rupaya-theme"
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}