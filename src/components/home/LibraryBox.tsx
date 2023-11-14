import QuizCard from './Quizcard';
import { motion } from 'framer-motion';

function LibraryBox() {
    return (
        <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className=' py-2 bg-slate-50 shadow-md rounded-md divide-y-2 w-full z-0'
        >
            <div className='px-6 py-1'>
                <span className='text-xl font-bold pb-2 border-b-2 border-blue-600'>My quizzes</span>
            </div>
            <div className=' space-y-2 pt-3 px-4 max-h-[17rem] overflow-auto z-10 overflow-x-hidden scrollbar-thin'>
                <QuizCard />
                <QuizCard />
                <QuizCard />
                <QuizCard />
                <QuizCard />
                <QuizCard />
                <QuizCard />
            </div>
            <p className='py-1 px-4 mt-1 text-center underline text-blue-500'>See All(1)</p>
        </motion.div>
    );
}

export default LibraryBox;
