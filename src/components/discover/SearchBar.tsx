import Image from 'next/image';
import { FaChevronRight } from 'react-icons/fa';
import SubjectsButton from './SubjectsButton';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

function SearchBar() {
    const [searchValue, setSearchValue] = useState('');
    const router = useRouter();

    const handleRedirectToSearchPage = () => {
        if (searchValue) {
            router.push(`/search?name=${searchValue}&tags=`);
        }
    };
    return (
        <>
            <div className='w-[90%] md:w-[80%] xl:w-[60%]'>
                <div className='mb-8 mt-4 text-center text-lg font-semibold text-bgDark md:mt-12 md:block md:text-5xl'>
                    <span>What will you choose today?</span>
                </div>
                <div className='relative z-10 flex items-center rounded-lg bg-gray-100/60 p-0 shadow-md xs:max-md:mx-auto md:px-6 md:py-3'>
                    <div className='w-full'>
                        <div className='relative z-[11] w-full flex-grow'>
                            <div className='relative'>
                                <input
                                    type='text'
                                    autoComplete='off'
                                    className='placeholder-sm border-radius-inherit remove-number-selector text-dark-2 placeholder-dark-5 border-dark-4 placeholder-dark-5 h-10 w-full py-2  pl-3 pr-9 text-sm font-semibold focus:outline-none md:text-2xl '
                                    placeholder='Search for quizzes on any topic'
                                    maxLength={-1}
                                    tabIndex={0}
                                    value={searchValue}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') handleRedirectToSearchPage();
                                    }}
                                    onChange={(e) => setSearchValue(e.target.value.replace(/[`~.<>;':"\/\[\]\|{}()=_+-]/, ''))}
                                    aria-required='false'
                                />
                                <div
                                    onClick={() => {
                                        handleRedirectToSearchPage();
                                    }}
                                    className='absolute right-2 top-2 flex h-6 w-6 cursor-pointer items-center justify-center pt-0.5 '
                                >
                                    <i className='flex cursor-pointer items-center text-gray-800'>
                                        <FaChevronRight />
                                    </i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='-mt-6 flex w-full pb-4 pt-4'>
                <div className='relative mx-auto mb-4 mt-8 overflow-hidden md:mt-16'>
                    <div className='mx-auto flex space-x-5 overflow-x-auto overflow-y-hidden scroll-smooth px-4 py-1 scrollbar-none md:space-x-8'>
                        <SubjectsButton />
                        {['Math', 'Science', 'English', 'History', 'Geography', 'Computer', 'Music', 'Art', 'PE', 'Other'].map((name, i) => (
                            <SubjectsButton name={name} key={i} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default SearchBar;
