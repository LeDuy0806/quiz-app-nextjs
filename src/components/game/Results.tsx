'use client';

//images
import Image from 'next/image';
import { resultOne, resultTwo, champion } from '../../../public/assets/images/game';

//chart
import { LineChart } from '@mui/x-charts/LineChart';

//route
import { useRouter } from 'next/navigation';

interface ResultsProps {
    openCheckResult: () => void;
}

const Results = (props: ResultsProps) => {
    const router = useRouter();

    const exitGame = () => {
        router.back();
    };
    return (
        <div className='h-full w-full relative flex items-center justify-center bg-bgPurpleLight text-textWhite'>
            <div className='z-[1] relative w-4/5 h-4/5 flex flex-row items-center justify-center rounded-[40px] bg-bgQuestion'>
                <div className='w-3/5 h-[6em] absolute flex justify-center top-0 translate-y-[-50%] bg-bgResultTitle  shadow-boxResultTitle'>
                    <h1 className='z-[1] text-[60px] order-2 font-black font-resultFont italic text-textResult text-shadow-shadowTextResult'>
                        Result
                    </h1>
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
                        <Image
                            src={resultOne}
                            alt=''
                            className='z-[1] w-[20em] h-[10em] object-cover'
                        />
                        <h1 className='text-2xl font-bold'>You finish quiz with 3 Point</h1>
                        <button
                            onClick={props.openCheckResult}
                            className='text-center h-[48px] inline-flex appearance-none bg-bgButtonCheckResult border-0 rounded-md shadow-boxButtonStartGame text-textWhite cursor-pointer justify-center items-center leading-1 text-md overflow-hidden px-4 font-semibold hover:translate-y-[2px]'
                        >
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

export default Results;

// <!-- HTML !-->
// <button class="button-64" role="button"><span class="text">Button 64</span></button>

// /* CSS */
// .button-64 {
//   align-items: center;
//   background-image: linear-gradient(144deg,#AF40FF, #5B42F3 50%,#00DDEB);
//   border: 0;
//   border-radius: 8px;
//   box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
//   box-sizing: border-box;
//   color: #FFFFFF;
//   display: flex;
//   font-family: Phantomsans, sans-serif;
//   font-size: 20px;
//   justify-content: center;
//   line-height: 1em;
//   max-width: 100%;
//   min-width: 140px;
//   padding: 3px;
//   text-decoration: none;
//   user-select: none;
//   -webkit-user-select: none;
//   touch-action: manipulation;
//   white-space: nowrap;
//   cursor: pointer;
// }

// .button-64:active,
// .button-64:hover {
//   outline: 0;
// }

// .button-64 span {
//   background-color: rgb(5, 6, 45);
//   padding: 16px 24px;
//   border-radius: 6px;
//   width: 100%;
//   height: 100%;
//   transition: 300ms;
// }

// .button-64:hover span {
//   background: none;
// }

// @media (min-width: 768px) {
//   .button-64 {
//     font-size: 24px;
//     min-width: 196px;
//   }
// }
