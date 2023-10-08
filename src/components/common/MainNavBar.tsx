import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BsPlusLg } from 'react-icons/bs';
import { HiOutlineHome } from 'react-icons/hi';
import { FaListUl } from 'react-icons/fa';
import { BiCompass } from 'react-icons/bi';
import ActiveLink from '../ActiveLink';
import { useState } from 'react';

//redux
import { useAppSelector } from 'src/app/redux/hooks';

function MainNavBar() {
    const pathName = usePathname();
    const [userMenuOpen, setUserMenuOpen] = useState(false);

    const user = useAppSelector((state) => state.auth.authData?.user);

    const inActiveClassName =
        'group inline-flex rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300';

    const activeClassName =
        'active group inline-flex rounded-t-lg border-b-2 border-blue-600 p-4 text-blue-600 dark:border-blue-500 dark:text-blue-500';

    return (
        <div className='bg-gray-800 px-2 py-2.5 dark:bg-gray-900 sm:px-4'>
            <div className='container mx-auto flex flex-wrap items-center justify-between'>
                {/* Logo */}
                <Link href={'#'} className='flex items-center'>
                    <div className='mr-3 h-6 w-6 sm:h-9 sm:w-9 relative'>
                        <Image src={'/assets/images/logoApp.png'} alt='EzQuiz Logo' fill />
                    </div>

                    <span className=' text-white self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
                        EzQuiz
                    </span>
                </Link>

                <div className='flex items-center md:order-3'>
                    <Link
                        href='/creator'
                        className='mr-6 max-md:h-8 max-md:w-8 md:px-5 md:py-2.5 flex items-center justify-center rounded-lg bg-purple-700 text-sm font-medium text-white hover:bg-purple-800 focus:outline-none dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 '
                    >
                        <BsPlusLg className='h-5 w-5' />
                        <span className='ml-1 max-md:hidden'>Createe Quiz</span>
                    </Link>
                </div>
                <div className='flex items-center md:order-4 relative'>
                    {/* Navigate to QuizCreator */}

                    {/* Avatar */}
                    <button
                        type='button'
                        className='mr-3 flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 md:mr-0'
                        id='user-menu-button'
                        // aria-expanded="false"
                        // data-dropdown-toggle="user-dropdown"
                        // data-dropdown-placement="bottom"
                        onClick={() => setUserMenuOpen(!userMenuOpen)}
                    >
                        <span className='sr-only'>Open user menu</span>
                        <div className='h-8 w-8  relative'>
                            <Image
                                fill
                                src={'/assets/images/default_avatar.png'}
                                alt='user photo'
                                className='rounded-full'
                            />
                        </div>
                    </button>

                    {/* Avatar dropdown */}
                    <div
                        className={
                            `${userMenuOpen ? 'flex flex-col' : 'hidden'} ` +
                            ' absolute w-60 top-12 right-[-1.5rem] z-50 list-none divide-y divide-gray-100 rounded-lg bg-white text-base shadow dark:divide-gray-600 dark:bg-gray-700'
                        }
                        id='user-dropdown'
                    >
                        <div className='px-4 py-3 flex items-center justify-between'>
                            <div className='flex'>
                                <div className='h-4 w-4 mr-2 relative'>
                                    <Image
                                        fill
                                        src={user?.avatar || ''}
                                        alt='user photo'
                                        className='rounded-full'
                                    />
                                </div>
                                <span className='block text-sm text-gray-900 dark:text-white'>
                                    Van Duy
                                </span>
                            </div>
                            <span className='block text-xs text-gray-900 dark:text-white'>
                                View ProFile
                            </span>
                        </div>
                        <ul className='py-2' aria-labelledby='user-menu-button'>
                            <li>
                                <a
                                    href='#'
                                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
                                >
                                    Dashboard
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#'
                                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
                                >
                                    Settings
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#'
                                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
                                >
                                    Earnings
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#'
                                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white'
                                >
                                    Sign out
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Burger Menu open Navbar (Mobile) */}
                    <button
                        data-collapse-toggle='mobile-menu-2'
                        type='button'
                        className='ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden'
                        aria-controls='mobile-menu-2'
                        aria-expanded='false'
                    >
                        <span className='sr-only'>Open main menu</span>
                        <svg
                            className='h-6 w-6'
                            aria-hidden='true'
                            fill='currentColor'
                            viewBox='0 0 20 20'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                fillRule='evenodd'
                                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                                clipRule='evenodd'
                            />
                        </svg>
                    </button>
                </div>

                {/* Navbar */}
                <nav
                    className='hidden w-full items-center justify-between md:order-1 md:flex md:w-auto'
                    id='mobile-menu-2'
                >
                    <div className='border-b border-gray-200 dark:border-gray-700'>
                        <ul className='-mb-px flex flex-wrap text-center text-sm font-medium text-gray-500 dark:text-gray-400'>
                            <li className='mr-2'>
                                <Link
                                    href={'/home'}
                                    className={
                                        pathName === '/home' ? activeClassName : inActiveClassName
                                    }
                                >
                                    <HiOutlineHome className='mr-2 h-5 w-6' />
                                    Home
                                </Link>
                            </li>
                            <li className='mr-2'>
                                <Link
                                    href={'/discover'}
                                    className={
                                        pathName === '/discover'
                                            ? activeClassName
                                            : inActiveClassName
                                    }
                                >
                                    <BiCompass className='h-5 mr-2 w-5' />
                                    Discover
                                </Link>
                            </li>
                            <li className='mr-2'>
                                <Link
                                    href={'/library'}
                                    className={
                                        pathName === '/library'
                                            ? activeClassName
                                            : inActiveClassName
                                    }
                                >
                                    <FaListUl className='h-5 mr-2 w-5' />
                                    Library
                                </Link>
                            </li>
                            <li className=''>
                                <a
                                    // href='#'
                                    className='group inline-flex cursor-not-allowed rounded-t-lg border-b-2 border-transparent p-4'
                                >
                                    <svg
                                        aria-hidden='true'
                                        className='mr-2 h-5 w-5 text-gray-400 dark:text-gray-500'
                                        fill='currentColor'
                                        viewBox='0 0 20 20'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path d='M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z'></path>
                                    </svg>
                                    Settings
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default MainNavBar;
