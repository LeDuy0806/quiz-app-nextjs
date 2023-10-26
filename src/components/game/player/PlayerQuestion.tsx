//icons
import { FaCheck } from 'react-icons/fa';
import clsx from 'clsx';

//component
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

//animation
import { motion } from 'framer-motion';
import QuestionType from 'src/app/types/questionType';

interface QuestionProps {
    timer: number;
    questionData: QuestionType;
    lengthQuiz: number;
    onClick: (key: string) => void;
    isAnswerSelect: (key: string) => boolean;
    correctAnswer?: [];
}

const PlayerQuestion = (props: QuestionProps) => {
    return (
        <div className='h-full w-full relative flex items-center justify-center bg-bgPurpleLight text-textWhite'>
            <div className='z-[1] relative w-3/4 h-3/4 flex flex-col items-center justify-center  rounded-[40px] bg-bgQuestion gap-[1em]'>
                <div className='absolute top-[1em] right-[2em]'>
                    <CountdownCircleTimer
                        isPlaying
                        duration={props.timer}
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
                        Question {props.questionData?.questionIndex + 1} of {props.lengthQuiz}
                    </span>
                    <div className='text-textBlack max-w-[80%] font-semibold'>
                        {/* This is a picture taken in outdoor.There are 2 people in this picture.On the
                        left,a woman with black hair is holding paper while talking on the phone */}
                        {props.questionData?.name}
                    </div>
                </motion.div>
                <div className='w-3/4 flex justify-between items-center gap-[2em]'>
                    <Answer
                        delay={0.3}
                        body={props.questionData?.answerList[0]?.body}
                        name='A'
                        onClick={() => {
                            props.onClick('A');
                        }}
                        isAnswerSelect={props.isAnswerSelect('A')}
                    />
                    <Answer
                        delay={0.4}
                        body={props.questionData?.answerList[1]?.body}
                        name='B'
                        onClick={() => {
                            props.onClick('B');
                        }}
                        isAnswerSelect={props.isAnswerSelect('B')}
                    />
                </div>
                {props.questionData?.questionType !== 'True/False' && (
                    <div className='w-3/4 flex justify-between items-center gap-[2em]'>
                        <Answer
                            delay={0.5}
                            body={props.questionData?.answerList[2]?.body}
                            name='C'
                            onClick={() => {
                                props.onClick('C');
                            }}
                            isAnswerSelect={props.isAnswerSelect('C')}
                        />
                        <Answer
                            delay={0.6}
                            body={props.questionData?.answerList[3]?.body}
                            name='D'
                            onClick={() => {
                                props.onClick('D');
                            }}
                            isAnswerSelect={props.isAnswerSelect('D')}
                        />
                    </div>
                )}
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

interface AnswerProps {
    delay: number;
    body: string | undefined;
    name: string;
    onClick: () => void;
    isAnswerSelect: boolean;
}

const Answer = (props: AnswerProps) => {
    return (
        <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: props.delay }}
            className={clsx(
                `relative flex flex-1 items-center justify-center rounded py-4 border-[2px] border-solid border-bgBorderQuestion`,
                props.isAnswerSelect ? 'bg-bgPurpleLight border-textPurpleBorder' : 'bg-textWhite border-bgBorderQuestion'
            )}
        >
            <div
                onClick={props.onClick}
                className={clsx(
                    `w-[2.6em] h-[2.6em] rounded-full flex items-center justify-center absolute left-3 border-[3px]  border-solid cursor-pointer`,
                    props.isAnswerSelect ? 'border-textPurpleBorder' : 'border-bgBorderQuestion text-textBlack'
                )}
            >
                {props.isAnswerSelect && <FaCheck className='ww-[2.6em] h-[2.6em]' />}
            </div>
            <h2 className={clsx(`font-semibold`, props.isAnswerSelect ? 'text-White' : 'text-textBlack')}>{props.body}</h2>
        </motion.div>
    );
};

export default PlayerQuestion;
