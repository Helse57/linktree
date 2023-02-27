/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['pbs.twimg.com', 'img1.freepng.fr', 'proinfluent.b-cdn.net', 's3-symbol-logo.tradingview.com']
  }
}

module.exports = nextConfig
