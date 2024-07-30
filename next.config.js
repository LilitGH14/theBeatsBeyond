const nextConfig = {
  output: "export",
  // distDir: "out",
  reactStrictMode: false,
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  generateBuildId: async () => {
    return process.env.GIT_HASH;
  },
  experimental: {
    webVitalsAttribution: ['CLS', 'LCP']
  }
};
module.exports = nextConfig;
