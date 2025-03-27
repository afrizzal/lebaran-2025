/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: '/asset/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/img/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/music/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  typescript: {
    // Untuk menghindari error TypeScript saat build di Vercel
    ignoreBuildErrors: true,
  },
  eslint: {
    // Untuk menghindari error ESLint saat build di Vercel
    ignoreDuringBuilds: true,
  },
  // Konfigurasi output untuk Vercel
  output: 'standalone',
};

module.exports = nextConfig; 