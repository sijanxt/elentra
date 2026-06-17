import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "me7aitdbxq.ufs.sh",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
