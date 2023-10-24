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
                <div className='min-h-screen flex items-center justify-center overflow-hidden bg-[#00000080] z-[99]'>
                    <div className='relative w-64 h-64 animate-rotate [filter:url(#gooey)]'>
                        <div className='absolute h-20 w-20 top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-blue-loaing rounded-full animate-animateLoanding1'></div>
                        <div className='absolute h-20 w-20 top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-gradient-blue-loaing rounded-full animate-animateLoanding2'></div>
                        <div className='absolute h-20 w-20 top-1/2 left-full -translate-x-1/2 -translate-y-1/2 bg-gradient-blue-loaing rounded-full animate-animateLoanding3'></div>
                        <div className='absolute h-20 w-20 top-full left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-blue-loaing rounded-full animate-animateLoanding4'></div>
                    </div>
                    <svg className='w-0 h-0'>
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
