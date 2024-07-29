const nextConfig = {
  output: 'export',
  distDir: "out",
  reactStrictMode: false,
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true,
 },
};
module.exports = nextConfig;
