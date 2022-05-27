/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        API_BASE_PATH: "http://localhost:5000",
      },
    };
  }
  return {
    reactStrictMode: true,
    env: {
      API_BASE_PATH: "https://nextjs-be.vercel.app/",
    },
  };
};

module.exports = nextConfig;
