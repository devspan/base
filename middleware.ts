import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const allowedOrigins = ['https://rupaya.io', 'https://www.rupaya.io']

export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  
  // Get origin from request
  const origin = request.headers.get('origin')
  
  // Handle CORS
  if (origin && allowedOrigins.includes(origin)) {
    response.headers.set('Access-Control-Allow-Origin', origin)
  }
  
  // Security Headers including Clickjacking Protection
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type')
  response.headers.set('Access-Control-Max-Age', '86400')
  
  // Comprehensive CSP that includes clickjacking protection
  response.headers.set(
    'Content-Security-Policy',
    [
      "default-src 'self'",
      "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://*.vercel.live https://*.google-analytics.com https://*.googletagmanager.com https://vercel.live https://vercel.com",
      "style-src 'self' 'unsafe-inline'",
      "font-src 'self' data: https://fonts.gstatic.com",
      "img-src 'self' data: https: blob:",
      "connect-src 'self' https://scan.rupaya.io https://*.vercel.live https://vercel.live https://api.rupaya.io https://*.google-analytics.com",
      "frame-src 'self' https://*.vercel.live https://vercel.live",
      "frame-ancestors 'none'" // Clickjacking protection
    ].join('; ')
  )
  
  return response
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ]
} 