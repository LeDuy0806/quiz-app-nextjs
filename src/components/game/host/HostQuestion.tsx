//icons
import { FaCheck } from 'react-icons/fa';
import clsx from 'clsx';

//component
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

//animation
import { motion } from 'framer-motion';
import QuestionType from 'src/app/types/questionType';

interface HostQuestionProps {
    timer: number | undefined;
    questionData: QuestionType;
    lengthQuiz: number;
}

const HostQuestion = (props: HostQuestionProps) => {
    return (
        <div className='relative flex h-full w-full items-center justify-center bg-bgPurpleLight text-textWhite'>
            <div className='relative z-[1] flex h-3/4 w-3/4 flex-col items-center justify-center  gap-[1em] rounded-[40px] bg-bgQuestion'>
                <div className='absolute right-[2em] top-[1em]'>
                    <CountdownCircleTimer
                        isPlaying
                        duration={props.timer!}
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
                    className='relative flex h-1/5 w-3/4 items-center justify-center rounded-md border-[2px] border-solid border-bgBorderQuestion bg-textWhite text-center'
                >
                    <span className='absolute top-0 translate-y-[-50%] rounded-3xl bg-bgPurple px-6 py-3 font-bold'>
                        Question {props.questionData?.questionIndex! + 1} of {props.lengthQuiz}
                    </span>
                    <div className='max-w-[80%] font-semibold text-textBlack'>
                        {/* This is a picture taken in outdoor.There are 2 people in this picture.On the
                        left,a woman with black hair is holding paper while talking on the phone */}
                        {props.questionData?.content}
                    </div>
                </motion.div>
                <div className='flex w-3/4 items-center justify-between gap-[2em]'>
                    <Answer delay={0.3} body={props.questionData?.answerList[0]?.body} isCorrect={props.questionData?.answerList[0]?.isCorrect} name='A' />
                    <Answer delay={0.4} body={props.questionData?.answerList[1]?.body} isCorrect={props.questionData?.answerList[1]?.isCorrect} name='B' />
                </div>
                {props.questionData?.questionType !== 'True/False' && (
                    <div className='flex w-3/4 items-center justify-between gap-[2em]'>
                        <Answer delay={0.5} body={props.questionData?.answerList[2]?.body} isCorrect={props.questionData?.answerList[2]?.isCorrect} name='C' />
                        <Answer delay={0.6} body={props.questionData?.answerList[3]?.body} isCorrect={props.questionData?.answerList[3]?.isCorrect} name='D' />
                    </div>
                )}
            </div>

            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className='absolute left-[8em] top-[1em] h-[10em] w-[10em] rounded-full bg-bgPurple'
            ></motion.div>
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className='absolute bottom-[0.6em] right-[3em] h-[20em] w-[20em] rounded-full bg-bgPurple'
            ></motion.div>
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className='absolute bottom-[0.4em] left-[20em] h-[5em] w-[5em] rounded-full bg-textPurpleHover'
            ></motion.div>
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className='absolute right-[20em] top-[1em] h-[3em] w-[3em] rounded-full bg-textPurpleHover'
            ></motion.div>
        </div>
    );
};

interface AnswerProps {
    delay: number;
    body: string | undefined;
    isCorrect: boolean | undefined;
    name: string;
}

const Answer = (props: AnswerProps) => {
    return (
        <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: props.delay }}
            className={clsx(
                `relative flex flex-1 items-center justify-center rounded border-[2px] border-solid py-4 `,
                props.isCorrect ? 'border-textGreen bg-bgAnswerCorrect' : 'border-bgBorderQuestion bg-textWhite'
            )}
        >
            <h2 className={clsx(`font-semibold`, props.isCorrect ? 'text-White' : 'text-textBlack')}>{props.body}</h2>
        </motion.div>
    );
};

export default HostQuestion;
