import UserCard from './common/UserCard';

export default function UserList({ userList }: any) {
    return (
        <ul className='mt-7 grid w-full grid-flow-row space-y-2 p-3'>
            {Object.keys(userList).map((user, rank) => (
                <UserCard key={userList[user]._id} user={userList[user]} />
            ))}
        </ul>
    );
}
