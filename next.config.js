/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            port: '',
            pathname: '/dcgre5gxz/image/upload/**',
          },
        ],
      },
      env:{
        API_URL:process.env.API_URL
      }
}

module.exports = nextConfig
