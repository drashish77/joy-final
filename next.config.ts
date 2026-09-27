import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://images.unsplash.com',
        port: '',
        // pathname: '/my-bucket/**',
        search: ''
      }
    ]
  },
  allowedDevOrigins: ['192.168.31.147', '192.168.31.130']
}

export default nextConfig;
