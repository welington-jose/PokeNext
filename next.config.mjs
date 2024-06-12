/** @type {import('next').NextConfig} */
const nextConfig = {

        images: {
            remotePatterns: [
              {
                protocol: 'https', // Adjust if the protocol is different (e.g., 'http')
                hostname: 'raw.githubusercontent.com', // Allow images from GitHub
              },
            ],
          },
};


export default nextConfig;
