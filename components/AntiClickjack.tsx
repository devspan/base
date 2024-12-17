'use client'

import { useEffect } from 'react'

export function AntiClickjack() {
  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      if (window.top === window.self) {
        const antiClickjack = document.getElementById('antiClickjack')
        antiClickjack?.parentNode?.removeChild(antiClickjack)
      } else if (window.top) {
        window.top.location = window.self.location
      }
    }
  }, [])

  return (
    <style id="antiClickjack">
      {`body { display: none !important; }`}
    </style>
  )
} 