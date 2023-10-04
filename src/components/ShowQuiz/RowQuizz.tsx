import React, { useRef, useState } from 'react';

import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import ThumbNailActived from './ThumbNailActived';
import ThumbNailInactived from './ThumbNailInactived';

const RowQuizz = () => {
    const rowRef = useRef<HTMLDivElement>(null);
    const [isMoved, setIsMoved] = useState(false);
    const [isRecentActivity, setIsRecentActivity] = useState(true);

    const handleMove = (value: string) => {
        setIsMoved(true);

        if (rowRef.current) {
            const { scrollLeft, clientWidth } = rowRef.current;

            const scrollTo =
                value === 'Left'
                    ? scrollLeft - clientWidth
                    : scrollLeft + clientWidth;

            rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };
    return (
        <>
            {isRecentActivity ? (
                <div className='justify-start space-y-2.5'>
                    <h2 className='w-56 cursor-pointer text-xl font-semibold text-black transition duration-200 hover:text-gray-300'>
                        Recent Activity
                    </h2>
                    <div className='group relative flex h-full justify-between md:ml-2'>
                        <HiChevronLeft
                            className={`absolute top-0 bottom-0 left-2 z-40 m-auto
        h-9 w-9 cursor-pointer opacity-0 transition group-hover:opacity-100 ${
            !isMoved && 'hidden'
        }`}
                            onClick={() => handleMove('Left')}
                        />

                        <div
                            ref={rowRef}
                            className='flex h-full items-center space-x-4 overflow-hidden overflow-x-scroll py-2 scrollbar-hide sm:py-4'
                        >
                            <ThumbNailActived />
                            <ThumbNailActived />
                            <ThumbNailActived />
                            <ThumbNailActived />
                            <ThumbNailActived />
                            <ThumbNailActived />
                            <ThumbNailActived />
                            <ThumbNailActived />
                            <ThumbNailActived />
                            <ThumbNailActived />
                            <ThumbNailActived />
                            <ThumbNailActived />
                            <ThumbNailActived />
                            <ThumbNailActived />
                            <ThumbNailActived />
                            <ThumbNailActived />
                            <ThumbNailActived />
                            <ThumbNailActived />
                            <ThumbNailActived />
                        </div>

                        <HiChevronRight
                            className='absolute top-0 bottom-0 right-2 z-40 m-auto
          h-9 w-9 cursor-pointer opacity-0 transition group-hover:opacity-100'
                            onClick={() => handleMove('Right')}
                        />
                    </div>
                </div>
            ) : (
                <div className=' '>
                    <div className='flex flex-row justify-between'>
                        <h2 className='w-56 cursor-pointer text-xl font-semibold text-black transition duration-200 hover:text-gray-300'>
                            Recent Activity
                        </h2>
                        <button className='h-[30px] w-[90px] items-center rounded-md bg-[#EEE9F4] font-bold text-[#8854C0] hover:bg-[#d9c2f6]'>
                            See More
                        </button>
                    </div>
                    <div className='group relative flex justify-between md:ml-2'>
                        <HiChevronLeft
                            className={`absolute top-0 bottom-0 left-2 z-40 m-auto
    h-9 w-9 cursor-pointer opacity-0 transition group-hover:opacity-100 ${
        !isMoved && 'hidden'
    }`}
                            onClick={() => handleMove('Left')}
                        />

                        <div
                            ref={rowRef}
                            className='flex items-center space-x-4 overflow-hidden overflow-x-scroll py-2 scrollbar-hide sm:py-4'
                        >
                            <ThumbNailInactived />
                            <ThumbNailInactived />
                            <ThumbNailInactived />
                            <ThumbNailInactived />
                            <ThumbNailInactived />
                            <ThumbNailInactived />
                            <ThumbNailInactived />
                            <ThumbNailInactived />
                        </div>

                        <HiChevronRight
                            className='absolute top-0 bottom-0 right-2 z-40 m-auto
      h-9 w-9 cursor-pointer opacity-0 transition group-hover:opacity-100'
                            onClick={() => handleMove('Right')}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default RowQuizz;
