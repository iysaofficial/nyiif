/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    if (options.dev) {
      config.watchOptions = {
        poll: 1000, // Cek perubahan setiap detik
        aggregateTimeout: 300, // Tunggu 300ms setelah perubahan
      };
    }
    return config;
  },
};

export default nextConfig;
