import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow remote images for product thumbnails
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aceternity.com",
        pathname: "/images/**",
      },
    ],
    // Alternatively, you could use: domains: ["aceternity.com"],
  },
};

export default nextConfig;
