// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      // Local development
      { protocol: 'http', hostname: '127.0.0.1' },
      { protocol: 'http', hostname: 'localhost' },

      // 🔥 Amediatv uchun
      { protocol: 'http', hostname: 'cdn.amediatv.uz' },
      { protocol: 'https', hostname: 'cdn.amediatv.uz' },

      // Boshqa rasm manbalari
      { protocol: 'https', hostname: 'i.pinimg.com' },
      { protocol: 'https', hostname: 'i.namu.wiki' },
      { protocol: 'https', hostname: 'media.tenor.com' },
      { protocol: 'https', hostname: 'resizing.flixster.com' },
      { protocol: 'https', hostname: 'm.media-amazon.com' },

      // 🆕 🔹 Bu siz ishlatayotgan yangi rasm domeni:
      {
        protocol: 'https',
        hostname: 'depositphotos-blog.s3.eu-west-1.amazonaws.com',
      },
    ],
  },
};

export default nextConfig;
