'use client';

import { BsFillStarFill } from 'react-icons/bs';
import QuizCard from './Quizcard';
import { motion } from 'framer-motion';
import QuizType from 'src/app/types/quizType';
import Link from 'next/link';
import paths from 'src/constants/paths';

function TopPickBox({ publicQuizzes }: { publicQuizzes: QuizType[] }) {
    return (
        <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className=' w-full rounded-md bg-slate-50 py-2 shadow-xl'
        >
            <div className='px-6 py-1'>
                <span className='pb-2 text-xl font-bold '>
                    Top Pick{' '}
                    <span className='ml-1 inline-block text-yellow-400'>
                        <BsFillStarFill />
                    </span>
                </span>
            </div>
            <div className='space-y-2 overflow-hidden px-4 pt-3 '>
                {publicQuizzes.map((quiz, i) => (
                    <Link
                        href={paths.details + '/' + quiz._id}
                        key={quiz._id}
                        className='z-10 flex h-20 w-full rounded-sm bg-gray-50 shadow-md md:min-h-[5rem]'
                    >
                        <QuizCard quiz={quiz} key={quiz._id} />
                    </Link>
                ))}
            </div>
            <div className='flex flex-col items-center justify-center px-6 py-4'>
                <p className='p-2 text-center font-bold'>More amazing things are still waiting for you! Discover for yourself.</p>
                <Link href={paths.discover}>
                    <button className=' inline-flex items-center rounded-lg bg-bgPurple px-3 py-2 text-center text-sm font-medium text-white hover:bg-bgPurplePower focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800'>
                        Discover Quiz
                    </button>
                </Link>
            </div>
        </motion.div>
    );
}

export default TopPickBox;
