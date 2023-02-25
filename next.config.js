/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['pbs.twimg.com', 'img1.freepng.fr']
  }
}

module.exports = nextConfig
