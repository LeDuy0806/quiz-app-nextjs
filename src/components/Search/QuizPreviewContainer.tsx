import { FaCaretDown, FaGraduationCap, FaList, FaRegFolder } from 'react-icons/fa';
import { TbCategory } from 'react-icons/tb';
import QuizType, { CreatorType } from 'src/app/types/quizType';
import QuestionCard from './QuestionCard';
import { useState } from 'react';

function QuizPreviewContainer({ quizData }: { quizData: QuizType }) {
    const [isShowAnswer, setIsShowAnswer] = useState(false);

    return (
        <div className='m-4 border-collapse overflow-auto rounded border-slate-200'>
            <div className='relative h-fit'>
                <div className='sticky top-0 flex w-full flex-col gap-2 rounded-t bg-slate-100 p-3'>
                    <div className='flex w-full items-start justify-between text-base font-bold text-slate-800'>
                        <span>{quizData?.name}</span>
                    </div>
                    <div className='flex flex-wrap items-start gap-2 text-xs  text-slate-600'>
                        <div className='flex items-center gap-x-1'>
                            <span>By Author : {(quizData?.creator as CreatorType).firstName + ' ' + (quizData?.creator as CreatorType).lastName}</span>
                        </div>
                        <div className='flex items-center gap-x-1'>
                            <span>| </span>
                            <TbCategory className='text-xs' />
                            <span>{quizData?.category?.name}</span>
                        </div>
                        <div className='flex items-center gap-x-1'>
                            <span>| </span>
                            <FaGraduationCap className='text-xs' />
                            <span>{quizData?.grade?.name}</span>
                        </div>
                    </div>
                </div>

                {/* Body */}
                <div className='relative flex-col rounded-t bg-slate-100'>
                    <div className='flex h-fit gap-x-2 p-3'>
                        <div className='relative rounded bg-lilac text-sm text-white'>
                            <button className='flex h-8 py-2 pl-2 pr-2 text-xs'>
                                Play
                                <FaCaretDown className='ml-1 text-xs' />
                            </button>
                        </div>
                        <button
                            className='relative flex h-8 min-w-max shrink-0 items-center justify-center rounded bg-gray-200 px-4 py-1 text-sm font-semibold text-slate-800 transition-colors hover:text-slate-600 active:bg-slate-200'
                            aria-label='Save'
                        >
                            <FaRegFolder className='mr-2 flex items-center text-xs' />
                            <span title='Save' className='max-sm:hidden'>
                                Save
                            </span>
                        </button>
                    </div>
                    <div className=' flex items-center justify-between border-b border-slate-200 p-3'>
                        <span className='text-sm  text-slate-800'>{quizData.numberOfQuestions} Questions</span>
                    </div>
                    <div className='flex flex-col'>
                        {quizData?.questionList?.map((question, index) => <QuestionCard key={index} isShowAnswer={isShowAnswer} questionData={question} />)}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default QuizPreviewContainer;
