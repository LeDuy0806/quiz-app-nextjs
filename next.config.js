/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    experimental: {
        appDir: true
    },
    env: {
        GOOGLE_CLIENT_ID:
            '343022034542-9vj6tpcpns5t47bqkm420hrcqc1buvce.apps.googleusercontent.com',
        GOOGLE_CLIENT_SECRET: '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',
        FACEBOOK_CLIENT_ID: '6649836831759728',
        FACEBOOK_CLIENT_SECRET: '248087d8d44acfb3de539e3823641868',
        NEXTAUTH_SECRET: '78zFZvyspgAIBXPKdA0AhFqcNWXX16/CEmBFOHU3iOg='
    },
    images: {
        domains: ['res.cloudinary.com']
    }
};

module.exports = nextConfig;
