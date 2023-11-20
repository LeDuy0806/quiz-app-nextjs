import Image from 'next/image';
import { FaBook, FaBullseye, FaExclamationTriangle, FaGraduationCap, FaHeart, FaPlay, FaRegCopy, FaRegFolder, FaShare } from 'react-icons/fa';
import QuizType from 'src/app/types/quizType';

function QuizInfo({ quizData }: { quizData: QuizType | null }) {
    return (
        <div className='relative w-full my-4 hidden lgl:block'>
            <div>
                <div className='relative bg-white border-spacing-1 border-gray-200 border-sm rounded z-10 p-4 h-[13.5rem]'>
                    <div className='flex'>
                        {/* Quiz image */}
                        <div className='w-30 h-30 relative flex justify-center items-center overflow-hidden'>
                            <div className='bg-slate-100 flex items-center justify-center shrink-0 rounded-sm w-full h-full'>
                                <div className=' flex items-center w-full h-full cursor-zoom-in relative'>
                                    <Image
                                        src={quizData?.backgroundImage ? quizData.backgroundImage : '/assets/images/default_quiz_background.png'}
                                        alt='Quiz Image'
                                        fill
                                        objectFit='contain'
                                    />
                                </div>
                            </div>
                        </div>
                        {/* Quiz info */}
                        <div className='flex flex-col w-10/12 ml-3'>
                            {/* type quiz */}
                            <div className='flex text-[11px] text-slate-500 h-4 mb-1 gap-1'>QUIZ</div>
                            {/* quiz title */}
                            <div className='flex w-3/5 my-1 text-xl min-h-[3rem] text-slate-800'>
                                <div className=' flex w-full items-center'>
                                    <h1 className='text-lg font-semibold inline-block text-left align-middle overflow-hidden break-words '>{quizData?.name}</h1>
                                </div>
                            </div>
                            <div className='flex text-slate-700 text-sm mb-4'>
                                <p className='truncate max-w-[40rem]'>{quizData?.description}</p>
                            </div>
                            {/* quiz detail section */}
                            <div className='grid grid-cols-[auto_auto_auto] [grid-row-gap:0.5rem] justify-start'>
                                {/* grade */}
                                <h2 className='flex items-center'>
                                    <FaGraduationCap className='mr-1 text-slate-600 text-xs flex items-center' />
                                    <div className='flex text-slate-700 text-xs'>
                                        <span className='truncate max-w-[10rem]'>{quizData?.grade?.name}</span>
                                    </div>
                                    <div className='flex text-slate-700 text-xs'>
                                        <span className='ml-1 text-xs'>grade</span>
                                    </div>
                                </h2>
                                {/* divided */}
                                <div className='items-center mx-2 flex'>
                                    <div className='w-1 h-1 rounded-full bg-gray-400'></div>
                                </div>
                                {/* category */}
                                <div className='flex items-center'>
                                    <FaBook className='mr-1 text-slate-500 text-xs flex items-center' />
                                    <h2 className='text-xs text-slate-700 truncate max-w-[12.5rem]'>
                                        <span>{quizData?.category?.name}</span>
                                    </h2>
                                </div>
                                {/* accuracy */}
                                {/* <div className='flex items-center w-fit'>
                                    <FaBullseye className='mr-1.5 text-slate-500 text-xs flex items-center' />
                                    <div className=' flex items-center text-slate-700 text-xs min-w-max'>
                                        77%
                                        <div className='ml-1'>
                                            <span>accuracy</span>
                                        </div>
                                    </div>
                                </div> */}
                                {/* divided */}
                                {/* <div className='items-center mx-2 flex'>
                                    <div className='w-1 h-1 rounded-full bg-gray-400'></div>
                                </div> */}
                                {/* number played */}
                                {/* <div className='flex items-center'>
                                    <FaPlay className='mr-1.5 text-slate-500 text-xs flex items-center' />
                                    <div className='flex items-center text-slate-700 text-xs'>
                                        10k
                                        <div className='ml-1'>
                                            <span>played</span>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        {/* button function */}
                        <div className='absolute top-4 right-4 flex gap-1'>
                            <button className='transition-colors flex items-center px-3 py-1 justify-center w-6 h-6 bg-slate-100 border border-solid border-slate-200 text-slate-800 hover:bg-slate-100 active:bg-gray-100 rounded relative min-w-max '>
                                <FaShare className='flex items-center mr-2 text-xs' />
                                <span title='Share'>Share</span>
                            </button>
                            <button
                                title='Love'
                                className='transition-colors flex items-center px-3 py-1 justify-center w-6 h-6 bg-slate-100 border border-solid border-slate-200 text-slate-800 hover:bg-slate-100 shrink-0 hover:text-red-500 active:bg-gray-100 rounded relative min-w-max '
                            >
                                <FaHeart className='flex items-center text-xs mr-2' />
                                <span>3</span>
                            </button>
                            <button
                                title='Report'
                                className='transition-colors flex items-center justify-center w-6 h-6 bg-slate-100 border border-solid border-slate-200 text-slate-800 hover:bg-slate-100 active:bg-gray-100 rounded relative min-w-max '
                            >
                                <FaExclamationTriangle className='flex items-center text-xs' />
                            </button>
                        </div>
                    </div>
                    {/* action */}
                    <div className='flex mt-4 flex-row justify-between items-center'>
                        {/* author */}
                        <div className='flex'>
                            <div className='flex items-start'>
                                <div className='w-8 h-8 mr-2 rounded-full cursor-pointer min-w-[2rem] max-h-[2rem] relative'>
                                    <Image src={'/assets/images/default_avatar.png'} alt='Avatar' fill />
                                </div>
                            </div>
                            <div className='flex flex-col items-start'>
                                <p className='text-xs truncate cursor-pointer text-slate-800 hover:underline max-w-[7rem]'>
                                    <span>{quizData?.creator.firstName + ' ' + quizData?.creator.lastName}</span>
                                </p>
                                <div className='text-slate-600 text-[10px]'> 1 years</div>
                            </div>
                        </div>
                        {/* button action */}
                        <div className='flex justify-between space-x-1'>
                            <button
                                className='transition-colors flex items-center justify-center px-4 py-1 text-sm font-semibold h-8 bg-gray-200 active:bg-slate-200 text-slate-800 hover:text-slate-600 rounded relative min-w-max shrink-0'
                                aria-label='Save'
                            >
                                <FaRegFolder className='flex items-center mr-2 text-xs' />
                                <span title='Save'>Save</span>
                            </button>
                            <button
                                className='transition-colors flex items-center justify-center px-4 py-1 text-sm font-semibold h-8 bg-gray-200 active:bg-slate-200 text-slate-800 hover:text-slate-600 rounded relative min-w-max shrink-0'
                                aria-label='Copy and edit the quiz'
                            >
                                <FaRegCopy className='flex items-center mr-2 text-xs' />
                                <span title='Copy and edit the quiz'>Copy and edit</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuizInfo;
