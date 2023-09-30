import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { BiChevronDown, BiCompass } from 'react-icons/bi';
import { BsFilterLeft, BsPlusLg } from 'react-icons/bs';
import { FaListUl } from 'react-icons/fa';
import { HiOutlineHome } from 'react-icons/hi';
import { IconType } from 'react-icons/lib/esm/iconBase';
import useWindowDimensions from 'src/hooks/useWindowDimensions';
const DynamicThemeSwitcher = dynamic(
    () => import('src/components/ThemeSwitcher'),
    {
        ssr: false
    }
);

function SideBar({ children }: { children: React.ReactNode }) {
    const [hideSideBar, setHideSideBar] = useState(true);
    const [userMenuOpen, setUserMenuOpen] = useState(false);

    const { height, width } = useWindowDimensions();

    const pathName = usePathname();
    useEffect(() => {
        if (width > 391) {
            if (!hideSideBar) setHideSideBar(true);
        }
    }, [width]);

    const inActiveClassName =
        'group sm:max-lgl:flex-col  rounded-t-lg border-b-2 border-gray-600 flex items-center p-2 text-gray-600 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700';

    const activeClassName =
        ' group sm:max-lgl:flex-col  rounded-t-lg border-b-2 border-blue-600 flex items-center p-2 text-blue-600 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700';

    const listLinks: {
        name: string;
        to: string;
        icon: IconType;
    }[] = [
        {
            name: 'Home',
            to: '/home',
            icon: HiOutlineHome
        },
        {
            name: 'Discover',
            to: '/discover',
            icon: BiCompass
        },
        {
            name: 'Library',
            to: '/library',
            icon: FaListUl
        }
    ];

    return (
        <>
            <nav className='shadow-sm fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700'>
                <div className='px-3 py-3 lg:px-5 lg:pl-3'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center justify-start'>
                            <button
                                type='button'
                                className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
                                onClick={() => setHideSideBar(!hideSideBar)}
                            >
                                <span className='sr-only'>Open sidebar</span>
                                <BsFilterLeft className='w-6 h-6' />
                            </button>
                            <Link
                                href={'#'}
                                className='flex items-center ml-2 md:mr-24'
                            >
                                <div className='mr-3 h-6 w-6 sm:h-9 sm:w-9 relative'>
                                    <Image
                                        src={'/assets/images/logoApp.png'}
                                        alt='EzQuiz Logo'
                                        fill
                                    />
                                </div>

                                <span className=' text-gray-600 self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
                                    EzQuiz
                                </span>
                            </Link>
                        </div>
                        {/* button open user menu */}
                        <div className='flex items-center'>
                            <div className='flex items-center ml-3'>
                                <DynamicThemeSwitcher />
                            </div>
                            <div className='flex items-center ml-3'>
                                <Link
                                    href='/creator'
                                    className='mr-6 max-md:h-8 max-md:w-8 md:px-5 md:py-2.5 flex items-center justify-center rounded-lg bg-purple-700 text-sm font-medium text-white hover:bg-purple-800 focus:outline-none dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 '
                                >
                                    <BsPlusLg className='h-5 w-5' />
                                    <span className='ml-1 max-md:hidden'>
                                        Create Quiz
                                    </span>
                                </Link>
                            </div>
                            <div className='flex items-center ml-3'>
                                <button
                                    type='button'
                                    className='mr-3 flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 md:mr-0'
                                    onClick={() =>
                                        setUserMenuOpen(!userMenuOpen)
                                    }
                                >
                                    <span className='sr-only'>
                                        Open user menu
                                    </span>
                                    <div className='h-8 w-8  relative'>
                                        <Image
                                            fill
                                            src={
                                                '/assets/images/default_avatar.png'
                                            }
                                            alt='user photo'
                                            className='rounded-full'
                                        />
                                    </div>
                                </button>

                                {/* user menu dropdown */}
                                <div
                                    className={
                                        `${userMenuOpen ? 'block' : 'hidden'}` +
                                        ' w-[60%] sm:w-[30%] absolute top-[2.75rem] right-0 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600'
                                    }
                                    id='dropdown-user'
                                >
                                    <div className='px-4 py-3 flex items-center justify-between '>
                                        <div className='flex'>
                                            <div className='h-4 w-4 mr-2 relative'>
                                                <Image
                                                    fill
                                                    src={
                                                        '/assets/images/default_avatar.png'
                                                    }
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
                                    <ul className='py-1' role='none'>
                                        <li>
                                            <a
                                                href='#'
                                                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'
                                                role='menuitem'
                                            >
                                                Dashboard
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href='#'
                                                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'
                                                role='menuitem'
                                            >
                                                Settings
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href='#'
                                                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'
                                                role='menuitem'
                                            >
                                                Earnings
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href='#'
                                                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'
                                                role='menuitem'
                                            >
                                                Sign out
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <aside
                id='logo-sidebar'
                className={
                    `${hideSideBar ? '-translate-x-full' : '-translate-x-0'}` +
                    ' shadow-xl fixed top-0 left-0 w-64 sm:max-lgl:w-[6rem] z-40 h-screen pt-16 transition-transform  bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700'
                }
            >
                <div className='h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800'>
                    <ul className='space-y-2 font-medium sm:max-lgl:w-fit '>
                        {listLinks.map(
                            (
                                link: {
                                    name: string;
                                    to: string;
                                    icon: IconType;
                                },
                                index
                            ) => (
                                <li key={`${index + link.name}`}>
                                    <Link
                                        href={link.to}
                                        className={
                                            pathName === link.to
                                                ? activeClassName
                                                : inActiveClassName
                                        }
                                    >
                                        <link.icon className='w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                        <span className='ml-3 sm:max-lgl:ml-0 sm:max-lgl:text-xs'>
                                            {link.name}
                                        </span>
                                    </Link>
                                </li>
                            )
                        )}
                    </ul>
                </div>
            </aside>
            <div className='sm:ml-[6rem] lgl:ml-64 mt-16'>
                <div>{children}</div>
            </div>
        </>
    );
}

export default SideBar;
