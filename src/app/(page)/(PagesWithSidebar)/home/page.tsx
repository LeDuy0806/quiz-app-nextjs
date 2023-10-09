'use client';

import { useAppSelector } from 'src/app/redux/hooks';
import HomeCard from 'src/components/home/HomeCard';
import LibraryBox from 'src/components/home/LibraryBox';
import CarouselBanner from 'src/components/home/CarouselBanner';
import TopPickBox from 'src/components/home/TopPickBox';
import UserInfoCard from 'src/components/home/UserInfoCard';
import Head from 'next/head';
import { useEffect } from 'react';

function HomePage() {
    const state = useAppSelector((state) => state.user);
    // console.log(state);
    useEffect(() => {
        document.title = 'Home - Quizzes';
    }, []);

    return (
        <div className='p-4 dark:bg-slate-600 min-h-[calc(100vh-4rem)] max-md:flex-col'>
            <div className='w-full mb-4'>
                {/* <CarouselBanner autoSlide={true} autoSlideInterval={10000000} /> */}
                <CarouselBanner autoSlide={true} />
            </div>
            <div className='flex w-full mb-2 gap-2 max-md:flex-col'>
                <div className='flex px-2 w-full'>
                    <UserInfoCard />
                </div>
                <div className='flex px-2 w-full'>
                    <LibraryBox />
                </div>
            </div>
            <div className='px-2 mt-4'>
                <HomeCard />
            </div>
            <div className='flex flex-col items-center w-full mt-4'>
                <div className='xl:w-[50%]'>
                    <TopPickBox />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
