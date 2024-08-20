/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
    return [
      {
        source: '/',
        destination: process.env.INDEX_REWRITE_DESTINATION,
      },
    ]
  },
};

export default nextConfig;
