'use client';

import Image from 'next/image';

function QuestionItem() {
    return (
        <div className='cursor-pointer p-1 lg:p-3 max-lg:flex '>
            <h3 className='mb-2 max-lg:hidden'>
                <span>1&nbsp;</span> Quiz
            </h3>
            <h3 className='mr-1 lg:hidden'>1</h3>
            {/* <div className='p-1 min-h-[8rem] rounded-lg bg-white border-[3px] border-gray-50 hover:border-gray-400 transition-border-color ease-ease duration-300'></div> */}
            <div className='p-1 max-lg:w-30 lg:min-h-[8rem] rounded-lg bg-white transition-shadow shadow-[0px_0px_0px_4px_transparent] hover:shadow-[0px_0px_0px_4px_rgb(201,201,201)] outline-none'>
                <div className='lg:p-2 flex flex-col w-full lg:h-full'>
                    {/* title */}
                    <h4 className='truncate max-h-4 max-w-full text-xs text-gray-600 tracking-[0.2px]'>title này rất dài idid idid idid idid idid</h4>
                </div>
                <div className='flex justify-center lg:my-auto mx-0 relative'>
                    {/* time */}
                    <div className='max-lg:hidden absolute left-[10%] h-6 w-6 border border-gray-300 rounded-full text-gray-300 text-[10px] leading-6 text-center translate-y-1/2'>
                        20
                    </div>
                    {/* preview image */}
                    <div className='w-10 h-10  border border-dashed border-gray-300 p-2'>
                        <div className='relative w-full h-full'>
                            <Image src={'/assets/images/defaultQuestionImage.png'} alt='Quizzes logo' fill />
                        </div>
                    </div>
                </div>
                {/* preview answer */}
                <div className='max-lg:hidden flex flex-wrap mt-4 gap-2 justify-center'>
                    <div className='flex items-start w-2/5 mb-1 h-2 border border-dashed border-gray-400'></div>
                    <div className='flex items-start w-2/5 mb-1 h-2 border border-dashed border-gray-400'></div>
                    <div className='flex items-start w-2/5 mb-1 h-2 border border-dashed border-gray-400'></div>
                    <div className='flex items-start w-2/5 mb-1 h-2 border border-dashed border-gray-400'></div>
                </div>
            </div>
        </div>
    );
}

export default QuestionItem;
