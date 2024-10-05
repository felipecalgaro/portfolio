/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        pathname: "/felipecalgaro.png",
      },
    ],
  },
};

export default nextConfig;
