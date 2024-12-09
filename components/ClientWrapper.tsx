'use client'

import { Suspense } from 'react'

export function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={null}>
      {children}
    </Suspense>
  )
} 