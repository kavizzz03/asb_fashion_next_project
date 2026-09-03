import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  httpAgentOptions: {
    keepAlive: true,
  },
  images: {
    qualities: [75, 90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "asbfashion.com",
      },
    ],
  },
};

export default nextConfig;