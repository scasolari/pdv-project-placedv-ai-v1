/** @type {import('next').NextConfig} */
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
})

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['badges.frapsoft.com'],
  },
}

module.exports = withNextra(nextConfig)
