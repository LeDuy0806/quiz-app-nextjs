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
        <div className='relative flex h-full w-full items-center justify-center bg-bgPurpleLight text-textWhite'>
            <div className='relative z-[1] flex h-3/4 w-3/4 flex-col items-center justify-center  gap-[1em] rounded-[40px] bg-bgQuestion'>
                <div className='absolute right-[2em] top-[1em]'>
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
                    className='relative flex h-1/5 items-center justify-center rounded-md border-[2px] border-solid border-bgBorderQuestion bg-textWhite text-center md:w-[90%] mdl:w-4/5'
                >
                    <span className='absolute top-0 translate-y-[-50%] rounded-3xl bg-bgPurple px-6 py-3 font-bold'>
                        Question {props.questionData?.questionIndex + 1} of {props.lengthQuiz}
                    </span>
                    <div className='max-w-[80%] font-semibold text-textBlack'>
                        {/* This is a picture taken in outdoor.There are 2 people in this picture.On the
                        left,a woman with black hair is holding paper while talking on the phone */}
                        {props.questionData?.content}
                    </div>
                </motion.div>
                <div className='flex w-[300px] flex-col items-center justify-between gap-[2em] md:w-[90%] md:flex-row mdl:w-4/5'>
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
                    <div className='flex w-[300px] flex-col items-center justify-between gap-[2em] md:w-[90%] md:flex-row mdl:w-4/5'>
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
                `relative flex w-[200px] flex-1 items-center justify-center rounded border-[2px] border-solid border-bgBorderQuestion py-4`,
                props.isAnswerSelect ? 'border-textPurpleBorder bg-bgPurpleLight' : 'border-bgBorderQuestion bg-textWhite'
            )}
        >
            <div
                onClick={props.onClick}
                className={clsx(
                    `absolute left-3 flex h-[2.6em] w-[2.6em] cursor-pointer items-center justify-center rounded-full  border-[3px] border-solid`,
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
