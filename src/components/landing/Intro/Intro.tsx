'use client';
import Link from 'next/link';

//images
import Image from 'next/image';
import {
    directImg,
    logoImg,
    threePeopleImg
} from '../../../../public/assets/images/landing';

//animation
import { motion } from 'framer-motion';

//auth
import { useSession } from 'next-auth/react';

const Intro = () => {
    const { data: session } = useSession();
    // console.log(session);

    return (
        <motion.section
            id='intro'
            className='min-h-screen min-w-full relative flex justify-center items-center overflow-hidden'
        >
            <div className='max-w-[1440px] flex items-center justify-center flex-1 bg-transparent rounded-[4px] px-[3.13rem]'>
                <div className='flex flex-col items-center'>
                    <div className='flex flex-col -mb-2 mx-auto pl-[6em]'>
                        <div className='flex relative items-center pl-[1.88em]'>
                            <motion.div
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className='hidden mdl:flex mdl:bottom-[0em] w-[10.25em] mdl:left-[-8.25em] absolute xl:bottom-[0.9em] xl:left-[-9em]'
                            >
                                <Image
                                    src={directImg}
                                    alt=''
                                    className='overflow-hidden'
                                />
                            </motion.div>
                            <motion.div
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.7 }}
                                className='leading-[1.1] font-bold text-[2em] mdl:text-[4em] xl:text-[6.25em] mt-[-0.1em] tracking-[-0.035em]'
                            >
                                Challenge your
                            </motion.div>
                            <motion.div
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.8 }}
                            >
                                <Image
                                    src={threePeopleImg}
                                    alt=''
                                    className='w-[4em] mdl:w-[10em] xl:w-[13.75em] h-auto flex-none ml-6'
                                />
                            </motion.div>
                        </div>
                        <motion.div
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.9 }}
                            className='block pr-[2em] text-center'
                        >
                            <div className='flex leading[1.1] font-bold text-[2em] mdl:text-[4em] xl:text-[6.25em] mt-[-0.1em] tracking[-0.035] gap-x-10'>
                                <span className='inline-block'>friends </span>
                                <span className='inline-block'>Power </span>
                                <span className='inline-block'>Quizzes </span>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1 }}
                            className='flex items-center'
                        >
                            <div className='block text-textPurple leading-[1.1] font-bold text-[2em] mdl:text-[4em] xl:text-[6.25em] mt-[-0.1em] tracking-[-0.035em]'>
                                - easily and efficiently
                            </div>
                            <div className='block mdl:max-w-[12em] border-l-[1px] border-l-solid border-l-textGray -mb-6 ml-[1.13em] py-[0.63em] pl-[1.13em]'>
                                <div className='block leading-[1.4] text-[1em] my-0 font-semibold'>
                                    Study with your friends and Learn through
                                    games with Quizzes.
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1.1 }}
                            className='flex flex-col mt-[1em] xl:mt-[3.25em] items-center self-center gap-y-3'
                        >
                            <a
                                href='/signIn'
                                className='max-w-full relative flex z-[1] min-h-[3.13em] gap-x-[0.5rem] text-white text-center bg-bgPurple rounded-xl justify-center items-center pl-4 pr-3 py-2 font-black overflow-hidden shadow-purple cursor-pointer hover:bg-bgPurplePower  hover:duration-300 hover:delay-[0s]'
                            >
                                <div className='z-[-1] relative block -ml-3 w-9 h-9'>
                                    <div className='absolute z-[-1] w-9 h-9 bg-bgPurplePower rounded-full top-[0%] bottom-[0%] right-[0%] left-[0%]' />
                                    <div className='w-full h-full flex items-center justify-center align-middle'>
                                        <Image
                                            src={logoImg}
                                            className='w-3/5 h-3/5 max-w-full hover:h-4/5 hover:w-4/5'
                                            alt=''
                                        />
                                    </div>
                                </div>
                                <div className='block leading-[1.45] text-[1.13em] my-0'>
                                    Try now
                                </div>
                            </a>
                            <button className='font-bold text-textPurple cursor-pointer'>
                                Skip intro
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className='absolute w-[34.5em] h-[30em] opacity-[0.6] bg-gradient-footerIntro blur-[50px] top-auto bottom-[-0.6em] left-[-12.4em] right-auto rounded-[75em]'></div>
            <div className='absolute w-[99em] h-[37em] opacity-[0.6] bg-gradient-footerIntro blur-[50px] top-auto bottom-[-17.4em] left-auto right-[-21em] rounded-[75em]'></div>
        </motion.section>
    );
};

export default Intro;
