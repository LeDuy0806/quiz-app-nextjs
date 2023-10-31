import clsx from 'clsx';

//images
import Image from 'next/image';
import { championOne, championTwo } from '../../../public/assets/images/game';
import { logoImg } from '../../../public/assets/images/auth';

//animation
import { motion } from 'framer-motion';

//redux
import { useGetLeaderBoardQuery } from 'src/app/redux/services/leaderBoardApi';

//type
import { AnswerLeaderBoardResultType } from 'src/app/types/leaderboardType';
import UserType from 'src/app/types/userType';

interface LeaderBoardProps {
    leaderBoardResult: AnswerLeaderBoardResultType[];
    questionIndex: number;
}

const LeaderBoard = (props: LeaderBoardProps) => {
    return (
        <div className='h-full w-full relative flex items-center justify-center bg-bgPurpleLight text-textWhite'>
            <div className='z-[1] relative w-3/4 h-3/4 flex flex-col items-center justify-end rounded-[40px] bg-bgQuestion pb-6'>
                <div className='w-3/5 h-[6em] absolute grid place-content-center top-0 translate-y-[-50%] bg-bgMainLeaderBoard border-[3px] border-solid shadow-boxTitleLeaderBoard border-textBlack'>
                    <h1 className='z-[1] text-[60px] font-leaderBoardFont order-2 font-black text-textSweet text-shadow-textLeaderBoard italic'>LeaderBoard</h1>
                </div>
                <div className='w-4/5 h-4/5 bg-bgTitle rounded-3xl flex flex-col items-center justify-around'>
                    <div className='w-4/5 h-[10%] flex items-center justify-between text-textBlack font-bold '>
                        <p className='flex-1 text-center'>Number</p>
                        <p className='flex-1 text-center'>UserName</p>
                        <p className='flex-1 text-center'>Question Point</p>
                        <p className='flex-1 text-center'>Score</p>
                    </div>
                    <div className='w-4/5 h-4/5 overflow-y-scroll scrollbar-none'>
                        {props.leaderBoardResult
                            ?.slice()
                            ?.sort((a: AnswerLeaderBoardResultType, b: AnswerLeaderBoardResultType) => b?.playerCurrentScore - a?.playerCurrentScore)
                            .map((playerResult, index) => (
                                <User
                                    key={index}
                                    index={index}
                                    userData={playerResult.player}
                                    pointAnswerQuestion={playerResult.pointAnswerQuestion}
                                    playerCurrentScore={playerResult.playerCurrentScore}
                                />
                            ))}
                    </div>
                </div>
            </div>
            <div className='absolute w-[20em] h-[20em] rounded-full top-[6em] left-0'>
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
    userData: UserType;
    pointAnswerQuestion: number;
    playerCurrentScore: number;
}

const User = (props: UserProps) => {
    return (
        <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: props.index / 10 }}
            className={clsx(
                `w-full h-[60px] flex flex-row items-center justify-between rounded-2xl mb-10 text-textWhite font-semibold`,
                props.pointAnswerQuestion === 0 ? 'bg-bgUserItemLeaderBoardOne' : 'bg-bgUserItemLeaderBoardTwo'
            )}
        >
            <p className='flex flex-1 text-center items-center justify-center'>
                <span className='flex items-center justify-center w-[1.5em] h-[1.5em] rounded-full border-[2px] border-solid border-textYellow  text-textYellow'>
                    {props.index + 1}
                </span>
            </p>
            <div className='flex flex-2 flex-row items-center justify-center text-center gap-2'>
                <Image src={props.userData.avatar} alt='' className='w-[2.6em] h-[2.6em] rounded-full object-cover' width={50} height={50} />
                <p>{props.userData.userName}</p>
            </div>
            <p className='flex-1 text-center'>{props.pointAnswerQuestion}</p>
            <p className='flex-1 text-center'>{props.playerCurrentScore}</p>
        </motion.div>
    );
};

export default LeaderBoard;
