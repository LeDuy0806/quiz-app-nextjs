'use client';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

function LiquidLoading() {
    // const router = useRouter();
    const pathname = usePathname();

    // const [loading, setLoading] = useState<Boolean>(false);

    // useEffect(() => {
    //     const handleStart = (url: string) => url !== pathname && setLoading(true);
    //     const handleComplete = (url: string) => url === pathname && setLoading(false);

    //     router.events.on('routeChangeStart', handleStart);
    //     router.events.on('routeChangeComplete', handleComplete);
    //     router.events.on('routeChangeError', handleComplete);

    //     return () => {
    //         router.events.off('routeChangeStart', handleStart);
    //         router.events.off('routeChangeComplete', handleComplete);
    //         router.events.off('routeChangeError', handleComplete);
    //     };
    // });
    return (
        true && (
            <div>
                <div className='z-[99] flex min-h-screen items-center justify-center overflow-hidden bg-black/15'>
                    <div className='relative h-64 w-64 animate-rotate [filter:url(#gooey)]'>
                        <div className='absolute left-1/2 top-0 h-20 w-20 -translate-x-1/2 -translate-y-1/2 animate-animateLoanding1 rounded-full bg-gradient-blue-loaing'></div>
                        <div className='absolute left-0 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 animate-animateLoanding2 rounded-full bg-gradient-blue-loaing'></div>
                        <div className='absolute left-full top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 animate-animateLoanding3 rounded-full bg-gradient-blue-loaing'></div>
                        <div className='absolute left-1/2 top-full h-20 w-20 -translate-x-1/2 -translate-y-1/2 animate-animateLoanding4 rounded-full bg-gradient-blue-loaing'></div>
                    </div>
                    <svg className='h-0 w-0'>
                        <filter id='gooey'>
                            <feGaussianBlur in='SourceGraphic' stdDeviation='10' />
                            <feColorMatrix
                                values='
        1 0 0 0 0
        0 1 0 0 0
        0 0 1 0 0
        0 0 0 20 -10
        '
                            />
                        </filter>
                    </svg>
                </div>
            </div>
        )
    );
}

export default LiquidLoading;
