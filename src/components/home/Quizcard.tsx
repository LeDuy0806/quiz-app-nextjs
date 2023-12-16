import Image from 'next/image';
import { motion } from 'framer-motion';
import QuizType, { CreatorType } from 'src/app/types/quizType';
import { TbCategory } from 'react-icons/tb';
import { DefaultBackground } from 'src/constants/image';

function QuizCard({ quiz }: { quiz: QuizType }) {
    return (
        <motion.div whileHover={{ scale: 1.025 }} whileTap={{ scale: 0.95 }} className='z-10 flex h-20 w-full rounded-sm bg-gray-50 shadow-md md:min-h-[5rem]'>
            <div className='relative w-32 min-w-[7rem] xl:w-36'>
                <Image src={quiz?.backgroundImage || DefaultBackground[0]} alt='Error' width={100} height={100} className='h-full w-full' />
                <div className='absolute bottom-1 left-1 rounded-md bg-gray-700 px-1'>
                    <span className='text-sm font-bold text-white'>{quiz?.numberOfQuestions} questions</span>
                </div>
            </div>
            <div className='flex w-full flex-col bg-gray-200 p-2'>
                <div className='h-12 md:min-h-[12]'>
                    <div className='overflow-hidden'>
                        <span className='line-clamp-2 text-lg font-bold'>{quiz?.name}</span>
                    </div>
                </div>
                <div className='flex w-full justify-start'>
                    <div className='max-w-[6rem] overflow-hidden'>
                        <span className='truncate'>{(quiz?.creator as CreatorType)?.firstName + ' ' + (quiz?.creator as CreatorType)?.lastName}</span>
                    </div>
                    <div className='ml-2 flex items-center overflow-hidden'>
                        <TbCategory className='text-xs' />
                        <span className=' ml-1 truncate'> {quiz?.category?.name}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default QuizCard;
