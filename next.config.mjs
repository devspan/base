/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com']
  },
  env: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_GOOGLE_ANALYTICS_ID: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID,
    NEXT_PUBLIC_RUPAYA_API_URL: process.env.NEXT_PUBLIC_RUPAYA_API_URL,
    NEXT_PUBLIC_ENABLE_TESTNET: process.env.NEXT_PUBLIC_ENABLE_TESTNET,
    NEXT_PUBLIC_TWITTER_HANDLE: process.env.NEXT_PUBLIC_TWITTER_HANDLE,
  },
}

export default nextConfig;
