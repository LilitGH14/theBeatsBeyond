const nextConfig = {
  output: 'export',
  distDir: "build",
  reactStrictMode: false,
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true,
 },
};
module.exports = nextConfig;
