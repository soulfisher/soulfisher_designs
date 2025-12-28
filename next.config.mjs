/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.soulfisherdesigns.pro'
      }
    ],
  },
  /*output: 'export',
  distDir: 'dist',*/
};

export default nextConfig;
