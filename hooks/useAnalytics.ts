'use client'

import { useCallback } from 'react'
import { event } from '@/lib/gtag'
import { track } from '@vercel/analytics'

export function useAnalytics() {
  const trackEvent = useCallback((name: string, properties?: Record<string, any>) => {
    // Track in Google Analytics
    event({
      action: name,
      category: properties?.category,
      label: properties?.label,
      value: properties?.value
    })

    // Track in Vercel Analytics
    track(name, properties)
  }, [])

  return { trackEvent }
} 