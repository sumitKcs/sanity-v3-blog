/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["media.tenor.com"],
  },
};

module.exports = nextConfig;
