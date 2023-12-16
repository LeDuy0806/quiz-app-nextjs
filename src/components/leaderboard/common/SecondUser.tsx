import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { silverMedal } from '../../../../public/assets/images/leaderboard';

interface SecondUserProps {
    user: {
        rank: number;
        userName: string;
        firstName: string;
        lastName: string;
        point: number;
    };
}

const SecondUser = ({ user }: SecondUserProps) => (
    <div className='flex-1'>
        <div className='flex flex-col items-center'>
            <div className='relative h-24 w-24 rounded-full'>
                <Image src={'/assets/images/default_avatar.png'} alt='' fill className='rounded-full object-cover object-center' />

                <span className='absolute bottom-0 right-0 inline-flex items-center justify-center'>
                    <span className='relative h-10 w-10'>
                        <Image src={silverMedal} alt='Silver' fill className='object-cover object-center' />
                    </span>
                </span>
            </div>

            <div className='mx-2 mt-3 flex flex-col items-center justify-center'>
                <span className='line-clamp-2 text-center font-semibold leading-relaxed'>{user.userName}</span>

                <div className='flex items-center justify-center text-lg text-textPurple'>
                    <span className='line-clamp-1 inline-block max-w-[3.75rem] text-ellipsis whitespace-nowrap font-bold'>{user.point}</span>
                    <span className='ml-1 text-[0.8em]'>
                        <FaStar />
                    </span>
                </div>
            </div>
        </div>

        <div className='h-0 w-full border-b-[0.75rem] border-l-[0.75rem] border-r-0 border-solid border-b-bgPurplePower border-l-transparent border-r-transparent'></div>

        <div className='flex h-28 items-center justify-center bg-gradient-purple'>
            <span className='text-7xl font-black italic'>2</span>
        </div>
    </div>
);

export default SecondUser;
