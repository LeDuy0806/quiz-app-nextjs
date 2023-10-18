//images
import Image from 'next/image';

//animation
import { motion } from 'framer-motion';

interface CountDownProps {
    time: number;
}

const CountDown = (props: CountDownProps) => {
    return (
        <div className='flex relative flex-col h-full w-full bg-bgMainLeaderBoard items-center justify-center'>
            <motion.h1
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className='font-bold text-[10em] text-textSweet text-shadow-textLeaderBoard'
            >
                {props.time}
            </motion.h1>
        </div>
    );
};

export default CountDown;
