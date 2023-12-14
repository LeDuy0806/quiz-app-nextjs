import Image from 'next/image';
import { motion } from 'framer-motion';

function QuizCard() {
    return (
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className='z-10 flex h-20 rounded-sm bg-gray-400 shadow-md md:min-h-[5rem]'>
            <div className='relative w-32 min-w-[7rem] xl:w-36'>
                <Image src={'/assets/images/default_quiz_background.png'} alt='Error' width={100} height={100} className='h-full w-full' />
                <div className='absolute bottom-1 left-1 rounded-md bg-gray-800 px-1'>
                    <span className='text-sm font-bold text-white'>2 questions</span>
                </div>
            </div>
            <div className='flex w-full flex-col bg-gray-300 p-2'>
                <div className='h-12 md:min-h-[12]'>
                    <div className='overflow-hidden'>
                        <span className='line-clamp-2 text-lg font-bold'>My quizzes</span>
                    </div>
                </div>
                <div className='flex w-full justify-between'>
                    <div className='max-w-[6rem] overflow-hidden'>
                        <span className='truncate'>Author</span>
                    </div>
                    <div className='ml-2 max-w-[5rem] overflow-hidden'>
                        <span className='truncate'>100 plays</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default QuizCard;
