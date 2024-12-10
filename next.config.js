const isProduction = process.env.NODE_ENV === 'production'
const prefix = isProduction ? '/pagina-ansiedad' : ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: prefix,
  basePath: prefix,
}

module.exports = nextConfig