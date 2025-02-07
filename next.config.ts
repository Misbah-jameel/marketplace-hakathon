import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['img.clerk.com'], 
  },
  experimental: {
    // turbopack: true, // Enable turbopack
  },
};

export default nextConfig;
