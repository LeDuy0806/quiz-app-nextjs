import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import UserType from 'src/app/types/userType';

interface UserCardProps {
    user: {
        rank: number;
        userName: string;
        firstName: string;
        lastName: string;
        point: number;
    };
}

const UserCard = ({ user }: UserCardProps) => (
    <li className='flex w-full grow items-center rounded-md bg-bgPurpleLight/40 px-2 py-1 backdrop-blur-xl'>
        <span className='flex w-[2rem] max-w-[2rem] font-semibold italic'>
            <span className='m-auto'>{user.rank}</span>
        </span>

        <div className='relative mx-3 h-10 w-10 rounded-full'>
            <Image src={'/assets/images/default_avatar.png'} alt='' fill className='rounded-full object-cover object-center' />
        </div>

        <div className='ml-2 flex grow flex-col'>
            <span className='inline-block flex-1 font-bold leading-relaxed'>{user.userName}</span>

            <span className='line-clamp-1 flex-1 text-sm text-textGray '>
                {user.firstName} {user.lastName}
            </span>
        </div>

        <div className='ml-2 mr-3 flex items-center justify-center text-lg text-textPurple'>
            <span className='font-bold'>{user.point}</span>
            <span className='ml-1 text-[0.8em]'>
                <FaStar />
            </span>
        </div>
    </li>
);

export default UserCard;
