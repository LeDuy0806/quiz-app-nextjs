'use client';

import Image from 'next/image';
import { QuestionType, QuestionTypeEnum } from 'src/app/types/creator';
import { cn } from 'src/utils/tailwind.util';
import { FaRegTrashCan } from 'react-icons/fa6';
import { HiOutlineDuplicate } from 'react-icons/hi';
import { useAppDispatch } from 'src/app/redux/hooks';
import { deleteQuestion, duplicateQuestion, setActiveQuestion } from 'src/app/redux/slices/quizCreatorSlice';
import { useState } from 'react';

interface IProps {
    isActive: boolean;
    questionData: QuestionType;
}

function QuestionItem({ isActive = false, questionData }: IProps) {
    const dispatch = useAppDispatch();
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={cn('p-1 max-lg:flex lg:p-3', {
                'bg-blue-200': isActive
            })}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Question Index */}
            <div className='mb-2 flex items-center justify-between pr-2 lg:h-7'>
                <h3 className='w-full font-bold max-lg:hidden'>
                    {questionData.questionIndex}&nbsp;{questionData.questionType}
                </h3>
                {/* Mobile */}
                <h3 className='mr-1 w-full font-bold lg:hidden'>{questionData.questionIndex}</h3>

                {/* Buttons */}
                <div
                    className={cn('flex items-center justify-between gap-2 transition duration-300 max-lg:hidden', {
                        hidden: !isActive && !isHovered
                    })}
                >
                    <button
                        onClick={() => dispatch(deleteQuestion(questionData.questionIndex))}
                        className='rounded-full p-1 transition hover:bg-red-500 hover:text-white'
                    >
                        <FaRegTrashCan className='h-4 w-4' />
                    </button>
                    <button
                        onClick={() => dispatch(duplicateQuestion(questionData.questionIndex))}
                        className='rounded-full p-1 transition hover:bg-blue-500 hover:text-white'
                    >
                        <HiOutlineDuplicate className='h-5 w-5' />
                    </button>
                </div>
            </div>

            {/* Question Card */}
            <div
                onClick={() => dispatch(setActiveQuestion(questionData.questionIndex))}
                className='w-full cursor-pointer rounded-lg bg-[#f2f2f2] p-1 shadow-[0px_0px_0px_4px_transparent] outline-none transition-shadow hover:shadow-[0px_0px_0px_4px_rgb(201,201,201)] max-lg:w-30 lg:min-h-[8rem]'
            >
                {/* title */}
                <div className='flex w-full flex-col lg:h-full lg:p-2'>
                    <h4 className='max-h-4 max-w-full truncate text-center text-xs tracking-[0.2px] text-gray-600'>{questionData.question || 'Question'}</h4>
                </div>

                {/* Body */}
                <div className='relative mx-0 flex justify-center lg:my-auto'>
                    {/* time */}
                    <div className='absolute left-[10%] h-6 w-6 translate-y-1/2 rounded-full border border-gray-300 text-center text-[10px] leading-6 text-gray-300 max-lg:hidden'>
                        {questionData.answerTime}
                    </div>
                    {/* preview image */}
                    <div className='h-10 w-10  border border-dashed border-gray-300 p-2'>
                        <div className='relative h-full w-full'>
                            <Image src={'/assets/images/defaultQuestionImage.png'} alt='Quizzes logo' fill />
                        </div>
                    </div>
                </div>

                {/* preview answer */}
                <div className='mt-4 flex flex-wrap justify-center gap-2 max-lg:hidden'>
                    {questionData.questionType === QuestionTypeEnum.QUIZ ? (
                        questionData.answerList.map((answer, index) => (
                            <div key={index} className='mb-1 flex h-2 w-2/5 items-center justify-between border border-dashed border-gray-400 px-1'>
                                <div></div>
                                {answer.isCorrect && <div className='h-2 w-2 rounded-full bg-green-600'></div>}
                            </div>
                        ))
                    ) : (
                        <>
                            <div className='mb-1 flex h-4 w-2/5 items-center justify-between border border-dashed border-gray-400 px-1'>
                                <div></div>
                                {questionData.answerList[0].isCorrect && <div className='h-3 w-3 rounded-full bg-green-600'></div>}
                            </div>
                            <div className='mb-1 flex h-4 w-2/5 items-center justify-between border border-dashed border-gray-400 px-1'>
                                <div></div>
                                {questionData.answerList[1].isCorrect && <div className='h-3 w-3 rounded-full bg-green-600'></div>}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default QuestionItem;
