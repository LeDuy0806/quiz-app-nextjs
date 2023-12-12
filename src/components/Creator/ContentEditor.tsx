import Image from 'next/image';
import { useState } from 'react';
import { InputBase } from '@mui/material';
import { HiDotsVertical, HiPlus } from 'react-icons/hi';
import { newCreatorBg } from '../../../public/assets/images/creator';

import { cn } from 'src/utils/tailwind.util';
import AnswerItem from 'src/components/Creator/AnswerItem';
import QuestionSettingSidebar from './QuestionSettingSidebar';
import { QuestionTypeEnum } from 'src/app/types/creator';
import { useAppDispatch, useAppSelector } from 'src/app/redux/hooks';
import { setQuestionContent } from 'src/app/redux/slices/quizCreatorSlice';

export default function ContentEditor() {
    const { activeQuestion } = useAppSelector((state) => state.quizCreator);
    const dispatch = useAppDispatch();

    const [isOpenQuestionSettingSidebar, setIsOpenQuestionSettingSidebar] = useState(true);

    const { questionType, answerList, content } = activeQuestion;

    const handleOpenSettingQuiz = () => {
        setIsOpenQuestionSettingSidebar(!isOpenQuestionSettingSidebar);
    };

    return (
        <>
            <div
                className={cn(
                    'relative mt-15 transform overflow-y-auto pt-12 duration-300 scrollbar scrollbar-thumb-slate-300 scrollbar-thumb-rounded scrollbar-w-2 scrollbar-h-2 max-lg:mb-20 lg:ml-52  lg:h-[calc(100vh-60px)] ',
                    {
                        'lg:mr-72': isOpenQuestionSettingSidebar
                    }
                )}
            >
                <Image src={newCreatorBg} className='absolute left-0 top-0 -z-40 h-full object-cover' alt='' />
                {/* Main content */}
                <div className=' px-4 '>
                    {/* Input */}
                    <div className='flex text-center'>
                        <InputBase
                            className='w-full rounded-md bg-white px-4 lg:text-3xl'
                            placeholder='Start typing your question ...'
                            multiline
                            minRows={1}
                            maxRows={2}
                            inputProps={{
                                className: 'text-center',
                                maxLength: 120
                            }}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') e.preventDefault();
                            }}
                            value={content}
                            onChange={(e) => dispatch(setQuestionContent(e.target.value))}
                        />

                        {/* Setting Quiz mobile */}
                        <span onClick={handleOpenSettingQuiz} className='ml-4 flex items-center justify-center rounded-full bg-white p-2 lg:hidden'>
                            <HiDotsVertical className='text-xl text-black' />
                        </span>
                    </div>

                    {/* Image */}
                    <div className='mt-8 flex items-center justify-center'>
                        <div className='flex w-full flex-col items-center justify-center rounded-lg bg-gray-100 py-16 text-center max-lg:h-96 2xl:w-1/4'>
                            <>
                                <div className='inline-flex items-center justify-center rounded-lg bg-white p-2'>
                                    <HiPlus className='text-3xl' />
                                </div>
                                <p className='mt-4'>Find and insert media</p>
                            </>
                        </div>
                    </div>

                    {/* Answer List */}
                    <div className='mt-8 flex flex-col items-center justify-center gap-2 lg:grid lg:grid-cols-2'>
                        {questionType === QuestionTypeEnum.TRUE_FALSE ? (
                            <>
                                <AnswerItem isTrueFalse={true} answer={answerList[0]} />
                                <AnswerItem isTrueFalse={true} answer={answerList[1]} />
                            </>
                        ) : (
                            answerList.map((answer, index) => <AnswerItem isTrueFalse={false} key={index} answer={answer} />)
                        )}
                    </div>
                </div>
            </div>

            <QuestionSettingSidebar isOpen={isOpenQuestionSettingSidebar} setOpen={setIsOpenQuestionSettingSidebar} />
        </>
    );
}
