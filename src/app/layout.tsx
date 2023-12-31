'use client';

import './globals.css';
import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
import { SessionProvider } from 'next-auth/react';

// Toast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'node_modules/flag-icons/css/flag-icons.min.css';

//redux
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

//loading
import LiquidLoading from 'src/components/LiquidLoading';
import WithAuth from 'src/components/common/WithAuth';

// const inter = Inter({ subsets: ['latin'] });
export const metadata: Metadata = {
    title: 'Quizzes',
    description: 'Generated by create next app',
    icons: '/assets/images/logoApp.png'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <head>
                <title>Quizzes</title>
                <link rel='icon' href='/assets/images/logoApp.png' />
            </head>
            <body className={` scrollbar-none`}>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <SessionProvider>{children}</SessionProvider>
                    </PersistGate>
                </Provider>
                <ToastContainer />
            </body>
        </html>
    );
}
