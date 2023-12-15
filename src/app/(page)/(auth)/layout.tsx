'use client';

import { useRouter } from 'next/navigation';
import { useAppSelector } from 'src/app/redux/hooks';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const user = useAppSelector((state) => state.auth.authData?.user);

    if (user._id !== '' && user._id !== undefined && user._id !== null) {
        return router.push('/home');
    }

    return <div className='flex min-h-screen'>{children}</div>;
}
