'use client';

import Image from 'next/image';
import QuestionItem from './QuestionItem';
import { FaPlus } from 'react-icons/fa';

function CreatorSidebar() {
    return (
        <div className='lg:w-52 fixed lg:left-0 lg:h-full bottom-0 left-0 h-20 w-full bg-pink-300 flex items-center justify-center flex-row lg:flex-col'>
            {/* Question list item */}
            <div className='max-lg:h-full max-lg:gap-2 max-lg:w-full flex max-lg:overflow-x-auto scrollbar scrollbar-w-2 scrollbar-h-2 scrollbar-thumb-rounded scrollbar-thumb-slate-300 lg:flex-col lg:max-h-full lg:h-auto lg:overflow-y-auto lg:w-full lg:mt-15'>
                <QuestionItem />
                <QuestionItem />
                <QuestionItem />
                <QuestionItem />
            </div>
            <div className='flex flex-grow flex-shrink-0 basis-auto items-center justify-start lg:flex-col px-3 lg:px-6 lg:min-w-full lg:border-t-2 lg:border-gray-500 rounded'>
                <div className='mt-4 mb-2'>
                    <button className='px-4 pb-3 pt-2 bg-blue-500 duration-100 rounded shadow-[inset_0_-5px_rgba(0,0,0,0.3)] hover:mt-[2px] hover:pb-[10px] hover:shadow-[inset_0_-4px_rgba(0,0,0,0.3)] active:mt-1 active:pb-2 active:shadow-[inset_0_-2px_rgba(0,0,0,0.3)]'>
                        <span className='max-lg:hidden font-semibold text-white'>Add Question</span>
                        <FaPlus className='hidden max-lg:inline text-white' />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CreatorSidebar;
