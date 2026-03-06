import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Set basePath to repository name so assets load correctly on GitHub Pages
  basePath: '/itzfizz',
  // Disable image optimization because it requires a Node.js server
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
