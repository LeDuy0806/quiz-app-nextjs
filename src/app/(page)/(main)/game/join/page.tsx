'use client';
import { useState } from 'react';
import clsx from 'clsx';

//images
import Image from 'next/image';
import { logoImg } from '../../../../../../public/assets/images/auth';
import { bgJoin } from '../../../../../../public/assets/images/game';

//route
import { useRouter } from 'next/navigation';

//component
import LoadingRoute from 'src/components/LoadingRoute';

//redux
import { useAppSelector, useAppDispatch } from 'src/app/redux/hooks';
import { useCreatePlayerResultMutation } from 'src/app/redux/services/playerResultApi';
import { useAddPlayerMutation } from 'src/app/redux/services/gameApi';
import { addPlayer } from 'src/app/redux/slices/gamesSlice';

//toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Join = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const authData = useAppSelector((state) => state.auth.authData);
    const socket = useAppSelector((state) => state.socket.socket);

    const [loading, setLoading] = useState<boolean>(false);
    const [pin, setPin] = useState<string>('');

    const [InitPlayerResult, isSuccess] = useCreatePlayerResultMutation();
    const [InitAddPlayer] = useAddPlayerMutation();

    const result = async (message: string, playerId: string, gameId: string) => {
        if (message === 'correct') {
            const newPlayerResult = {
                player: authData?.user?._id,
                game: gameId,
                score: 0,
                answers: []
            };
            await InitPlayerResult({ accessToken: authData?.accessToken, newPlayerResult });
            const { data }: any = await InitAddPlayer({ accessToken: authData?.accessToken, gameId, playerId });
            dispatch(addPlayer(data));
            setLoading(true);
            if (data && isSuccess) {
                router.push(`/game/player/?id=${gameId}`);
            }
        } else {
            toast.error('Pin does not exists');
        }
    };

    const joinGame = () => {
        if (pin) {
            socket?.emit('add-player', authData?.user, socket.id, pin, (message: string, playerId: string, gameId: string) => {
                result(message, playerId, gameId);
            });
        }
    };

    return (
        <div className='relative h-full w-full flex flex-col'>
            <Image src={bgJoin} className='w-full h-full absolute object-cover' alt='' />
            <div className='w-full relative flex flex-1 flex-col justify-center items-center'>
                <div className='flex flex-col gap-10 items-center justify-center'>
                    <div className='w-full flex flex-row items-center justify-evenly'>
                        <Image src={logoImg} alt='' className='w-[3rem]' />
                        <p className='font-joinFont text-textWhite font-extrabold text-[2rem]'>Quizzes</p>
                    </div>
                    <div className='w-full bg-textWhite p-4 rounded shadow-lg flex flex-col gap-4'>
                        <input
                            value={pin}
                            className='w-full min-w-[6.25rem] min-h-[2.375rem] max-h-[48px] leading-9 text-center text-textBlack outline-none text-[1rem] rounded py-3 font-bold text-xl border-2'
                            placeholder='Game PIN'
                            onChange={(e) => {
                                setPin(e.target.value);
                            }}
                        />
                        <button
                            className={clsx(
                                `w-full inline-block align-text-bottom bg-textGray rounded text-textWhite font-bold items-center min-w-[48px] py-3`,
                                pin ? 'bg-textGreen cursor-pointer' : 'bg-textGray'
                            )}
                            onClick={joinGame}
                        >
                            Enter
                        </button>
                    </div>
                </div>
            </div>
            <div className='z-[1] flex flex-col justify-center items-center text-textWhite font-semibold'>
                <p>Create your own quizzes for Free at quizzes.com</p>
                <p>Terms | Privacy</p>
            </div>
            {loading && <LoadingRoute />}
            <ToastContainer position='top-center' />
        </div>
    );
};

export default Join;
