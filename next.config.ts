// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      treeShaking: false,
      memoryLimit: 1024 * 1024 * 512, // 512MB
    },
  },
};

export default nextConfig;
