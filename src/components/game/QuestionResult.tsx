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
        <div className='relative flex h-full w-full items-center justify-center bg-bgPurpleLight text-textWhite'>
            <div className='relative z-[1] flex h-3/4 w-3/4 flex-col items-center justify-center  gap-[1em] rounded-[40px] bg-bgQuestion'>
                <div className='relative flex h-1/5 w-3/4 items-center justify-center rounded-md border-[2px] border-solid border-bgBorderQuestion bg-textWhite text-center'>
                    <span className='absolute top-0 translate-y-[-50%] rounded-3xl bg-bgPurple px-6 py-3 font-bold'>
                        Question {props.questionData?.questionIndex! + 1} of {props.lengthQuiz}
                    </span>
                    <div className='max-w-[80%] font-semibold text-textBlack'>
                        {/* This is a picture taken in outdoor.There are 2 people in this picture.On the
                        left,a woman with black hair is holding paper while talking on the phone */}
                        {props.questionData?.content}
                    </div>
                </div>
                <div className='flex w-3/4 items-center justify-between gap-[2em]'>
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
                    <div className='flex w-3/4 items-center justify-between gap-[2em]'>
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

            <div className='absolute left-[8em] top-[1em] h-[10em] w-[10em] rounded-full bg-bgPurple'></div>
            <div className='absolute bottom-[0.6em] right-[3em] h-[20em] w-[20em] rounded-full bg-bgPurple'></div>
            <div className='absolute bottom-[0.4em] left-[20em] h-[5em] w-[5em] rounded-full bg-textPurpleHover'></div>
            <div className='absolute right-[20em] top-[1em] h-[3em] w-[3em] rounded-full bg-textPurpleHover'></div>
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
                `relative flex flex-1 items-center justify-center rounded border-[2px] border-solid py-4 `,
                props.isCorrect
                    ? 'border-textGreen bg-bgAnswerCorrect'
                    : props.name === props.answerQuestion
                      ? 'border-bgBorderQuestion bg-textError'
                      : 'border-bgBorderQuestion bg-textWhite'
            )}
        >
            <div
                // onClick={props.onClick}
                className={clsx(
                    `absolute left-3 flex h-[2.6em] w-[2.6em] cursor-pointer items-center justify-center rounded-full border-[3px] border-solid`,
                    props.isCorrect
                        ? 'border-textWhite'
                        : props.name === props.answerQuestion
                          ? 'border-bgBorderQuestion bg-textError'
                          : 'border-bgBorderQuestion bg-textWhite'
                )}
            >
                {(props.isCorrect || props.name === props.answerQuestion) && <FaCheck className='ww-[2.6em] h-[2.6em]' />}
            </div>
            <h2 className={clsx(`font-semibold`, props.isCorrect ? 'text-White' : 'text-textBlack')}>{props.body}</h2>
        </div>
    );
};

export default QuestionResult;
