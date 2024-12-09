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
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://*.vercel.live https://*.google-analytics.com https://*.googletagmanager.com",
              "style-src 'self' 'unsafe-inline'",
              "font-src 'self' data: https://www.rupaya.io",
              "img-src 'self' data: https: blob:",
              "connect-src 'self' https://scan.rupaya.io https://*.vercel.live https://api.rupaya.io",
              "frame-src 'self' https://*.vercel.live"
            ].join('; ')
          }
        ]
      }
    ]
  },
  env: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
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