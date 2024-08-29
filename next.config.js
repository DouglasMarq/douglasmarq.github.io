
module.exports = {
  output: 'export',
  distDir: 'build',
  optimizeFonts: true,
  eslint: {
      ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {esmExternals: false},
};
