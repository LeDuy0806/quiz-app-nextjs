import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

//icons
import { WiDirectionRight } from 'react-icons/wi';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { RxDividerVertical } from 'react-icons/rx';
import { AiOutlineMenu } from 'react-icons/ai';
import { FcHome } from 'react-icons/fc';
import { FcManager } from 'react-icons/fc';
import { FcViewDetails } from 'react-icons/fc';
import { FcInfo } from 'react-icons/fc';

//images
import Image from 'next/image';
import { logoImg } from '../../../../public/assets/images/landing';

//animation
import { motion } from 'framer-motion';

//auth
import { useSession } from 'next-auth/react';

//redux
import { useAppSelector, useAppDispatch } from 'src/app/redux/hooks';
import { setLanguage } from 'src/app/redux/slices/languageSlice';
import { useLocalStorage } from 'src/hooks/useLocalStorage';

interface NavbarProps {
    language: string;
    setLanguage: (value: string) => void;
}
const Navbar = (props: NavbarProps) => {
    const { language, setLanguage } = props;

    const dispatch = useAppDispatch();
    const ref = useRef<string | any>('');
    const [showMenu, setShowMenu] = useState<boolean>(false);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const href = e.currentTarget.href;

        const targetId = href.replace(/.*\#/, '');
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
            behavior: 'smooth'
        });
    };

    const handleChangeLanguage = (value: string) => {
        setLanguage(value);
    };

    return (
        <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className='fixed left-[0] right-[0] top-[0] z-[999] py-6'
        >
            <div className='mx-auto block w-full max-w-container rounded-md bg-transparent px-12'>
                <div className='mx-auto flex max-w-contentContainer items-center justify-between gap-[2em]'>
                    <div className='h-14 w-[10em] cursor-pointer rounded-xl bg-white shadow-white'>
                        <motion.a
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className='flex h-full w-full flex-row items-center justify-center gap-4  rounded-xl px-6 py-1'
                        >
                            <Image src={logoImg} alt='' className='h-[40px] w-[40px]' />
                            <span className='text-xl font-extrabold text-textBlack'>Quizzes</span>
                        </motion.a>
                    </div>
                    <nav className='relative float-right hidden flex-1 flex-row items-center justify-end gap-[1em] xl:flex'>
                        <div className='hidden'></div>
                        <ul className='relative z-[1] mb-0 flex flex-row items-center justify-between gap-1 rounded-[1em] bg-white px-3 shadow-white'>
                            <Link href={'#intro'} onClick={handleScroll}>
                                <motion.li
                                    initial={{ y: -10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.1, delay: 0.1 }}
                                    className='font-bold'
                                >
                                    <div className='relative z-[900] mx-auto text-center'>
                                        <div className='min-w-auto mt-1 flex w-auto cursor-pointer flex-row items-center justify-center rounded-xl px-1 py-1 tracking-wide hover:bg-textPurpleHover'>
                                            <div className='flex h-full w-full items-center justify-center'>
                                                <span className='text-4xl text-textBlack'>
                                                    <FcHome className='w-[20px]' />
                                                </span>
                                            </div>
                                            <div className='min-w-[90px] text-[1em] leading-snug'>{language === 'en' ? 'Intro' : 'Giới thiệu'}</div>
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
                                    <div className='relative z-[900] mx-auto text-center'>
                                        <div className='min-w-auto mt-1 flex w-auto cursor-pointer flex-row items-center gap-1 rounded-xl px-1 py-1 tracking-wide hover:bg-textPurpleHover'>
                                            <div className='flex h-full w-full items-center justify-center'>
                                                <span className='text-4xl text-textBlack'>
                                                    <FcManager className='w-[20px]' />
                                                </span>
                                            </div>
                                            <div className='inline-block min-w-[80px] leading-snug'>{language === 'en' ? 'Manage' : 'Quản lý'}</div>
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
                                    <div className='relative z-[900] mx-auto text-center'>
                                        <div className='min-w-auto mt-1 flex w-auto cursor-pointer flex-row items-center rounded-xl px-1 py-1 tracking-wide hover:bg-textPurpleHover'>
                                            <div className='flex h-full w-full items-center justify-center'>
                                                <span className='text-4xl text-textBlack'>
                                                    <FcViewDetails className='w-[20px]' />
                                                </span>
                                            </div>
                                            <div className='min-w-[90px] text-[1em] leading-snug'>{language === 'en' ? 'Overview' : 'Tổng quan'}</div>
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
                                    <div className='relative z-[900] mx-auto text-center'>
                                        <div className='min-w-auto mt-1 flex w-auto cursor-pointer flex-row items-center rounded-xl px-1 py-1  tracking-wide hover:bg-textPurpleHover'>
                                            <div className='flex h-full w-full items-center justify-center'>
                                                <span className='text-4xl text-textBlack'>
                                                    <FcInfo className='w-[20px]' />
                                                </span>
                                            </div>
                                            <span className='min-w-[100px] text-[1em] leading-snug'>{language === 'en' ? 'Information' : 'Thông tin'}</span>
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
                                <div className='relative z-[900] mx-auto mt-1 inline-block cursor-pointer rounded-xl px-1 py-2 text-center hover:bg-textPurpleHover'>
                                    <div className='mb-0 mt-0 text-[1em] leading-snug'>{language === 'en' ? 'About us' : 'Liên quan'}</div>
                                </div>
                            </motion.li>
                            <motion.li
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.1, delay: 0.5 }}
                                className='cursor-pointer font-bold'
                            >
                                <span>
                                    <RxDividerVertical />
                                </span>
                            </motion.li>
                            <motion.li
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.1, delay: 0.6 }}
                                className='mt-1 cursor-pointer flex-row items-center rounded-xl px-2 py-1 font-bold tracking-wide'
                            >
                                <select value={language} className='w-full' defaultValue='English' onChange={(e) => handleChangeLanguage(e.target.value)}>
                                    <option value='en'>English 🇺🇸</option>
                                    <option value='vn'>VietNam 🇻🇳</option>
                                </select>
                            </motion.li>
                            <Link href={'/signIn'}>
                                <motion.li
                                    initial={{ y: -10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.1, delay: 0.7 }}
                                    className='font-bold'
                                >
                                    <div className='relative z-[900] mx-auto inline-block cursor-pointer rounded-xl hover:bg-textPurpleHover'>
                                        <div className='min-w-auto flex w-auto flex-row items-center gap-1 px-2 py-2 tracking-wide'>
                                            <div className='text-[1em] leading-snug'>{language === 'en' ? 'Login' : 'Đăng nhập'}</div>
                                        </div>
                                    </div>
                                </motion.li>
                            </Link>
                        </ul>
                        <Link href='/signIn'>
                            <button className='alight-center relative z-[1] flex max-w-full flex-row items-center justify-center gap-2 overflow-hidden rounded-xl bg-bgPurple px-6 py-2 font-black text-textWhite shadow-purple hover:bg-bgPurplePower hover:delay-[0s] hover:duration-[0.3s] hover:ease-ease'>
                                <motion.div
                                    initial={{ y: -10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.1, delay: 0.8 }}
                                    className='relative -ml-3 h-10 w-10'
                                >
                                    <div className='absolute z-[-1] h-10 w-10 rounded-full bg-bgPurplePower' />
                                    <div className='flex h-full w-full items-center justify-center  text-4xl text-textWhite hover:text-[70px]'>
                                        <WiDirectionRight />
                                    </div>
                                </motion.div>
                                <motion.div
                                    className='font-sans'
                                    initial={{ y: -10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.1, delay: 0.9 }}
                                >
                                    {language === 'en' ? 'Get Started' : 'Bắt đầu'}
                                </motion.div>
                            </button>
                        </Link>
                    </nav>
                    <button className='xl:hidden'>
                        <div className='relative z-[5] rounded-[50%] bg-white p-5 font-extrabold'>
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
