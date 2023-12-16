import Image from 'next/image';
import { FaBook, FaBullseye, FaExclamationTriangle, FaGraduationCap, FaHeart, FaPlay, FaRegCopy, FaRegFolder, FaShare } from 'react-icons/fa';
import QuizType, { CreatorType } from 'src/app/types/quizType';
import { DefaultBackground } from 'src/constants/image';

function QuizInfo({ quizData }: { quizData: QuizType }) {
    return (
        <div className='relative my-4  w-full lgl:block'>
            <div>
                <div className='border-sm relative z-10 h-[13.5rem] border-spacing-1 rounded border-gray-200 bg-white p-4 shadow-xl'>
                    <div className='flex'>
                        {/* Quiz image */}
                        <div className='relative flex h-30 w-30 items-center justify-center overflow-hidden'>
                            <div className='flex h-full w-full shrink-0 items-center justify-center rounded-sm bg-slate-100'>
                                <div className=' relative flex h-full w-full cursor-zoom-in items-center'>
                                    <Image src={quizData.backgroundImage || DefaultBackground[0]} alt='Quiz Image' fill objectFit='contain' />
                                </div>
                            </div>
                        </div>
                        {/* Quiz info */}
                        <div className='ml-3 flex w-10/12 flex-col'>
                            {/* type quiz */}
                            <div className='mb-1 flex h-4 gap-1 text-[11px] text-slate-500'>QUIZ</div>
                            {/* quiz title */}
                            <div className='my-1 flex min-h-[3rem] w-3/5 text-xl text-slate-800 max-md:w-full'>
                                <div className=' flex w-full items-center'>
                                    <h1 className='inline-block overflow-hidden break-words text-left align-middle text-lg font-semibold '>{quizData?.name}</h1>
                                </div>
                            </div>
                            <div className='mb-4 flex text-sm text-slate-700'>
                                <p className='max-w-[40rem] truncate'>{quizData?.description}</p>
                            </div>
                            {/* quiz detail section */}
                            <div className='grid grid-cols-[auto_auto_auto] justify-start [grid-row-gap:0.5rem]'>
                                {/* grade */}
                                <h2 className='flex items-center'>
                                    <FaGraduationCap className='mr-1 flex items-center text-xs text-slate-600' />
                                    <div className='flex text-xs text-slate-700'>
                                        <span className='max-w-[10rem] truncate'>{quizData?.grade?.name}</span>
                                    </div>
                                    <div className='flex text-xs text-slate-700'>
                                        <span className='ml-1 text-xs'>grade</span>
                                    </div>
                                </h2>
                                {/* divided */}
                                <div className='mx-2 flex items-center'>
                                    <div className='h-1 w-1 rounded-full bg-gray-400'></div>
                                </div>
                                {/* category */}
                                <div className='flex items-center'>
                                    <FaBook className='mr-1 flex items-center text-xs text-slate-500' />
                                    <h2 className='max-w-[12.5rem] truncate text-xs text-slate-700'>
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
                        <div className='absolute right-4 top-4 flex gap-1'>
                            <button className='relative flex h-6 w-6 min-w-max items-center justify-center rounded border border-solid border-slate-200 bg-slate-100 px-3 py-1 text-slate-800 transition-colors hover:bg-slate-100 active:bg-gray-100 '>
                                <FaShare className='mr-2 flex items-center text-xs' />
                                <span title='Share' className='max-sm:hidden'>
                                    Share
                                </span>
                            </button>
                            <button
                                title='Love'
                                className='relative flex h-6 w-6 min-w-max shrink-0 items-center justify-center rounded border border-solid border-slate-200 bg-slate-100 px-3 py-1 text-slate-800 transition-colors hover:bg-slate-100 hover:text-red-500 active:bg-gray-100 '
                            >
                                <FaHeart className='mr-2 flex items-center text-xs' />
                                <span>3</span>
                            </button>
                            <button
                                title='Report'
                                className='relative flex h-6 w-6 min-w-max items-center justify-center rounded border border-solid border-slate-200 bg-slate-100 text-slate-800 transition-colors hover:bg-slate-100 active:bg-gray-100 '
                            >
                                <FaExclamationTriangle className='flex items-center text-xs' />
                            </button>
                        </div>
                    </div>
                    {/* action */}
                    <div className='mt-4 flex flex-row items-center justify-between'>
                        {/* author */}
                        <div className='flex'>
                            <div className='flex items-start'>
                                <div className='relative mr-2 h-8 max-h-[2rem] w-8 min-w-[2rem] cursor-pointer rounded-full'>
                                    <Image src={'/assets/images/default_avatar.png'} alt='Avatar' fill />
                                </div>
                            </div>
                            <div className='flex flex-col items-start'>
                                <p className='max-w-[7rem] cursor-pointer truncate text-xs text-slate-800 hover:underline'>
                                    <span>{(quizData.creator as CreatorType).firstName + ' ' + (quizData.creator as CreatorType).lastName}</span>
                                </p>
                                <div className='text-[10px] text-slate-600'> 1 years</div>
                            </div>
                        </div>
                        {/* button action */}
                        <div className='flex justify-between space-x-1'>
                            <button
                                className='relative flex h-8 min-w-max shrink-0 items-center justify-center rounded bg-gray-200 px-4 py-1 text-sm font-semibold text-slate-800 transition-colors hover:text-slate-600 active:bg-slate-200'
                                aria-label='Save'
                            >
                                <FaRegFolder className='mr-2 flex items-center text-xs' />
                                <span title='Save' className='max-sm:hidden'>
                                    Save
                                </span>
                            </button>
                            <button
                                className='relative flex h-8 min-w-max shrink-0 items-center justify-center rounded bg-gray-200 px-4 py-1 text-sm font-semibold text-slate-800 transition-colors hover:text-slate-600 active:bg-slate-200'
                                aria-label='Copy and edit the quiz'
                            >
                                <FaRegCopy className='mr-2 flex items-center text-xs' />
                                <span title='Copy and edit the quiz' className='max-sm:hidden'>
                                    Copy and edit
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuizInfo;
