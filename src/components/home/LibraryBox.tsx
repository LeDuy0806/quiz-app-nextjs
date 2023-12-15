import QuizType from 'src/app/types/quizType';
import QuizCard from './Quizcard';
import { motion } from 'framer-motion';
import Link from 'next/link';
import paths from 'src/constants/paths';

function LibraryBox({ teacherQuizzes }: { teacherQuizzes: QuizType[] }) {
    return (
        <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className=' z-0 w-full divide-y-2 rounded-md bg-slate-50 py-2 shadow-md'
        >
            <div className='px-6 py-1'>
                <span className='border-b-2 border-blue-600 pb-2 text-xl font-bold'>My quizzes</span>
            </div>
            <div className=' z-10 max-h-[17rem] space-y-2 overflow-auto overflow-x-hidden px-4 pt-3 scrollbar-thin'>
                {teacherQuizzes.map((quiz, i) => (
                    <QuizCard key={quiz._id} quiz={quiz} />
                ))}
            </div>
            <Link href={paths.library}>
                <div className='mt-1 flex w-full cursor-pointer  items-center justify-center px-4 py-1 text-lilac hover:underline'>
                    <span>See All ({teacherQuizzes.length})</span>
                </div>
            </Link>
        </motion.div>
    );
}

export default LibraryBox;
