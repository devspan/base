import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Add security headers
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; connect-src 'self' https://scan.rupaya.io https://*.google-analytics.com; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://*.google-analytics.com https://*.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self' https: data:;"
  )

  return response
} 