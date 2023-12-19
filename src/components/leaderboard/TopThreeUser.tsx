import { motion } from 'framer-motion';
import UserPodium from './common/UserPodium';
import UserType from 'src/app/types/userType';
// type UserType = {
//     rank: number;
//     userName: string;
//     firstName: string;
//     lastName: string;
//     avatar: string;
//     point: number;
// };

interface TopThreeUserProps {
    topThreeUsers: UserType[];
}

const TopThreeUser = (props: TopThreeUserProps) => {
    const { topThreeUsers } = props;
    const secondUser = topThreeUsers[1];
    const firstUser = topThreeUsers[0];
    const thirdUser = topThreeUsers[2];

    return (
        <div className='mx-3 mt-5 flex items-end justify-center '>
            {/* Second */}
            <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.6,
                    delay: 0.7
                }}
                key={`${secondUser}`}
                className='w-full'
            >
                <UserPodium user={secondUser} rank={2} />
            </motion.div>
            {/* First */}
            <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.6,
                    delay: 0.8
                }}
                className='w-full'
            >
                <UserPodium user={firstUser} rank={1} />
            </motion.div>
            {/* Third */}
            <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.6,
                    delay: 0.6
                }}
                className='w-full'
            >
                <UserPodium user={thirdUser} rank={3} />
            </motion.div>
        </div>
    );
};

export default TopThreeUser;
