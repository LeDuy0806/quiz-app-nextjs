import Image from 'next/image';
import { motion } from 'framer-motion';

function QuizCard() {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='bg-gray-400 flex h-20 md:min-h-[5rem] rounded-sm shadow-md z-10'
        >
            <div className='relative w-32 min-w-[7rem] xl:w-36'>
                <Image
                    src={'/assets/images/default_quiz_background.png'}
                    alt='Error'
                    width={100}
                    height={100}
                    className='w-full h-full'
                />
                <div className='absolute bottom-1 left-1 rounded-md bg-gray-800 px-1'>
                    <span className='text-white text-sm font-bold'>
                        2 questions
                    </span>
                </div>
            </div>
            <div className='flex flex-col p-2 w-full bg-gray-300'>
                <div className='h-14 md:min-h-[14]'>
                    <div className='overflow-hidden'>
                        <span className='font-bold line-clamp-2 text-lg'>
                            My quizzes
                        </span>
                    </div>
                </div>
                <div className='flex justify-between w-full'>
                    <div className='overflow-hidden max-w-[6rem]'>
                        <span className='truncate'>Author</span>
                    </div>
                    <div className='overflow-hidden max-w-[5rem] ml-2'>
                        <span className='truncate'>100 plays</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default QuizCard;
