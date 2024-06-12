/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['three'],
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.ctfassets.net',
                port: '',
                pathname: '/**'
            },
            {
                protocol: 'https',
                hostname: '**.cdninstagram.com',
                port: '',
                pathname: '/**'
            }
        ]
    }
}
export default nextConfig
