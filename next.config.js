
module.exports = {
  output: 'export',
  distDir: 'build',
  basePath: "/nextjs-github-pages",
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
