/** @type {import('next').NextConfig} */
const allowedOrigins = ['https://rupaya.io', 'https://www.rupaya.io'];

const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://*.vercel.live https://*.google-analytics.com https://*.googletagmanager.com https://vercel.live https://vercel.com;
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data: https:;
    font-src 'self' data: https://fonts.gstatic.com;
    connect-src 'self' https://scan.rupaya.io https://*.vercel.live https://vercel.live https://api.rupaya.io https://*.google-analytics.com;
    frame-src 'self' https://*.vercel.live https://vercel.live;
    frame-ancestors 'none';
    form-action 'self';
    base-uri 'self';
    upgrade-insecure-requests;
`

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
    domains: ['rupaya.io', 'www.rupaya.io'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\n/g, '')
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          }
        ]
      }
    ]
  },
  env: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'https://rupaya.io',
    NEXT_PUBLIC_RUPAYA_API_URL: process.env.NEXT_PUBLIC_RUPAYA_API_URL || 'https://api.rupaya.io'
  },
  i18n: {
    locales: ['en', 'hi', 'bn', 'ur'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  experimental: {
    scrollRestoration: true,
    typedRoutes: true,
    serverActions: {
      bodySizeLimit: '2mb',
    },
    optimisticClientCache: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.rupaya.io/:path*'
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/wallet',
        destination: 'https://wallet.rupaya.io',
        permanent: true,
      },
      {
        source: '/exchange',
        destination: 'https://swap.rupaya.io',
        permanent: true,
      },
      {
        source: '/staking',
        destination: 'https://app.rupaya.io/staking',
        permanent: true,
      },
      // Add other redirects as needed
    ]
  }
};

export default nextConfig;
