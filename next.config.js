/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "rtistic.vercel.app"],
    formats: ["image/webp", "image/avif"],
  },
  experimental: {
    optimizePackageImports: ["framer-motion"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  trailingSlash: false,
  swcMinify: true,
};

module.exports = nextConfig;
