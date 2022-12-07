/** @type {import('next').NextConfig} */
const optimizedImages = require("next-optimized-images");
const withPlugins = require("next-compose-plugins");
module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  env: {
    LISTRI: process.env.NEXT_PUBLIC_LISTRI_MAIL,
  },
  reactStrictMode: false,

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    withPlugins([
      [
        optimizedImages,
        {
          /* config for next-optimized-images */
          target: "serverless",
        },
      ],

      // your other plugins here
    ]);

    return config;
  },
  images: {
    loader: "imgix",
    path: "",
    domains: ["images.prismic.io"],
  },
};
