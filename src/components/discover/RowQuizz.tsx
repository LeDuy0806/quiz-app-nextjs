import React, { useRef, useState } from 'react';

import QuizCard from './QuizCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const RowQuizz = () => {
    const rowRef = useRef<HTMLDivElement>(null);
    const [isMoved, setIsMoved] = useState(false);

    const handleMove = (value: string) => {
        setIsMoved(true);

        if (rowRef.current) {
            const { scrollLeft, clientWidth } = rowRef.current;

            const scrollTo = value === 'Left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;

            rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };
    return (
        <>
            <div className='justify-start space-y-2.5'>
                <div className='flex'>
                    <h2 className='w-56 cursor-pointer text-xl font-semibold text-black transition duration-200 hover:text-gray-300'>Recent Activity</h2>
                    <div className='block ml-auto'>
                        <button className='transition-colors duration-200 ease-in-out flex items-center justify-center px-4 py-1 text-sm h-8 base bg-purple-200 text-purple-700 hover:text-purple-500 active:text-purple-950 rounded-full  relative min-w-max ml-auto'>
                            <span>See more</span>
                            <i className='flex items-center ml-2 text-base'>
                                <FaChevronRight />
                            </i>
                        </button>
                    </div>
                </div>
                <div className='group relative flex w-full justify-between md:ml-2'>
                    <FaChevronLeft
                        className={`absolute top-0 bottom-0 left-2 z-40 m-auto
        h-9 w-9 cursor-pointer opacity-0 transition group-hover:opacity-100 ${!isMoved && 'hidden'}`}
                        onClick={() => handleMove('Left')}
                    />

                    <div
                        ref={rowRef}
                        className='flex w-full items-center space-x-4 overflow-hidden overflow-x-scroll py-2 scroll-smooth scrollbar-none sm:py-4'
                    >
                        <QuizCard />
                        <QuizCard />
                        <QuizCard />
                        <QuizCard />
                        <QuizCard />
                        <QuizCard />
                        <QuizCard />
                        <QuizCard />
                        <QuizCard />
                        <QuizCard />
                        <QuizCard />
                        <QuizCard />
                        <QuizCard />
                    </div>

                    <div className='bg-gradient-white'>
                        <FaChevronRight
                            className='absolute top-0 bottom-0 right-2 z-40 m-auto
              h-9 w-9 cursor-pointer opacity-0 transition group-hover:opacity-100'
                            onClick={() => handleMove('Right')}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default RowQuizz;
