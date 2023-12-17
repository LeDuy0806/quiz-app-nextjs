import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import UserType from 'src/app/types/userType';
import PointContainer from './PointContainer';

interface UserCardProps {
    user: {
        rank: number;
        userName: string;
        firstName: string;
        lastName: string;
        point: number;
        avatar: string;
    };
}

export default function UserCard({ user }: UserCardProps) {
    return (
        <li className='flex w-full grow items-center rounded-md bg-bgPurplePower/10 px-4 py-2 backdrop-blur-xl transition-all delay-75 duration-200 hover:bg-bgPurple/20'>
            <span className='inline-flex min-w-[2rem] max-w-[2rem] items-center justify-center font-semibold italic sml:text-lg mdl:text-xl'>{user.rank}</span>

            <div className='relative mx-3 h-11 w-11 rounded-full lgl:h-14 lgl:w-14'>
                <Image src={user.avatar} alt='' fill className='rounded-full object-cover object-center' />
            </div>

            <div className='ml-1 flex grow flex-col lgl:text-lg xl:text-xl'>
                <span className='inline-block flex-1 font-black leading-relaxed '>{user.userName}</span>

                <span className='line-clamp-1 text-[0.75em] text-textGray '>
                    {user.firstName} {user.lastName}
                </span>
            </div>

            <PointContainer point={user.point} className='ml-2 mr-3' />
        </li>
    );
}
