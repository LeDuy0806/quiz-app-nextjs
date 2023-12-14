'use client';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useAppSelector } from 'src/app/redux/hooks';

interface IProps {
    children: React.ReactNode;
}

function WithAuth({ children }: IProps) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isAuthSide, setIsAuthSide] = useState(true);
    const router = useRouter();
    const pathName = usePathname();

    const user = useAppSelector((state) => state.auth.authData?.user);

    useEffect(() => {
        if (user._id === '' || user._id === undefined || user._id === null || typeof user._id !== 'string') {
            setIsAuthenticated(false);
        } else {
            setIsAuthenticated(true);
        }
        if (pathName.includes('/signIn') || pathName.includes('/signUp')) {
            setIsAuthSide(true);
        } else {
            setIsAuthSide(false);
        }
    }, []);

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/signIn');
            setIsAuthSide(true);
        }
        if (isAuthSide && isAuthenticated) {
            router.push('/home');
            setIsAuthSide(false);
        }
    }, [isAuthenticated, isAuthSide]);

    if (isAuthenticated && !isAuthSide) {
        return children;
    }

    if (!isAuthenticated && isAuthSide) {
        return children;
    }
}
export default WithAuth;
