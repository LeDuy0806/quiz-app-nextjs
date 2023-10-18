import clsx from 'clsx';

//images
import Image from 'next/image';
import { championOne, championTwo } from '../../../public/assets/images/game';
import { logoImg } from '../../../public/assets/images/auth';

//animation
import { motion } from 'framer-motion';
import { useEffect } from 'react';

interface ResultsProps {
    openResult: () => void;
}

const LeaderBoard = (props: ResultsProps) => {
    useEffect(() => {
        setTimeout(() => {
            props.openResult();
        }, 5000);
    }, []);
    return (
        <div className='h-full w-full relative flex items-center justify-center bg-bgPurpleLight text-textWhite'>
            <div className='z-[1] relative w-3/4 h-3/4 flex flex-col items-center justify-end rounded-[40px] bg-bgQuestion pb-6'>
                <div className='w-3/5 h-[6em] absolute grid place-content-center top-0 translate-y-[-50%] bg-bgMainLeaderBoard border-[3px] border-solid shadow-boxTitleLeaderBoard border-textBlack'>
                    <h1 className='z-[1] text-[60px] font-leaderBoardFont order-2 font-black text-textSweet text-shadow-textLeaderBoard italic'>
                        LeaderBoard
                    </h1>
                </div>
                <div className='w-4/5 h-4/5 bg-bgTitle rounded-3xl flex flex-col items-center justify-around'>
                    <div className='w-4/5 h-[10%] flex items-center justify-between text-textBlack font-bold '>
                        <p className='flex-1 text-center'>Number</p>
                        <p className='flex-1 text-center'>UserName</p>
                        <p className='flex-1 text-center'>Question Point</p>
                        <p className='flex-1 text-center'>Score</p>
                    </div>
                    <div className='w-4/5 h-4/5 overflow-y-scroll scrollbar-none'>
                        {[1, 2, 3, 4, 5, 6, 7].map((index) => (
                            <User key={index} index={index} />
                        ))}
                    </div>
                </div>
            </div>
            <div className='absolute w-[20em] h-[20em] rounded-full top-0 left-0'>
                <Image src={championOne} alt='' className='w-full h-full' />
            </div>
            <div className='absolute w-[20em] h-[20em] rounded-full  bottom-[0.6em] right-[0em]'>
                <Image src={championTwo} alt='' className='w-full h-full' />
            </div>
            <div className='absolute w-[5em] h-[5em] rounded-full bg-textPurpleHover bottom-[0.4em] left-[20em]'></div>
            <div className='absolute w-[3em] h-[3em] rounded-full bg-textPurpleHover top-[1em] right-[20em]'></div>
        </div>
    );
};

interface UserProps {
    index: number;
}

const User = (props: UserProps) => {
    return (
        <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: props.index / 10 }}
            className={clsx(
                `w-full h-[60px] flex flex-row items-center justify-between bg-bgUserItemLeaderBoardTwo rounded-2xl mb-10 text-textWhite font-semibold`,
                props.index % 2 === 1 && 'bg-bgUserItemLeaderBoardOne'
            )}
        >
            <p className='flex flex-1 text-center items-center justify-center'>
                <span className='flex items-center justify-center w-[1.5em] h-[1.5em] rounded-full border-[2px] border-solid border-textYellow  text-textYellow'>
                    {props.index}
                </span>
            </p>
            <div className='flex flex-2 flex-row items-center justify-center text-center gap-2'>
                <Image src={logoImg} alt='' className='w-[2.6em] h-[2.6em]' />
                <p>Alexander ThuHien</p>
            </div>
            <p className='flex-1 text-center'>5</p>
            <p className='flex-1 text-center'>20</p>
        </motion.div>
    );
};

export default LeaderBoard;
