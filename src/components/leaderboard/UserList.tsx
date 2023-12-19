'use client';
import UserCard from './common/UserCard';
import { motion } from 'framer-motion';
import UserType from 'src/app/types/userType';
interface TopThreeUserProps {
    userList: UserType[];
}

const UserList = (props: TopThreeUserProps) => {
    const { userList } = props;
    return (
        <ul className='mt-7 grid w-full grid-flow-row space-y-2 p-3'>
            {userList.map((user, index) => {
                return (
                    <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 0.4,
                            delay: 0.1 + index * 0.075
                        }}
                        key={index}
                    >
                        <UserCard user={user} rank={index + 4} />
                    </motion.div>
                );
            })}
        </ul>
    );
};

export default UserList;
