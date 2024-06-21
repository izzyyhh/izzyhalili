/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        loader: 'akamai',
        path: '',
    },
}

module.exports = nextConfig
