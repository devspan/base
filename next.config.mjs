/** @type {import('next').NextConfig} */
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
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://*.vercel.live https://*.google-analytics.com https://*.googletagmanager.com https://vercel.live https://vercel.com",
              "style-src 'self' 'unsafe-inline'",
              "font-src 'self' data:",
              "img-src 'self' data: https: blob:",
              "connect-src 'self' https://scan.rupaya.io https://*.vercel.live https://vercel.live https://api.rupaya.io https://*.google-analytics.com",
              "frame-src 'self' https://*.vercel.live https://vercel.live"
            ].join('; ')
          },
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://rupaya.io'
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, OPTIONS'
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type'
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
    optimizeCss: true,
    scrollRestoration: true,
    typedRoutes: true,
  },
};

export default nextConfig;