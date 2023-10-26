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

type TypeChart = {
    Ox: number[];
    Oy: number[];
};

interface ResultsProps {
    solo: boolean;
    result: TypePlayerResult;
    answer: TypeAnswer[];
    lengthQuiz: number;
    checkResult: () => void;
}

const PlayerResult = (props: ResultsProps) => {
    const router = useRouter();

    const [dataChart, setDataChart] = useState<TypeChart>({ Ox: [], Oy: [] });

    // useEffect(() => {
    //     const listTimerAnswer = props.answer.map((item: any) => item.time);
    //     const listOfIndex = props.answer.map((item: any) => item.questionIndex);

    //     setDataChart({ ...dataChart, Ox: listTimerAnswer, Oy: listOfIndex });
    // }, [props.answer, dataChart]);

    const listTimerAnswer = props.answer?.map((item: any) => item.time);
    const listOfIndex = props.answer?.map((item: any) => item.questionIndex);

    // console.log(props.answer);

    const exitGame = () => {
        router.back();
    };

    return (
        <div className='h-full w-full relative flex items-center justify-center bg-bgPurpleLight text-textWhite'>
            <div className='z-[1] relative w-4/5 h-4/5 flex flex-row items-center justify-center rounded-[40px] bg-bgQuestion'>
                <div className='w-3/5 h-[6em] absolute flex justify-center top-0 translate-y-[-50%] bg-bgResultTitle  shadow-boxResultTitle'>
                    <h1 className='z-[1] text-[60px] order-2 font-black font-resultFont italic text-textResult text-shadow-shadowTextResult'>Result</h1>
                </div>
                <div className='w-3/4 h-full flex flex-row items-center justify-between'>
                    <div className='w-2/5 h-4/5 flex flex-col items-center justify-around bg-bgPurpleLight mt-20 rounded-3xl gap-3'>
                        <div>
                            <Image src={resultOne} alt='' className='z-[1] w-[20em] h-[15em] object-cover' />
                            <h1 className='text-2xl font-bold'>You finish Quiz with {props.result.pointSum} Point</h1>
                        </div>
                        <div className='w-full flex flex-row justify-around'>
                            <button
                                className='text-center h-[48px] inline-flex appearance-none bg-bgButtonStartGame border-0 rounded-md shadow-boxButtonStartGame text-textWhite cursor-pointer justify-center items-center leading-1 text-md overflow-hidden px-6 font-semibold hover:shadow-boxButtonStartGameHover hover:translate-y-[2px]'
                                onClick={exitGame}
                            >
                                Exit Game
                            </button>
                            <button
                                className='text-center h-[48px] inline-flex appearance-none bg-bgButtonCheckResult border-0 rounded-md shadow-boxButtonStartGame text-textWhite cursor-pointer justify-center items-center leading-1 text-md overflow-hidden px-4 font-semibold hover:translate-y-[2px]'
                                onClick={props.checkResult}
                            >
                                Check Result
                            </button>
                        </div>
                    </div>

                    <div className='w-3/5 h-4/5 flex flex-col items-center justify-center mt-20 rounded-3xl gap-3'>
                        <div className='w-4/5 flex-1 flex flex-row justify-evenly items-center'>
                            <div className='w-[12em] h-3/5 bg-bgPurpleLight rounded-xl flex flex-col justify-around pl-4'>
                                <p className='text-textGray font-semibold'>CORRECT ANSWER</p>
                                <p className='text-textBlack font-bold'>{props.result.correctAnswer} Question</p>
                            </div>
                            <div className='w-[12em] h-3/5 bg-bgPurpleLight rounded-xl flex flex-col justify-around pl-4'>
                                <p className='text-textGray font-semibold'>COMPLETION</p>
                                <p className='text-textBlack font-bold'>
                                    {Math.floor(((props.result.correctAnswer + props.result.incorrectAnswer) * 100) / props.lengthQuiz) || 100}%
                                </p>
                            </div>
                        </div>
                        <div className='w-4/5 flex-1 flex flex-row justify-evenly items-center  '>
                            <div className='w-[12em] h-3/5 bg-bgPurpleLight rounded-xl flex flex-col justify-around pl-4 '>
                                <p className='text-textGray font-semibold'>NO ANSWER</p>
                                <p className='text-textBlack font-bold'>{props.result.noAnswer} Question</p>
                            </div>
                            <div className='w-[12em] h-3/5 bg-bgPurpleLight rounded-xl flex flex-col justify-around pl-4'>
                                <p className='text-textGray font-semibold'>INCORRECT ANSWER</p>
                                <p className='text-textBlack font-bold'>{props.result.incorrectAnswer} Question</p>
                            </div>
                        </div>
                        <div className='flex-1'>
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
            <div className='absolute w-[20em] h-[20em] rounded-full top-0 left-0'>
                <Image src={resultTwo} alt='' className='w-full h-full object-cover' />
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
