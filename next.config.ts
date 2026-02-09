import createNextIntlPlugin from 'next-intl/plugin';

// بشكل افتراضي، يبحث عن الملف في './src/i18n/request.ts'
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default withNextIntl(nextConfig);