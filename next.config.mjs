/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.stockbit.com",
        pathname: "/securities/logos/**",
      },
    ],
  },
};

export default nextConfig;
