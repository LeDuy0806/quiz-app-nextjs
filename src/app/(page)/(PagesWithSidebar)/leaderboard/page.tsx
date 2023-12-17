'use client';
import TopThreeUser from 'src/components/leaderboard/TopThreeUser';
import UserList from 'src/components/leaderboard/UserList';

const leaderboardData = [
    {
        _id: '1',
        rank: 1,
        userName: 'vanduy123',
        firstName: 'Van Duy',
        lastName: 'Le',
        avatar: '/assets/images/default_avatar.png',
        point: 3000
    },
    {
        _id: '2',
        rank: 2,
        userName: 'anhquoc123',
        firstName: 'Anh Quoc',
        lastName: 'Tran Phuoc',
        avatar: '/assets/images/default_avatar.png',
        point: 2900
    },
    {
        _id: '3',
        rank: 3,
        userName: 'phuoclong123',
        firstName: 'Phuoc Long',
        lastName: 'Tran',
        avatar: '/assets/images/default_avatar.png',
        point: 2800
    },
    {
        _id: '4',
        rank: 4,
        userName: 'tuannguyen123',
        firstName: 'Quoc Tuan',
        lastName: 'Nguyen',
        avatar: '/assets/images/default_avatar.png',
        point: 2700
    },
    {
        _id: '5',
        rank: 5,
        userName: 'phuoctri123',
        firstName: 'Phuoc Tri',
        lastName: 'Tran',
        avatar: '/assets/images/default_avatar.png',
        point: 2600
    },
    {
        _id: '6',
        rank: 6,
        userName: 'dinhkhoi123',
        firstName: 'Dinh Khoi',
        lastName: 'Mai',
        avatar: '/assets/images/default_avatar.png',
        point: 2500
    },
    {
        _id: '7',
        rank: 7,
        userName: 'tuankiet123',
        firstName: 'Tuan Kiet',
        lastName: 'Tran',
        avatar: '/assets/images/default_avatar.png',
        point: 2400
    },
    {
        _id: '8',
        rank: 8,
        userName: 'ducminh123',
        firstName: 'Duc Minh',
        lastName: 'Vu',
        avatar: '/assets/images/default_avatar.png',
        point: 2300
    },
    {
        _id: '9',
        rank: 9,
        userName: 'hoangminh123',
        firstName: 'Hoang Minh',
        lastName: 'Nguyen',
        avatar: '/assets/images/default_avatar.png',
        point: 2200
    },
    {
        _id: '10',
        rank: 10,
        userName: 'nhatkhang123',
        firstName: 'Nhat Khang',
        lastName: 'Nguyen',
        avatar: '/assets/images/default_avatar.png',
        point: 2100
    },
    {
        _id: '11',
        rank: 11,
        userName: 'minhnhat123',
        firstName: 'Minh Nhat',
        lastName: 'Nguyen',
        avatar: '/assets/images/default_avatar.png',
        point: 2000
    },
    {
        _id: '12',
        rank: 12,
        userName: 'minhnhat123',
        firstName: 'Minh Nhat',
        lastName: 'Nguyen',
        avatar: '/assets/images/default_avatar.png',
        point: 1900
    },
    {
        _id: '13',
        rank: 13,
        userName: 'minhnhat123',
        firstName: 'Minh Nhat',
        lastName: 'Nguyen',
        avatar: '/assets/images/default_avatar.png',
        point: 1800
    },
    {
        _id: '14',
        rank: 14,
        userName: 'minhnhat123',
        firstName: 'Minh Nhat',
        lastName: 'Nguyen',
        avatar: '/assets/images/default_avatar.png',
        point: 1700
    },
    {
        _id: '15',
        rank: 15,
        userName: 'minhnhat123',
        firstName: 'Minh Nhat',
        lastName: 'Nguyen',
        avatar: '/assets/images/default_avatar.png',
        point: 1600
    },
    {
        _id: '16',
        rank: 16,
        userName: 'minhnhat123',
        firstName: 'Minh Nhat',
        lastName: 'Nguyen',
        avatar: '/assets/images/default_avatar.png',
        point: 1500
    },
    {
        _id: '17',
        rank: 17,
        userName: 'minhnhat123',
        firstName: 'Minh Nhat',
        lastName: 'Nguyen',
        avatar: '/assets/images/default_avatar.png',
        point: 1400
    },
    {
        _id: '18',
        rank: 18,
        userName: 'minhnhat123',
        firstName: 'Minh Nhat',
        lastName: 'Nguyen',
        avatar: '/assets/images/default_avatar.png',
        point: 1300
    },
    {
        _id: '19',
        rank: 19,
        userName: 'minhnhat123',
        firstName: 'Minh Nhat',
        lastName: 'Nguyen',
        avatar: '/assets/images/default_avatar.png',
        point: 1200
    },
    {
        _id: '20',
        rank: 20,
        userName: 'minhnhat123',
        firstName: 'Minh Nhat',
        lastName: 'Nguyen',
        avatar: '/assets/images/default_avatar.png',
        point: 1100
    }
];

export default function LeaderboardPage() {
    const topThreeUsers = leaderboardData.slice(0, 3);
    const listOfUsers = leaderboardData.slice(3);

    return (
        <div className='relative z-0 h-full w-full'>
            <div className='block h-full w-full'>
                {/* Header */}
                <div className='py-6 text-center'>
                    <span className='text-3xl font-black lg:text-4xl xl:text-5xl'>Leaderboard</span>
                </div>

                {/* Top 3 */}
                <TopThreeUser topThreeUsers={topThreeUsers} />

                {/* List of users (except top three users) */}
                <UserList userList={listOfUsers} />
            </div>
            <div className='absolute left-[8rem] -z-50 h-[55rem] w-[55rem] rounded-full bg-gradient-primary blur-[7rem] xs:top-[32rem] xs:h-[15rem] xs:w-[15rem] sm:left-[10rem] sml:left-[15rem] md:left-[26rem] md:top-[26rem] lg:left-[30rem] lg:top-[22rem] xl:left-[45rem] xl:top-[17rem]'></div>
            <div className='absolute left-[6rem] top-[5rem] -z-50 h-[55rem] w-[55rem] rounded-full bg-gradient-footerIntro blur-[7rem] xs:h-[15rem] xs:w-[15rem] xl:left-[14rem]'></div>
        </div>
    );
}
