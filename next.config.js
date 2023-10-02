/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    experimental: {
        appDir: true
    },
    env: {
        NEXTAUTH_SECRET: 'quocanh',
        GOOGLE_CLIENT_ID:
            '343022034542-9vj6tpcpns5t47bqkm420hrcqc1buvce.apps.googleusercontent.com',
        GOOGLE_CLIENT_SECRET: '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'
    }
};

module.exports = nextConfig;
