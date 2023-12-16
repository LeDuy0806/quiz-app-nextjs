import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { bronzeMedal, goldTrophy, silverMedal } from '../../../../../public/assets/images/leaderboard';
import UserCard from 'src/components/leaderboard/common/UserCard';
import TopThreeUser from 'src/components/leaderboard/TopThreeUser';

const leaderboardData = [
    {
        _id: '1',
        rank: 1,
        userName: 'minhnhat123',
        firstName: 'Minh Nhat',
        lastName: 'Nguyen',
        avatar: 'default_avatar.png',
        point: 3000
    },
    {
        _id: '2',
        rank: 2,
        userName: 'minhnhat123',
        firstName: 'Minh Nhat',
        lastName: 'Nguyen',
        avatar: 'default_avatar.png',
        point: 2900
    },
    {
        _id: '3',
        rank: 3,
        userName: 'minhnhat123',
        firstName: 'Minh Nhat',
        lastName: 'Nguyen',
        avatar: 'default_avatar.png',
        point: 2800
    },
    {
        _id: '4',
        rank: 4,
        userName: 'minhnhat123',
        firstName: 'Minh Nhat',
        lastName: 'Nguyen',
        avatar: 'default_avatar.png',
        point: 2700
    },
    {
        _id: '5',
        rank: 5,
        userName: 'minhnhat123',
        firstName: 'Minh Nhat',
        lastName: 'Nguyen',
        avatar: 'default_avatar.png',
        point: 2600
    },
    {
        _id: '6',
        rank: 6,
        userName: 'minhnhat123',
        firstName: 'Minh Nhat',
        lastName: 'Nguyen',
        avatar: 'default_avatar.png',
        point: 2500
    },
    {
        _id: '7',
        rank: 7,
        userName: 'minhnhat123',
        firstName: 'Minh Nhat',
        lastName: 'Nguyen',
        avatar: 'default_avatar.png',
        point: 2400
    },
    {
        _id: '8',
        rank: 8,
        userName: 'minhnhat123',
        firstName: 'Minh Nhat',
        lastName: 'Nguyen',
        avatar: 'default_avatar.png',
        point: 2300
    },
    {
        _id: '9',
        rank: 9,
        userName: 'minhnhat123',
        firstName: 'Minh Nhat',
        lastName: 'Nguyen',
        avatar: 'default_avatar.png',
        point: 2200
    },
    {
        _id: '10',
        rank: 10,
        userName: 'minhnhat123',
        firstName: 'Minh Nhat',
        lastName: 'Nguyen',
        avatar: 'default_avatar.png',
        point: 2100
    },
    {
        _id: '11',
        rank: 11,
        userName: 'minhnhat123',
        firstName: 'Minh Nhat',
        lastName: 'Nguyen',
        avatar: 'default_avatar.png',
        point: 2000
    },
    {
        _id: '12',
        rank: 12,
        userName: 'minhnhat123',
        firstName: 'Minh Nhat',
        lastName: 'Nguyen',
        avatar: 'default_avatar.png',
        point: 1900
    },
    {
        _id: '13',
        rank: 13,
        userName: 'minhnhat123',
        firstName: 'Minh Nhat',
        lastName: 'Nguyen',
        avatar: 'default_avatar.png',
        point: 1800
    },
    {
        _id: '14',
        rank: 14,
        userName: 'minhnhat123',
        firstName: 'Minh Nhat',
        lastName: 'Nguyen',
        avatar: 'default_avatar.png',
        point: 1700
    },
    {
        _id: '15',
        rank: 15,
        userName: 'minhnhat123',
        firstName: 'Minh Nhat',
        lastName: 'Nguyen',
        avatar: 'default_avatar.png',
        point: 1600
    },
    {
        _id: '16',
        rank: 16,
        userName: 'minhnhat123',
        firstName: 'Minh Nhat',
        lastName: 'Nguyen',
        avatar: 'default_avatar.png',
        point: 1500
    },
    {
        _id: '17',
        rank: 17,
        userName: 'minhnhat123',
        firstName: 'Minh Nhat',
        lastName: 'Nguyen',
        avatar: 'default_avatar.png',
        point: 1400
    },
    {
        _id: '18',
        rank: 18,
        userName: 'minhnhat123',
        firstName: 'Minh Nhat',
        lastName: 'Nguyen',
        avatar: 'default_avatar.png',
        point: 1300
    },
    {
        _id: '19',
        rank: 19,
        userName: 'minhnhat123',
        firstName: 'Minh Nhat',
        lastName: 'Nguyen',
        avatar: 'default_avatar.png',
        point: 1200
    },
    {
        _id: '20',
        rank: 20,
        userName: 'minhnhat123',
        firstName: 'Minh Nhat',
        lastName: 'Nguyen',
        avatar: 'default_avatar.png',
        point: 1100
    }
];

function LeaderboardPage() {
    const topThreeUsers = leaderboardData.slice(0, 3);

    return (
        <div className='z-0 w-full'>
            <div className='block'>
                {/* Header */}
                <div className='py-6 text-center'>
                    <span className='text-4xl font-black'>Leaderboard</span>
                </div>

                {/* Top 3 */}
                <TopThreeUser topThreeUsers={topThreeUsers} />

                {/* List of users (except top three) */}
                <ul className='grid w-full grid-flow-row space-y-2 p-3'>
                    {Object.values(leaderboardData)
                        .slice(3)
                        .map((user, rank) => (
                            <UserCard key={user._id} user={user} />
                        ))}
                </ul>
            </div>
        </div>
    );
}

export default LeaderboardPage;
