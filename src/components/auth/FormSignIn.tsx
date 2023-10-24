'use client';

import { useState, useEffect, useMemo } from 'react';
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
import LoadingRoute from '../LoadingRoute';

//validates
import { EmailFormat } from 'src/app/validates';

//Redux
import { useAppDispatch } from 'src/app/redux/hooks';
import { loGin } from 'src/app/redux/slices/authSlice';
import { useLoginUserMutation, useLoginSocialMutation } from 'src/app/redux/services/authApi';

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

const FormSignIn = () => {
    const { data: session } = useSession();
    const router = useRouter();
    const dispatch = useAppDispatch();

    const [LoginSocial] = useLoginSocialMutation();

    useEffect(() => {
        if (session) {
            const { user } = session;
            setLoading(true);
            const handleLoginSocial = async () => {
                const { data }: any = await LoginSocial({
                    email: user?.email ?? '',
                    image: user?.image ?? '',
                    name: user?.name ?? ''
                });
                if (data) {
                    dispatch(loGin(data));
                    router.push('/home');
                }
            };
            handleLoginSocial();
        }
    }, [session, dispatch, router, LoginSocial]);

    const [loading, setLoading] = useState<boolean>(false);

    const [formData, setFormData] = useState<LoginType>(InitLogin);
    const [formError, setFormError] = useState<ErrorLoginType>(InitErrorLogin);

    const [click, setClick] = useState<boolean>(false);
    const [showPassWord, setShowPassWord] = useState<boolean>(false);

    const [Login, { data, isLoading, isError, error, isSuccess }] = useLoginUserMutation();

    useEffect(() => {
        if (!formData.mail || !formData.password || !EmailFormat(formData.mail)) {
            setClick(false);
        } else {
            setClick(true);
        }
    }, [formData.mail, formData.password]);

    useEffect(() => {
        if (isSuccess && data) {
            setLoading(true);
            dispatch(loGin(data));
            router.push('/home');
        }
    }, [isSuccess, data, dispatch, router]);

    useEffect(() => {
        if (isError) {
            const { data }: any = error;
            switch (data?.message) {
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
        }
    }, [isError, error]);

    const handleChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLogin = () => {
        setFormError(InitErrorLogin);
        Login(formData);
    };

    return (
        <motion.main
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.1 }}
            className='w-full max-w-full min-h-screen z-[100] flex flex-col bg-bgPink overflow-hidden mx-auto mt-auto'
        >
            <div className='absolute w-[760px] min-h-full mdl:min-h-[600px] rounded-[50px] bg-textWhite top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] overflow-hidden py-[60px] px-[210px]'>
                <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className='flex flex-row items-center justify-center gap-x-4 mb-[30px]'
                >
                    <Image src={logoImg} alt='' className='h-[50px] w-[50px]' />
                    <p className='text-[36px] text-textBlack font-black'>Quizzes</p>
                </motion.div>
                <div className='block h-full'>
                    <div className='flex flex-col mt-4'>
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
                                        `block min-h-[auto] w-full rounded-2xl border-[2px] px-3 py-[0.8rem] font-semibold outline-none focus:border-bgBlue focus:border-[2px] placeholder-gray-400 placeholder:italic`,
                                        EmailFormat(formData.mail) === false && 'focus:border-textError border-textError'
                                    )}
                                    placeholder='Enter email'
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
                                    className='min-h-[auto] w-full rounded-2xl border-[2px] bg-transparent px-3 py-[0.8rem] font-semibold outline-none focus:border-bgBlue focus:border-[2px] placeholder-gray-400 placeholder:italic'
                                    placeholder='Password'
                                    onChange={handleChangeForm}
                                />
                                <button
                                    className='absolute right-4 translate-y-[-50%] top-[50%] cursor-pointer'
                                    onClick={() => {
                                        setShowPassWord(!showPassWord);
                                    }}
                                >
                                    {showPassWord ? <AiFillEye className=' w-[20px] h-[20px]' /> : <AiFillEyeInvisible className=' w-[20px] h-[20px]' />}
                                </button>
                            </motion.div>

                            {formError.userName && <ErrorNotify message='Email does not exists' />}

                            {formError.password && <ErrorNotify message='Your password is wrong' />}

                            {formError.authAccount && <ErrorNotify message='Email is auth account' />}

                            <motion.button
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.4, delay: 0.5 }}
                                className={clsx(
                                    `w-full flex items-center justify-center rounded-2xl py-[0.6rem] text-textWhite font-bold leading-7`,
                                    click ? 'bg-bgBlue cursor-pointer' : 'bg-textGray cursor-default'
                                )}
                                onClick={handleLogin}
                            >
                                {isLoading ? <Image src={loadingImg} alt='' className='w-7 h-7 self-center' /> : 'Sign In'}
                            </motion.button>
                        </div>
                        <div className='flex flex-col w-full gap-y-2 mt-3'>
                            <motion.button
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                onClick={() => router.push('/signUp')}
                                className='block w-full text-sm py-4 font-semibold hover:bg-bgGrayLight hover:rounded-[18px] hover:text-[15px]'
                            >
                                No account? Sign up for FREE
                            </motion.button>
                            <motion.button
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.4, delay: 0.7 }}
                                className='block w-full  text-sm py-4 font-semibold hover:bg-bgGrayLight lue hover:rounded-[18px] hover:text-[15px]'
                            >
                                I forgot my password
                            </motion.button>

                            <motion.button
                                type='submit'
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.4, delay: 0.8 }}
                                className='w-full flex flex-row items-center justify-around bg-white rounded-2xl py-[0.8rem] text-textGray font-bold border-[2px] border-textPurple hover:bg-textPurpleBorder hover:text-textWhite'
                                onClick={() => signIn('google')}
                            >
                                <Image src={googleImg} alt='' className='block w-[20px] h-[20px]' />
                                <span className='inline-block'>Sign in with google</span>
                                <span />
                            </motion.button>

                            <motion.button
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.4, delay: 0.8 }}
                                className='w-full flex flex-row items-center justify-around bg-white rounded-2xl py-[0.8rem] text-textGray font-bold border-[2px] border-textBlue hover:bg-bgBlue hover:text-textWhite'
                                onClick={() => signIn('facebook')}
                            >
                                <Image src={facebookImg} alt='' className='block w-[20px] h-[20px]' />
                                <span className='inline-block'>Sign in with Facebook</span>
                                <span />
                            </motion.button>

                            <Link href='/'>
                                <motion.button
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.4, delay: 0.9 }}
                                    className='block w-full text-sm py-4 hover:bg-bgGrayLight hover:rounded-[18px] hover:text-[15px] font-bold mb-3'
                                >
                                    Back
                                </motion.button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='absolute w-full text-center min-h-[70px] bottom-0 left-[50%] translate-x-[-50%]'>
                    <p className='text-textGray font-semibold'>
                        ©2023 quizzes GmbH -<span className='text-textBlack font-bold'>Imprint & Privacy Policy</span>
                    </p>
                </div>
            </div>
            {loading && <LoadingRoute />}
        </motion.main>
    );
};

export default FormSignIn;
