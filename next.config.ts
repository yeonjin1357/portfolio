import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
      { protocol: "https", hostname: "media.dev.to" },
      { protocol: "https", hostname: "velog.velcdn.com" },
    ],
  },
};

export default nextConfig;
