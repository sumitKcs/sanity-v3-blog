/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["media.tenor.com", "cdn.sanity.io", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;
