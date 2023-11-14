import { url } from 'inspector';
import Image from 'next/image';
import { FaChevronRight } from 'react-icons/fa';
import SubjectsButton from './SubjectsButton';

function SearchBar() {
    return (
        <>
            <div className='w-[90%] md:w-[80%] xl:w-[60%]'>
                <div className='text-bgDark text-center font-semibold md:block text-lg md:text-5xl mb-8 mt-4 md:mt-12'>
                    <span>What will you choose today?</span>
                </div>
                <div className='xs:max-md:mx-auto flex items-center z-10 bg-gray-100 shadow-md relative p-0 md:py-3 md:px-6 rounded-lg'>
                    <div className='w-full'>
                        <div className='relative w-full flex-grow z-[11]'>
                            <div className='relative'>
                                <input
                                    type='text'
                                    autoComplete='off'
                                    className='focus:outline-none h-10 w-full py-2 text-sm placeholder-sm border-radius-inherit remove-number-selector pl-3 font-semibold  md:text-2xl text-dark-2 placeholder-dark-5 border-dark-4 placeholder-dark-5 pr-9 '
                                    placeholder='Search for quizzes on any topic'
                                    maxLength={-1}
                                    tabIndex={0}
                                    aria-required='false'
                                />
                                <div className='w-6 h-6 flex items-center justify-center absolute right-2 top-2 pt-0.5 '>
                                    <i className='flex items-center text-gray-800 cursor-pointer'>
                                        <FaChevronRight />
                                    </i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex w-full pt-4 pb-4 -mt-6'>
                <div className='relative mx-auto mt-8 mb-4 overflow-hidden md:mt-16'>
                    <div className='flex px-4 py-1 mx-auto space-x-5 overflow-x-auto overflow-y-hidden md:space-x-8 scroll-smooth scrollbar-none'>
                        <SubjectsButton />
                        <SubjectsButton />
                        <SubjectsButton />
                        <SubjectsButton />
                        <SubjectsButton />
                        <SubjectsButton />
                        <SubjectsButton />
                    </div>
                </div>
            </div>
        </>
    );
}

export default SearchBar;
