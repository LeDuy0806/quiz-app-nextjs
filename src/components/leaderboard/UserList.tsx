'use client';
import UserCard from './common/UserCard';
import { motion } from 'framer-motion';

export default function UserList({ userList }: any) {
    return (
        <ul className='mt-7 grid w-full grid-flow-row space-y-2 p-3'>
            {Object.keys(userList).map((user, rank) => {
                return (
                    <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 0.4,
                            delay: 0.1 + rank * 0.075
                        }}
                        key={`${rank}`}
                    >
                        <UserCard key={userList[user]._id} user={userList[user]} />
                    </motion.div>
                );
            })}
        </ul>
    );
}
