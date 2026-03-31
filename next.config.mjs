/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    formats: ["image/avif"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/about-me",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
