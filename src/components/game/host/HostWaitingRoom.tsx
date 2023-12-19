import { useEffect } from 'react';

//images
import Image from 'next/image';
import { bgWaiting } from '../../../../public/assets/images/game';
import { logoImg, studentsImg, teacherImg } from '../../../../public/assets/images/auth';

//redux
import { useAppSelector } from 'src/app/redux/hooks';
import { useState } from 'react';
import type { Socket } from 'socket.io-client';

//type
import QuizType from 'src/app/types/quizType';
import { TypePlayerWaitingRoom } from 'src/app/variable';
interface HostWaitingRoomProps {
    pin: string | undefined;
    socket: Socket;
    quiz: QuizType;
    playerList: any;
    startGame: () => void;
    closeGame: () => void;
    handlePlayerJoin: (player: any) => void;
}

const HostWaitingRoom = (props: HostWaitingRoomProps) => {
    useEffect(() => {
        props.socket?.on('player-added', (player: TypePlayerWaitingRoom, pinGameCurrent: string) => {
            if (props.pin === pinGameCurrent) {
                props.handlePlayerJoin(player);
            }
        });
        return () => {
            props.socket?.off('player-added');
        };
    }, [props.socket, props.pin, props]);

    return (
        <>
            <Image src={bgWaiting} alt='' className='absolute z-[-1] h-full w-full object-cover' />
            <div className='flex h-[82%] w-4/5 flex-col items-center justify-center gap-[2em] rounded-lg border border-solid border-textBlack bg-bgWaiting p-3 text-center shadow-boxWaiting'>
                <div className='mt-10px w-4/5 rounded-2xl bg-bgSwitch lgl:h-1/5'>
                    <h1 className='m-1 text-[1.5em] font-black text-textBrown lgl:text-[2.1rem]'>Waiting room</h1>
                    <h2 className='m-1 text-[1em] font-black text-textBrown lgl:text-[1.6rem]'>Show PIN to your students: {props.pin}</h2>
                </div>
                <div className='flex h-4/5 w-[90%] flex-col items-center justify-around rounded-xl bg-bgListUser p-3'>
                    <div className='flex h-4/5 w-full flex-col items-center justify-around gap-3 lgl:flex-row'>
                        <div className='relative flex h-full w-full flex-col items-center justify-center rounded-xl bg-bgTitle shadow-boxListUser lgl:w-2/5'>
                            <h1 className='py-3 text-[1.6rem] font-semibold text-textWhite'>
                                {/* Software Engineer */}
                                {props.quiz?.name}
                            </h1>
                            <Image src={logoImg} alt='' className='w-2/5' />
                            <p className='max-w-[80%] font-medium text-textWhite'>
                                {/* What will you do when your girl friend go to hotel with another man */}
                                {props.quiz?.description}
                            </p>
                        </div>
                        <div className='relative flex h-full w-full flex-col items-center gap-4 rounded-xl bg-bgTitle shadow-boxListUser lgl:w-2/5'>
                            <h1 className='py-3 text-[1.6rem] font-semibold text-textWhite'>Player List</h1>
                            <div className='h-4/5 w-full overflow-y-auto px-6 scrollbar-none'>
                                {props.playerList?.map((player: any, index: string) => <User key={index} player={player} />)}
                            </div>
                        </div>
                    </div>

                    <div className='z-[1] flex w-full items-center justify-end gap-[3em] lgl:w-[90%]'>
                        <button
                            className='leading-1 text-md inline-block h-[48px] cursor-pointer appearance-none items-center justify-center overflow-hidden rounded-md border-0 bg-bgButtonCloseGame px-4 text-center font-semibold text-textWhite shadow-boxButtonCloseGame hover:translate-y-[2px] hover:shadow-boxButtonCloseGameHover'
                            onClick={props.closeGame}
                        >
                            Close game
                        </button>
                        <button
                            className='leading-1 text-md z-[1] inline-flex h-[48px]  cursor-pointer appearance-none items-center justify-center overflow-hidden rounded-md border-0 bg-bgButtonStartGame px-4 text-center font-semibold text-textWhite shadow-boxButtonStartGame hover:translate-y-[2px] hover:shadow-boxButtonStartGameHover'
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

interface UserProps {
    player: any;
}
const User = (props: UserProps) => {
    return (
        <div className='relative  flex h-[70px] w-full flex-row items-center gap-4 rounded-xl bg-bgUser px-5 pl-4 shadow-boxUser lgl:h-1/4'>
            <span className='flex h-[1.5em] w-[1.5em] items-center justify-center rounded-full border-[2px] border-solid border-textBlack '>1</span>
            <Image
                src={props.player.avatar ? props.player.avatar : logoImg}
                alt=''
                className='h-[3em] w-[3em] rounded-full object-cover'
                width={60}
                height={60}
            />
            <p className='font-semibold'>{props.player.userName}</p>
            <Image src={teacherImg} alt='' className='absolute right-[1em] w-[2em] object-contain' />
        </div>
    );
};

export default HostWaitingRoom;
