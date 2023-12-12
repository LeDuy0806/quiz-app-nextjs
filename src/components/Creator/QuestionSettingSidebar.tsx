import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { toast } from 'react-toastify';

// constants
import { CreatorMessages } from 'src/constants/messages';
import { ToastOptions } from 'src/constants/toast';

// icons
import { TbAdjustmentsQuestion, TbClock } from 'react-icons/tb';
import { IoMedalOutline } from 'react-icons/io5';
import { BsUiChecksGrid } from 'react-icons/bs';
import { FaChevronLeft } from 'react-icons/fa';

// utils
import { cn } from 'src/utils/tailwind.util';

// types
import { OptionQuestionEnum, PointTypeEnum, QuestionTypeEnum, AnswerTimeEnum } from 'src/app/types/creator';

// redux
import { useAppDispatch, useAppSelector } from 'src/app/redux/hooks';
import {
    duplicateQuestion,
    setAnswerTime,
    setDeleteQuestionIndex,
    setOpenDeleteQuestionDialog,
    setOptionQuestion,
    setPointType,
    setQuestionType
} from 'src/app/redux/slices/quizCreatorSlice';

interface IProps {
    isOpen: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function QuestionSettingSidebar({ isOpen, setOpen }: IProps) {
    const { quiz, activeQuestion } = useAppSelector((state) => state.quizCreator);
    const dispatch = useAppDispatch();

    const { questionType, answerTime, pointType, optionQuestion, questionIndex } = activeQuestion;

    const handleDeleteQuestion = () => {
        // check if there is only one question left
        if (quiz.questionList.length === 1) {
            toast.error(CreatorMessages.ERROR.DELETE_LAST_QUESTION, ToastOptions);
            return;
        }
        dispatch(setDeleteQuestionIndex(questionIndex));
        dispatch(setOpenDeleteQuestionDialog(true));
    };

    const handleDuplicateQuestion = () => {
        dispatch(duplicateQuestion(questionIndex));
    };

    return (
        <div
            className={cn(
                ' fixed right-0 top-0 z-[200] mt-15 flex h-[calc(100vh-60px)] w-72 transform flex-col justify-between bg-white p-4 text-left duration-300 ',
                {
                    'translate-x-0': isOpen,
                    'translate-x-full': !isOpen
                }
            )}
        >
            <div>
                {/* Setting question sidebar button mobile*/}
                <button
                    onClick={() => setOpen(!isOpen)}
                    className={cn('fixed -left-8 top-1/3 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded bg-white', {
                        'max-lg:hidden': !isOpen
                    })}
                >
                    <FaChevronLeft className={cn('text-2xl', { 'rotate-180 transform': isOpen })} />
                </button>

                {/* Question Type */}
                <div className=''>
                    <div className='flex items-center'>
                        <TbAdjustmentsQuestion className='mr-2 text-2xl' />
                        <span className='font-semibold'>Question Type</span>
                    </div>

                    <Select
                        className='mt-4 w-full'
                        id='question-type'
                        value={questionType}
                        onChange={(e: SelectChangeEvent<QuestionTypeEnum>) => {
                            dispatch(setQuestionType(e.target.value as QuestionTypeEnum));
                        }}
                    >
                        <MenuItem value={QuestionTypeEnum.QUIZ}>Quiz</MenuItem>
                        <MenuItem value={QuestionTypeEnum.TRUE_FALSE}>True / False</MenuItem>
                    </Select>
                </div>

                {/* Divider */}
                <div className='mt-8 w-full outline outline-1 outline-gray-300'></div>

                {/* Time Limit */}
                <div className='mt-12'>
                    <div className='flex items-center'>
                        <TbClock className='mr-2 text-2xl' />
                        <span className='font-semibold'>Time Limit</span>
                    </div>
                    <Select
                        className='mt-4 w-full'
                        id='time-limit'
                        value={answerTime}
                        onChange={(e: SelectChangeEvent<AnswerTimeEnum>) => {
                            dispatch(setAnswerTime(e.target.value as AnswerTimeEnum));
                        }}
                    >
                        <MenuItem value={AnswerTimeEnum.TEN_SECONDS}>10 seconds</MenuItem>
                        <MenuItem value={AnswerTimeEnum.FIFTEEN_SECONDS}>15 seconds</MenuItem>
                        <MenuItem value={AnswerTimeEnum.TWENTY_SECONDS}>20 seconds</MenuItem>
                        <MenuItem value={AnswerTimeEnum.THIRTY_SECONDS}>30 seconds</MenuItem>
                        <MenuItem value={AnswerTimeEnum.ONE_MINUTE}>1 minute</MenuItem>
                        <MenuItem value={AnswerTimeEnum.TWO_MINUTES}>2 minutes</MenuItem>
                        <MenuItem value={AnswerTimeEnum.FIVE_MINUTES}>5 minutes</MenuItem>
                    </Select>
                </div>

                {/* Points */}
                <div className='mt-8'>
                    <div className='flex items-center'>
                        <IoMedalOutline className='mr-2 text-2xl' />
                        <span className='font-semibold'>Points</span>
                    </div>
                    <Select
                        className='mt-4 w-full'
                        id='time-limit'
                        value={pointType}
                        onChange={(e: SelectChangeEvent<PointTypeEnum>) => {
                            dispatch(setPointType(e.target.value as PointTypeEnum));
                        }}
                    >
                        <MenuItem value={PointTypeEnum.STANDARD}>Standard</MenuItem>
                        <MenuItem value={PointTypeEnum.DOUBLE}>Double</MenuItem>
                        <MenuItem value={PointTypeEnum.BASED_ON_TIME}>Based On Time</MenuItem>
                    </Select>
                </div>

                {/* Answer Options */}
                <div className='mt-8'>
                    <div className='flex items-center'>
                        <BsUiChecksGrid className='mr-2 text-2xl' />
                        <span className='font-semibold'>Answer Options</span>
                    </div>
                    <Select
                        className='mt-4 w-full'
                        id='time-limit'
                        value={optionQuestion}
                        onChange={(e: SelectChangeEvent<OptionQuestionEnum>) => dispatch(setOptionQuestion(e.target.value as OptionQuestionEnum))}
                    >
                        <MenuItem value={OptionQuestionEnum.SINGLE}>Single answer</MenuItem>
                        <MenuItem value={OptionQuestionEnum.MULTIPLE}>Multiple answer</MenuItem>
                    </Select>
                </div>
            </div>

            <div className=''>
                {/* Divider */}
                <div className='w-full outline outline-1 outline-gray-300'></div>

                {/* Buttons */}
                <div className='mt-4 flex justify-center gap-4'>
                    <button onClick={handleDeleteQuestion} className='rounded-md px-4 py-1 hover:bg-slate-200'>
                        <span className='font-semibold'>delete</span>
                    </button>
                    <button onClick={handleDuplicateQuestion} className='rounded-md px-4 py-1 outline outline-1 hover:bg-slate-200'>
                        <span className='font-semibold'>duplicate</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
