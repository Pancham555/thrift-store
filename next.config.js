/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "localhost", "res.cloudinary.com"],
  },
  env: {
    STRAPI_URL: process.env.STRAPI_URL,
    RAZORPAY_APIKEY: process.env.RAZORPAY_APIKEY,
  },
};

module.exports = nextConfig;
