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