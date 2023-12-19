'use client';

//images
import Image from 'next/image';
import { resultOne, resultTwo, champion } from '../../../../public/assets/images/game';

//chart
import { LineChart } from '@mui/x-charts/LineChart';

//route
import { useRouter } from 'next/navigation';
import { AnswerLeaderBoardResultType } from 'src/app/types/leaderboardType';

interface ResultsProps {
    totalPoint: number;
    totalPlayer: number;
    handleExitGame: () => void;
    handleShowLeaderBoardResult: () => void;
    leaderBoardResult: AnswerLeaderBoardResultType[];
}

const HostResult = (props: ResultsProps) => {
    return (
        <div className='relative flex h-full w-full items-center justify-center bg-bgPurpleLight text-textWhite'>
            <div className='relative z-[1] flex h-4/5 w-4/5 flex-row items-center justify-center rounded-[40px] bg-bgQuestion'>
                <div className='absolute top-0 flex h-[6em] w-3/5 translate-y-[-50%] justify-center bg-bgResultTitle  shadow-boxResultTitle'>
                    <h1 className='z-[1] order-2 font-resultFont text-[60px] font-black italic text-textResult text-shadow-shadowTextResult'>Result</h1>
                </div>
                <div className='flex h-full w-3/4 flex-row items-center justify-between'>
                    <div className='mt-20 flex h-4/5 w-2/5 flex-col items-center justify-around gap-3 rounded-3xl bg-bgPurpleLight'>
                        <div className='flex flex-col items-center'>
                            <Image src={resultOne} alt='' className='z-[1] h-[15em] w-[20em] object-cover' />
                            <h1 className='text-2xl font-bold'>Your game is finished</h1>
                        </div>
                        <div className='flex w-full flex-row justify-around'>
                            <button
                                className='leading-1 text-md inline-flex h-[48px] cursor-pointer appearance-none items-center justify-center overflow-hidden rounded-md border-0 bg-bgButtonCloseGame px-4 text-center font-semibold text-textWhite shadow-boxButtonCloseGame hover:translate-y-[2px] hover:shadow-boxButtonCloseGameHover'
                                onClick={props.handleShowLeaderBoardResult}
                            >
                                LeaderBoard
                            </button>
                            <button
                                className='leading-1 text-md inline-flex h-[48px] cursor-pointer appearance-none items-center justify-center overflow-hidden rounded-md border-0 bg-bgButtonStartGame px-6 text-center font-semibold text-textWhite shadow-boxButtonStartGame hover:translate-y-[2px] hover:shadow-boxButtonStartGameHover'
                                onClick={props.handleExitGame}
                            >
                                Exit Game
                            </button>
                        </div>
                    </div>

                    <div className='mt-20 flex h-4/5 w-3/5 flex-col items-center justify-center gap-3 rounded-3xl'>
                        <div className='flex w-4/5 flex-1 flex-row items-center justify-evenly'>
                            <div className='flex h-3/5 w-[12em] flex-col justify-around rounded-xl bg-bgPurpleLight pl-4'>
                                <p className='font-semibold text-textGray'>Total Player</p>
                                <p className='font-bold text-textBlack'>{props.totalPlayer} Player</p>
                            </div>
                            <div className='flex h-3/5 w-[12em] flex-col justify-around rounded-xl bg-bgPurpleLight pl-4'>
                                <p className='font-semibold text-textGray'>{`Completion > 50%`}</p>
                                <p className='font-bold text-textBlack'>100%</p>
                            </div>
                        </div>
                        <div className='flex w-4/5 flex-1 flex-row items-center justify-evenly  '>
                            <div className='flex h-3/5 w-[12em] flex-col justify-around rounded-xl bg-bgPurpleLight pl-4 '>
                                <p className='font-semibold text-textGray'>Player 0 Point</p>
                                <p className='font-bold text-textBlack'>
                                    {props.leaderBoardResult.reduce((total, x) => (x.playerCurrentScore == 0 ? total + 1 : total), 0)} Player
                                </p>
                            </div>
                            <div className='flex h-3/5 w-[12em] flex-col justify-around rounded-xl bg-bgPurpleLight pl-4'>
                                <p className='font-semibold text-textGray'>Player Full Point</p>
                                <p className='font-bold text-textBlack'>
                                    {props.leaderBoardResult.reduce((total, x) => (x.playerCurrentScore === props.totalPoint ? total + 1 : total), 0)} Player
                                </p>
                            </div>
                        </div>
                        <div className='flex-1'>
                            <LineChart
                                title='Time'
                                xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                                series={[{ curve: 'linear', data: [2, 5.5, 2, 8.5, 1.5, 5] }]}
                                width={500}
                                height={220}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute left-0 top-0 h-[20em] w-[20em] rounded-full'>
                <Image src={resultTwo} alt='' className='h-full w-full object-cover' />
            </div>
        </div>
    );
};

export default HostResult;
