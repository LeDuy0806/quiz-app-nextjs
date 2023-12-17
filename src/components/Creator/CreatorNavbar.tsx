import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

// Icons
import { IoSettingsOutline } from 'react-icons/io5';
import { BiSave } from 'react-icons/bi';
import { RxExit } from 'react-icons/rx';

// Constants
import paths from 'src/constants/paths';
import { CreatorMessages } from 'src/constants/messages';
import { ToastOptions } from 'src/constants/toast';
import { QuestionTypeEnum } from 'src/constants/enum';

// Redux
import { useAppDispatch, useAppSelector } from 'src/app/redux/hooks';
import { saveQuiz } from 'src/app/redux/slices/quizCreatorSlice';
import { useUpdateQuizMutation } from 'src/app/redux/services/quizApi';
import { saveQuizFromCreator } from 'src/app/redux/slices/quizSlice';

// Components
import ExitEditDialog from './dialog/ExitEditDialog';

interface IProps {
    setIsOpenSettingModal: Dispatch<SetStateAction<boolean>>;
    setIsOpenThemeModal: Dispatch<SetStateAction<boolean>>;
}

function CreatorNavbar({ setIsOpenSettingModal, setIsOpenThemeModal }: IProps) {
    const dispatch = useAppDispatch();
    const { quiz } = useAppSelector((state) => state.quizCreator);

    const router = useRouter();

    const [updateQuiz, { data, isSuccess, isLoading, isError, error }] = useUpdateQuizMutation();

    const [isOpenExitEditDialog, setIsOpenExitEditDialog] = useState(false);

    const handleOpenSettingModal = () => {
        setIsOpenSettingModal(true);
    };

    const handleOpenThemeModal = () => {
        setIsOpenThemeModal(true);
    };

    useEffect(() => {
        if (isSuccess) {
            toast.success(CreatorMessages.SUCCESS.SAVE_QUIZ, ToastOptions);
            router.push(paths.library);
            data && dispatch(saveQuizFromCreator(data));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSuccess]);

    useEffect(() => {
        if (isError) {
            console.log('Create Navbar Error: ', (error as any)?.data?.message);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isError]);

    const handleExitQuiz = () => {
        if (quiz.category._id === '') {
            toast.error(CreatorMessages.ERROR.CATEGORY_REQUIRED, ToastOptions);
            return;
        }
        if (quiz.grade._id === '') {
            toast.error(CreatorMessages.ERROR.GRADE_REQUIRED, ToastOptions);
            return;
        }
        setIsOpenExitEditDialog(true);
    };

    const handleQuizSubmit = () => {
        if (quiz.category._id === '') {
            toast.error(CreatorMessages.ERROR.CATEGORY_REQUIRED, ToastOptions);
            return;
        }
        if (quiz.grade._id === '') {
            toast.error(CreatorMessages.ERROR.GRADE_REQUIRED, ToastOptions);
            return;
        }
        if (!validateQuestionList()) return;
        dispatch(saveQuiz());
        updateQuiz({
            quizId: quiz._id,
            updateQuiz: quiz
        })
            .unwrap()
            .then((res) => {
                dispatch(saveQuizFromCreator(res));
            });
    };

    const validateQuestionList = () => {
        return quiz.questionList.every((question) => {
            // Check if question is empty
            if (question.content === '') {
                toast.error(CreatorMessages.ERROR.QUESTION_REQUIRED, ToastOptions);
                return false;
            }

            let isValidAnswer;
            if (question.questionType === QuestionTypeEnum.TRUE_FALSE) {
                const { answerList } = question;
                isValidAnswer = answerList[0].body !== '' && answerList[1].body !== '';
            } else {
                isValidAnswer = question.answerList.every((answer) => answer.body !== '');
            }

            // Check if answer is empty
            if (!isValidAnswer) {
                toast.error(CreatorMessages.ERROR.ANSWER_REQUIRED, ToastOptions);
                return false;
            }

            // Check if correct answer is not selected
            const isValidCorrectAnswer = question.answerList.some((answer) => answer.isCorrect === true);
            if (!isValidCorrectAnswer) {
                toast.error(CreatorMessages.ERROR.CORRECT_ANSWER_REQUIRED, ToastOptions);
                return false;
            }
            return true;
        });
    };

    return (
        <>
            <div className='fixed left-0 top-0 z-[110] w-full bg-white px-2 py-2.5 shadow dark:bg-gray-900'>
                <div className='flex w-full items-center justify-between'>
                    <div className='flex items-center'>
                        {/* Logo */}
                        <Link href={paths.home} className='flex items-center'>
                            <div className='relative mr-1 h-9 w-9 '>
                                <Image
                                    src='https://res.cloudinary.com/dfoiuc0jw/image/upload/v1702777748/quiz-app/logo/logo.png'
                                    alt='Quizzes logo'
                                    fill
                                    sizes='100'
                                />
                            </div>

                            <span className='self-center whitespace-nowrap text-xl font-semibold text-black dark:text-white md:max-lg:hidden'>Quizzes</span>
                        </Link>

                        {/* Quiz Settings */}
                        <button
                            onClick={handleOpenSettingModal}
                            className='ml-4 flex items-center justify-between rounded-md md:p-1 md:outline md:outline-1 md:outline-gray-300 lg:min-w-[360px]'
                        >
                            <p className='ml-1 line-clamp-1 hidden w-2/3 overflow-hidden text-ellipsis text-left font-bold text-gray-400 md:inline md:pr-6 lgl:pr-12'>
                                {quiz.name || 'Enter your quiz title...'}
                            </p>
                            <div className='flex items-center justify-center rounded bg-gray-300 px-1 py-1 max-md:h-8 max-md:w-8 md:justify-between md:px-2'>
                                <IoSettingsOutline className='h-5 w-5 md:mr-1' />
                                <span className='hidden font-bold md:inline'>Settings</span>
                            </div>
                        </button>

                        {/* Set Themes */}
                        <button
                            onClick={handleOpenThemeModal}
                            className='ml-4 flex items-center justify-center rounded bg-blue-500 px-2 py-2 text-sm font-medium text-white hover:bg-gray-400 focus:outline-none md:px-5'
                        >
                            <span className='inline font-bold'>Themes</span>
                        </button>
                    </div>

                    <div className='flex items-center'>
                        {/* Exit Button */}
                        <button onClick={handleExitQuiz} className='flex items-center'>
                            <div
                                // href={paths.library}
                                className='mr-2 flex items-center justify-center rounded-lg bg-gray-300 px-2.5 py-2.5 text-sm font-medium text-white hover:bg-gray-400 focus:outline-none md:px-5'
                            >
                                <RxExit className='h-5 w-5 text-black' />
                                <span className='ml-1 font-bold text-black max-md:hidden'>Exit</span>
                            </div>
                        </button>

                        {/* Create Button */}
                        <button onClick={handleQuizSubmit} className='flex items-center'>
                            <div className='flex items-center justify-center rounded-lg bg-purple-700 px-2.5 py-2.5 text-sm font-medium text-white hover:bg-purple-800 focus:outline-none dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 md:px-5 '>
                                <BiSave className='h-5 w-5' />
                                <span className='ml-1 font-bold max-md:hidden'>Save</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            <ExitEditDialog open={isOpenExitEditDialog} setIsOpenExitEditDialog={setIsOpenExitEditDialog} />
        </>
    );
}

export default CreatorNavbar;
