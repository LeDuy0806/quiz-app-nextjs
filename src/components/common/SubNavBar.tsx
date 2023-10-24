import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { AiOutlineGift, AiFillSetting, AiOutlineAppstoreAdd } from 'react-icons/ai';

import { BsFilterLeft, BsPlusLg } from 'react-icons/bs';
import { FaExclamation } from 'react-icons/fa';

import { VscSignOut } from 'react-icons/vsc';
import { BsQuestionLg } from 'react-icons/bs';

const DynamicThemeSwitcher = dynamic(() => import('src/components/ThemeSwitcher'), {
    ssr: false
});

//redux
import { useAppDispatch, useAppSelector } from 'src/app/redux/hooks';
import { useUserLogOutMutation } from 'src/app/redux/services/authApi';

import { useAnimate, stagger, motion } from 'framer-motion';
import { signOut, useSession } from 'next-auth/react';
import { deleteSocket } from 'src/app/redux/slices/socketSlice';

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });
function useMenuAnimation(isOpen: boolean) {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        if (scope.current) {
            // animate('.arrow', { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });
            animate(
                'ul',
                {
                    clipPath: isOpen ? 'inset(0% 0% 0% 0% round 10px)' : 'inset(10% 50% 90% 50% round 10px)'
                },
                {
                    type: 'spring',
                    bounce: 0,
                    duration: 0.5
                }
            );
            animate('li', isOpen ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : { opacity: 0, scale: 0.5, filter: 'blur(20px)' }, {
                duration: 0.3,
                delay: isOpen ? staggerMenuItems : 0
            });
        }
    }, [isOpen, animate, scope]);
    return scope;
}

interface IProps {
    toggleSidebar: () => void;
}

function SubNavBar({ toggleSidebar }: IProps) {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const { data: session } = useSession();
    const user = useAppSelector((state) => state.auth.authData?.user);
    const socket = useAppSelector((state) => state.socket.socket);

    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const scope = useMenuAnimation(userMenuOpen);

    useEffect(() => {
        const handleOutsideClick = (e: any) => {
            if (e.target.id !== 'context-opener') {
                if (scope.current && !scope.current.contains(e.target)) {
                    setUserMenuOpen(false);
                }
            }
        };
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [scope]);

    const [Logout, { isSuccess }] = useUserLogOutMutation();
    const handleButton = () => {
        Logout({ userId: user?._id || '' });
    };

    useEffect(() => {
        if (isSuccess) {
            localStorage.clear();
            if (session) {
                signOut({ callbackUrl: '/' });
            } else {
                router.push('/');
            }
            socket.disconnect();
            dispatch(deleteSocket);
        }
    }, [isSuccess, session, router, dispatch, socket]);

    return (
        <nav className=' shadow-sm fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700'>
            <div className='px-3 py-3 lg:px-5 lg:pl-3'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center justify-start'>
                        <button
                            type='button'
                            className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
                            onClick={toggleSidebar}
                        >
                            <span className='sr-only'>Open sidebar</span>
                            <BsFilterLeft className='w-6 h-6' />
                        </button>
                        <Link href={'#'} className='flex items-center ml-2 md:mr-24'>
                            <div className='mr-3 h-6 w-6 sm:h-9 sm:w-9 relative'>
                                <Image src={'/assets/images/logoApp.png'} alt='EzQuiz Logo' fill />
                            </div>

                            <span className=' text-gray-600 self-center whitespace-nowrap text-xl font-semibold dark:text-white'>Quizzes</span>
                        </Link>
                    </div>
                    {/* button open user menu */}
                    <div className='flex items-center'>
                        <div className='flex items-center ml-3'>
                            <Link
                                href='/game/join'
                                className='mr-1 max-md:h-8 max-md:w-8 md:px-5 md:py-2.5 flex items-center justify-center rounded-lg bg-purple-700 text-sm font-medium text-white hover:bg-purple-800 focus:outline-none dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 '
                            >
                                <AiOutlineAppstoreAdd className='h-5 w-5' />
                                <span className='ml-1 max-md:hidden'>Join</span>
                            </Link>
                        </div>

                        <div className='flex items-center ml-3'>
                            <Link
                                href='/creator'
                                className='mr-1 max-md:h-8 max-md:w-8 md:px-5 md:py-2.5 flex items-center justify-center rounded-lg bg-purple-700 text-sm font-medium text-white hover:bg-purple-800 focus:outline-none dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 '
                            >
                                <BsPlusLg className='h-5 w-5' />
                                <span className='ml-1 max-md:hidden'>Create Quiz</span>
                            </Link>
                        </div>

                        <div ref={scope} className='flex items-center ml-3'>
                            <motion.button
                                whileTap={{ scale: 0.97 }}
                                type='button'
                                className='mr-3 flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 md:mr-0'
                                onClick={() => setUserMenuOpen(!userMenuOpen)}
                            >
                                <span className='sr-only'>Open user menu</span>
                                <div className='h-8 w-8  relative'>
                                    <Image
                                        fill
                                        src={user?.avatar ? user.avatar : '/assets/images/default_avatar.png'}
                                        alt='user photo'
                                        className='rounded-full object-cover'
                                    />
                                </div>
                            </motion.button>

                            {/* user menu dropdown */}
                            <ul
                                style={{
                                    listStyle: 'none',
                                    pointerEvents: userMenuOpen ? 'auto' : 'none',
                                    clipPath: 'inset(10% 50% 90% 50% round 10px)'
                                }}
                                className={
                                    `${userMenuOpen ? 'block' : 'hidden'}` +
                                    ' w-[60%] sm:w-[50%] md:w-[30%] xl:w-[20%] absolute top-12 right-0 sm:right-1 xl:right-4 z-50 my-4 pt-2 py-4 text-base list-none bg-white divide-y divide-gray-200 rounded shadow-lg dark:bg-gray-700 dark:divide-gray-600'
                                }
                                id='dropdown-user'
                            >
                                <li>
                                    <div className='px-4 py-3 flex items-center justify-between group cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600'>
                                        <div className='flex items-center'>
                                            <div className='h-8 w-8 mr-2 relative '>
                                                <Image
                                                    fill
                                                    src={user?.avatar ? user.avatar : '/assets/images/default_avatar.png'}
                                                    alt='user photo'
                                                    className='rounded-full object-cover'
                                                />
                                            </div>
                                            <span className='block text-sm text-gray-900 dark:text-white'>{user?.userName || 'UserName'}</span>
                                        </div>
                                        <span className='block text-xs text-gray-900 dark:text-white hover:underline'>View ProFile</span>
                                    </div>
                                </li>

                                <li className='flex gap-1 items-center hover:bg-gray-100 rounded-lg px-4'>
                                    <span className='flex items-center justify-center h-[36px] w-[36px] bg-bgGray rounded-full'>
                                        <FaExclamation className='w-3/4 h-3/4' />
                                    </span>

                                    <button
                                        className='flex-1 px-4 py-3 text-sm text-textBlack font-semibold dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white text-left'
                                        role='menuitem'
                                    >
                                        Opinion
                                    </button>
                                </li>
                                <li className='flex gap-1 items-center hover:bg-gray-100 rounded-lg px-4'>
                                    <span className='flex items-center justify-center h-[36px] w-[36px] bg-bgGray rounded-full'>
                                        <AiFillSetting className='w-3/4 h-3/4' />
                                    </span>

                                    <button
                                        className='flex-1 px-4 py-3 text-sm text-textBlack font-semibold dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white text-left'
                                        role='menuitem'
                                    >
                                        Settings
                                    </button>
                                </li>
                                <li className='flex gap-1 items-center hover:bg-gray-100 rounded-lg px-4'>
                                    <span className='flex items-center justify-center h-[36px] w-[36px] bg-bgGray rounded-full'>
                                        <BsQuestionLg className='w-3/4 h-3/4' />
                                    </span>

                                    <button
                                        className='flex-1 px-4 py-3 text-sm text-textBlack font-semibold dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white text-left'
                                        role='menuitem'
                                    >
                                        Help Q&A
                                    </button>
                                </li>

                                <li className='flex gap-1 items-center hover:bg-gray-100 rounded-lg px-4'>
                                    <span className='flex items-center justify-center h-[36px] w-[36px] bg-bgGray rounded-full'>
                                        <VscSignOut className='w-3/4 h-3/4' />
                                    </span>

                                    <button
                                        onClick={handleButton}
                                        className='flex-1 px-4 py-3 text-sm text-textBlack font-semibold dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white text-left'
                                        role='menuitem'
                                    >
                                        Sign out
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className='flex items-center ml-2 sm:ml-4 xl:ml-6'>
                            <DynamicThemeSwitcher />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default SubNavBar;
