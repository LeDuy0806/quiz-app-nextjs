import Image from 'next/image';
import { useState } from 'react';
import { InputBase } from '@mui/material';
import { HiDotsVertical, HiPlus } from 'react-icons/hi';
import { newCreatorBg } from '../../../public/assets/images/creator';

import { cn } from 'src/utils/tailwind.util';
import AnswerItem from 'src/components/Creator/AnswerItem';
import QuestionSettingSidebar from './QuestionSettingSidebar';
import { useAppDispatch, useAppSelector } from 'src/app/redux/hooks';
import { setQuestionBackgroundImage, setQuestionContent } from 'src/app/redux/slices/quizCreatorSlice';
import { CldUploadWidget } from 'next-cloudinary';
import { QuestionTypeEnum } from 'src/constants/enum';

export default function ContentEditor() {
    const { activeQuestion } = useAppSelector((state) => state.quizCreator);
    const dispatch = useAppDispatch();

    const [isOpenQuestionSettingSidebar, setIsOpenQuestionSettingSidebar] = useState(true);

    const { questionType, answerList, content, backgroundImage } = activeQuestion;

    const handleOpenSettingQuiz = () => {
        setIsOpenQuestionSettingSidebar(!isOpenQuestionSettingSidebar);
    };

    return (
        <>
            <div
                className={cn(
                    'relative mt-15 transform pt-6 duration-300 scrollbar scrollbar-thumb-slate-300 scrollbar-thumb-rounded scrollbar-w-2 scrollbar-h-2 max-lg:mb-20 lg:ml-52 lg:h-[calc(100vh-60px)]',
                    {
                        'lg:mr-72': isOpenQuestionSettingSidebar
                    }
                )}
                style={{
                    backgroundImage: `url(https://res.cloudinary.com/dfoiuc0jw/image/upload/v1702646907/quiz-app/background/backgroundQuizCreator_jbxgk1)`,
                    backgroundSize: 'cover'
                }}
            >
                {/* Main content */}
                <div className='px-4'>
                    {/* Input */}
                    <div className='flex text-center'>
                        <InputBase
                            className='w-full rounded-md bg-white px-4 py-2 shadow-[inset_0_-4px_rgba(0,0,0,0.1)] lg:text-3xl'
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
                    <div className='mt-8 flex items-center justify-center rounded'>
                        <div
                            className={cn('relative flex h-60 w-full flex-col items-center justify-center rounded-lg  text-center max-lg:h-96 2xl:w-1/4', {
                                'lg:h-80': questionType === QuestionTypeEnum.TRUE_FALSE
                            })}
                        >
                            <CldUploadWidget
                                uploadPreset='quiz_upload'
                                options={{
                                    folder: 'quiz-app/questions',
                                    sources: ['local', 'url', 'google_drive'],
                                    multiple: false,
                                    styles: {}
                                }}
                                onSuccess={(results: any) => {
                                    dispatch(setQuestionBackgroundImage(results.info.secure_url));
                                }}
                            >
                                {({ open }) => {
                                    return (
                                        <div className='h-full w-96 cursor-pointer rounded bg-white shadow-md' onClick={() => open()}>
                                            <div className='relative h-full w-full'>
                                                {backgroundImage && (
                                                    <Image src={backgroundImage} fill className='object-contain' alt='Question Image' sizes='100%' />
                                                )}
                                            </div>
                                            {!backgroundImage && (
                                                <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                                                    <div className='inline-flex items-center justify-center rounded-lg bg-white p-2'>
                                                        <HiPlus className='text-3xl' />
                                                    </div>
                                                    <p className='mt-4'>Find and insert media</p>
                                                </div>
                                            )}
                                        </div>
                                    );
                                }}
                            </CldUploadWidget>
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
