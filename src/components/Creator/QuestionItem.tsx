'use client';

import Image from 'next/image';
import { cn } from 'src/utils/tailwind.util';

function QuestionItem({ isActive = false, background }: { isActive?: boolean; background?: string }) {
    return (
        <div className={cn('cursor-pointer p-1 max-lg:flex lg:p-3', background)}>
            <h3 className='mb-2 max-lg:hidden'>
                <span>1&nbsp;</span> Quiz
            </h3>
            <h3 className='mr-1 lg:hidden'>1</h3>
            {/* <div className='p-1 min-h-[8rem] rounded-lg bg-white border-[3px] border-gray-50 hover:border-gray-400 transition-border-color ease-ease duration-300'></div> */}
            <div className='rounded-lg bg-[#f2f2f2] p-1 shadow-[0px_0px_0px_4px_transparent] outline-none transition-shadow hover:shadow-[0px_0px_0px_4px_rgb(201,201,201)] max-lg:w-30 lg:min-h-[8rem]'>
                <div className='flex w-full flex-col lg:h-full lg:p-2'>
                    {/* title */}
                    <h4 className='max-h-4 max-w-full truncate text-xs tracking-[0.2px] text-gray-600'>title này rất dài idid idid idid idid idid</h4>
                </div>
                <div className='relative mx-0 flex justify-center lg:my-auto'>
                    {/* time */}
                    <div className='absolute left-[10%] h-6 w-6 translate-y-1/2 rounded-full border border-gray-300 text-center text-[10px] leading-6 text-gray-300 max-lg:hidden'>
                        20
                    </div>
                    {/* preview image */}
                    <div className='h-10 w-10  border border-dashed border-gray-300 p-2'>
                        <div className='relative h-full w-full'>
                            <Image src={'/assets/images/defaultQuestionImage.png'} alt='Quizzes logo' fill />
                        </div>
                    </div>
                </div>
                {/* preview answer */}
                <div className='mt-4 flex flex-wrap justify-center gap-2 max-lg:hidden'>
                    <div className='mb-1 flex h-2 w-2/5 items-start border border-dashed border-gray-400'></div>
                    <div className='mb-1 flex h-2 w-2/5 items-start border border-dashed border-gray-400'></div>
                    <div className='mb-1 flex h-2 w-2/5 items-start border border-dashed border-gray-400'></div>
                    <div className='mb-1 flex h-2 w-2/5 items-start border border-dashed border-gray-400'></div>
                </div>
            </div>
        </div>
    );
}

export default QuestionItem;
