import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // wildcard for any domain
      },
      {
        protocol: 'http',
        hostname: '**', // optional: include http as well
      },
    ],
  },
};

export default nextConfig;
