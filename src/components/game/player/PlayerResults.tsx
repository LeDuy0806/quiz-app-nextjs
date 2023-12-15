'use client';

import { useEffect, useState } from 'react';

//images
import Image from 'next/image';
import { resultOne, resultTwo, champion } from '../../../../public/assets/images/game';

//chart
import { LineChart } from '@mui/x-charts/LineChart';
import { Line } from 'react-chartjs-2';

//route
import { useRouter } from 'next/navigation';
import { TypeAnswer, TypePlayerResult } from 'src/app/variable';

//redux
import { AnswerPlayerType } from 'src/app/types/playerResultType';

interface ResultsProps {
    solo: boolean;
    result: TypePlayerResult;
    answer: AnswerPlayerType[];
    lengthQuiz: number;
    checkResult: () => void;
    handleShowLeaderBoardResult?: () => void;
    exitGame?: () => void;
}

const PlayerResult = (props: ResultsProps) => {
    const router = useRouter();

    const listTimerAnswer = props.answer?.map((item: AnswerPlayerType) => item.time);
    const listOfIndex = props.answer?.map((item: AnswerPlayerType) => item.questionIndex);

    const handleBack = () => {
        router.back();
    };

    return (
        <div className='relative flex min-h-screen w-full items-center justify-center bg-bgPurpleLight py-20 text-textWhite'>
            <div className='relative z-[1] flex h-full w-4/5 flex-row items-center justify-center rounded-[40px] bg-bgQuestion py-20 lgl:h-4/5'>
                <div className='absolute top-0 hidden h-[6em] w-3/5 translate-y-[-50%] justify-center bg-bgResultTitle shadow-boxResultTitle  md:flex'>
                    <h1 className='z-[1] order-2 font-resultFont text-[60px] font-black italic text-textResult text-shadow-shadowTextResult'>Result</h1>
                </div>
                <div className='mt-[40em] flex h-full w-3/4 flex-col items-center justify-between lgl:mt-0 lgl:flex-row'>
                    <div className='top-0 flex h-[6em] w-[250px] translate-y-[-50%] justify-center bg-bgResultTitle shadow-boxResultTitle lgl:hidden'>
                        <h1 className='z-[1] order-2 font-resultFont text-[60px] font-black italic text-textResult text-shadow-shadowTextResult'>Result</h1>
                    </div>
                    <div className='flex h-4/5 w-full flex-col items-center justify-around gap-3 rounded-3xl bg-bgPurpleLight py-5 md:mt-20 lgl:w-2/5'>
                        <div className='flex flex-col items-center'>
                            <Image src={resultOne} alt='' className='z-[1] h-[15em] w-[20em] object-cover' />
                            <h1 className='text-center text-2xl font-bold'>You finish Quiz with {props.result.pointSum} Point</h1>
                            {!props.solo && (
                                <button
                                    className='leading-1 text-md inline-flex h-[48px] cursor-pointer appearance-none items-center justify-center overflow-hidden rounded-md border-0 bg-bgButtonCloseGame px-4 text-center font-semibold text-textWhite shadow-boxButtonCloseGame hover:translate-y-[2px] hover:shadow-boxButtonCloseGameHover'
                                    onClick={props.handleShowLeaderBoardResult}
                                >
                                    LeaderBoard
                                </button>
                            )}
                        </div>
                        <div className='flex w-full flex-row justify-around'>
                            <button
                                className='leading-1 text-md inline-flex h-[48px] cursor-pointer appearance-none items-center justify-center overflow-hidden rounded-md border-0 bg-bgButtonStartGame px-6 text-center font-semibold text-textWhite shadow-boxButtonStartGame hover:translate-y-[2px] hover:shadow-boxButtonStartGameHover'
                                onClick={props.solo === true ? handleBack : props.exitGame}
                            >
                                Exit Game
                            </button>
                            <button
                                className='leading-1 text-md inline-flex h-[48px] cursor-pointer appearance-none items-center justify-center overflow-hidden rounded-md border-0 bg-bgButtonCheckResult px-4 text-center font-semibold text-textWhite shadow-boxButtonStartGame hover:translate-y-[2px]'
                                onClick={props.checkResult}
                            >
                                Check Result
                            </button>
                        </div>
                    </div>

                    <div className='mt-20 flex w-full flex-col items-center justify-center gap-3 rounded-3xl lgl:h-4/5 lgl:w-3/5'>
                        <div className='flex w-4/5 flex-1 flex-col items-center justify-evenly gap-3 md:flex-row'>
                            <div className='flex h-3/5 w-[12em] flex-col justify-around rounded-xl bg-bgPurpleLight py-2 pl-4 md:w-1/2'>
                                <p className='text-[12px] font-semibold text-textGray xl:text-sm'>CORRECT ANSWER</p>
                                <p className='font-bold text-textBlack'>{props.result.correctAnswer} Question</p>
                            </div>
                            <div className='flex h-3/5 w-[12em]  flex-col justify-around rounded-xl bg-bgPurpleLight py-2 pl-4 md:w-1/2'>
                                <p className='text-[12px] font-semibold text-textGray xl:text-sm'>COMPLETION</p>
                                <p className='font-bold text-textBlack'>
                                    {Math.floor(((props.result.correctAnswer + props.result.incorrectAnswer) * 100) / props.lengthQuiz) || 100}%
                                </p>
                            </div>
                        </div>
                        <div className='flex w-4/5 flex-1 flex-col items-center justify-evenly gap-3 md:flex-row'>
                            <div className='flex h-3/5 w-[12em] flex-col justify-around rounded-xl bg-bgPurpleLight py-2 pl-4 md:w-1/2'>
                                <p className='text-[12px] font-semibold text-textGray xl:text-sm'>NO ANSWER</p>
                                <p className='font-bold text-textBlack'>{props.result.noAnswer} Question</p>
                            </div>
                            <div className='flex h-3/5 w-[12em] flex-col justify-around rounded-xl bg-bgPurpleLight py-2 pl-4 md:w-1/2'>
                                <p className='text-[12px] font-semibold text-textGray xl:text-sm'>INCORRECT ANSWER</p>
                                <p className='font-bold text-textBlack'>{props.result.incorrectAnswer} Question</p>
                            </div>
                        </div>
                        <div className='max-w-full flex-1'>
                            <LineChart
                                title='Time'
                                xAxis={[{ data: listOfIndex }]}
                                series={[{ curve: 'linear', data: listTimerAnswer }]}
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

export default PlayerResult;

{
    /* 
                <div className='w-1/3 flex items-center justify-center'>
                    <LineChart
                        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                        series={[
                            {
                                data: [2, 5.5, 2, 8.5, 1.5, 5]
                            }
                        ]}
                        width={500}
                        height={300}
                    />
                </div> */
}
