import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://activ8-public.s3.us-east-1.amazonaws.com',
        pathname: '/**',
      },
    ],
  },
  videos: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://fps.cdnpk.net',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
