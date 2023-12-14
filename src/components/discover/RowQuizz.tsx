import React, { useRef, useState } from 'react';

import QuizCard from './QuizCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import QuizType from 'src/app/types/quizType';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const RowQuizz = ({ CategoryName, ListQuiz }: { CategoryName: string; ListQuiz: QuizType[] }) => {
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
                    <h2 className='w-fit cursor-pointer text-xl font-semibold text-black transition duration-200 hover:text-gray-300'>{CategoryName}</h2>
                    <div className='ml-auto block'>
                        <Link href={'/discover/section/public'}>
                            <button className='base relative ml-auto flex h-8 min-w-max items-center justify-center rounded-full bg-purple-200 px-4 py-1 text-sm text-purple-700 transition-colors duration-200  ease-in-out hover:text-purple-500 active:text-purple-950'>
                                <span>See more</span>
                                <i className='ml-2 flex items-center text-base'>
                                    <FaChevronRight />
                                </i>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='group relative flex w-full justify-between md:ml-2'>
                    <FaChevronLeft
                        className={`absolute bottom-0 left-2 top-0 z-40 m-auto
        h-9 w-9 cursor-pointer opacity-0 transition group-hover:opacity-100 ${!isMoved && 'hidden'}`}
                        onClick={() => handleMove('Left')}
                    />

                    <div
                        ref={rowRef}
                        className='flex w-full items-center space-x-4 overflow-hidden overflow-x-scroll scroll-smooth py-2 scrollbar-none sm:py-4'
                    >
                        {ListQuiz.map((quiz) => (
                            <QuizCard key={quiz._id} QuizData={quiz} />
                        ))}
                    </div>

                    <div className='bg-gradient-white'>
                        <FaChevronRight
                            className='absolute bottom-0 right-2 top-0 z-40 m-auto
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
