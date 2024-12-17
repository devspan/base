'use client'

import { useEffect } from 'react'

export function AntiClickjack() {
  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      if (self === top) {
        const antiClickjack = document.getElementById('antiClickjack')
        antiClickjack?.parentNode?.removeChild(antiClickjack)
      } else {
        top.location = self.location
      }
    }
  }, [])

  return (
    <style id="antiClickjack">
      {`body { display: none !important; }`}
    </style>
  )
} 