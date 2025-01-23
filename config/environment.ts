// Centralize environment configuration
export const config = {
  api: {
    url: process.env.NEXT_PUBLIC_API_URL,
    timeout: 30000,
  },
  features: {
    analytics: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true',
    testnet: process.env.NEXT_PUBLIC_ENABLE_TESTNET === 'true',
  },
  seo: {
    siteName: process.env.NEXT_PUBLIC_SITE_NAME,
    baseUrl: process.env.NEXT_PUBLIC_APP_URL,
  }
} as const 