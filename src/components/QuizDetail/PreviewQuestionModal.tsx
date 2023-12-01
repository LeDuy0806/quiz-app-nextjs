import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaEye } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { MdOutlineCheckBox, MdQuiz } from 'react-icons/md';
import Modal from 'react-modal';

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
        width: '90%',
        height: '96%',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        borderRadius: '12px',
        padding: '0',
        backgroundColor: '#000',
        border: 'none',
        outline: 'none',
        zIndex: 9999
    }
};

interface IProps {
    isOpenModal: boolean;
    handleCloseModal: () => void;
    QuestionData: any;
    numberOfQuestions: number;
}

function PreviewQuestionModal({ isOpenModal, handleCloseModal, QuestionData, numberOfQuestions }: IProps) {
    const [showAnswer, setShowAnswer] = useState(false);

    const handleShowAnswer = () => {
        setShowAnswer(true);
    };

    const isQuestionQuiz = () => {
        return QuestionData?.questionType === 'Quiz';
    };

    Modal.setAppElement('#portal');

    return (
        <Modal isOpen={isOpenModal} onRequestClose={() => handleCloseModal()} style={customStylesModal} contentLabel='Detail Question Modal'>
            {/* Header */}
            <div className='relative flex items-center justify-between rounded-lg bg-slate-950 p-2 font-bold text-white'>
                <div className='flex'>
                    <div className='mr-2 flex items-center justify-center rounded bg-white/20 px-4 py-1 text-white'>
                        <p>
                            <span>{QuestionData?.questionIndex || '0'}</span>/{numberOfQuestions}
                        </p>
                    </div>
                    <div className='flex items-center justify-center rounded bg-[#2d9da6] px-3 py-1 text-white'>
                        {isQuestionQuiz() ? <MdQuiz className='text-lg' /> : <MdOutlineCheckBox className='text-lg' />}
                        <p className='ml-2 text-sm'>{QuestionData?.questionType}</p>
                    </div>
                </div>

                <span className='absolute left-1/2 -translate-x-1/2 rounded-lg bg-white/20 px-4 py-2'>
                    Question <span className='text-yellow-400'>Preview</span>
                </span>

                <div
                    className='inline-flex cursor-pointer items-center justify-center rounded-lg bg-[#5a5a5a] p-2 text-white hover:bg-[#3a3a3a] '
                    onClick={() => handleCloseModal()}
                >
                    <IoClose className='text-xl' />
                </div>
            </div>

            {/* Body */}
            <div className='h-[calc(100%-120px)] bg-[#461a42]'></div>

            {/* Footer */}
            <div className='flex items-center justify-between rounded-lg px-4 py-2'>
                <div className='flex items-center'>
                    <button
                        aria-labelledby='Show Answer(Space)'
                        aria-label='Show Answer(Space)'
                        type='button'
                        className='mb-1 flex items-center rounded bg-bgPurple px-4 py-2 text-lg text-white hover:bg-bgPurple/70'
                    >
                        <FaEye /> <span className='ml-2'>Show Answers</span>
                    </button>
                </div>
                <div className='flex h-full items-center overflow-hidden text-white'>
                    <div className='ml-3 flex flex-col items-center'>
                        <button
                            aria-label='Previous Question(Left Arrow)'
                            type='button'
                            className='inline-flex cursor-pointer items-center justify-center rounded-lg bg-[#5a5a5a] px-3 py-2 text-white hover:bg-[#3a3a3a] '
                        >
                            <FaChevronLeft />
                        </button>
                        <span className='pt-1 text-xs leading-3 text-white/50'>Previous</span>
                    </div>
                    <div className='ml-3 flex flex-col items-center'>
                        <button
                            aria-label='Next Question(Right Arrow)'
                            type='button'
                            className='inline-flex cursor-pointer items-center justify-center rounded-lg bg-[#5a5a5a] px-3 py-2 text-white hover:bg-[#3a3a3a] '
                        >
                            <FaChevronRight />
                        </button>
                        <span className='pt-1 text-xs leading-3 text-white/50'>Next</span>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default PreviewQuestionModal;
