'use client';
import { Inter } from 'next/font/google';
import SideBar from 'src/components/common/SideBar';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <head>
                <title>Quiz Creator</title>
                <link rel='shortcut icon' href='/assets/images/logoApp.png' />
            </head>
            <body className={inter.className} suppressHydrationWarning={true}>
                {children}
            </body>
        </html>
    );
}
