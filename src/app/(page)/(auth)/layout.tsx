'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useAuth } from 'src/hooks/useAuth';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const { user } = useAuth();

    const [isMounted, setIsMounted] = useState(false);
    const [canRenderChildren, setCanRenderChildren] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);
    useEffect(() => {
        if (user._id !== '' && user._id !== undefined && user._id !== null) {
            router.push('/home');
        } else {
            setCanRenderChildren(true);
        }
    }, [isMounted, user, router]);

    if (canRenderChildren) return <div className='flex min-h-screen'>{children}</div>;
}
