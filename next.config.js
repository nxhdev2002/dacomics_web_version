/** @type {import('next').NextConfig} */
const { redirect } = require('next/dist/server/api-utils');
const slugify = require('slugify');
const nextConfig = {
  reactStrictMode: true,
  images: { domains: ['st.nettruyenvt.com', 'mangadex.org', 'uploads.mangadex.org'], formats: ['image/avif', 'image/webp'], },
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  }
  // async rewrites() {
  //   return [
  //     {
  //       source: '/comic/:comicId/:slug',
  //       destination: '/:comicId',
  //     },
  //     {
  //       source: '/comic/:comicId/',
  //       destination: '/:comicId',
  //     },
  //   ];
  // },
  // env: {
  //   BASE_URL: 'http://localhost:3000',
  // },

}

module.exports = nextConfig
