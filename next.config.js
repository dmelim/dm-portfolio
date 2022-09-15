/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { domains: ["static1.dualshockersimages.com", "1000logos.net"] },
};

module.exports = nextConfig;
