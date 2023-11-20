import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { AiOutlineGift } from 'react-icons/ai';
import { BiHelpCircle } from 'react-icons/bi';
import { FaCompass, FaRegCompass } from 'react-icons/fa';
import { HiHome, HiOutlineHome } from 'react-icons/hi';
import { IoIosList, IoIosListBox } from 'react-icons/io';
import { IoListSharp } from 'react-icons/io5';
import { IconType } from 'react-icons/lib/esm/iconBase';
import { MdLeaderboard, MdOutlineLeaderboard } from 'react-icons/md';

import SubNavBar from './SubNavBar';

import useWindowDimensions from 'src/hooks/useWindowDimensions';
import { motion } from 'framer-motion';
import paths from 'src/constants/paths';
import Image from 'next/image';
import { BsFilterLeft } from 'react-icons/bs';

function SideBar({ children }: { children: React.ReactNode }) {
    const [hideSideBar, setHideSideBar] = useState(true);

    const toggleSidebar = () => {
        setHideSideBar(!hideSideBar);
    };

    const { height, width } = useWindowDimensions();

    const pathName = usePathname();
    useEffect(() => {
        if (width > 769) {
            if (!hideSideBar) setHideSideBar(true);
        }
    }, [width, hideSideBar]);

    const sidebarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutsideClick = (e: any) => {
            if (e.target.id !== 'context-opener') {
                if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
                    setHideSideBar(true);
                }
            }
        };
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    const listLinks: {
        name: string;
        to: string;
        icon: {
            fill: IconType;
            outline: IconType;
        };
    }[] = [
        {
            name: 'Home',
            to: paths.home,
            icon: {
                fill: HiHome,
                outline: HiOutlineHome
            }
        },
        {
            name: 'Discover',
            to: paths.discover,
            icon: {
                fill: FaCompass,
                outline: FaRegCompass
            }
        },
        {
            name: 'Library',
            to: paths.library,
            icon: {
                fill: IoIosListBox,
                outline: IoListSharp
            }
        },
        {
            name: 'LeaderBoard',
            to: paths.leaderBoard,
            icon: {
                fill: MdLeaderboard,
                outline: MdOutlineLeaderboard
            }
        }
    ];

    return (
        <>
            {hideSideBar || <div className='fixed top-0 left-0 w-screen h-screen bg-[#09090980] z-[98]'></div>}
            <div ref={sidebarRef} className='font-dm'>
                <SubNavBar toggleSidebar={toggleSidebar} />

                <aside
                    id='logo-sidebar'
                    className={
                        `${hideSideBar ? '-translate-x-full' : '-translate-x-0'}` +
                        ' mdl:translate-x-0 shadow-xl fixed top-0 left-0  max-mdl:w-60 w-52 mdl:max-xl:w-[6rem] z-[99] mdl:z-[96] h-screen pt-16 transition-transform duration-300  bg-white border-r border-gray-200  dark:bg-gray-800 dark:border-gray-700'
                    }
                >
                    <div className='mt-[-4rem] pt-2 mb-2 px-5 mdl:hidden'>
                        <button
                            type='button'
                            className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
                            onClick={toggleSidebar}
                        >
                            <span className='sr-only'>Open sidebar</span>
                            <BsFilterLeft className='w-6 h-6' />
                        </button>
                        <Link href={'#'} className='flex items-center mx-auto'>
                            <div className='mr-3 h-9 w-9 sm:h-12 sm:w-12 relative'>
                                <Image src={'/assets/images/logoApp.png'} alt='EzQuiz Logo' fill />
                            </div>

                            <span className=' text-gray-600 font-poppins self-center whitespace-nowrap text-3xl font-semibold dark:text-white'>Quizzes</span>
                        </Link>
                    </div>
                    <div className='h-full max-mdl:h-[calc(100%-2rem)] w-full pt-2 px-2 pb-4 flex flex-col justify-between overflow-y-auto bg-white divide-y divide-gray-200 dark:bg-gray-800'>
                        <ul className='space-y-2 mt-2 font-medium mb-4 mdl:max-xl:flex mdl:max-xl:items-center mdl:max-xl:flex-col'>
                            {listLinks.map(
                                (
                                    link: {
                                        name: string;
                                        to: string;
                                        icon: {
                                            fill: IconType;
                                            outline: IconType;
                                        };
                                    },
                                    index
                                ) => (
                                    <motion.li
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{
                                            duration: 0.4,
                                            delay: 0.1 + index * 0.075
                                        }}
                                        key={`${index + link.name}`}
                                        className='w-full'
                                    >
                                        <Link
                                            href={link.to}
                                            shallow={true}
                                            className={
                                                pathName === link.to
                                                    ? 'active relative group hover:scale-105 mdl:max-xl:flex-col mdl:max-xl:justify-center mdl:max-xl:items-center  flex p-2 font-bold text-bgPurple rounded-lg rounded-tl-lg dark:text-bgPurple hover:bg-gray-100 dark:hover:bg-gray-700'
                                                    : 'group relative hover:scale-105 mdl:max-xl:flex-col mdl:max-xl:justify-center mdl:max-xl:items-center  flex p-2 text-gray-600 rounded-tr-lg rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                                            }
                                        >
                                            {pathName === link.to ? (
                                                <link.icon.fill
                                                    className={
                                                        ' ml-2 mdl:max-xl:ml-0 w-5 h-5 text-xl transform group-hover:scale-105 text-bgPurplePower opacity-70 transition duration-75 dark:text-bgPurplePower group-hover:opacity-90 dark:group-hover:text-purple-500'
                                                    }
                                                />
                                            ) : (
                                                <link.icon.outline
                                                    className={
                                                        'ml-2 mdl:max-xl:ml-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:scale-105 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                                                    }
                                                />
                                            )}
                                            <span className='ml-3 mdl:max-xl:ml-0 mdl:max-xl:text-xs group-hover:font-semibold'>{link.name}</span>
                                            {pathName === link.to && (
                                                <div className='absolute -right-[3px] top-0 h-9 mdl:max-xl:hidden w-1 rounded-lg bg-bgPurple dark:bg-brand-400'></div>
                                            )}
                                        </Link>
                                    </motion.li>
                                )
                            )}
                        </ul>
                        <ul className='space-y-2 font-medium mdl:max-xl:flex mdl:max-xl:items-center mdl:max-xl:flex-col'>
                            <li>
                                <button className='group w-full mdl:max-xl:flex-col flex items-center p-2 text-gray-600 rounded dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'>
                                    <AiOutlineGift className='w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                    <span className='ml-3 mdl:max-xl:ml-0 mdl:max-xl:text-xs'>What&apos;s news?</span>
                                </button>
                            </li>
                            <li>
                                <button className='group w-full mdl:max-xl:flex-col flex items-center p-2 text-gray-600 rounded dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'>
                                    <BiHelpCircle className='w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                    <span className='ml-3 mdl:max-xl:ml-0 mdl:max-xl:text-xs'>Help</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </aside>
            </div>
            <main className='mdl:ml-[6rem] xl:ml-52 mt-16'>{children}</main>
        </>
    );
}

export default SideBar;
