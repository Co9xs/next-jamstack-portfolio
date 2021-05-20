const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer({
  images: {
    domains: ['og-image-co9xs.vercel.app', 'images.microcms-assets.io', 'res.cloudinary.com']
  }
})
