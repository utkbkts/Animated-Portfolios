/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    webpackFinal: async (config, { configType }) => {
      config.resolve.alias = {
        ...config.resolve.alias,
        "next/router": "next-router-mock",
      };
      return config;
    },
    images: {
      domains: ['images.unsplash.com'],
    },
  };
