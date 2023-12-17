import UserPodium from './common/UserPodium';

export default function TopThreeUser({ topThreeUsers }: any) {
    const secondUser = topThreeUsers[1];
    const firstUser = topThreeUsers[0];
    const thirdUser = topThreeUsers[2];

    return (
        <div className='mx-3 mt-5 flex items-end justify-center '>
            {/* Second */}
            <UserPodium user={secondUser} />
            {/* First */}
            <UserPodium user={firstUser} />
            {/* Third */}
            <UserPodium user={thirdUser} />
        </div>
    );
}
