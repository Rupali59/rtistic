/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "rtistic.vercel.app"],
    formats: ["image/webp", "image/avif"],
  },
  experimental: {
    optimizePackageImports: ["framer-motion"],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
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
