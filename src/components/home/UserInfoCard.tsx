import { motion } from 'framer-motion';
import { BsInfoCircle, BsShieldExclamation } from 'react-icons/bs';

function UserInfoCard() {
    return (
        <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className='px-4 py-2 bg-slate-100 shadow-xl rounded-md divide-y-2 w-full'
        >
            <div>
                <div>
                    <h2 className='font-bold break-words text-bgPurplePower'>
                        Name
                    </h2>
                    <h4 className='text-sm font-bold'>UserName</h4>
                </div>
            </div>
            <div>
                <div className='w-full flex justify-between mt-2 p-2 bg-gray-200 rounded-sm'>
                    <span className=''>My communities</span>
                    <span className='underline text-blue-400'>
                        Join community
                    </span>
                </div>
                <div className='mt-2 p-2 bg-gray-200 rounded-sm'>
                    <div className='flex items-center p-1'>
                        <span className='text-red-500'>
                            <BsShieldExclamation />
                        </span>
                        <span className='px-2 font-bold'>
                            Verify your profile
                        </span>
                        <span>
                            <BsInfoCircle className=' opacity-90' />
                        </span>
                    </div>
                    <span>Apply for your verified profile today!</span>
                    <div className='mt-4'>
                        <button className='mt-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-bgPurple rounded-lg hover:bg-bgPurplePower focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'>
                            Go to verify
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default UserInfoCard;
