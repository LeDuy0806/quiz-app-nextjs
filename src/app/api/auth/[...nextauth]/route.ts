// import NextAuth from 'next-auth/next';
import NextAuth from 'next-auth';

import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ''
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID ?? ' ',
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET ?? ''
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    debug: true
});

export { handler as GET, handler as POST };
