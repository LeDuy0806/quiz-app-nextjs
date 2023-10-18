//icons
import { FaCheck } from 'react-icons/fa';

//component
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

//animation
import { motion } from 'framer-motion';

interface QuestionProps {
    navigation: () => void;
}

const Question = (props: QuestionProps) => {
    return (
        <div className='h-full w-full relative flex items-center justify-center bg-bgPurpleLight text-textWhite'>
            <div className='z-[1] relative w-3/4 h-3/4 flex flex-col items-center justify-center  rounded-[40px] bg-bgQuestion gap-[1em]'>
                <div className='absolute top-[1em] right-[2em]'>
                    <CountdownCircleTimer
                        isPlaying
                        duration={10}
                        colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                        colorsTime={[10, 10 - 2, 10 - 4, 10 - 6]}
                        size={70}
                    >
                        {({ remainingTime }) => remainingTime}
                    </CountdownCircleTimer>
                </div>
                <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className='relative w-3/4 h-1/5 bg-textWhite flex items-center justify-center text-center rounded-md border-[2px] border-solid border-bgBorderQuestion'
                >
                    <span className='absolute bg-bgPurple top-0 translate-y-[-50%] px-6 py-3 rounded-3xl font-bold'>
                        Question 1 of 5
                    </span>
                    <div className='text-textBlack max-w-[80%] font-semibold'>
                        This is a picture taken in outdoor.There are 2 people in this picture.On the
                        left,a woman with black hair is holding paper while talking on the phone
                    </div>
                </motion.div>
                <div className='w-3/4 flex justify-between items-center gap-[2em]'>
                    <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        className='bg-textWhite relative flex flex-1 items-center justify-center rounded py-4 border-[2px] border-solid border-bgBorderQuestion'
                    >
                        <div
                            onClick={() => {
                                props.navigation();
                            }}
                            className='w-[2.6em] h-[2.6em] rounded-full flex items-center justify-center absolute left-3 border-[3px] border-bgBorderQuestion border-solid cursor-pointer text-textBlack'
                        >
                            <FaCheck className='ww-[2.6em] h-[2.6em]' />
                        </div>
                        <h2 className='text-textBlack font-semibold'>Three people</h2>
                    </motion.div>
                    <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        className='bg-textWhite relative flex flex-1 items-center justify-center rounded py-4 border-[2px] border-solid border-bgBorderQuestion'
                    >
                        <div className='w-[2.6em] h-[2.6em] rounded-full flex items-center justify-center absolute left-3 border-[3px] border-bgBorderQuestion border-solid cursor-pointer'></div>
                        <h2 className='text-textBlack font-semibold'>Three people</h2>
                    </motion.div>
                </div>
                <div className='w-3/4 flex justify-between items-center gap-[2em]'>
                    <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.5 }}
                        className='bg-textWhite relative flex flex-1 items-center justify-center rounded py-4 border-[2px] border-solid border-bgBorderQuestion'
                    >
                        <div className='w-[2.6em] h-[2.6em] rounded-full flex items-center justify-center absolute left-3 border-[3px] border-bgBorderQuestion border-solid cursor-pointer'></div>
                        <h2 className='text-textBlack font-semibold'>Three people</h2>
                    </motion.div>
                    <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.6 }}
                        className='bg-textWhite relative flex flex-1 items-center justify-center rounded py-4 border-[2px] border-solid border-bgBorderQuestion'
                    >
                        <div className='w-[2.6em] h-[2.6em] rounded-full flex items-center justify-center absolute left-3 border-[3px] border-bgBorderQuestion border-solid cursor-pointer'></div>
                        <h2 className='text-textBlack font-semibold'>Three people</h2>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className='absolute w-[10em] h-[10em] rounded-full bg-bgPurple top-[1em] left-[8em]'
            ></motion.div>
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className='absolute w-[20em] h-[20em] rounded-full bg-bgPurple bottom-[0.6em] right-[3em]'
            ></motion.div>
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className='absolute w-[5em] h-[5em] rounded-full bg-textPurpleHover bottom-[0.4em] left-[20em]'
            ></motion.div>
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className='absolute w-[3em] h-[3em] rounded-full bg-textPurpleHover top-[1em] right-[20em]'
            ></motion.div>
        </div>
    );
};

export default Question;
