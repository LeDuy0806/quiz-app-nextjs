import { FormControlLabel, InputBase, Radio, RadioGroup } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { BsPlusLg } from 'react-icons/bs';

import { useAppDispatch, useAppSelector } from 'src/app/redux/hooks';
import { setQuizFromParams } from 'src/app/redux/slices/quizCreatorSlice';
import { useRouter } from 'next/navigation';

import { QuizType, initialQuestion, initialQuiz } from 'src/app/types/creator';
import { cn } from 'src/utils/tailwind.util';
import { RootState } from 'src/app/redux/store';
import { useCreateDraftQuizMutation } from 'src/app/redux/services/quizApi';

const customStylesModal: any = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        zIndex: 298,
        cursor: ''
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        borderRadius: '10px',
        padding: '0',
        border: 'none',
        outline: 'none',
        zIndex: 299
    }
};

interface IProps {
    buttonElement?: React.JSX.Element;
}

type ModalDataType = {
    name: string;
    description: string;
    isPublic: boolean;
};

export default function CreateQuizButton({ buttonElement }: IProps) {
    const dispatch = useAppDispatch();

    const { quiz } = useAppSelector((state: RootState) => state.quizCreator);
    const { user } = useAppSelector((state: RootState) => state.auth.authData);

    const [createDraftQuiz, { data, isSuccess }] = useCreateDraftQuizMutation();

    const router = useRouter();

    const [isOpenModal, setIsOpenModal] = useState(false);

    const initialModalData: ModalDataType = {
        name: '',
        description: '',
        isPublic: true
    };

    const [modalData, setModalData] = useState<ModalDataType>(initialModalData);

    useEffect(() => {
        if (isSuccess) {
            dispatch(
                setQuizFromParams({
                    ...initialQuiz,
                    _id: data?._id as string,
                    name: modalData.name,
                    description: modalData.description,
                    isPublic: modalData.isPublic,
                    creator: {
                        _id: user._id,
                        userName: user.userName,
                        avatar: user.avatar,
                        userType: user.userType,
                        firstName: user.firstName,
                        lastName: user.lastName
                    },
                    questionList: [
                        {
                            ...initialQuestion,
                            creator: user._id
                        }
                    ]
                })
            );

            router.push(`/creator/${data?._id}`);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSuccess]);

    const handleCloseModal = () => {
        setIsOpenModal(false);
    };

    const handleUpdateQuizName = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setModalData({
            ...modalData,
            name: e.target.value
        });
    };

    const handleUpdateQuizDescription = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setModalData({
            ...modalData,
            description: e.target.value
        });
    };

    const handleUpdateQuizVisibility = (e: React.ChangeEvent<HTMLInputElement>) => {
        setModalData({
            ...modalData,
            isPublic: e.target.value === 'public'
        });
    };

    const handleCreateQuiz = () => {
        const quizData: QuizType = {
            ...initialQuiz,
            name: modalData.name,
            questionList: [],
            numberOfQuestions: 0,
            description: modalData.description,
            isPublic: modalData.isPublic,
            creator: {
                _id: user._id,
                userName: user.userName,
                avatar: user.avatar,
                userType: user.userType,
                firstName: user.firstName,
                lastName: user.lastName
            }
        };

        createDraftQuiz({ quizData });
    };

    Modal.setAppElement('body');

    return (
        <>
            {buttonElement !== null && buttonElement !== undefined ? (
                <div onClick={() => setIsOpenModal(true)} className={cn('cursor-pointer', buttonElement.props.className)}>
                    {buttonElement}
                </div>
            ) : (
                <button
                    onClick={() => setIsOpenModal(true)}
                    className={
                        'mr-1 flex items-center justify-center rounded-lg bg-purple-700 text-sm font-medium text-white hover:bg-purple-800 focus:outline-none dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 max-md:h-8 max-md:w-8 md:px-5 md:py-2.5'
                    }
                >
                    <BsPlusLg className='h-5 w-5' />
                    <span className='ml-1 max-md:hidden'>{'Create Quiz'}</span>
                </button>
            )}

            <Modal isOpen={isOpenModal} style={customStylesModal} onRequestClose={handleCloseModal}>
                <div className='rounded bg-white p-10 '>
                    <h1 className='text-lg font-bold'>Create Quiz</h1>

                    {/* Title */}
                    <div className='mt-4'>
                        <h2 className='font-semibold'>Title</h2>
                        <InputBase
                            className='mt-2 min-w-full rounded px-4 py-2 outline outline-1 target:outline-blue-300'
                            inputProps={{
                                placeholder: 'Enter your quiz title...'
                            }}
                            value={modalData.name}
                            onChange={handleUpdateQuizName}
                        />
                    </div>

                    {/* Description */}
                    <div className='mt-4'>
                        <h2 className='font-semibold'>Description</h2>
                        <InputBase
                            multiline
                            rows={3}
                            className='mt-2 min-w-full rounded px-4 py-2 outline outline-1 active:outline-blue-300'
                            inputProps={{
                                placeholder: 'Enter your quiz description...'
                            }}
                            value={modalData.description}
                            onChange={handleUpdateQuizDescription}
                        />
                    </div>

                    <div className='mt-4'>
                        <h2 className='font-semibold'>Visibility</h2>
                        <RadioGroup defaultValue='public' row onChange={handleUpdateQuizVisibility}>
                            <FormControlLabel value='public' control={<Radio />} label='Public' />
                            <FormControlLabel value='private' control={<Radio />} label='Private' />
                        </RadioGroup>
                    </div>

                    {/* Buttons */}
                    <div className='mt-4 flex justify-center gap-4 max-lg:pb-10'>
                        <button
                            onClick={handleCloseModal}
                            className='w-32 rounded bg-[#f2f2f2] px-4 pb-3 pt-2 shadow-[inset_0_-5px_rgba(0,0,0,0.3)] duration-100 hover:mt-[2px] hover:pb-[10px] hover:shadow-[inset_0_-4px_rgba(0,0,0,0.3)] active:mt-1 active:pb-2 active:shadow-[inset_0_-2px_rgba(0,0,0,0.3)]'
                        >
                            <span className='font-semibold text-black'>Cancel</span>
                        </button>
                        <button
                            onClick={handleCreateQuiz}
                            className='w-32 rounded bg-[#26890c] px-4 pb-3 pt-2 shadow-[inset_0_-5px_rgba(0,0,0,0.3)] duration-100 hover:mt-[2px] hover:pb-[10px] hover:shadow-[inset_0_-4px_rgba(0,0,0,0.3)] active:mt-1 active:pb-2 active:shadow-[inset_0_-2px_rgba(0,0,0,0.3)]'
                        >
                            <span className='font-semibold text-white'>Create</span>
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    );
}
