/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === "production";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

const nextConfig = {
  async rewrites() {
    if (isProduction) {
      /**
       *
       * If node env is production, we cannot rely on nginx reverse proxy it will redirect requests to api, as there is no nginx on prod -> in that case client (next.js) app needs to proxy the /api/* requests to proper remote api endpoint by itself.
       *
       * It does not apply to development env, so there's "isProduction" condition
       *
       */
      return [
        {
          source: "/api/:path*",
          destination: `${API_URL}/api/:path*`,
        },
      ];
    }

    return [];
  },
};

module.exports = nextConfig;
