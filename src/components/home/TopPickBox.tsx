'use client';

import { BsFillStarFill } from 'react-icons/bs';
import QuizCard from './Quizcard';
import { motion } from 'framer-motion';

function TopPickBox() {
    return (
        <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className=' py-2 bg-slate-50 shadow-xl rounded-md w-full'
        >
            <div className='px-6 py-1'>
                <span className='text-xl font-bold pb-2 '>
                    Top Pick{' '}
                    <span className='inline-block text-yellow-400 ml-1'>
                        <BsFillStarFill />
                    </span>
                </span>
            </div>
            <div className='space-y-2 pt-3 px-4 overflow-hidden '>
                <QuizCard />
                <QuizCard />
                <QuizCard />
                <QuizCard />
                <QuizCard />
            </div>
            <div className='py-4 px-6 flex items-center justify-center flex-col'>
                <p className='p-2 text-center font-bold'>
                    More amazing things are still waiting for you! Discover for
                    yourself.
                </p>
                <button className=' inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-bgPurple rounded-lg hover:bg-bgPurplePower focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'>
                    Discover Quiz
                </button>
            </div>
        </motion.div>
    );
}

export default TopPickBox;
