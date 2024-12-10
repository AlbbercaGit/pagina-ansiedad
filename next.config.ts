import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/pagina-ansiedad' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/pagina-ansiedad' : '',
}

export default nextConfig

