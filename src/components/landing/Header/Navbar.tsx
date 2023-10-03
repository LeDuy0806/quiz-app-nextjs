import { useState, useRef } from 'react';
import Link from 'next/link';

//icons
import { WiDirectionRight } from 'react-icons/wi';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { RxDividerVertical } from 'react-icons/rx';
import { AiOutlineMenu } from 'react-icons/ai';

//images
import Image from 'next/image';
import { logoImg } from '../../../../public/assets/images/landing';

//animation
import { motion } from 'framer-motion';

import { useSession } from 'next-auth/react';

const Navbar = () => {
    const { data }: any = useSession();

    console.log(data);

    const ref = useRef<string | any>('');
    const [showMenu, setShowMenu] = useState<boolean>(false);

    const handleScroll = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        e.preventDefault();
        const href = e.currentTarget.href;

        const targetId = href.replace(/.*\#/, '');
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
            behavior: 'smooth'
        });
    };

    return (
        <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className='z-[999] fixed py-6 top-[0] left-[0] right-[0]'
        >
            <div className='w-full max-w-container block bg-transparent rounded-md mx-auto px-12'>
                <div className='max-w-contentContainer flex justify-between items-center mx-auto gap-[2em]'>
                    <div className='w-[10em] h-14 bg-white rounded-xl shadow-white cursor-pointer'>
                        <motion.a
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className='w-full h-full flex flex-row justify-center items-center gap-4  px-6 py-1 rounded-xl'
                        >
                            <Image
                                src={logoImg}
                                alt=''
                                className='h-[40px] w-[40px]'
                            />
                            <span className='text-textBlack font-extrabold text-xl'>
                                Quizzes
                            </span>
                        </motion.a>
                    </div>
                    <nav className='relative hidden xl:flex flex-1 flex-row float-right justify-end items-center gap-[1em]'>
                        <div className='hidden'></div>
                        <ul className='relative z-[1] flex flex-row bg-white justify-between items-center mb-0 px-3 gap-1 rounded-[1em] shadow-white'>
                            <Link href={'#intro'} onClick={handleScroll}>
                                <motion.li
                                    initial={{ y: -10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.1, delay: 0.1 }}
                                    className='font-bold'
                                >
                                    <div className='relative inline-block text-center z-[900] mx-auto'>
                                        <div className='w-auto min-w-auto flex flex-row gap-1 tracking-wide items-center mt-1 px-1 py-1 cursor-pointer hover:bg-textPurpleHover rounded-xl'>
                                            <div className='mt-0 mb-0 text-[1em] leading-snug'>
                                                Intro
                                            </div>
                                            <div className='w-full h-full flex items-center justify-center'>
                                                <span className='text-textBlack text-4xl'>
                                                    <RiArrowDropDownLine />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.li>
                            </Link>
                            <Link href={'#manager'} onClick={handleScroll}>
                                <motion.li
                                    initial={{ y: -10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.1, delay: 0.2 }}
                                    className='font-bold'
                                >
                                    <div className='relative inline-block text-center z-[900] mx-auto'>
                                        <div className='w-auto min-w-auto flex flex-row gap-1 tracking-wide items-center mt-1 px-1 py-1 cursor-pointer hover:bg-textPurpleHover rounded-xl'>
                                            <div className='mt-0 mb-0 text-1em leading-snug'>
                                                Manager
                                            </div>
                                            <div className='w-full h-full flex items-center justify-center'>
                                                <span className='text-textBlack text-4xl'>
                                                    <RiArrowDropDownLine />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.li>
                            </Link>
                            <Link href={'#overview'} onClick={handleScroll}>
                                <motion.li
                                    initial={{ y: -10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.1, delay: 0.3 }}
                                    className='font-bold'
                                >
                                    <div className='relative inline-block text-center z-[900] mx-auto'>
                                        <div className='w-auto min-w-auto flex flex-row gap-1 tracking-wide items-center mt-1 px-1 py-1 cursor-pointer hover:bg-textPurpleHover rounded-xl'>
                                            <div className='mt-0 mb-0 text-1em leading-snug'>
                                                Overview
                                            </div>
                                            <div className='w-full h-full flex items-center justify-center'>
                                                <span className='text-textBlack text-4xl'>
                                                    <RiArrowDropDownLine />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.li>
                            </Link>
                            <Link href={'#information'} onClick={handleScroll}>
                                <motion.li
                                    initial={{ y: -10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.1, delay: 0.4 }}
                                    className='font-bold'
                                >
                                    <div className='relative inline-block text-center z-[900] mx-auto'>
                                        <div className='w-auto min-w-auto flex flex-row gap-1 tracking-wide items-center mt-1 px-1 py-1 cursor-pointer  hover:bg-textPurpleHover rounded-xl'>
                                            <div className='mt-0 mb-0 text-[1em] leading-snug'>
                                                Information
                                            </div>
                                            <div className='w-full h-full flex items-center justify-center'>
                                                <span className='text-textBlack text-4xl'>
                                                    <RiArrowDropDownLine />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.li>
                            </Link>
                            <motion.li
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.1, delay: 0.5 }}
                                className='font-bold'
                            >
                                <div className='relative inline-block text-center z-[900] mx-auto mt-1 px-1 py-2 cursor-pointer hover:bg-textPurpleHover rounded-xl'>
                                    <div className='mt-0 mb-0 text-[1em] leading-snug'>
                                        About us
                                    </div>
                                </div>
                            </motion.li>
                            <motion.li
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.1, delay: 0.5 }}
                                className='font-bold cursor-pointer'
                            >
                                <span>
                                    <RxDividerVertical />
                                </span>
                            </motion.li>
                            <motion.li
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.1, delay: 0.6 }}
                                className='font-bold'
                            >
                                <div className='relative inline-block text-center z-[900] mx-auto'>
                                    <div className='w-auto min-w-auto flex flex-row gap-1 tracking-wide items-center mt-1 px-2 py-1 cursor-pointer hover:bg-textPurpleHover rounded-xl'>
                                        <img
                                            src='https://global-uploads.webflow.com/6418f5bfe5bc0a3438109c1d/6420b0a1dd850a0d9c95c380_Flag%20GB.svg'
                                            loading='lazy'
                                            width='24'
                                            height='18'
                                            alt=''
                                            className='c-flag'
                                        />
                                        <div className='flex items-center justify-center w-full h-full'>
                                            <span className='text-textBlack text-4xl'>
                                                <RiArrowDropDownLine />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.li>
                            <Link href={'/signIn'}>
                                <motion.li
                                    initial={{ y: -10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.1, delay: 0.7 }}
                                    className='font-bold'
                                >
                                    <div className='align-text z-[900] mx-auto inline-block relative cursor-pointer hover:bg-textPurpleHover rounded-xl'>
                                        <div className='w-auto min-w-auto flex flex-row gap-1 tracking-wide items-center mt-1 px-2 py-2'>
                                            <div className='mt-0 mb-0 text-[1em] leading-snug'>
                                                Login
                                            </div>
                                        </div>
                                    </div>
                                </motion.li>
                            </Link>
                        </ul>
                        <Link href='/signIn'>
                            <button className='z-[1] relative max-w-full flex flex-row gap-2 text-textWhite alight-center px-6 py-2 bg-bgPurple font-black items-center justify-center rounded-xl overflow-hidden shadow-purple hover:ease-ease hover:bg-bgPurplePower hover:duration-[0.3s] hover:delay-[0s]'>
                                <motion.div
                                    initial={{ y: -10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.1, delay: 0.8 }}
                                    className='w-10 h-10 relative -ml-3'
                                >
                                    <div className='z-[-1] w-10 h-10 absolute rounded-full bg-bgPurplePower' />
                                    <div className='w-full h-full flex items-center justify-center  text-4xl hover:text-[70px] text-textWhite'>
                                        <WiDirectionRight />
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial={{ y: -10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.1, delay: 0.9 }}
                                >
                                    Get Started
                                </motion.div>
                            </button>
                        </Link>
                    </nav>
                    <button className='xl:hidden'>
                        <div className='z-[5] relative bg-white rounded-[50%] p-5 font-extrabold'>
                            <AiOutlineMenu />
                        </div>
                    </button>
                </div>
                <div className='hidden'></div>
            </div>
        </motion.div>
    );
};

export default Navbar;
