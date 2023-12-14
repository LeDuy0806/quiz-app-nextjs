import Image from 'next/image';
import Modal from 'react-modal';
import { ChangeEvent, useState } from 'react';
import { FormControlLabel, InputBase, MenuItem, Radio, RadioGroup, Select, SelectChangeEvent } from '@mui/material';
import defaultCoverImage from '../../../public/assets/images/creator/background.webp';

import { CldUploadWidget } from 'next-cloudinary';

import { CategoryEnum, GradeEnum, ObjectCategoryType, ObjectGradeType } from 'src/app/types/creator';
import { useAppDispatch, useAppSelector } from 'src/app/redux/hooks';
import { setQuiz } from 'src/app/redux/slices/quizCreatorSlice';

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
    isOpenModal: boolean;
    setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

type ModalDataType = {
    name: string;
    description: string;
    backgroundImage: string;
    isPublic: boolean;
    category: ObjectCategoryType;
    grade: ObjectGradeType;
};

function QuizSettingModal({ isOpenModal, setIsOpenModal }: IProps) {
    const dispatch = useAppDispatch();
    const { quiz } = useAppSelector((state) => state.quizCreator);

    const initialModalData: ModalDataType = {
        name: quiz.name,
        description: quiz.description,
        backgroundImage: quiz.backgroundImage,
        isPublic: quiz.isPublic,
        category: quiz.category,
        grade: quiz.grade
    };

    const [modalData, setModalData] = useState<ModalDataType>(initialModalData);

    const handleCloseModal = () => {
        setModalData(initialModalData);
        setIsOpenModal(false);
    };

    const handleUpdateQuizName = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

    const handleUpdateQuizVisibility = (e: ChangeEvent<HTMLInputElement>) => {
        setModalData({
            ...modalData,
            isPublic: e.target.value === 'public'
        });
    };

    const handleUpdateQuizCategory = (e: SelectChangeEvent<CategoryEnum>) => {
        setModalData({
            ...modalData,
            category: {
                ...modalData.category,
                name: e.target.value as CategoryEnum
            }
        });
    };

    const handleUpdateQuizGrade = (e: SelectChangeEvent<GradeEnum>) => {
        setModalData({
            ...modalData,
            grade: {
                ...modalData.grade,
                name: e.target.value as GradeEnum
            }
        });
    };

    const handleUpdateQuiz = () => {
        dispatch(
            setQuiz({
                ...quiz,
                name: modalData.name,
                description: modalData.description,
                backgroundImage: modalData.backgroundImage,
                isPublic: modalData.isPublic,
                category: modalData.category,
                grade: modalData.grade
            })
        );
        setIsOpenModal(false);
    };

    return (
        <Modal isOpen={isOpenModal} style={customStylesModal} onRequestClose={handleCloseModal}>
            <div className='h-screen  w-screen rounded md:h-[90vh]  md:w-[90vw] lg:w-[80vw] xl:w-[70vw] '>
                <div className='h-full w-full bg-white p-4 md:px-6 md:pb-2 md:pt-4  lg:p-10'>
                    <h1 className='text-lg font-bold'>Quiz Summary</h1>

                    {/* Content */}
                    <div className='mt-8 flex justify-between gap-8 max-md:mt-4 max-md:flex-col-reverse'>
                        {/* Left Content */}
                        <div className='w-full md:w-1/2 lg:w-[55%]'>
                            {/* Title */}
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

                            {/* Category */}
                            <div className='mt-4'>
                                <h2 className='font-semibold'>Category</h2>
                                <Select
                                    className='mt-2 w-full'
                                    value={modalData.category.name || ''}
                                    MenuProps={{
                                        PaperProps: {
                                            style: {
                                                maxHeight: 200,
                                                zIndex: 300
                                            }
                                        }
                                    }}
                                    onChange={handleUpdateQuizCategory}
                                >
                                    {Object.values(CategoryEnum).map((category, index) => (
                                        <MenuItem key={index} value={category}>
                                            {category}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </div>

                            {/* Grade */}
                            <div className='mt-4'>
                                <h2 className='font-semibold'>Grade</h2>
                                <Select
                                    className='mt-2 w-full'
                                    value={modalData.grade.name || ''}
                                    MenuProps={{
                                        PaperProps: {
                                            style: {
                                                maxHeight: 200,
                                                zIndex: 300
                                            }
                                        }
                                    }}
                                    onChange={handleUpdateQuizGrade}
                                >
                                    {Object.values(GradeEnum).map((grade, index) => (
                                        <MenuItem key={index} value={grade}>
                                            {grade}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className='mt-4 md:mt-0 md:w-1/2 lg:w-[45%]'>
                            {/* Cover Image */}
                            <CldUploadWidget
                                uploadPreset='quiz_upload'
                                options={{
                                    folder: 'examples/avatar',
                                    sources: ['local', 'url', 'google_drive'],
                                    multiple: false,
                                    styles: {}
                                }}
                                onSuccess={(result: any) => {
                                    setModalData({ ...modalData, backgroundImage: result.info.secure_url });
                                    console.log('modalData backgroundImage:: ' + modalData.backgroundImage);
                                }}
                            >
                                {({ open }) => {
                                    return (
                                        <div className='h-80 w-full md:h-3/5'>
                                            <h2 className='font-semibold'>Cover Image</h2>
                                            <div className='relative mt-2 h-[90%] w-full rounded bg-gray-200'>
                                                <div className='relative h-full w-full'>
                                                    <Image
                                                        src={modalData.backgroundImage || '/assets/images/default_quiz_background.png'}
                                                        objectFit='contain'
                                                        alt='Default Cover Image'
                                                        fill
                                                        sizes='100%'
                                                        className='rounded'
                                                    />
                                                </div>
                                                <button
                                                    onClick={() => {
                                                        open();
                                                    }}
                                                    className='absolute bottom-[5%] left-1/2 -translate-x-1/2 rounded bg-blue-500 px-4 pb-3 pt-2 shadow-[inset_0_-5px_rgba(0,0,0,0.3)] duration-100 hover:mt-[2px] hover:pb-[10px] hover:shadow-[inset_0_-4px_rgba(0,0,0,0.3)] active:mt-1 active:pb-2 active:shadow-[inset_0_-2px_rgba(0,0,0,0.3)]'
                                                >
                                                    <span className='font-semibold text-white'>Change</span>
                                                </button>
                                            </div>
                                        </div>
                                    );
                                }}
                            </CldUploadWidget>
                            {/* Visibility */}

                            <div className='mt-4'>
                                <h2 className='font-semibold'>Visibility</h2>
                                <RadioGroup defaultValue='public' row onChange={handleUpdateQuizVisibility} value={modalData.isPublic ? 'public' : 'private'}>
                                    <FormControlLabel value='public' control={<Radio />} label='Public' />
                                    <FormControlLabel value='private' control={<Radio />} label='Private' />
                                </RadioGroup>
                            </div>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className='mt-12 flex justify-center gap-4 max-lg:pb-4'>
                        <button
                            onClick={handleCloseModal}
                            className='w-32 rounded bg-[#f2f2f2] px-4 pb-3 pt-2 shadow-[inset_0_-5px_rgba(0,0,0,0.3)] duration-100 hover:mt-[2px] hover:pb-[10px] hover:shadow-[inset_0_-4px_rgba(0,0,0,0.3)] active:mt-1 active:pb-2 active:shadow-[inset_0_-2px_rgba(0,0,0,0.3)]'
                        >
                            <span className='font-semibold text-black'>Cancel</span>
                        </button>
                        <button
                            onClick={handleUpdateQuiz}
                            className='w-32 rounded bg-[#26890c] px-4 pb-3 pt-2 shadow-[inset_0_-5px_rgba(0,0,0,0.3)] duration-100 hover:mt-[2px] hover:pb-[10px] hover:shadow-[inset_0_-4px_rgba(0,0,0,0.3)] active:mt-1 active:pb-2 active:shadow-[inset_0_-2px_rgba(0,0,0,0.3)]'
                        >
                            <span className='font-semibold text-white'>Save</span>
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    );
}
export default QuizSettingModal;
