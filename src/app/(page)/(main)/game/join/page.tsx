'use client';
import { useState } from 'react';

//images
import Image from 'next/image';
import { logoImg } from '../../../../../../public/assets/images/auth';
import { bgJoin } from '../../../../../../public/assets/images/game';

//route
import { useRouter } from 'next/navigation';

//component
import LoadingRoute from 'src/components/LoadingRoute';

const Join = () => {
    const router = useRouter();

    const [loading, setLoading] = useState<boolean>(false);

    const joinGame = () => {
        router.push('/game/player');
        setLoading(true);

        return () => {
            setLoading(false);
        };
    };
    return (
        <div className='relative h-full w-full flex flex-col'>
            <Image src={bgJoin} className='w-full h-full absolute object-cover' alt='' />
            <div className='w-full relative flex flex-1 flex-col justify-center items-center'>
                <div className='flex flex-col gap-10 items-center justify-center'>
                    <div className='w-full flex flex-row items-center justify-evenly'>
                        <Image src={logoImg} alt='' className='w-[3rem]' />
                        <p className='font-joinFont text-textWhite font-extrabold text-[2rem]'>
                            Quizzes
                        </p>
                    </div>
                    <div className='w-full bg-textWhite p-4 rounded shadow-lg flex flex-col gap-4'>
                        <input
                            className='w-full min-w-[6.25rem] min-h-[2.375rem] max-h-[48px] leading-9 text-center text-textBlack outline-none text-[1rem] rounded py-3 font-bold text-xl border-2'
                            placeholder='Game PIN'
                        />
                        <button
                            className='w-full cursor-pointer inline-block align-text-bottom bg-textGray rounded text-textWhite font-bold items-center min-w-[48px] py-3'
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
        </div>
    );
};

export default Join;
