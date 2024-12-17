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

/** @type {import('next').NextConfig} */
const nextConfig = {
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
  }
}

export default nextConfig 