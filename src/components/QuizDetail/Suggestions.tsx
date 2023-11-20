import Image from 'next/image';
import { FaChevronRight } from 'react-icons/fa';

const QuizCard = () => {
    return (
        <div className='w-full xl:w-80 p-1 rounded hover:bg-gray-200 bg-white border-gray-500'>
            <div className='relative flex cursor-pointer'>
                <div className='relative rounded-lg '>
                    <div className='relative w-20 h-20 max-w-[5rem] rounded-lg'>
                        <Image src={'/assets/images/default_quiz_background.png'} alt='Quiz Image' fill objectFit='contain' />
                    </div>
                    <h6 className='absolute bottom-0 right-0 text-[10px] text-white bg-gray-700 rounded px-1'> 10 Qs</h6>
                </div>
                <div className='flex flex-col mx-2 py-4'>
                    <h5 className='text-sm font-semibold text-dark-3'>Quiz title</h5>
                    <h5 className='text-sm text-dark-3'>Author name</h5>
                </div>
            </div>
        </div>
    );
};

const Suggestions = () => {
    return (
        <div className=' py-4 max-xl:px-4 xl:ml-8 xl:w-80'>
            <h2 className='mb-4 flex justify-between'>
                <span className='text-sm'>Recommend for you</span>
                <button className='bg-purple-100 text-xs text-purple-500 flex justify-center items-center py-1 px-3 rounded border border-purple-400 cursor-pointer'>
                    <span className='mr-1'>See more</span>
                    <FaChevronRight className='text-xs flex items-center' />
                </button>
            </h2>
            <div className='grid gap-4'>
                <QuizCard />
                <QuizCard />
                <QuizCard />
            </div>
        </div>
    );
};

export default Suggestions;
