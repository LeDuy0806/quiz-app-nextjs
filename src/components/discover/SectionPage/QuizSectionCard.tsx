import Image from 'next/image';
import { FaGraduationCap, FaHeart, FaList, FaRegHeart } from 'react-icons/fa';
import { FaRegFolder } from 'react-icons/fa6';
import { TbCategory } from 'react-icons/tb';
import { CreatorType } from 'src/app/types/quizType';

interface IProps {
    title: string;
    numberOfQuestion: number;
    image: string;
    category: string;
    grade: string;
    author: CreatorType;
    onMouseEnter?: () => void;
}

function QuizSectionCard({ title, numberOfQuestion, image, category, grade, author, onMouseEnter }: IProps) {
    return (
        <div
            onMouseEnter={onMouseEnter}
            className='flex w-full cursor-pointer rounded border bg-white p-2 shadow-md  hover:border-slate-200 hover:bg-slate-100 hover:shadow'
        >
            <div className='relative flex h-24 w-24 min-w-[6rem] items-center overflow-hidden rounded border'>
                <div className='relative flex h-full w-full  items-center'>
                    <Image src={image || '/assets/images/default_quiz_background.png'} alt='Question Image' fill objectFit='contain' />
                </div>
                <div className='absolute left-0 top-0 inline-flex items-center rounded-br bg-gray-800 px-1'>
                    <span className='text-[10px] font-semibold text-white'>Quiz</span>
                </div>
            </div>
            <div className=' ml-2 w-full py-2 text-left'>
                <div className='flex w-full flex-col gap-2'>
                    <div className='flex max-h-7 items-start justify-between overflow-hidden text-xl font-bold text-slate-800'>
                        <span className='line-clamp-1'>{title}</span>
                    </div>
                    <div className='flex flex-wrap items-start gap-2 text-xs text-slate-600'>
                        <div className='flex items-center gap-x-1'>
                            <FaList className='text-xs' />
                            <span>{numberOfQuestion}</span>
                            <span>Questions</span>
                        </div>
                        <div className='flex items-center gap-x-1 max-sml:hidden'>
                            <TbCategory className='text-xs' />
                            <span>{category}</span>
                        </div>
                        <div className='flex items-center gap-x-1 max-sml:hidden'>
                            <FaGraduationCap className='text-xs' />
                            <span>{grade}</span>
                        </div>
                    </div>
                    <div className=' flex items-center justify-between'>
                        <div className='group flex cursor-pointer flex-wrap items-center text-xs  text-slate-600 md:gap-2'>
                            <div className='relative mr-0.5 h-6 w-6 cursor-pointer rounded-full border border-gray-400 bg-gray-100'>
                                <Image
                                    src={author.avatar || '/assets/images/default_avatar.png'}
                                    alt='Avatar'
                                    objectFit='contain'
                                    fill
                                    sizes='100%'
                                    className='rounded-full'
                                />
                            </div>
                            <div className='flex items-center gap-x-1'>
                                <span className='group-hover:underline max-xs:hidden'>
                                    <span className='max-md:hidden'>Author : </span>
                                    {author.firstName + ' ' + author.lastName}
                                </span>
                            </div>
                        </div>
                        <div className='flex'>
                            <button
                                title='Love'
                                className='relative flex h-7 w-7 min-w-max shrink-0 items-center justify-center rounded border border-solid border-slate-200 bg-slate-100 px-3 py-1 text-slate-800 transition-colors hover:bg-slate-100 hover:text-red-500 active:bg-gray-100 '
                            >
                                <FaRegHeart className='mr-2 flex items-center text-sm' />
                                <span>3</span>
                            </button>
                            <button
                                title='Save'
                                className='relative ml-2 flex h-7 w-7 min-w-max items-center justify-center rounded border border-solid border-slate-200 bg-slate-100 px-2 text-slate-800 transition-colors hover:bg-slate-100 active:bg-gray-100 '
                            >
                                <FaRegFolder className='flex items-center text-sm md:mr-2' />
                                <span className='max-md:hidden'>Save</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default QuizSectionCard;
