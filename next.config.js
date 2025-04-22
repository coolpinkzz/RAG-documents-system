/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  poweredByHeader: false,
  images: {
    domains: [
      'images.unsplash.com',
    ],
  },
  // Bind to all interfaces so we can access from outside
  server: {
    host: '0.0.0.0',
    port: 5000,
  },
  // Configure webpack for better development experience
  webpack(config) {
    // Enable source maps in development
    if (!config.mode === 'production') {
      config.devtool = 'source-map';
    }
    return config;
  },
  // Handle TypeScript errors at build time
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: false,
  },
  // Enable experimental features
  experimental: {
    serverActions: false,
  },
}

module.exports = nextConfig
