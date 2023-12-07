import Image from 'next/image';
import { useState } from 'react';
import { InputBase } from '@mui/material';
import { HiDotsVertical, HiPlus } from 'react-icons/hi';

import { newCreatorBg } from '../../../public/assets/images/creator';
import { cn } from 'src/utils/tailwind.util';
import AnswerItem from 'src/components/Creator/AnswerItem';
import QuestionSettingSidebar from './QuestionSettingSidebar';
import { AnswerNameEnum, AnswerTimeEnum, OptionQuestionEnum, PointTypeEnum, QuestionType, QuestionTypeEnum } from 'src/app/types/creator';

interface IProps {
    question: QuestionType;
    setQuestion: React.Dispatch<React.SetStateAction<QuestionType>>;
    handleDeleteCurrentQuestion: () => void;
}

export default function ContentEditor({ question, setQuestion, handleDeleteCurrentQuestion }: IProps) {
    const [isOpenQuestionSettingSidebar, setIsOpenQuestionSettingSidebar] = useState(true);

    const { questionType, pointType, answerTime, optionQuestion } = question;

    // Handle change
    const handleChangeQuestionType = (questionType: QuestionTypeEnum) => {
        setQuestion({ ...question, questionType });

        // Reset correct answer when change question type
        setQuestion((prev) => ({
            ...prev,
            answerList: [
                ...prev.answerList.map((answer) => {
                    return { ...answer, body: '', isCorrect: false };
                })
            ]
        }));

        // Reset option question when change question type
        setQuestion((prev) => ({
            ...prev,
            optionQuestion: OptionQuestionEnum.SINGLE
        }));
    };

    const handleChangePointType = (pointType: PointTypeEnum) => {
        setQuestion({ ...question, pointType });
    };

    const handleChangeAnswerTime = (answerTime: AnswerTimeEnum) => {
        setQuestion({ ...question, answerTime });
    };

    const handleChangeOptionQuestion = (optionQuestion: OptionQuestionEnum) => {
        // Check if question is true/false
        if (question.questionType === QuestionTypeEnum.TRUE_FALSE) {
            return alert('True/False question cannot be multiple choice');
        }

        // Set option question
        setQuestion({ ...question, optionQuestion });

        // Reset correct answer when change option question
        if (optionQuestion === OptionQuestionEnum.SINGLE) {
            setQuestion((prev) => ({
                ...prev,
                answerList: [
                    ...prev.answerList.map((answer) => {
                        return { ...answer, isCorrect: false };
                    })
                ]
            }));
        }
    };

    const handleOpenSettingQuiz = () => {
        setIsOpenQuestionSettingSidebar(!isOpenQuestionSettingSidebar);
    };

    const handleChangeQuestion = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setQuestion({ ...question, question: e.target.value });
    };

    const handleChangeAnswer = (name: AnswerNameEnum, body: string) => {
        setQuestion((prev) => ({
            ...prev,
            answerList: [
                ...prev.answerList.map((answer) => {
                    if (answer.name === name) {
                        return { ...answer, body };
                    }
                    return answer;
                })
            ]
        }));
    };

    const handleChangeCorrectAnswer = (name: AnswerNameEnum) => {
        // Check if have correct answer
        let isHaveCorrectAnswer = question.answerList.some((answer) => answer.isCorrect);
        if (question.questionType === QuestionTypeEnum.TRUE_FALSE) {
            if (isHaveCorrectAnswer) {
                setQuestion((prev) => ({
                    ...prev,
                    answerList: [
                        ...prev.answerList.map((answer) => {
                            return { ...answer, isCorrect: !answer.isCorrect };
                        })
                    ]
                }));
                return;
            }
        }

        // Set option question to multiple if have correct answer
        if (isHaveCorrectAnswer) {
            setQuestion({ ...question, optionQuestion: OptionQuestionEnum.MULTIPLE });
        }

        // Set correct answer
        setQuestion((prev) => ({
            ...prev,
            answerList: [
                ...prev.answerList.map((answer) => {
                    if (answer.name === name) {
                        return { ...answer, isCorrect: !answer.isCorrect };
                    }
                    return answer;
                })
            ]
        }));

        // let numberOfCorrectAnswer = question.answerList.filter((answer) => answer.isCorrect).length;

        // if (numberOfCorrectAnswer === 1 && question.optionQuestion === OptionQuestionEnum.MULTIPLE) {
        //     setQuestion((prev) => ({
        //         ...prev,
        //         optionQuestion: OptionQuestionEnum.SINGLE
        //     }));
        // }
        // End handle change
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
                            value={question.question}
                            onChange={handleChangeQuestion}
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
                                <AnswerItem
                                    isTrueFalse={true}
                                    answer={
                                        (question.answerList[0] = {
                                            ...question.answerList[0],
                                            body: 'True'
                                        })
                                    }
                                    handleChangeCorrectAnswer={handleChangeCorrectAnswer}
                                />
                                <AnswerItem
                                    isTrueFalse={true}
                                    answer={
                                        (question.answerList[1] = {
                                            ...question.answerList[1],
                                            body: 'False'
                                        })
                                    }
                                    handleChangeCorrectAnswer={handleChangeCorrectAnswer}
                                />
                            </>
                        ) : (
                            question.answerList.map((answer, index) => (
                                <AnswerItem
                                    isTrueFalse={false}
                                    key={index}
                                    answer={answer}
                                    handleChangeAnswer={handleChangeAnswer}
                                    handleChangeCorrectAnswer={handleChangeCorrectAnswer}
                                />
                            ))
                        )}
                    </div>
                </div>
            </div>

            <QuestionSettingSidebar
                isOpen={isOpenQuestionSettingSidebar}
                questionType={questionType}
                answerTime={answerTime}
                pointType={pointType}
                optionQuestion={optionQuestion}
                setOpen={setIsOpenQuestionSettingSidebar}
                handleChangeQuestionType={handleChangeQuestionType}
                handleChangePointType={handleChangePointType}
                handleChangeAnswerTime={handleChangeAnswerTime}
                handleChangeOptionQuestion={handleChangeOptionQuestion}
                handleDeleteCurrentQuestion={handleDeleteCurrentQuestion}
            />
        </>
    );
}
