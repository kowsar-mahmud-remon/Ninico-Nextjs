/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [""],
    unoptimized: true,
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  reactStrictMode: true,
  trailingSlash: true,
  output: "export",
};

module.exports = nextConfig;
