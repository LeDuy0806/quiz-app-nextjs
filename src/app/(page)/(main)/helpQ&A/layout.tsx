'use client';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <head>
                <title>Question And Answer</title>
                <link rel='shortcut icon' href='/assets/images/logoApp.png' />
            </head>
            <body>{children}</body>
        </html>
    );
}
