import Image from 'next/image';
import Modal from 'react-modal';
import { CldUploadWidget } from 'next-cloudinary';
import { ChangeEvent, useEffect, useState, Dispatch, SetStateAction } from 'react';
import { FormControlLabel, InputBase, MenuItem, Radio, RadioGroup, Select, SelectChangeEvent } from '@mui/material';

import { useAppDispatch, useAppSelector } from 'src/app/redux/hooks';
import { updateQuizInfo } from 'src/app/redux/slices/quizCreatorSlice';
import CategoryType from 'src/app/types/categoryType';
import GradeType from 'src/app/types/gradeType';
import { convertStringToArray, flattenArray } from 'src/utils/array.utils';
import { toast } from 'react-toastify';
import { CreatorMessages } from 'src/constants/messages';
import { ToastOptions } from 'src/constants/toast';

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
    setIsOpenModal: Dispatch<SetStateAction<boolean>>;
}

type ModalDataType = {
    name: string;
    description: string;
    backgroundImage: string;
    isPublic: boolean;
    category: CategoryType;
    grade: GradeType;
    pointsPerQuestion: string;
    tags: string;
};

function QuizSettingModal({ isOpenModal, setIsOpenModal }: IProps) {
    const dispatch = useAppDispatch();
    const { quiz } = useAppSelector((state) => state.quizCreator);
    const { categories, grades } = useAppSelector((state) => state.quiz);

    const initialModalData: ModalDataType = {
        name: quiz.name,
        description: quiz.description,
        backgroundImage: quiz.backgroundImage,
        isPublic: quiz.isPublic,
        category: quiz.category,
        grade: quiz.grade,
        pointsPerQuestion: quiz.pointsPerQuestion.toString(),
        tags: quiz.tags.join(', ')
    };

    const [modalData, setModalData] = useState<ModalDataType>(initialModalData);

    useEffect(() => {
        setModalData({
            name: quiz.name,
            description: quiz.description,
            backgroundImage: quiz.backgroundImage,
            isPublic: quiz.isPublic,
            category: quiz.category,
            grade: quiz.grade,
            pointsPerQuestion: quiz.pointsPerQuestion.toString(),
            tags: quiz.tags.join(', ')
        });
    }, [quiz]);

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

    const handleUpdateQuizCategory = (e: SelectChangeEvent) => {
        setModalData({
            ...modalData,
            category: categories.find((category) => category.name === e.target.value) as CategoryType
        });
    };

    const handleUpdateQuizGrade = (e: SelectChangeEvent) => {
        setModalData({
            ...modalData,
            grade: grades.find((grade) => grade.name === e.target.value) as GradeType
        });
    };

    const handleUpdatePointPerQuestion = (e: ChangeEvent<HTMLInputElement>) => {
        setModalData({
            ...modalData,
            pointsPerQuestion: e.target.value
        });
    };

    const handleUpdateTags = (e: ChangeEvent<HTMLInputElement>) => {
        setModalData({
            ...modalData,
            tags: e.target.value
        });
    };

    const handleUpdateQuiz = () => {
        if (modalData.name === '') {
            toast.error(CreatorMessages.ERROR.TITLE_REQUIRED, ToastOptions);
            return;
        }
        if (modalData.description === '') {
            toast.error(CreatorMessages.ERROR.DESCRIPTION_REQUIRED, ToastOptions);
            return;
        }
        if (modalData.category.name === '') {
            toast.error(CreatorMessages.ERROR.CATEGORY_REQUIRED, ToastOptions);
            return;
        }
        if (modalData.grade.name === '') {
            toast.error(CreatorMessages.ERROR.GRADE_REQUIRED, ToastOptions);
            return;
        }
        dispatch(
            updateQuizInfo({
                ...quiz,
                name: modalData.name,
                description: modalData.description,
                backgroundImage: modalData.backgroundImage,
                isPublic: modalData.isPublic,
                category: modalData.category,
                grade: modalData.grade,
                pointsPerQuestion: parseInt(modalData.pointsPerQuestion) || 1,
                tags: convertInputToTags(modalData.tags)
            })
        );
        setIsOpenModal(false);
    };

    const convertInputToTags = (value: string) => {
        return flattenArray(convertStringToArray(value));
    };

    return (
        <Modal isOpen={isOpenModal} style={customStylesModal} onRequestClose={handleCloseModal}>
            <div className='h-screen  w-screen rounded md:h-[90vh]  md:w-[90vw] lg:w-[80vw] xl:w-[70vw] '>
                <div className='h-full w-full bg-white p-4 md:px-6 md:pb-2 md:pt-4 lg:p-10'>
                    <h1 className='text-lg font-bold'>Quiz Summary</h1>

                    {/* Content */}
                    <div className='flex justify-between max-lg:mt-4 max-md:flex-col-reverse md:gap-8 lg:mt-8'>
                        {/* Left Content */}
                        <div className='w-full max-lg:mt-4 md:w-1/2 lg:w-[55%]'>
                            {/* Title */}
                            <div>
                                <h2 className='font-semibold'>Title</h2>
                                <InputBase
                                    className='mt-2 min-w-full rounded px-2 outline outline-1 outline-gray-300 focus-within:outline-blue-700 hover:outline-gray-600'
                                    placeholder='Enter your quiz title...'
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
                                    placeholder='Enter your quiz description...'
                                    className='mt-2 min-w-full rounded px-2 outline outline-1 outline-gray-300 focus-within:outline-blue-700 hover:outline-gray-600'
                                    value={modalData.description}
                                    onChange={handleUpdateQuizDescription}
                                />
                            </div>

                            {/* Category */}
                            <div className='mt-4'>
                                <h2 className='font-semibold'>Category</h2>
                                <Select
                                    className='mt-2 w-full'
                                    value={modalData.category.name}
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
                                    {categories.map((category, index) => (
                                        <MenuItem key={index} value={category.name}>
                                            {category.name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </div>

                            {/* Grade */}
                            <div className='mt-4'>
                                <h2 className='font-semibold'>Grade</h2>
                                <Select
                                    className='mt-2 w-full'
                                    value={modalData.grade.name}
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
                                    {grades.map((grade, index) => (
                                        <MenuItem key={index} value={grade.name}>
                                            {grade.name}
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

                            {/* Visibility & Points Per Question */}
                            <div className='flex items-center justify-between max-lg:mt-4 lg:mt-6'>
                                {/* Visibility */}
                                <div className=''>
                                    <h2 className='font-semibold'>Visibility</h2>
                                    <RadioGroup
                                        defaultValue='public'
                                        row
                                        onChange={handleUpdateQuizVisibility}
                                        value={modalData.isPublic ? 'public' : 'private'}
                                    >
                                        <FormControlLabel value='public' control={<Radio />} label='Public' />
                                        <FormControlLabel value='private' control={<Radio />} label='Private' />
                                    </RadioGroup>
                                </div>

                                {/* Points Per Question */}
                                <div className=''>
                                    <h2 className='font-semibold'>Points Per Question</h2>
                                    <input
                                        className='mt-2 w-full rounded px-2 py-1 outline outline-1 outline-gray-300 hover:outline-gray-600 focus:outline-blue-700'
                                        value={modalData.pointsPerQuestion}
                                        onChange={handleUpdatePointPerQuestion}
                                    />
                                </div>
                            </div>

                            {/* Tags */}
                            <div>
                                <h2 className='inline-block font-semibold'>Tags</h2>
                                <span className='text-sm text-gray-500'> (separate by comma)</span>
                                <input
                                    className='mt-2 w-full rounded px-2 py-1 outline outline-1 outline-gray-300 hover:outline-gray-600 focus:outline-blue-700'
                                    value={modalData.tags}
                                    onChange={handleUpdateTags}
                                    placeholder='Example: tag1, tag2, tag3'
                                />
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
