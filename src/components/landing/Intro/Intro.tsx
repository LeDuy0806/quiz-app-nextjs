'use client';
import Link from 'next/link';

//images
import Image from 'next/image';
import { directImg, logoImg, threePeopleImg } from '../../../../public/assets/images/landing';

//animation
import { motion } from 'framer-motion';

import { useLocalStorage } from 'src/hooks/useLocalStorage';
import { useEffect, useState } from 'react';

interface IntroProps {
    language: string;
}
const Intro = (props: IntroProps) => {
    const { language } = props;

    return (
        <motion.section id='intro' className='relative flex min-h-screen items-center justify-center overflow-hidden'>
            <div className='flex max-w-[1440px] flex-1 items-center justify-center rounded-[4px] bg-transparent'>
                <div className='flex flex-col items-center'>
                    <div className='-mb-2 flex w-full flex-col items-center justify-center'>
                        <div className='relative flex items-center pl-[1.88em]'>
                            <motion.div
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className='absolute hidden w-[10.25em] mdl:bottom-[0em] mdl:left-[-8.25em] mdl:flex xl:bottom-[0.9em] xl:left-[-9em]'
                            >
                                <Image src={directImg} alt='' className='overflow-hidden' />
                            </motion.div>
                            <motion.div
                                initial={{ y: 10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.7 }}
                                className='mt-[-0.1em] text-[2em] font-bold leading-[1.1] tracking-[-0.035em] mdl:text-[4em] xl:text-[6.25em]'
                            >
                                {language === 'en' ? 'Challenge your' : 'Thử thách cùng'}
                            </motion.div>
                            <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.8 }}>
                                <Image src={threePeopleImg} alt='' className='ml-6 h-auto w-[4em] flex-none mdl:w-[10em] xl:w-[13.75em]' />
                            </motion.div>
                        </div>
                        <motion.div
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.9 }}
                            className='mt-[-0.1em] flex items-center justify-center gap-x-10 self-center text-[2em] font-bold mdl:text-[4em] xl:text-[6.25em]'
                        >
                            {language === 'en' ? 'friends Power Quizzes' : 'bạn bè với Quizzes'}
                        </motion.div>
                        <motion.div
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1 }}
                            className='flex items-center justify-center'
                        >
                            <div className='mt-[-0.1em] block text-center text-[2em] font-bold leading-[1.1] tracking-[-0.035em] text-textPurple mdl:text-[4em] xl:text-[6.25em]'>
                                {language === 'en' ? '- easily and efficiently' : ' - dễ dàng và tiện lợi'}
                            </div>
                            <div className='border-l-solid -mb-6 ml-[1.13em] block border-l-[1px] border-l-textGray py-[0.63em] pl-[1.13em] mdl:max-w-[12em]'>
                                <div className='my-0 block text-[1em] font-semibold leading-[1.4]'>
                                    {language === 'en'
                                        ? 'study with your friends and Learn through games with Quizzes.'
                                        : 'học hỏi cùng bạn bè thông qua các game giải câu đố.'}
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1.1 }}
                            className='mt-[1em] flex w-[10em] flex-col gap-y-3 self-center xl:mt-[3.25em]'
                        >
                            <Link
                                href='/signIn'
                                className='z-[1] flex min-h-[3.13em] cursor-pointer items-center justify-center gap-x-[0.5rem] overflow-hidden rounded-xl bg-bgPurple px-4 py-2 text-center font-black text-white shadow-purple hover:bg-bgPurplePower  hover:delay-[0s] hover:duration-300'
                            >
                                <div className='relative z-[-1] -ml-3 block h-9 w-9'>
                                    <div className='absolute bottom-[0%] left-[0%] right-[0%] top-[0%] z-[-1] h-9 w-9 rounded-full bg-bgPurplePower' />
                                    <div className='flex h-full w-full items-center justify-center align-middle'>
                                        <Image src={logoImg} className='h-3/5 w-3/5 max-w-full hover:h-4/5 hover:w-4/5' alt='' />
                                    </div>
                                </div>
                                <div className='my-0 block text-[1.13em] leading-[1.45]'>{language === 'en' ? 'Try now' : 'Thử ngay'}</div>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className='absolute bottom-[-0.6em] left-[-12.4em] right-auto top-auto h-[30em] w-[34.5em] rounded-[75em] bg-gradient-footerIntro opacity-[0.6] blur-[50px]'></div>
            <div className='absolute bottom-[-17.4em] left-auto right-[-21em] top-auto h-[37em] w-[99em] rounded-[75em] bg-gradient-footerIntro opacity-[0.6] blur-[50px]'></div>
        </motion.section>
    );
};

export default Intro;
