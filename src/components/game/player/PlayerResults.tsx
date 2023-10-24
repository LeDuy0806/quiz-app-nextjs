'use client';

//images
import Image from 'next/image';
import { resultOne, resultTwo, champion } from '../../../../public/assets/images/game';

//chart
import { LineChart } from '@mui/x-charts/LineChart';

//route
import { useRouter } from 'next/navigation';

interface ResultsProps {}

const PlayerResult = (props: ResultsProps) => {
    const router = useRouter();

    const exitGame = () => {
        router.back();
    };
    return (
        <div className='h-full w-full relative flex items-center justify-center bg-bgPurpleLight text-textWhite'>
            <div className='z-[1] relative w-4/5 h-4/5 flex flex-row items-center justify-center rounded-[40px] bg-bgQuestion'>
                <div className='w-3/5 h-[6em] absolute flex justify-center top-0 translate-y-[-50%] bg-bgResultTitle  shadow-boxResultTitle'>
                    <h1 className='z-[1] text-[60px] order-2 font-black font-resultFont italic text-textResult text-shadow-shadowTextResult'>Result</h1>
                </div>
                <div className='w-1/3 flex items-center justify-center'>
                    <LineChart
                        series={[
                            { curve: 'linear', data: [0, 5, 2, 6, 3, 9.3] },
                            { curve: 'linear', data: [6, 3, 7, 9.5, 4, 2] }
                        ]}
                        //   {/* ... */}
                        width={500}
                        height={300}
                    />
                </div>
                <div className='w-1/3 h-full flex flex-col items-center justify-center flex-1 '>
                    <div className='w-full h-[18em] flex flex-col items-center justify-center bg-red-100 mt-20 rounded-3xl gap-3'>
                        <Image src={resultOne} alt='' className='z-[1] w-[20em] h-[10em] object-cover' />
                        <h1 className='text-2xl font-bold'>You finish quiz with 3 Point</h1>
                        <button className='text-center h-[48px] inline-flex appearance-none bg-bgButtonCheckResult border-0 rounded-md shadow-boxButtonStartGame text-textWhite cursor-pointer justify-center items-center leading-1 text-md overflow-hidden px-4 font-semibold hover:translate-y-[2px]'>
                            Check Result
                        </button>
                    </div>

                    <div className='w-full flex-1 flex flex-row justify-evenly items-center'>
                        <div className='w-[12em] h-3/5 bg-bgPurpleLight rounded-xl flex flex-col justify-center pl-4'>
                            <p className='text-textGray font-semibold'>CORRECT ANSWER</p>
                            <p className='text-textBlack font-bold'>1 Question</p>
                        </div>
                        <div className='w-[12em] h-3/5 bg-bgPurpleLight rounded-xl flex flex-col justify-center pl-4'>
                            <p className='text-textGray font-semibold'>COMPLETION</p>
                            <p className='text-textBlack font-bold'>70%</p>
                        </div>
                    </div>
                    <div className='w-full flex-1 flex flex-row justify-evenly items-center '>
                        <div className='w-[12em] h-3/5 bg-bgPurpleLight rounded-xl flex flex-col justify-center pl-4'>
                            <p className='text-textGray font-semibold'>NO ANSWER</p>
                            <p className='text-textBlack font-bold'>1 Question</p>
                        </div>
                        <div className='w-[12em] h-3/5 bg-bgPurpleLight rounded-xl flex flex-col justify-center pl-4'>
                            <p className='text-textGray font-semibold'>INCORRECT ANSWER</p>
                            <p className='text-textBlack font-bold'>1 Question</p>
                        </div>
                    </div>
                    <div className='w-full flex-1 flex flex-row justify-center items-center gap-9'>
                        <button
                            className='text-center h-[48px] inline-flex appearance-none bg-bgButtonStartGame border-0 rounded-md shadow-boxButtonStartGame text-textWhite cursor-pointer justify-center items-center leading-1 text-md overflow-hidden px-4 font-semibold hover:shadow-boxButtonStartGameHover hover:translate-y-[2px]'
                            onClick={exitGame}
                        >
                            Exit Game
                        </button>

                        <button className='text-center h-[48px] inline-flex appearance-none bg-bgButtonCloseGame border-0 rounded-md shadow-boxButtonCloseGame text-textWhite cursor-pointer justify-center items-center leading-1 text-md overflow-hidden px-4 font-semibold hover:shadow-boxButtonCloseGameHover hover:translate-y-[2px]'>
                            LeaderBoard
                        </button>
                    </div>
                </div>

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
                </div>
            </div>
            <div className='absolute w-[20em] h-[20em] rounded-full top-0 left-0'>
                <Image src={resultTwo} alt='' className='w-full h-full object-cover' />
            </div>
        </div>
    );
};

export default PlayerResult;
