import { motion } from 'framer-motion';
import UserPodium from './common/UserPodium';
type UserType = {
    rank: number;
    userName: string;
    firstName: string;
    lastName: string;
    avatar: string;
    point: number;
};

export default function TopThreeUser({ topThreeUsers }: any) {
    const secondUser: UserType = topThreeUsers[1];
    const firstUser: UserType = topThreeUsers[0];
    const thirdUser: UserType = topThreeUsers[2];

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
                key={`${secondUser.rank}`}
                className='w-full'
            >
                <UserPodium user={secondUser} />
            </motion.div>
            {/* First */}
            <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.6,
                    delay: 0.8
                }}
                key={`${firstUser.rank}`}
                className='w-full'
            >
                <UserPodium user={firstUser} />
            </motion.div>
            {/* Third */}
            <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 0.6,
                    delay: 0.6
                }}
                key={`${thirdUser.rank}`}
                className='w-full'
            >
                <UserPodium user={thirdUser} />
            </motion.div>
        </div>
    );
}
