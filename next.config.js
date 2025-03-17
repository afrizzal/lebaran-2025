/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true,
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