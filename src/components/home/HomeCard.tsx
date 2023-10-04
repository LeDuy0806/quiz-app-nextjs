import Image from 'next/image';
import { motion } from 'framer-motion';

function HomeCard() {
    return (
        <div className='flex items-center justify-between gap-2 w-full flex-col md:flex-row'>
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className='md:w-[30%] h-full dark:bg-slate-200 text-center rounded-md border-2 shadow-md'
            >
                <Image
                    src={'/assets/images/home/img3.png'}
                    alt='Error'
                    width={100}
                    height={100}
                    className='w-full max-w-full  object-contain '
                />

                <div className='px-4 py-2'>
                    <h1 className='font-bold text-2xl p-1'>Create</h1>
                    <p className=' p-1 h-20 line-clamp-3'>
                        It only takes minutes to create a learning game or
                        trivia quiz on any topic, in any language.
                    </p>
                    <button className='mt-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-bgPurple rounded-lg hover:bg-bgPurplePower focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'>
                        Create Your Quiz
                    </button>
                </div>
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className='md:w-[30%] h-full dark:bg-slate-200 text-center rounded-md border-2 shadow-md'
            >
                <Image
                    src={'/assets/images/home/img4.png'}
                    alt='Error'
                    width={100}
                    height={100}
                    className='w-full max-w-full object-contain '
                />

                <div className='px-4 py-2'>
                    <h1 className='font-bold text-2xl p-2 line-clamp-1'>
                        Host & Share
                    </h1>
                    <p className=' p-1 h-20 line-clamp-3'>
                        Host a live game with questions on a big screen or share
                        a game with remote players.
                    </p>
                    <button className='mt-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-bgPurple rounded-lg hover:bg-bgPurplePower focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'>
                        Host a game
                    </button>
                </div>
            </motion.div>
            <motion.div
                whileHover={{ scale: 1.05 }}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className='md:w-[30%] h-full dark:bg-slate-200 text-center rounded-md border-2 shadow-md'
            >
                <Image
                    src={'/assets/images/home/img5.png'}
                    alt='Error'
                    width={100}
                    height={100}
                    className='w-full  max-w-full  object-contain '
                />
                <div className='px-4 py-2'>
                    <h1 className='font-bold text-2xl p-1'>Play</h1>
                    <p className=' p-1 h-20 line-clamp-3'>
                        Game on! Join a kahoot with a PIN provided by the host
                        and answer questions on your device.
                    </p>
                    <button className='mt-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-bgPurple rounded-lg hover:bg-bgPurplePower focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'>
                        Enter PIN
                    </button>
                </div>
            </motion.div>
        </div>
    );
}

export default HomeCard;
