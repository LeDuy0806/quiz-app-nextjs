import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { silverMedal } from '../../../../public/assets/images/leaderboard';
import { cn } from 'src/utils/tailwind.util';
import PointContainer from './PointContainer';

interface UserPodiumProps {
    user: {
        rank: number;
        userName: string;
        firstName: string;
        lastName: string;
        point: number;
    };
}

export default function UserPodium({ user }: UserPodiumProps) {
    const podiumType = {
        textStyle: '',
        topPodiumStyle: '',
        containerPodiumStyle: '',
        imagePrizeUrl: ''
    };

    switch (user.rank) {
        case 1:
            podiumType.textStyle = 'text-8xl';
            podiumType.topPodiumStyle =
                'border-b-[0.75rem] border-l-[0.75rem] border-r-[0.75rem]  border-b-bgPurple  border-l-transparent border-r-transparent';
            podiumType.containerPodiumStyle = 'h-36';
            podiumType.imagePrizeUrl = 'https://res.cloudinary.com/dfoiuc0jw/image/upload/v1702733773/quiz-app/leaderboard/gold-trophy_fny9lo.png';
            break;
        case 2:
            podiumType.textStyle = 'text-7xl';
            podiumType.topPodiumStyle = 'border-b-[0.75rem] border-l-[0.75rem] border-r-0  border-b-bgPurple border-l-transparent border-r-transparent';
            podiumType.containerPodiumStyle = 'h-28';
            podiumType.imagePrizeUrl = 'https://res.cloudinary.com/dfoiuc0jw/image/upload/v1702733774/quiz-app/leaderboard/silver-medal_ix2jok.png';
            break;
        case 3:
            podiumType.textStyle = 'text-6xl';
            podiumType.topPodiumStyle = 'border-b-[0.75rem] border-l-0 border-r-[0.75rem]  border-b-bgPurple border-l-transparent border-r-transparent';
            podiumType.containerPodiumStyle = 'h-20';
            podiumType.imagePrizeUrl = 'https://res.cloudinary.com/dfoiuc0jw/image/upload/v1702733773/quiz-app/leaderboard/bronze-medal_bulexr.png';
            break;
        default:
            break;
    }
    return (
        <div className='group flex-1 overscroll-x-none transition-all delay-100 duration-150 ease-linear lgl:hover:translate-y-1'>
            <div className='flex flex-col items-center'>
                <div className='relative h-20 w-20 rounded-full sml:h-24 sml:w-24'>
                    <Image src={'/assets/images/default_avatar.png'} alt='' fill className='rounded-full object-cover object-center' />

                    <span className='absolute -bottom-1 -right-1 inline-flex items-center justify-center rounded-full  bg-white ring ring-white'>
                        <span className='relative h-8 w-8 sml:h-9 sml:w-9'>
                            <Image src={podiumType.imagePrizeUrl} alt='Silver' fill className='object-cover object-center' />
                        </span>
                    </span>
                </div>

                <div className='mt-3 flex flex-col items-center justify-center px-2'>
                    <span className='line-clamp-2 text-ellipsis whitespace-nowrap text-center font-black leading-relaxed mdl:text-lg xl:text-xl'>
                        {user.userName}
                    </span>

                    <PointContainer point={user.point} className='mt-2' />
                </div>
            </div>

            <div className='mt-3 flex flex-col'>
                <div className={cn('h-0 w-full border-solid', podiumType.topPodiumStyle)}></div>

                <div
                    className={cn(
                        'flex items-center justify-center bg-gradient-purple shadow-[0_10px_10px_rgba(172,82,255,.3),0_20px_20px_rgba(172,82,255,.3)] transition-all delay-100 duration-150 ease-linear lgl:group-hover:shadow-[0_10px_30px_rgba(172,82,255,.5),0_20px_40px_rgba(172,82,255,.5)]',
                        podiumType.containerPodiumStyle
                    )}
                >
                    <span className={cn('font-black italic text-textPurple', podiumType.textStyle)}>{user.rank}</span>
                </div>
            </div>
        </div>
    );
}
