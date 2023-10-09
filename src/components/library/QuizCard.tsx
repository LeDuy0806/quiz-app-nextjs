import Link from 'next/link';

import paths from 'src/constants/paths';
import { HiPencilAlt, HiPlay, HiTrash } from 'react-icons/hi';

function QuizCard() {
    return (
        <div className='flex h-52 w-full rounded-lg bg-white shadow-2xl transition-transform hover:scale-[1.005] dark:bg-gray-800'>
            {/* Image */}
            <Link
                className='flex items-center justify-between max-md:hidden'
                href={paths.discover}
            >
                <img
                    className='m-auto h-full w-80 rounded-l-lg object-cover'
                    // src='https://plus.unsplash.com/premium_photo-1661637676151-ff1ad622ab7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                    src='https://images.unsplash.com/photo-1678711267884-ae34ed9d4c29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
                    alt=''
                />
            </Link>

            {/* Content */}
            <div className='flex flex-col justify-between p-5'>
                <div>
                    <Link href={paths.discover}>
                        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 line-clamp-1 dark:text-white max-md:text-base'>
                            Noteworthy technology acquisitions 2021
                        </h5>
                    </Link>
                    <p className='mb-3 font-normal text-gray-700 line-clamp-2 dark:text-gray-400 max-md:text-sm'>
                        Here are the biggest enterprise technology acquisitions
                        of 2021 so far, in reverse chronological order.
                    </p>
                </div>
                <div className='flex w-6 justify-between gap-4'>
                    <a
                        href='#'
                        className='inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                    >
                        Play
                        <HiPlay className='ml-2 h-6 w-6 text-white' />
                    </a>
                    <Link
                        href={paths.creator}
                        className='inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                    >
                        Edit
                        <HiPencilAlt className='ml-2 h-6 w-6 text-white' />
                    </Link>
                    <a
                        href='#'
                        className='inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                    >
                        Delete
                        <HiTrash className='ml-1 h-6 w-6 text-white' />
                    </a>
                </div>
            </div>
        </div>
    );
}
export default QuizCard;
