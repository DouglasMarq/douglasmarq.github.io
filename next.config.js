
module.exports = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  optimizeFonts: true,
  eslint: {
      ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {esmExternals: false},
};
