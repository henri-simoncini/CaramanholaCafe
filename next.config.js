/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        // Alguns pratos brasileiros (pão de queijo, coxinha) não existem no
        // Unsplash — esses placeholders vêm do Wikimedia Commons.
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
    ],
  },
};

module.exports = nextConfig;
