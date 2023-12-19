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
        <div className='relative flex h-full w-full items-center justify-center bg-bgPurpleLight text-textWhite'>
            <div className='relative z-[1] flex h-3/4 w-3/4 flex-col items-center justify-end rounded-[40px] bg-bgQuestion pb-6'>
                <div className='absolute top-0 grid h-[6em] w-3/5 translate-y-[-50%] place-content-center border-[3px] border-solid border-textBlack bg-bgMainLeaderBoard shadow-boxTitleLeaderBoard'>
                    <h1 className='z-[1] order-2 font-leaderBoardFont text-[30px] font-black italic text-textSweet text-shadow-textLeaderBoard md:text-[40px] xl:text-[60px]'>
                        LeaderBoard
                    </h1>
                </div>
                <div className='flex h-4/5 w-4/5 flex-col items-center justify-around rounded-3xl bg-bgTitle'>
                    <div className='flex h-[10%] w-4/5 items-center justify-between font-bold text-textBlack '>
                        <p className='flex-1 text-center'>Number</p>
                        <p className='flex-1 text-center'>UserName</p>
                        <p className='flex-1 text-center'>Question Point</p>
                        <p className='flex-1 text-center'>Score</p>
                    </div>
                    <div className='h-4/5 w-4/5 overflow-y-scroll scrollbar-none'>
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
            <div className='absolute left-0 top-[6em] h-[20em] w-[20em] rounded-full'>
                <Image src={championOne} alt='' className='h-full w-full' />
            </div>
            <div className='absolute bottom-[0.6em] right-[0em] h-[20em]  w-[20em] rounded-full'>
                <Image src={championTwo} alt='' className='h-full w-full' />
            </div>
            <div className='absolute bottom-[0.4em] left-[20em] h-[5em] w-[5em] rounded-full bg-textPurpleHover'></div>
            <div className='absolute right-[20em] top-[1em] h-[3em] w-[3em] rounded-full bg-textPurpleHover'></div>
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
                `mb-10 flex h-[60px] w-full flex-row items-center justify-between rounded-2xl font-semibold text-textWhite`,
                props.pointAnswerQuestion === 0 ? 'bg-bgUserItemLeaderBoardOne' : 'bg-bgUserItemLeaderBoardTwo'
            )}
        >
            <p className='flex flex-1 items-center justify-center text-center'>
                <span className='flex h-[1.5em] w-[1.5em] items-center justify-center rounded-full border-[2px] border-solid border-textYellow  text-textYellow'>
                    {props.index + 1}
                </span>
            </p>
            <div className='flex-2 flex flex-row items-center justify-center gap-2 text-center'>
                <Image src={props.userData.avatar} alt='' className='h-[2.6em] w-[2.6em] rounded-full object-cover' width={50} height={50} />
                <p>{props.userData.userName}</p>
            </div>
            <p className='flex-1 text-center'>{props.pointAnswerQuestion}</p>
            <p className='flex-1 text-center'>{props.playerCurrentScore}</p>
        </motion.div>
    );
};

export default LeaderBoard;
