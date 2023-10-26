//icons
import { FaCheck } from 'react-icons/fa';
import clsx from 'clsx';

//type
import QuestionType from 'src/app/types/questionType';

interface QuestionResultProps {
    currentItems?: number[];
    questionData: QuestionType;
    lengthQuiz: number;
    answerQuestion: string;
}

const QuestionResult = (props: QuestionResultProps) => {
    return (
        <div className='h-full w-full relative flex items-center justify-center bg-bgPurpleLight text-textWhite'>
            <div className='z-[1] relative w-3/4 h-3/4 flex flex-col items-center justify-center  rounded-[40px] bg-bgQuestion gap-[1em]'>
                <div className='relative w-3/4 h-1/5 bg-textWhite flex items-center justify-center text-center rounded-md border-[2px] border-solid border-bgBorderQuestion'>
                    <span className='absolute bg-bgPurple top-0 translate-y-[-50%] px-6 py-3 rounded-3xl font-bold'>
                        Question {props.questionData?.questionIndex! + 1} of {props.lengthQuiz}
                    </span>
                    <div className='text-textBlack max-w-[80%] font-semibold'>
                        {/* This is a picture taken in outdoor.There are 2 people in this picture.On the
                        left,a woman with black hair is holding paper while talking on the phone */}
                        {props.questionData?.name}
                    </div>
                </div>
                <div className='w-3/4 flex justify-between items-center gap-[2em]'>
                    <Answer
                        delay={0.3}
                        body={props.questionData?.answerList[0]?.body}
                        isCorrect={props.questionData?.answerList[0]?.isCorrect}
                        name='A'
                        answerQuestion={props.answerQuestion}
                    />
                    <Answer
                        delay={0.4}
                        body={props.questionData?.answerList[1]?.body}
                        isCorrect={props.questionData?.answerList[1]?.isCorrect}
                        name='B'
                        answerQuestion={props.answerQuestion}
                    />
                </div>
                {props.questionData?.questionType !== 'True/False' && (
                    <div className='w-3/4 flex justify-between items-center gap-[2em]'>
                        <Answer
                            delay={0.5}
                            body={props.questionData?.answerList[2]?.body}
                            isCorrect={props.questionData?.answerList[2]?.isCorrect}
                            name='C'
                            answerQuestion={props.answerQuestion}
                        />
                        <Answer
                            delay={0.6}
                            body={props.questionData?.answerList[3]?.body}
                            isCorrect={props.questionData?.answerList[3]?.isCorrect}
                            name='D'
                            answerQuestion={props.answerQuestion}
                        />
                    </div>
                )}
            </div>

            <div className='absolute w-[10em] h-[10em] rounded-full bg-bgPurple top-[1em] left-[8em]'></div>
            <div className='absolute w-[20em] h-[20em] rounded-full bg-bgPurple bottom-[0.6em] right-[3em]'></div>
            <div className='absolute w-[5em] h-[5em] rounded-full bg-textPurpleHover bottom-[0.4em] left-[20em]'></div>
            <div className='absolute w-[3em] h-[3em] rounded-full bg-textPurpleHover top-[1em] right-[20em]'></div>
        </div>
    );
};

interface AnswerProps {
    delay: number;
    body: string;
    isCorrect: boolean;
    name: string;
    answerQuestion: string;
}

const Answer = (props: AnswerProps) => {
    return (
        <div
            className={clsx(
                `relative flex flex-1 items-center justify-center rounded py-4 border-[2px] border-solid `,
                props.isCorrect
                    ? 'bg-bgAnswerCorrect border-textGreen'
                    : props.name === props.answerQuestion
                    ? 'bg-textError border-bgBorderQuestion'
                    : 'bg-textWhite border-bgBorderQuestion'
            )}
        >
            <div
                // onClick={props.onClick}
                className={clsx(
                    `w-[2.6em] h-[2.6em] rounded-full flex items-center justify-center absolute left-3 border-[3px] border-solid cursor-pointer`,
                    props.isCorrect
                        ? 'border-textWhite'
                        : props.name === props.answerQuestion
                        ? 'bg-textError border-bgBorderQuestion'
                        : 'bg-textWhite border-bgBorderQuestion'
                )}
            >
                {(props.isCorrect || props.name === props.answerQuestion) && <FaCheck className='ww-[2.6em] h-[2.6em]' />}
            </div>
            <h2 className={clsx(`font-semibold`, props.isCorrect ? 'text-White' : 'text-textBlack')}>{props.body}</h2>
        </div>
    );
};

export default QuestionResult;
