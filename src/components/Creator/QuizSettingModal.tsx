import { FormControlLabel, InputBase, Radio, RadioGroup } from '@mui/material';
import Image from 'next/image';
import Modal from 'react-modal';
import { QuizType } from 'src/app/types/creator';
import defaultCoverImage from '../../../public/assets/images/creator/background.webp';
import { ChangeEvent, useState } from 'react';

const customStylesModal: any = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        zIndex: 9998,
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
        zIndex: 9999
    }
};

interface IProps {
    isOpenModal: boolean;
    quiz: QuizType;
    setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
    setQuiz: React.Dispatch<React.SetStateAction<QuizType>>;
}

type ModalDataType = {
    name: string;
    description: string;
    isPublic: boolean;
};

function QuizSettingModal({ isOpenModal, setIsOpenModal, quiz, setQuiz }: IProps) {
    const initialModalData: ModalDataType = {
        name: quiz.name,
        description: quiz.description,
        isPublic: quiz.isPublic
    };

    const [modalData, setModalData] = useState<ModalDataType>(initialModalData);

    const handleCloseModal = () => {
        setIsOpenModal(false);
    };

    const handleUpdateQuizName = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setModalData({
            ...modalData,
            name: e.target.value
        });
    };

    const handleUpdateQuizDescription = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

    const handleUpdateQuiz = () => {
        setQuiz((prev) => ({
            ...prev,
            name: modalData.name,
            description: modalData.description,
            isPublic: modalData.isPublic
        }));
        setIsOpenModal(false);
    };

    return (
        <Modal isOpen={isOpenModal} style={customStylesModal} onRequestClose={handleCloseModal}>
            <div className='rounded bg-white p-10 max-sml:h-screen max-sml:w-screen'>
                <h1 className='text-lg font-bold'>Quiz Summary</h1>

                {/* Content */}
                <div className='mt-8 justify-between gap-8 lg:flex'>
                    {/* Left Content */}
                    <div className='lg:w-3/5'>
                        <div>
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
                        <div className='mt-4'>
                            <h2 className='font-semibold'>Description</h2>
                            <InputBase
                                multiline
                                rows={6}
                                className='mt-2 min-w-full rounded px-4 py-2 outline outline-1 active:outline-blue-300'
                                inputProps={{
                                    placeholder: 'Enter your quiz description...'
                                }}
                                value={modalData.description}
                                onChange={handleUpdateQuizDescription}
                            />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className='mt-4 lg:mt-0 lg:w-2/5'>
                        {/* Cover Image */}
                        <div className=''>
                            <h2 className='font-semibold'>Cover Image</h2>
                            <div className='relative mt-2'>
                                <Image src={defaultCoverImage} alt='Default Cover Image' className='rounded' />
                                <button className='absolute bottom-3 left-1/2 -translate-x-1/2 rounded bg-blue-500 px-4 pb-3 pt-2 shadow-[inset_0_-5px_rgba(0,0,0,0.3)] duration-100 hover:mt-[2px] hover:pb-[10px] hover:shadow-[inset_0_-4px_rgba(0,0,0,0.3)] active:mt-1 active:pb-2 active:shadow-[inset_0_-2px_rgba(0,0,0,0.3)]'>
                                    <span className='font-semibold text-white'>Change</span>
                                </button>
                            </div>
                        </div>

                        {/* Visibility */}

                        <div className='mt-4'>
                            <h2 className='font-semibold'>Visibility</h2>
                            <RadioGroup defaultValue='public' row onChange={handleUpdateQuizVisibility}>
                                <FormControlLabel value='public' control={<Radio />} label='Public' />
                                <FormControlLabel value='private' control={<Radio />} label='Private' />
                            </RadioGroup>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className='mt-12 flex justify-center gap-4'>
                    <button
                        onClick={handleCloseModal}
                        className='w-32 rounded bg-[#f2f2f2] px-4 pb-3 pt-2 shadow-[inset_0_-5px_rgba(0,0,0,0.3)] duration-100 hover:mt-[2px] hover:pb-[10px] hover:shadow-[inset_0_-4px_rgba(0,0,0,0.3)] active:mt-1 active:pb-2 active:shadow-[inset_0_-2px_rgba(0,0,0,0.3)]'
                    >
                        <span className='font-semibold text-black max-lg:hidden'>Cancel</span>
                    </button>
                    <button
                        onClick={handleUpdateQuiz}
                        className='w-32 rounded bg-[#26890c] px-4 pb-3 pt-2 shadow-[inset_0_-5px_rgba(0,0,0,0.3)] duration-100 hover:mt-[2px] hover:pb-[10px] hover:shadow-[inset_0_-4px_rgba(0,0,0,0.3)] active:mt-1 active:pb-2 active:shadow-[inset_0_-2px_rgba(0,0,0,0.3)]'
                    >
                        <span className='font-semibold text-white max-lg:hidden'>Save</span>
                    </button>
                </div>
            </div>
        </Modal>
    );
}
export default QuizSettingModal;
