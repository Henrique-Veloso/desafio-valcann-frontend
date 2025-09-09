/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'mars.nasa.gov',
      },
      {
        protocol: 'https',
        hostname: 'mars.nasa.gov',
      },
    ],
  },
};

module.exports = nextConfig;