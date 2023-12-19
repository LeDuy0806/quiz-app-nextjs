'use client';
import TopThreeUser from 'src/components/leaderboard/TopThreeUser';
import UserList from 'src/components/leaderboard/UserList';

//RTKQuery
import { useGetUsersQuery } from 'src/app/redux/services/userApi';

export default function LeaderBoardPage() {
    const { data } = useGetUsersQuery();

    return (
        <div className='relative z-0 h-full w-full'>
            <div className='block h-full w-full'>
                {/* Header */}
                <div className='py-6 text-center'>
                    <span className='text-3xl font-black lg:text-4xl xl:text-5xl'>LeaderBoard</span>
                </div>

                {/* Top 3 */}
                {data && <TopThreeUser topThreeUsers={data.slice(0, 3)} />}

                {/* List of users (except top three users) */}
                {data && <UserList userList={data?.slice(3)} />}
            </div>
            <div className='absolute left-[8rem] -z-50 h-[55rem] w-[55rem] rounded-full bg-gradient-primary blur-[7rem] xs:top-[32rem] xs:h-[15rem] xs:w-[15rem] sm:left-[10rem] sml:left-[15rem] md:left-[26rem] md:top-[26rem] lg:left-[30rem] lg:top-[22rem] xl:left-[45rem] xl:top-[17rem]'></div>
            <div className='absolute left-[6rem] top-[5rem] -z-50 h-[55rem] w-[55rem] rounded-full bg-gradient-footerIntro blur-[7rem] xs:h-[15rem] xs:w-[15rem] xl:left-[14rem]'></div>
        </div>
    );
}
