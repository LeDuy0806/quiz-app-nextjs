import Image from 'next/image';
import { FaCheckSquare, FaRegCheckCircle, FaRegClock } from 'react-icons/fa';
import QuestionType from 'src/app/types/questionType';
import { DefaultBackground } from 'src/constants/image';

function QuestionCard({ questionData, isShowAnswer, onClick }: { questionData: QuestionType; isShowAnswer: Boolean; onClick: () => void }) {
    return (
        <div onClick={onClick} className='mb-4 flex cursor-pointer flex-col rounded-lg border border-solid border-slate-200 bg-white hover:bg-gray-100'>
            <div className='rounded-t-lg p-4 shadow-sm'>
                <div>
                    <div className='flex justify-between pb-4'>
                        {/* type of question */}
                        <div className='flex flex-col gap-2 xs:flex-row xs:gap-0'>
                            <span className='inline-flex min-w-max items-center'>
                                <div className='inline-flex items-center rounded px-1.5 py-0.5 text-xs font-semibold'>
                                    <span className='relative mr-2 flex items-center justify-center text-cyan-700'>
                                        <FaCheckSquare className='flex items-center text-xs' />
                                    </span>
                                    <span>Multiple Choice</span>
                                </div>
                            </span>
                        </div>
                        {/* question time and points */}
                        <span className='ml-auto flex self-start'>
                            <div className='ml-2 inline-flex min-w-max items-center rounded border border-gray-200 bg-white px-1.5 py-0.5 text-xs'>
                                <FaRegClock className='mr-1 flex items-center text-xs' />
                                <span> {questionData.answerTime + ' Seconds'}</span>
                            </div>
                            <div className='ml-2 inline-flex min-w-max items-center rounded border border-gray-200 bg-white px-1.5 py-0.5 text-xs'>
                                <FaRegCheckCircle className='mr-1 flex items-center text-xs' />
                                <span> {'10 Points'}</span>
                            </div>
                        </span>
                    </div>
                    <div className='mb-4 flex items-center'>
                        {/* question image */}
                        <div className='mr-4 flex h-26 w-26 shrink-0 items-center justify-center overflow-hidden rounded bg-gray-200'>
                            <div className='relative flex h-full w-full cursor-zoom-in items-center'>
                                <Image src={questionData.backgroundImage || DefaultBackground[1]} alt='Question Image' fill objectFit='contain' />
                            </div>
                        </div>
                        {/* question title */}
                        <div className=' flex w-full items-center overflow-hidden text-slate-800'>
                            <p className='font-semibold'>{questionData.content}</p>
                        </div>
                    </div>
                </div>
                <div className='mb-4 h-px bg-gray-300'>
                    <span className='absolute left-4 -translate-y-1/2 transform bg-white px-2 text-[10px] text-gray-500'>List answers</span>
                </div>
                {/* list answer */}
                <div className='flex flex-wrap'>
                    {questionData.answerList?.map((answer, index) => {
                        if (answer.body == '') return <></>;
                        if (isShowAnswer) {
                            return answer.isCorrect ? (
                                <div key={index} className='mb-2 flex w-full items-start mdl:w-1/2'>
                                    <span className='relative my-1 mr-2 h-4 w-4 shrink-0 rounded-full bg-bgAnswerCorrect'></span>
                                    <span className=' text-gray-800'>
                                        <p>{answer.body}</p>
                                    </span>
                                </div>
                            ) : (
                                <div key={index} className='mb-2 flex w-full items-start mdl:w-1/2'>
                                    <span className='relative my-1 mr-2 h-4 w-4 shrink-0 rounded-full bg-bgAnswerIncorrect'></span>
                                    <span className=' text-gray-800'>
                                        <p>{answer.body}</p>
                                    </span>
                                </div>
                            );
                        } else {
                            return (
                                <div key={index} className='mb-2 flex w-full items-start mdl:w-1/2'>
                                    <span className='relative my-1 mr-2 h-4 w-4 shrink-0 rounded-full bg-gray-400'></span>
                                    <span className=' text-gray-800'>
                                        <p>{answer.body}</p>
                                    </span>
                                </div>
                            );
                        }
                    })}
                    {/* <div className='flex items-start mb-2 mdl:w-1/2 w-full'>
                        <span className='w-4 h-4 rounded-full my-1 mr-2 shrink-0 relative bg-bgAnswerIncorrect'></span>
                        <span className=' text-gray-800'>
                            <p>Answer incorrect</p>
                        </span>
                    </div>
                    <div className='flex items-start mb-2 mdl:w-1/2 w-full'>
                        <span className='w-4 h-4 rounded-full my-1 mr-2 shrink-0 relative bg-bgAnswerIncorrect'></span>
                        <span className=' text-gray-800'>
                            <p>Answer incorrect</p>
                        </span>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default QuestionCard;
