import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    // Allow remote images for product thumbnails
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aceternity.com",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      }
    ],
    // Alternatively, you could use: domains: ["aceternity.com"],
  },
};

export default nextConfig;
