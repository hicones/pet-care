import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },

  images: {
    remotePatterns: [
      {
        hostname: "unsplash.com",
      },
      {
        hostname: "images.unsplash.com",
      },
    ],
  },

  experimental: {
    serverActions: {
      bodySizeLimit: "5mb",
    },
  },

  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
};

export default nextConfig;
