'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useAppSelector } from 'src/app/redux/hooks';
import LiquidLoading from '../LiquidLoading';

interface IProps {
    children: React.ReactNode;
}

function WithAuth({ children }: IProps) {
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const [canRenderChildren, setCanRenderChildren] = useState(false);
    const router = useRouter();
    const user = useAppSelector((state) => state.auth.authData?.user);

    useEffect(() => {
        if (user._id === '' || user._id === undefined || user._id === null || typeof user._id !== 'string') {
            setIsAuthenticated(false);
        } else {
            setIsAuthenticated(true);
        }
    }, []);

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/signIn');
        } else {
            setCanRenderChildren(true);
        }
    }, [isAuthenticated]);

    // if (canRenderChildren) {
    //     return <>{isAuthenticated && children}</>;
    // }

    return canRenderChildren ? <>{isAuthenticated && children}</> : <LiquidLoading />;
}
export default WithAuth;
