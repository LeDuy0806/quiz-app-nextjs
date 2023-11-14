import Image from 'next/image';
import { FaCheckSquare, FaRegCheckCircle, FaRegClock } from 'react-icons/fa';

function QuestionCard() {
    return (
        <div className='flex flex-col border border-solid border-slate-200 rounded-lg mb-4 cursor-pointer bg-white hover:bg-gray-100'>
            <div className='p-4 rounded-t-lg shadow-sm'>
                <div>
                    <div className='flex justify-between pb-4'>
                        {/* type of question */}
                        <div className='flex flex-col xs:flex-row gap-2 xs:gap-0'>
                            <span className='inline-flex items-center min-w-max'>
                                <div className='items-center inline-flex text-xs font-semibold py-0.5 rounded px-1.5'>
                                    <span className='mr-2 relative flex items-center justify-center text-cyan-700'>
                                        <FaCheckSquare className='flex items-center text-xs' />
                                    </span>
                                    <span>Multiple Choice</span>
                                </div>
                            </span>
                        </div>
                        {/* question time and points */}
                        <span className='ml-auto self-start flex'>
                            <div className='items-center inline-flex text-xs py-0.5 rounded px-1.5 ml-2 border bg-white border-gray-200 min-w-max'>
                                <FaRegClock className='flex items-center text-xs mr-1' />
                                <span>30 Seconds</span>
                            </div>
                            <div className='items-center inline-flex text-xs py-0.5 rounded px-1.5 ml-2 border bg-white border-gray-200 min-w-max'>
                                <FaRegCheckCircle className='flex items-center text-xs mr-1' />
                                <span>10 Points</span>
                            </div>
                        </span>
                    </div>
                    <div className='flex items-center mb-4'>
                        <div className='flex items-center justify-center shrink-0 w-26 h-26 rounded overflow-hidden mr-4 bg-gray-200'>
                            <div className='flex items-center w-full h-full cursor-zoom-in relative'>
                                <Image src={'/assets/images/default_quiz_background.png'} alt='Question Image' fill objectFit='contain' />
                            </div>
                        </div>
                        <div className='text-sm flex items-center overflow-hidden w-full text-slate-800'>
                            <p className='font-semibold'>Question title</p>
                        </div>
                    </div>
                </div>
                <div className='h-px mb-4 bg-gray-100'>
                    <span className='absolute px-2 text-[10px] left-4 transform -translate-y-1/2 text-gray-500 bg-white'>List answers</span>
                </div>
                {/* list answer */}
                <div className='flex flex-wrap'>
                    <div className='flex items-start mb-2 w-1/2'>
                        <span className='w-4 h-4 rounded-full my-1 mr-2 shrink-0 relative bg-bgAnswerCorrect'></span>
                        <span className=' text-gray-800'>
                            <p>Answer incorrect</p>
                        </span>
                    </div>
                    <div className='flex items-start mb-2 w-1/2'>
                        <span className='w-4 h-4 rounded-full my-1 mr-2 shrink-0 relative bg-bgAnswerIncorrect'></span>
                        <span className=' text-gray-800'>
                            <p>Answer incorrect</p>
                        </span>
                    </div>
                    <div className='flex items-start mb-2 w-1/2'>
                        <span className='w-4 h-4 rounded-full my-1 mr-2 shrink-0 relative bg-bgAnswerIncorrect'></span>
                        <span className=' text-gray-800'>
                            <p>Answer incorrect</p>
                        </span>
                    </div>
                    <div className='flex items-start mb-2 w-1/2'>
                        <span className='w-4 h-4 rounded-full my-1 mr-2 shrink-0 relative bg-bgAnswerIncorrect'></span>
                        <span className=' text-gray-800'>
                            <p>Answer incorrect</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuestionCard;
