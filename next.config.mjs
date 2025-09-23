/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/resume/download',
        destination: '/SamuelPotter.pdf',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
