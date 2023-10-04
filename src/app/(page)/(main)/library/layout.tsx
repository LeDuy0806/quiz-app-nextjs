'use client';
import SideBar from 'src/components/common/SideBar';

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <head>
                <title>Library - Quizzes</title>
                <link rel='shortcut icon' href='/assets/images/logoApp.png' />
            </head>
            <body>
                <SideBar>{children}</SideBar>
            </body>
        </html>
    );
}
