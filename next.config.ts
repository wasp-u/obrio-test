import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  env: {
    FIRST_STEP: process.env.FIRST_STEP,
  },
};

export default nextConfig;
