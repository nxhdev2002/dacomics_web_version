/** @type {import('next').NextConfig} */
const { redirect } = require('next/dist/server/api-utils');
const slugify = require('slugify');
const nextConfig = {
  reactStrictMode: true,
  images: { domains: ['st.nettruyenvt.com', 'mangadex.org'], formats: ['image/avif', 'image/webp'], },
  async rewrites() {
    return [
      {
        source: '/comic/:comicId/:slug',
        destination: '/:comicId',
      },
      {
        source: '/comic/:comicId/',
        destination: '/:comicId',
      },
    ];
  },
  env: {
    BASE_URL: 'http://localhost:3000',
  },

}

module.exports = nextConfig
