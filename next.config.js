/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ["192.168.1.9"],
  images:{
    remotePatterns:[
      {
        protocol:'https',
        hostname:'static.nike.com',
        port:'',
        pathname:'/**'
      },
      {
        protocol:'https',
        hostname:'lh3.googleusercontent.com',
        port:'',
        pathname:'/**'
      },
    ]
  }
};

module.exports = nextConfig;
