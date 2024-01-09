import { FaPlay, FaRegEye, FaRegEyeSlash, FaTasks } from 'react-icons/fa';
import QuestionCard from './QuestionCard';
import QuestionType from 'src/app/types/questionType';
import { useState } from 'react';
import { useAppDispatch } from 'src/app/redux/hooks';
import { setQuizPlay } from 'src/app/redux/slices/quizSlice';
import QuizType from 'src/app/types/quizType';
import { useRouter } from 'next/navigation';

function ListQuestions({
    listQuestionsData,
    numberOfQuestions,
    openModal,
    Quizdata
}: {
    listQuestionsData: QuestionType[] | undefined;
    numberOfQuestions: number | undefined;
    openModal: (index: number) => void;
    Quizdata: QuizType;
}) {
    const [isShowAnswer, setIsShowAnswer] = useState(false);

    const dispatch = useAppDispatch();
    const router = useRouter();

    const handleClickPreview = () => {
        dispatch(setQuizPlay(Quizdata));
        router.push('/game/solo');
    };

    return (
        <div>
            {/* head */}
            <div className='mb-4 mt-7 flex justify-between'>
                <div className='flex items-center text-base'>
                    <FaTasks className=' flex items-center text-xs text-slate-500' />
                    <p className='mx-2 text-xs text-slate-700'>{numberOfQuestions + ' questions'}</p>
                </div>
                <div className='flex'>
                    <button
                        onClick={() => setIsShowAnswer(!isShowAnswer)}
                        className='relative flex h-6 w-6 min-w-max items-center justify-center rounded border border-solid border-slate-200 bg-slate-100 px-3 py-1 text-xs text-slate-800 transition-colors hover:bg-slate-100 active:bg-gray-100 sm:mx-1 '
                    >
                        {isShowAnswer ? <FaRegEye className='mr-2 flex items-center text-xs' /> : <FaRegEyeSlash className='mr-2 flex items-center text-xs' />}
                        <span title='Show answers'>Show answers</span>
                    </button>
                    <button
                        onClick={handleClickPreview}
                        className='relative flex h-6 w-6 min-w-max items-center justify-center rounded border border-solid border-slate-200 bg-slate-100 px-3 py-1 text-xs text-slate-800 transition-colors hover:bg-slate-100 active:bg-gray-100 sm:mx-1 '
                    >
                        <FaPlay className='mr-2 flex items-center text-xs' />
                        <span title='Preview'>Preview</span>
                    </button>
                </div>
            </div>
            <div className='relative'>
                {listQuestionsData?.map((question, index) => (
                    <QuestionCard
                        key={index}
                        questionData={question}
                        isShowAnswer={isShowAnswer}
                        onClick={() => {
                            openModal(index);
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

export default ListQuestions;
