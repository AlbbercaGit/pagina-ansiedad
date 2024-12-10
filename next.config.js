/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/pagina-ansiedad/',
  basePath: '/pagina-ansiedad',
}

module.exports = nextConfig