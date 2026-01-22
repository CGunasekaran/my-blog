import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source:
          "/blog/building-my-portfolio-website-with-next-js-and-tailwind-css",
        destination: "/blog/portfolio-website",
        permanent: true,
      },
      {
        source:
          "/blog/building-my-portfolio-website-with-nextjs-and-tailwind-css",
        destination: "/blog/portfolio-website",
        permanent: true,
      },
      {
        source: "/blog/building-my-portfolio-website-with-next-js-and-tailwind",
        destination: "/blog/portfolio-website",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
