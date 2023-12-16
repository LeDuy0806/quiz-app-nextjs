import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { bronzeMedal, goldTrophy, silverMedal } from '../../../public/assets/images/leaderboard';
import ThirdUser from './common/ThirdUser';
import FirstUser from './common/FirstUser';
import SecondUser from './common/SecondUser';

interface TopThreeUserProps {
    topThreeUsers: any;
}

const TopThreeUser = ({ topThreeUsers }: TopThreeUserProps) => {
    const secondUser = topThreeUsers[1];
    const firstUser = topThreeUsers[0];
    const thirdUser = topThreeUsers[2];

    return (
        <div className='mt-5 flex w-full items-end justify-center px-3'>
            {/* Second */}
            <SecondUser user={secondUser} />
            {/* First */}
            <FirstUser user={firstUser} />
            {/* Third */}
            <ThirdUser user={thirdUser} />
        </div>
    );
};

export default TopThreeUser;
