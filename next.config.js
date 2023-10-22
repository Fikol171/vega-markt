/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["i.dummyjson.com"],
  },
  basePath: "/Vega",
  publicRuntimeConfig: {
    basePath: "/Vega",
  },
  serverRuntimeConfig: {
    basePath: "/Vega",
  },
};

module.exports = nextConfig;
