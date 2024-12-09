'use client'

import { Analytics } from '@vercel/analytics/react'
import { Analytics as GoogleAnalytics } from '@/components/analytics'

export function AnalyticsProvider() {
  return (
    <>
      <Analytics debug={process.env.NODE_ENV === 'development'} />
      <GoogleAnalytics />
    </>
  )
} 