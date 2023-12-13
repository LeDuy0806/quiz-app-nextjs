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
import { cn } from 'src/utils/tailwind.util';

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
            {hideSideBar || <div className='fixed left-0 top-0 z-[98] h-screen w-screen bg-[#09090980]'></div>}
            <div ref={sidebarRef} className='font-dm'>
                <SubNavBar toggleSidebar={toggleSidebar} />

                <aside
                    id='logo-sidebar'
                    className={cn(
                        ' fixed left-0 top-0 z-[99] h-screen  w-52 border-r border-gray-200 bg-white pt-16 shadow-xl transition-transform duration-300 dark:border-gray-700  dark:bg-gray-800 max-mdl:w-60 mdl:z-[96]  mdl:translate-x-0 ',
                        hideSideBar ? ' -translate-x-full' : '- translate-x-0',
                        {
                            'mdl:w-14': pathName.includes(paths.search),
                            'mdl:max-xl:w-24': !pathName.includes(paths.search)
                        }
                    )}
                >
                    <div className='mb-2 mt-[-4rem] px-5 pt-2 mdl:hidden'>
                        <button
                            type='button'
                            className='inline-flex items-center rounded-lg p-2 text-sm text-gray-500  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
                            onClick={toggleSidebar}
                        >
                            <span className='sr-only'>Open sidebar</span>
                            <BsFilterLeft className='h-6 w-6' />
                        </button>
                        <Link href={'#'} className='mx-auto flex items-center'>
                            <div className='relative mr-3 h-9 w-9 sm:h-12 sm:w-12'>
                                <Image src={'/assets/images/logoApp.png'} alt='EzQuiz Logo' fill />
                            </div>

                            <span className=' self-center whitespace-nowrap font-poppins text-3xl font-semibold text-gray-600 dark:text-white'>Quizzes</span>
                        </Link>
                    </div>
                    <div className='flex h-full w-full flex-col justify-between divide-y divide-gray-200 overflow-y-auto bg-white px-2 pb-4 pt-2 dark:bg-gray-800 max-mdl:h-[calc(100%-2rem)]'>
                        <ul
                            className={cn('mb-4 mt-2 space-y-2 font-medium mdl:max-xl:flex mdl:max-xl:flex-col mdl:max-xl:items-center', {
                                'mdl:flex': pathName.includes(paths.search),
                                'mdl:flex-col': pathName.includes(paths.search),
                                'mdl:items-center': pathName.includes(paths.search)
                            })}
                        >
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
                                            className={cn({
                                                'active group relative flex rounded-lg rounded-tl-lg p-2  font-bold text-bgPurple hover:scale-105 hover:bg-gray-100 dark:text-bgPurple dark:hover:bg-gray-700 mdl:max-xl:flex-col mdl:max-xl:items-center mdl:max-xl:justify-center':
                                                    pathName === link.to,
                                                'group relative flex rounded-lg rounded-tr-lg p-2  text-gray-600 hover:scale-105 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 mdl:max-xl:flex-col mdl:max-xl:items-center mdl:max-xl:justify-center':
                                                    pathName !== link.to,
                                                'mdl:flex': pathName.includes(paths.search),
                                                'mdl:flex-col': pathName.includes(paths.search),
                                                'mdl:items-center': pathName.includes(paths.search)
                                            })}
                                        >
                                            {pathName === link.to ? (
                                                <link.icon.fill
                                                    className={cn(
                                                        ' ml-2 h-5 w-5 transform text-xl text-bgPurplePower opacity-70 transition duration-75 group-hover:scale-105 group-hover:opacity-90 dark:text-bgPurplePower dark:group-hover:text-purple-500 mdl:max-xl:ml-0',
                                                        {
                                                            'mdl:ml-0': pathName.includes(paths.search)
                                                        }
                                                    )}
                                                />
                                            ) : (
                                                <link.icon.outline
                                                    className={cn(
                                                        'ml-2 h-5 w-5 text-gray-500 transition duration-75 group-hover:scale-105 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white mdl:max-xl:ml-0',
                                                        {
                                                            'mdl:ml-0': pathName.includes(paths.search)
                                                        }
                                                    )}
                                                />
                                            )}
                                            <span
                                                className={cn('ml-3 group-hover:font-semibold mdl:max-xl:ml-0 mdl:max-xl:text-xs', {
                                                    'mdl:hidden': pathName.includes(paths.search),
                                                    'mdl:text-xs': pathName.includes(paths.search)
                                                })}
                                            >
                                                {link.name}
                                            </span>
                                            {pathName === link.to && (
                                                <div
                                                    className={cn(
                                                        'absolute -right-[3px] top-0 h-9 w-1 rounded-lg bg-bgPurple dark:bg-brand-400 mdl:max-xl:hidden',
                                                        {
                                                            'mdl:hidden': pathName.includes(paths.search)
                                                        }
                                                    )}
                                                ></div>
                                            )}
                                        </Link>
                                    </motion.li>
                                )
                            )}
                        </ul>
                        {!pathName.includes(paths.search) && (
                            <ul className='space-y-2 font-medium mdl:max-xl:flex mdl:max-xl:flex-col mdl:max-xl:items-center'>
                                <li>
                                    <button className='group flex w-full items-center rounded p-2 text-gray-600 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 mdl:max-xl:flex-col'>
                                        <AiOutlineGift className='h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white' />
                                        <span className='ml-3 mdl:max-xl:ml-0 mdl:max-xl:text-xs'>What&apos;s news?</span>
                                    </button>
                                </li>
                                <li>
                                    <button className='group flex w-full items-center rounded p-2 text-gray-600 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 mdl:max-xl:flex-col'>
                                        <BiHelpCircle className='h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white' />
                                        <span className='ml-3 mdl:max-xl:ml-0 mdl:max-xl:text-xs'>Help</span>
                                    </button>
                                </li>
                            </ul>
                        )}
                    </div>
                </aside>
            </div>
            <main
                className={cn('mt-16  ', {
                    'xl:ml-52': !pathName.includes(paths.search),
                    'mdl:ml-14': pathName.includes(paths.search),
                    'mdl:ml-[6rem]': !pathName.includes(paths.search)
                })}
            >
                {children}
            </main>
        </>
    );
}

export default SideBar;
