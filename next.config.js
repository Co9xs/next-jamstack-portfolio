module.exports = {
  images: {
    domains: ['og-image-co9xs.vercel.app', 'images.microcms-assets.io', 'res.cloudinary.com']
  }
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer({})