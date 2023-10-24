import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { AiOutlineGift } from 'react-icons/ai';
import { BiHelpCircle } from 'react-icons/bi';
import { FaCompass, FaRegCompass } from 'react-icons/fa';
import { HiHome, HiOutlineHome } from 'react-icons/hi';
import { IoIosList, IoIosListBox } from 'react-icons/io';
import { IconType } from 'react-icons/lib/esm/iconBase';
import { MdLeaderboard, MdOutlineLeaderboard } from 'react-icons/md';

import SubNavBar from './SubNavBar';

import useWindowDimensions from 'src/hooks/useWindowDimensions';
import { motion } from 'framer-motion';
import paths from 'src/constants/paths';

function SideBar({ children }: { children: React.ReactNode }) {
    const [hideSideBar, setHideSideBar] = useState(true);

    const toggleSidebar = () => {
        setHideSideBar(!hideSideBar);
    };

    const { height, width } = useWindowDimensions();

    const pathName = usePathname();
    useEffect(() => {
        if (width > 391) {
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
                outline: IoIosList
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
            <div ref={sidebarRef}>
                <SubNavBar toggleSidebar={toggleSidebar} />
                <aside
                    id='logo-sidebar'
                    className={
                        `${hideSideBar ? '-translate-x-full' : '-translate-x-0'}` +
                        ' shadow-xl fixed top-0 left-0 max-sm:w-[60%] w-48 sm:max-xl:w-[6rem] z-40 h-screen pt-16 transition-transform  bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700'
                    }
                >
                    <div className='h-full pt-2 px-2 pb-4 flex flex-col justify-between overflow-y-auto bg-white divide-y divide-gray-200 dark:bg-gray-800'>
                        <ul className='space-y-2 font-medium mb-4 sm:max-xl:flex sm:max-xl:items-center sm:max-xl:flex-col'>
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
                                        className='w-full '
                                    >
                                        <Link
                                            href={link.to}
                                            className={
                                                pathName === link.to
                                                    ? 'active group sm:max-xl:flex-col sm:max-xl:justify-center sm:max-xl:items-center border-b-2 border-bgPurple flex p-2 font-bold text-bgPurple rounded dark:text-bgPurple hover:bg-gray-100 dark:hover:bg-gray-700'
                                                    : 'group sm:max-xl:flex-col sm:max-xl:justify-center sm:max-xl:items-center border-b-2 border-gray-600 flex p-2 text-gray-600 rounded dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                                            }
                                        >
                                            {pathName === link.to ? (
                                                <link.icon.fill
                                                    className={
                                                        ' ml-2 sm:max-xl:ml-0 w-5 h-5  text-bgPurplePower opacity-80 transition duration-75 dark:text-bgPurplePower group-hover:text-gray-900 dark:group-hover:text-white'
                                                    }
                                                />
                                            ) : (
                                                <link.icon.outline
                                                    className={
                                                        'ml-2 sm:max-xl:ml-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'
                                                    }
                                                />
                                            )}
                                            <span className='ml-3 sm:max-xl:ml-0 sm:max-xl:text-xs'>
                                                {link.name}
                                            </span>
                                        </Link>
                                    </motion.li>
                                )
                            )}
                        </ul>
                        <ul className='space-y-2 font-medium sm:max-xl:flex sm:max-xl:items-center sm:max-xl:flex-col'>
                            <li>
                                <button className='group w-full sm:max-xl:flex-col flex items-center p-2 text-gray-600 rounded dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'>
                                    <AiOutlineGift className='w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                    <span className='ml-3 sm:max-xl:ml-0 sm:max-xl:text-xs'>
                                        What s news?
                                    </span>
                                </button>
                            </li>
                            <li>
                                <button className='group w-full sm:max-xl:flex-col flex items-center p-2 text-gray-600 rounded dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'>
                                    <BiHelpCircle className='w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                    <span className='ml-3 sm:max-xl:ml-0 sm:max-xl:text-xs'>
                                        Help
                                    </span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </aside>
            </div>
            <main className='sm:ml-[6rem] xl:ml-48 mt-16'>{children}</main>
        </>
    );
}

export default SideBar;
