/** @type {import('next').NextConfig} */
const optimizedImages = require("next-optimized-images");
const withPlugins = require("next-compose-plugins");
module.exports = {
  reactStrictMode: false,
  env: {
    SENDGRID_API_KEY:
      "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",
  },
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
