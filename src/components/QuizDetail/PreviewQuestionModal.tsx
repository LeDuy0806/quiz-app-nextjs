import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaEye, FaEyeSlash } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { MdOutlineCheckBox, MdQuiz } from 'react-icons/md';
import Modal from 'react-modal';
import QuestionTitle from './PreviewModal/QuestionTitle';
import QuestionType from 'src/app/types/questionType';
import AnswerItem from './PreviewModal/AnswerItem';
import { AnimatePresence, motion } from 'framer-motion';

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
        borderRadius: '0px',
        padding: '0',
        margin: '0',
        background: 'transparent',
        border: 'none',
        outline: 'none',
        zIndex: 9999
    }
};

const variants = {
    enter: (direction: number) => {
        return {
            x: direction > 0 ? 500 : -500,
            opacity: 0,
            scale: 0.5
        };
    },
    center: {
        x: 0,
        opacity: 1,
        scale: 1
    },
    exit: (direction: number) => {
        return {
            x: direction < 0 ? 500 : -500,
            opacity: 0,
            scale: 0.5
        };
    }
};
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
};

interface IProps {
    isOpenModal: boolean;
    handleCloseModal: () => void;
    QuestionData: QuestionType | undefined;
    numberOfQuestions: number;
    setCurrentIndexQuestionModal: React.Dispatch<React.SetStateAction<number>>;
}

function PreviewQuestionModal({ isOpenModal, handleCloseModal, QuestionData, numberOfQuestions, setCurrentIndexQuestionModal }: IProps) {
    const [isShowAnswer, setIsShowAnswer] = useState(false);

    const handleShowAnswer = () => {
        setIsShowAnswer(!isShowAnswer);
    };

    const handleNextQuestion = () => {
        setCurrentIndexQuestionModal((prev) => prev + 1);
        setIsShowAnswer(false);
    };

    const handlePreviousQuestion = () => {
        setCurrentIndexQuestionModal((prev) => prev - 1);
        setIsShowAnswer(false);
    };

    const isQuestionQuiz = () => {
        return QuestionData?.questionType === 'Quiz';
    };

    Modal.setAppElement('body');

    return (
        <Modal
            isOpen={isOpenModal}
            onRequestClose={() => {
                handleCloseModal();
                setIsShowAnswer(false);
            }}
            style={customStylesModal}
            contentLabel='Detail Question Modal'
        >
            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className='relative h-[90vh] w-screen rounded max-md:mt-[10vh] md:h-[95vh] md:w-[90vw]'
            >
                <div className='h-full w-full bg-black '>
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

                        <span className='absolute left-1/2 hidden -translate-x-1/2 rounded-lg bg-white/20 px-4 py-2 lg:block'>
                            Question <span className='text-yellow-400'>Preview</span>
                        </span>

                        <div
                            className='inline-flex cursor-pointer items-center justify-center rounded-lg bg-[#5a5a5a] p-2 text-white hover:bg-[#3a3a3a] '
                            onClick={() => {
                                handleCloseModal();
                                setIsShowAnswer(false);
                            }}
                        >
                            <IoClose className='text-xl' />
                        </div>
                    </div>

                    {/* Body */}
                    <div className='h-[calc(100%-120px)] w-full overflow-hidden bg-[#461a42]'>
                        <AnimatePresence initial={false} custom={QuestionData?.questionIndex}>
                            <motion.div
                                custom={QuestionData?.questionIndex}
                                key={QuestionData?.questionIndex}
                                variants={variants}
                                animate='animate'
                                initial='initial'
                                exit='exit'
                                transition={{
                                    x: { type: 'spring', stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.4 },
                                    scale: { duration: 0.4 }
                                }}
                                drag='x'
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={1}
                                onDragEnd={(e, { offset, velocity }) => {
                                    const swipe = swipePower(offset.x, velocity.x);

                                    if (swipe < -swipeConfidenceThreshold) {
                                        handleNextQuestion();
                                    } else if (swipe > swipeConfidenceThreshold) {
                                        handlePreviousQuestion();
                                    }
                                }}
                                className='h-full w-full'
                            >
                                <div className='relative flex h-full w-full flex-1 items-center justify-center overflow-y-auto overflow-x-hidden'>
                                    <div className='flex h-full w-full flex-col px-2 text-white'>
                                        {/* Question title */}
                                        <QuestionTitle Question={QuestionData?.question} QuestionImage={QuestionData?.backgroundImage} />
                                        {/* Answer */}
                                        <div className='flex h-[55%] items-center justify-center  lg:p-4'>
                                            <div className=' flex w-full flex-wrap items-center justify-center'>
                                                {QuestionData?.answerList.map((answer, index) => (
                                                    <div key={index} className='mx-3 w-full md:mx-1 md:my-2 md:w-5/6 lgl:m-5 lgl:w-5/12'>
                                                        <AnswerItem
                                                            type={answer.name}
                                                            value={answer.body}
                                                            isAnswerCorrect={answer.isCorrect}
                                                            isShowAnswer={isShowAnswer}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Footer */}
                    <div className='flex items-center justify-between rounded-lg px-4 py-2'>
                        <div className='flex items-center'>
                            <button
                                aria-labelledby='Show Answer(Space)'
                                aria-label='Show Answer(Space)'
                                type='button'
                                className='mb-1 flex items-center rounded bg-bgPurple px-2 py-1 text-lg text-white transition-all duration-200 hover:bg-bgPurple/70 sm:px-4 sm:py-2'
                                onClick={() => handleShowAnswer()}
                            >
                                {isShowAnswer ? <FaEyeSlash /> : <FaEye />} <span className='ml-2'>{isShowAnswer ? 'Hide' : 'Show'} Answers</span>
                            </button>
                        </div>
                        <div className='flex h-full items-center overflow-hidden text-white'>
                            <div className='ml-3 flex flex-col items-center'>
                                <button
                                    aria-label='Previous Question(Left Arrow)'
                                    type='button'
                                    className='inline-flex cursor-pointer items-center justify-center rounded-lg bg-[#5a5a5a] px-3 py-2 text-white hover:bg-[#3a3a3a] disabled:opacity-30'
                                    onClick={() => handlePreviousQuestion()}
                                    disabled={QuestionData?.questionIndex === 1}
                                >
                                    <FaChevronLeft />
                                </button>
                                <span className='pt-1 text-xs leading-3 text-white/50'>Previous</span>
                            </div>
                            <div className='ml-3 flex flex-col items-center'>
                                <button
                                    aria-label='Next Question(Right Arrow)'
                                    type='button'
                                    className='inline-flex cursor-pointer items-center justify-center rounded-lg bg-[#5a5a5a] px-3 py-2 text-white hover:bg-[#3a3a3a] disabled:opacity-30  '
                                    onClick={() => handleNextQuestion()}
                                    disabled={QuestionData?.questionIndex === numberOfQuestions}
                                >
                                    <FaChevronRight />
                                </button>
                                <span className='pt-1 text-xs leading-3 text-white/50'>Next</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </Modal>
    );
}

export default PreviewQuestionModal;
