'use client';
import QuizCard from 'src/components/library/QuizCard';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

function LibraryPage() {
    useEffect(() => {
        document.title = 'Library - Quizzes';
    }, []);
    const data: { id: number }[] = [
        {
            id: 1
        },
        {
            id: 1
        },
        {
            id: 1
        },
        {
            id: 1
        },
        {
            id: 1
        },
        {
            id: 1
        }
    ];

    return (
        <div className='w-full pt-6 px-4'>
            {/* Responsive: Mobile View */}
            <div className='md:hidden'>
                <form className='mb-4 flex items-center'>
                    <label htmlFor='simple-search' className='sr-only'>
                        Search
                    </label>
                    <div className='relative w-full'>
                        <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                            <HiMagnifyingGlass className='h-5 w-5 text-gray-500 dark:text-gray-400' />
                        </div>
                        <input
                            type='text'
                            id='simple-search'
                            className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                            placeholder='Search...'
                        />
                    </div>
                    <button
                        type='submit'
                        className='ml-2 rounded-lg border border-blue-700 bg-blue-700 p-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                    >
                        <svg
                            className='h-5 w-5'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                            ></path>
                        </svg>
                        <span className='sr-only'>Search</span>
                    </button>
                </form>

                <label htmlFor='tabs' className='sr-only'>
                    Select
                </label>
                <select
                    id='tabs'
                    className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                >
                    <option>All</option>
                    <option>Public</option>
                    <option>Private</option>
                </select>
            </div>

            {/* Setting Visibility and Search Bar */}
            <ul className='hidden w-full rounded-lg text-center text-sm font-medium text-gray-500 dark:divide-gray-700 dark:text-gray-400 md:flex'>
                <li className='w-20'>
                    <button
                        className='active inline-block w-full rounded-l-lg bg-gray-100 p-4 text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-gray-700 dark:text-white'
                        aria-current='page'
                    >
                        All
                    </button>
                </li>
                <li className='w-20'>
                    <button className='inline-block w-full bg-white p-4 hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white'>
                        Public
                    </button>
                </li>
                <li className='mr-2 w-20'>
                    <button className='inline-block w-full rounded-r-lg bg-white p-4 hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white'>
                        Private
                    </button>
                </li>

                {/* Search Bar */}
                <li className='w-full'>
                    <form>
                        <label
                            htmlFor='default-search'
                            className='sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white'
                        >
                            Search
                        </label>
                        <div className='relative'>
                            <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                                <svg
                                    aria-hidden='true'
                                    className='h-5 w-5 text-gray-500 dark:text-gray-400'
                                    fill='none'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                                    ></path>
                                </svg>
                            </div>
                            <input
                                type='search'
                                id='default-search'
                                className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                                placeholder='Search Quiz...'
                            />
                            <button
                                type='submit'
                                className='absolute right-2.5 bottom-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                            >
                                Search
                            </button>
                        </div>
                    </form>
                </li>
            </ul>

            {/* List Quiz Card */}
            <ul className='flex flex-wrap items-center justify-between gap-6 py-6 max-xl:gap-4'>
                {data.map((_, i) => (
                    <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 0.4,
                            delay: 0.1 + i * 0.075
                        }}
                        key={`${i}`}
                        className='w-full'
                    >
                        <QuizCard />
                    </motion.div>
                ))}
            </ul>
        </div>
    );
}

export default LibraryPage;
