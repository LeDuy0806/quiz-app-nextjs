'use client';
import { useEffect, useState } from 'react';
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
import { fetchPlayerResult } from 'src/app/redux/slices/playerResultSlice';

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

    const [InitPlayerResult] = useCreatePlayerResultMutation();
    const [InitAddPlayer] = useAddPlayerMutation();

    const result = async (message: string, playerId: string, gameId: string) => {
        if (message === 'correct') {
            const newPlayerResult = {
                player: authData?.user,
                game: gameId,
                score: 0,
                answers: []
            };

            await InitPlayerResult({ newPlayerResult })
                .unwrap()
                .then((res) => {
                    dispatch(fetchPlayerResult(res));
                });

            await InitAddPlayer({ gameId, playerId })
                .unwrap()
                .then(() => {
                    setLoading(true);
                    router.push(`/game/player/?id=${gameId}`);
                });
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
        <div className='relative flex h-full w-full flex-col'>
            <Image src={bgJoin} className='absolute h-full w-full object-cover' alt='' />
            <div className='relative flex w-full flex-1 flex-col items-center justify-center'>
                <div className='flex flex-col items-center justify-center gap-10'>
                    <div className='flex w-full flex-row items-center justify-evenly'>
                        <Image src={logoImg} alt='' className='w-[3rem]' />
                        <p className='font-joinFont text-[2rem] font-extrabold text-textWhite'>Quizzes</p>
                    </div>
                    <div className='flex w-full flex-col gap-4 rounded bg-textWhite p-4 shadow-lg'>
                        <input
                            value={pin}
                            className='max-h-[48px] min-h-[2.375rem] w-full min-w-[6.25rem] rounded border-2 py-3 text-center text-[1rem] text-xl font-bold leading-9 text-textBlack outline-none'
                            placeholder='Game PIN'
                            onChange={(e) => {
                                setPin(e.target.value);
                            }}
                        />
                        <button
                            className={clsx(
                                `inline-block w-full min-w-[48px] items-center rounded bg-textGray py-3 align-text-bottom font-bold text-textWhite`,
                                pin ? 'cursor-pointer bg-textGreen' : 'bg-textGray'
                            )}
                            onClick={joinGame}
                        >
                            Enter
                        </button>
                    </div>
                </div>
            </div>
            <div className='z-[1] flex flex-col items-center justify-center font-semibold text-textWhite'>
                <p>Create your own quizzes for Free at quizzes.com</p>
                <p>Terms | Privacy</p>
            </div>
            {loading && <LoadingRoute />}
            <ToastContainer position='top-center' />
        </div>
    );
};

export default Join;
