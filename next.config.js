/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    experimental: {
        appDir: true
    },
    env: {
        GOOGLE_CLIENT_ID: '343022034542-9vj6tpcpns5t47bqkm420hrcqc1buvce.apps.googleusercontent.com',
        GOOGLE_CLIENT_SECRET: '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',
        FACEBOOK_CLIENT_ID: '715561680446168',
        FACEBOOK_CLIENT_SECRET: 'b14fabedd77bdedbc8102dad0c350c99',
        NEXTAUTH_SECRET: 'af017d04a8083251abdebb81b1fbb498',
        NEXTAUTH_URL: 'http://localhost:3000/'
    },
    images: {
        domains: [
            'res.cloudinary.com',
            'lh3.googleusercontent.com',
            'scontent.fsgn2-8.fna.fbcdn.net',
            'platform-lookaside.fbsbx.com',
            'scontent.fsgn21-1.fna.fbcdn.net',
            'images.unsplash.com',
            'cf.quizizz.com',
            'global-uploads.webflow.com',
            'demos.creative-tim.com'
        ]
    }
};

module.exports = nextConfig;
