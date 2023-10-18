//images
import Image from 'next/image';
import { bgWaiting } from '../../../public/assets/images/game';
import { logoImg, studentsImg, teacherImg } from '../../../public/assets/images/auth';

interface WaitingRoomProps {
    startGame: () => void;
}

const WaitingRoom = (props: WaitingRoomProps) => {
    return (
        <>
            <Image src={bgWaiting} alt='' className='z-[-1] w-full h-full absolute object-cover' />
            <div className='w-4/5 h-[82%] flex flex-col items-center justify-center gap-[2em] p-3 border border-solid border-textBlack text-center bg-bgWaiting shadow-boxWaiting rounded-lg'>
                <div className='mt-10px w-4/5 h-1/5 bg-bgSwitch rounded-2xl'>
                    <h1 className='font-black text-textBrown m-1 text-[2.1rem]'>Waiting room</h1>
                    <h2 className='font-black text-textBrown m-1 text-[1.6rem]'>
                        Show PIN to your students: 1809
                    </h2>
                </div>
                <div className='w-[90%] h-4/5 p-3 flex flex-col items-center justify-around bg-bgListUser rounded-xl'>
                    <div className='w-full h-4/5 flex justify-around items-center'>
                        <div className='relative w-2/5 h-full flex flex-col items-center justify-center bg-bgTitle rounded-xl shadow-boxListUser'>
                            <h1 className='text-[1.6rem] py-3 font-semibold text-textWhite'>
                                Software Engineer
                            </h1>
                            <Image src={logoImg} alt='' className='w-2/5' />
                            <p className='text-textWhite font-medium max-w-[80%]'>
                                What will you do when your girl friend go to hotel with another man
                            </p>
                        </div>
                        <div className='relative w-2/5 h-full gap-4 flex flex-col items-center bg-bgTitle rounded-xl shadow-boxListUser'>
                            <h1 className='text-[1.6rem] py-3 font-semibold text-textWhite'>
                                Player List
                            </h1>
                            <div className='w-full h-4/5 overflow-y-auto px-6 scrollbar-none'>
                                <User />
                                <User />
                                <User />
                                <User />
                                <User />
                                <User />
                                <User />
                                <User />
                                <User />
                            </div>
                        </div>
                    </div>

                    <div className='w-[90%] flex items-center justify-end gap-[3em]'>
                        <button className='text-center h-[48px] inline-flex appearance-none bg-bgButtonCloseGame border-0 rounded-md shadow-boxButtonCloseGame text-textWhite cursor-pointer justify-center items-center leading-1 text-md overflow-hidden px-4 font-semibold hover:shadow-boxButtonCloseGameHover hover:translate-y-[2px]'>
                            Close game
                        </button>
                        <button
                            className='text-center h-[48px] inline-flex appearance-none bg-bgButtonStartGame border-0 rounded-md shadow-boxButtonStartGame text-textWhite cursor-pointer justify-center items-center leading-1 text-md overflow-hidden px-4 font-semibold hover:shadow-boxButtonStartGameHover hover:translate-y-[2px]'
                            onClick={props.startGame}
                        >
                            Start a game
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

const User = () => {
    return (
        <div className='w-full relative h-1/4 flex flex-row items-center bg-bgUser rounded-xl shadow-boxUser mb-3 pl-4 gap-4'>
            <span className='flex items-center justify-center w-[1.5em] h-[1.5em] rounded-full border-[2px] border-solid border-textBlack '>
                1
            </span>
            <Image src={logoImg} alt='' className='w-[3em] object-contain' />
            <p className='font-semibold'>Alexander Ruler</p>
            <Image
                src={teacherImg}
                alt=''
                className='w-[2em] absolute object-contain right-[1em]'
            />
        </div>
    );
};

export default WaitingRoom;
