import { motion } from 'framer-motion';
import { BsInfoCircle, BsShieldExclamation } from 'react-icons/bs';
import UserType from 'src/app/types/userType';

function UserInfoCard({ userData }: { userData: UserType }) {
    return (
        <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className='w-full divide-y-2 rounded-md bg-slate-100 px-4 py-2 shadow-xl'
        >
            <div>
                <div>
                    <h2 className='break-words font-bold text-bgPurplePower'>{userData.firstName + ' ' + userData.lastName}</h2>
                    <h4 className='text-sm font-bold'>{userData.userName}</h4>
                </div>
            </div>
            <div>
                <div className='mt-2 flex w-full justify-between rounded-sm bg-gray-200 p-2'>
                    <span className=''>My communities</span>
                    <span className='text-blue-400 underline'>Join community</span>
                </div>
                <div className='mt-2 rounded-sm bg-gray-200 p-2'>
                    <div className='flex items-center p-1'>
                        <span className='text-red-500'>
                            <BsShieldExclamation />
                        </span>
                        <span className='px-2 font-bold'>Verify your profile</span>
                        <span>
                            <BsInfoCircle className=' opacity-90' />
                        </span>
                    </div>
                    <span>Apply for your verified profile today!</span>
                    <div className='mt-4'>
                        <button className='mt-2 inline-flex items-center rounded-lg bg-bgPurple px-3 py-2 text-center text-sm font-medium text-white hover:bg-bgPurplePower focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800'>
                            Go to verify
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default UserInfoCard;
