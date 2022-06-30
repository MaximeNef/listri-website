/** @type {import('next').NextConfig} */
const optimizedImages = require("next-optimized-images");
const withPlugins = require("next-compose-plugins");
module.exports = {
  reactStrictMode: false,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },

  images: {
    loader: "akamai",
    domains: ["images.prismic.io"],
  },
};

module.exports = withPlugins([
  [
    optimizedImages,
    {
      /* config for next-optimized-images */
      target: "serverless",
    },
  ],

  // your other plugins here
]);
