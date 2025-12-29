/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  serverless: {
    timeout: 60,
  },
};

module.exports = nextConfig;
