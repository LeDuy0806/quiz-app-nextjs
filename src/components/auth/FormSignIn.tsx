'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import clsx from 'clsx';
import { signIn } from 'next-auth/react';

//images
import Image from 'next/image';
import { logoImg, googleImg, facebookImg, loadingImg } from '../../../public/assets/images/auth';

//routes
import { useRouter } from 'next/navigation';
import Link from 'next/link';

//icons
import { AiFillEyeInvisible } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';

//animation
import { motion } from 'framer-motion';

//components
import ErrorNotify from './Error';

//validates
import { EmailFormat } from 'src/app/validates';

//Redux
import { useAppDispatch } from 'src/app/redux/hooks';
import { logIn } from 'src/app/redux/slices/authSlice';
import { useLoginUserMutation, useLoginSocialMutation } from 'src/app/redux/services/authApi';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';

//type
import { LoginType, ErrorLoginType } from 'src/app/variable';

const InitLogin = { mail: '', password: '' } as LoginType;
const InitErrorLogin = {
    userName: false,
    password: false,
    authAccount: false
} as ErrorLoginType;

//auth
import { useSession } from 'next-auth/react';
import LiquidLoading from '../LiquidLoading';
import { VscLoading } from 'react-icons/vsc';

const FormSignIn = () => {
    const mounted = useRef<boolean>(true);
    const { data: session } = useSession();

    const [language, setLanguage] = useState('');
    useEffect(() => {
        mounted.current = true;
        const value = JSON.parse(localStorage.getItem('language')!);
        setLanguage(value);
        return () => {
            mounted.current = false;
        };
    }, []);

    const router = useRouter();
    const dispatch = useAppDispatch();

    const [LoginSocial] = useLoginSocialMutation();
    const [Login, { isLoading }] = useLoginUserMutation();

    const [loading, setLoading] = useState<boolean>(false);
    const [formData, setFormData] = useState<LoginType>(InitLogin);
    const [formError, setFormError] = useState<ErrorLoginType>(InitErrorLogin);
    const [click, setClick] = useState<boolean>(false);
    const [showPassWord, setShowPassWord] = useState<boolean>(false);

    useEffect(() => {
        if (session) {
            const { user } = session;
            setLoading(true);
            LoginSocial({
                email: user?.email ?? '',
                image: user?.image ?? '',
                name: user?.name ?? ''
            })
                .unwrap()
                .then((res) => {
                    dispatch(logIn(res));
                    router.push('/home');
                })
                .catch((error) => console.log(error));
        }
    }, [session, dispatch, router, LoginSocial]);

    useEffect(() => {
        if (!formData.mail || !formData.password || !EmailFormat(formData.mail)) {
            setClick(false);
        } else {
            setClick(true);
        }
    }, [formData.mail, formData.password]);

    const handleChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLogin = async () => {
        setFormError(InitErrorLogin);
        await Login(formData)
            .unwrap()
            .then((result) => {
                setLoading(true);
                dispatch(logIn(result));
                router.push('/home');
            })
            .catch((error: FetchBaseQueryError) => {
                const { message }: any = error?.data;
                switch (message) {
                    case 'Account not exist':
                        setFormError(() => {
                            var newError = { ...InitErrorLogin, userName: true };
                            return newError;
                        });
                        break;
                    case 'Wrong password':
                        setFormError(() => {
                            var newError = { ...InitErrorLogin, password: true };
                            return newError;
                        });
                        break;

                    case 'Email is auth account':
                        setFormError(() => {
                            var newError = { ...InitErrorLogin, authAccount: true };
                            return newError;
                        });
                        break;
                    default:
                        break;
                }
            });
    };

    return (
        <motion.main
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.1 }}
            className='z-[49] mx-auto mt-auto flex min-h-screen w-full max-w-full flex-col overflow-hidden bg-bgPink'
        >
            <div className='absolute left-[50%] top-[50%] min-h-full w-[760px] translate-x-[-50%] translate-y-[-50%] overflow-hidden rounded-[50px] bg-textWhite px-[210px] py-[60px] mdl:min-h-[600px]'>
                <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className='mb-[30px] flex flex-row items-center justify-center gap-x-4'
                >
                    <Image src={logoImg} alt='' className='h-[50px] w-[50px]' />
                    <p className='text-[36px] font-black text-textBlack'>Quizzes</p>
                </motion.div>
                <div className='block h-full'>
                    <div className='mt-4 flex flex-col'>
                        <div className=''>
                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.4, delay: 0.3 }}
                                className='relative mb-6'
                            >
                                <input
                                    type='email'
                                    name='mail'
                                    className={clsx(
                                        `block min-h-[auto] w-full rounded-2xl border-[2px] px-3 py-[0.8rem] font-semibold placeholder-gray-400 outline-none placeholder:italic focus:border-[2px] focus:border-bgBlue`,
                                        EmailFormat(formData.mail) === false && 'border-textError focus:border-textError'
                                    )}
                                    placeholder={language === 'en' ? 'Enter email' : 'Nhập email'}
                                    onChange={handleChangeForm}
                                />
                            </motion.div>

                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.4, delay: 0.4 }}
                                className='relative mb-6'
                            >
                                <input
                                    type={showPassWord ? 'text' : 'password'}
                                    name='password'
                                    className='min-h-[auto] w-full rounded-2xl border-[2px] bg-transparent px-3 py-[0.8rem] font-semibold placeholder-gray-400 outline-none placeholder:italic focus:border-[2px] focus:border-bgBlue'
                                    placeholder={language === 'en' ? 'Password' : 'Mật khẩu'}
                                    onChange={handleChangeForm}
                                />
                                <button
                                    className='absolute right-4 top-[50%] translate-y-[-50%] cursor-pointer'
                                    onClick={() => {
                                        setShowPassWord(!showPassWord);
                                    }}
                                >
                                    {showPassWord ? <AiFillEye className=' h-[20px] w-[20px]' /> : <AiFillEyeInvisible className=' h-[20px] w-[20px]' />}
                                </button>
                            </motion.div>

                            {formError.userName && <ErrorNotify message={language === 'en' ? 'Email does not exists!' : 'Email không tồn tại!'} />}

                            {formError.password && <ErrorNotify message={language === 'en' ? 'Your password is wrong!' : 'Mật khẩu không đúng!'} />}

                            {formError.authAccount && <ErrorNotify message={language === 'en' ? 'Email is auth account' : 'Tài khoảng đã được sử dụng'} />}

                            <motion.button
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.4, delay: 0.5 }}
                                className={clsx(
                                    `flex w-full items-center justify-center rounded-2xl py-[0.6rem] font-bold leading-7 text-textWhite`,
                                    click ? 'cursor-pointer bg-bgBlue' : 'cursor-default bg-textGray'
                                )}
                                onClick={handleLogin}
                            >
                                {isLoading || loading ? (
                                    <>
                                        <VscLoading className='mr-3 h-5 w-5 animate-spin text-white' />
                                        {language === 'en' ? 'Processing...' : 'Đang tải...'}
                                    </>
                                ) : language === 'en' ? (
                                    'Sign In'
                                ) : (
                                    'Đăng nhập'
                                )}
                            </motion.button>
                        </div>
                        <div className='mt-3 flex w-full flex-col gap-y-2'>
                            <motion.button
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                onClick={() => router.push('/signUp')}
                                className='block w-full py-4 text-sm font-semibold hover:rounded-[18px] hover:bg-bgGrayLight hover:text-[15px]'
                            >
                                {language === 'en' ? 'No account? Sign up for FREE' : 'Chưa có tài khoản? Đăng ký miễn phí'}
                            </motion.button>
                            <motion.button
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.4, delay: 0.7 }}
                                className='lue block  w-full py-4 text-sm font-semibold hover:rounded-[18px] hover:bg-bgGrayLight hover:text-[15px]'
                            >
                                {language === 'en' ? 'I forgot my password' : 'Quên mật khẩu'}
                            </motion.button>

                            <motion.button
                                type='submit'
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.4, delay: 0.8 }}
                                className='flex w-full flex-row items-center justify-around rounded-2xl border-[2px] border-textPurple bg-white py-[0.8rem] font-bold text-textGray hover:bg-textPurpleBorder hover:text-textWhite'
                                onClick={() => signIn('google')}
                            >
                                <Image src={googleImg} alt='' className='block h-[20px] w-[20px]' />
                                <span className='inline-block'>{language === 'en' ? 'Sign in with Google' : 'Đăng nhập bằng Google'}</span>
                                <span />
                            </motion.button>

                            <motion.button
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.4, delay: 0.8 }}
                                className='flex w-full flex-row items-center justify-around rounded-2xl border-[2px] border-textBlue bg-white py-[0.8rem] font-bold text-textGray hover:bg-bgBlue hover:text-textWhite'
                                onClick={() => signIn('facebook')}
                            >
                                <Image src={facebookImg} alt='' className='block h-[20px] w-[20px]' />
                                <span className='inline-block'>{language === 'en' ? 'Sign in with Facebook' : 'Đăng nhập bằng Facebook'}</span>
                                <span />
                            </motion.button>

                            <Link href='/'>
                                <motion.button
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.4, delay: 0.9 }}
                                    className='mb-3 block w-full py-4 text-sm font-bold hover:rounded-[18px] hover:bg-bgGrayLight hover:text-[15px]'
                                >
                                    {language === 'en' ? 'Back' : 'Trở về'}
                                </motion.button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='absolute bottom-0 left-[50%] min-h-[70px] w-full translate-x-[-50%] text-center'>
                    <p className='font-semibold text-textGray'>
                        ©2023 quizzes GmbH -
                        <span className='font-bold text-textBlack'>
                            {language === 'en' ? ' Imprint & Privacy Policy' : ' Điều khoản & và chính sách bảo mật'}
                        </span>
                    </p>
                </div>
            </div>
            {loading && <LiquidLoading />}
        </motion.main>
    );
};

export default FormSignIn;
