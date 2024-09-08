/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['aceternity.com'],
        formats: ['image/avif', 'image/webp'],
    }
};

export default nextConfig;
