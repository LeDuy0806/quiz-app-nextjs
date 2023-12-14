'use client';

import { useEffect } from 'react';

//components
import HomeCard from 'src/components/home/HomeCard';
import LibraryBox from 'src/components/home/LibraryBox';
import CarouselBanner from 'src/components/home/CarouselBanner';
import TopPickBox from 'src/components/home/TopPickBox';
import UserInfoCard from 'src/components/home/UserInfoCard';

//redux
import { useAppDispatch, useAppSelector } from 'src/app/redux/hooks';
import { createSocket } from 'src/app/redux/slices/socketSlice';

//socket
import type { Socket } from 'socket.io-client';
import io from 'socket.io-client';
import { API } from 'src/app/redux/api';

function HomePage() {
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.auth.authData?.user);

    const socket = useAppSelector((state) => state.socket.socket);

    // useEffect(() => {
    //     // if (socket) {
    //     //     console.log(socket);
    //     // }
    // }, [socket]);

    useEffect(() => {
        if (user && !socket) {
            const socket: Socket = io(API, {
                transports: ['websocket']
            });
            socket.connect();
            dispatch(createSocket(socket));
            // return () => {
            //     socket.disconnect();
            // };
        }
    }, [user, dispatch, socket]);

    return (
        <div className='min-h-[calc(100vh-4rem)] p-4 dark:bg-slate-600 max-md:flex-col'>
            <div className='mb-4 w-full'>
                {/* <CarouselBanner autoSlide={true} autoSlideInterval={10000000} /> */}
                <CarouselBanner autoSlide={true} />
            </div>
            <div className='mb-2 flex w-full gap-2 max-md:flex-col'>
                <div className='flex w-full px-2'>
                    <UserInfoCard />
                </div>
                <div className='flex w-full px-2'>
                    <LibraryBox />
                </div>
            </div>
            <div className='mt-4 px-2'>
                <HomeCard />
            </div>
            <div className='mt-4 flex w-full flex-col items-center'>
                <div className='xl:w-[50%]'>
                    <TopPickBox />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
