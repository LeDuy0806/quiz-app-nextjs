import Image from 'next/image';
import React from 'react';

const QuizCard = () => {
    return (
        <div className='quiz-card mb-4 md:mb-8 h-60 md:h-72 rounded-lg bg-white text-left ring-1 ring-gray-300 flex-shrink-0 cursor-pointer hover:shadow-lg max-w-[11rem] md:max-w-[15rem] md:hover:scale-[1.02]'>
            <div className='overflow-hidden rounded-t-lg h-full'>
                <div>
                    <div className='w-44 md:w-60 h-28 md:h-40 object-cover relative'>
                        <Image src='https://cf.quizizz.com/game/img/share/quizizz_share1.png' alt='Image' className='w-full h-full' fill objectFit='cover' />
                    </div>
                </div>

                <div className='px-2.5 pt-2.5 pb-3.5 flex flex-col h-30'>
                    <div className='flex items-center'>
                        <div className='items-center inline-flex text-[10px] font-thin rounded-full px-1.5 bg-gray-100 '>
                            <span>QUIZ</span>
                        </div>
                    </div>
                    <div className='mt-2 mb-2 text-sm md:text-base '>
                        <h2 className='w-full max-h-12 text-base text-black font-semibold line-clamp-2 text-ellipsis '>Logic Gates & Truth Tables</h2>

                        <div className=' flex flex-row '>
                            <span className='text-[12px] text-gray-500'>By: </span>
                            <span className='text-[12px] text-gray-900'>Mr.Ryan Truong</span>
                        </div>
                    </div>

                    <div className='flex text-[10px] md:text-xs mt-auto'>
                        <div className='mr-1.5'>14 Questions</div>
                        <div className='mr-1.5 ml-1.5'>300 plays</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizCard;
