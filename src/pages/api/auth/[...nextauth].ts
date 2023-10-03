// import NextAuth from 'next-auth/next';
import NextAuth from 'next-auth';

import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
    session: {
        strategy: 'jwt'
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ''
            // authorization: {
            //     params: {
            //         prompt: 'consent',
            //         access_type: 'offline',
            //         response_type: 'code'
            //     }
            // }
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID || ' ',
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET || ''
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
});
