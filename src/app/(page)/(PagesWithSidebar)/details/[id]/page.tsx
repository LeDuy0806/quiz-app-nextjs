'use client';
import Modal from 'react-modal';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import QuestionType from 'src/app/types/questionType';
import QuizType from 'src/app/types/quizType';
import ListQuestions from 'src/components/QuizDetail/ListQuestions';
import QuizInfo from 'src/components/QuizDetail/QuizInfo';
import Suggestions from 'src/components/QuizDetail/Suggestions';
import Quiz from 'src/data';
import PreviewQuestionModal from 'src/components/QuizDetail/PreviewQuestionModal';
import { useGetQuizByIdQuery } from 'src/app/redux/services/quizApi';

type QuizParams = {
    id: string;
};

function QuizDetail() {
    const { id } = useParams() as QuizParams;

    const [quizData, setQuizData] = useState<QuizType | null>(null);
    const [isOpenPreviewModal, setIsOpenPreviewModal] = useState<boolean>(false);
    const [currentQuestionModal, setCurrentQuestionModal] = useState<QuestionType | undefined>();
    const [currentIndexQuestionModal, setCurrentIndexQuestionModal] = useState<number>(0);

    const handleOpenModal = (questionIndex: number) => {
        setIsOpenPreviewModal(true);
        setCurrentIndexQuestionModal(questionIndex);
        setCurrentQuestionModal(quizData?.questionList[questionIndex]);
    };

    useEffect(() => {
        if (quizData?.numberOfQuestions === undefined) return;
        if (currentIndexQuestionModal < 0) setCurrentIndexQuestionModal(0);
        if (currentIndexQuestionModal >= quizData?.numberOfQuestions || currentIndexQuestionModal === undefined)
            setCurrentIndexQuestionModal(quizData?.numberOfQuestions - 1);
        setCurrentQuestionModal(quizData?.questionList[currentIndexQuestionModal]);
    }, [currentIndexQuestionModal]);

    const handleCloseModal = () => {
        setIsOpenPreviewModal(false);
    };

    const { data, isSuccess, isLoading } = useGetQuizByIdQuery({ quizId: id });

    useEffect(() => {
        if (isSuccess && data) setQuizData(data);
    }, [data, isSuccess, isLoading]);

    if (isLoading) return <div>Loading...</div>;

    if ((isSuccess && !data) || !quizData) return <div>Not found</div>;

    // if (!quizData) return <div>Not found</div>;

    return (
        <>
            <section>
                <div className='z-40 flex h-[calc(100vh-65px)] flex-grow overflow-auto bg-gray-100'>
                    <div className='flex w-full flex-col'>
                        <div id='quiz-detail-page-container' className='relative flex w-full justify-center p-2 max-xl:flex-col max-xl:items-center'>
                            <div className='w-[calc(100%-32px)] lgl:min-w-[40rem] lgl:max-w-[800px] xl:w-[calc(100%-384px)]'>
                                <QuizInfo quizData={quizData} />
                                <ListQuestions
                                    openModal={handleOpenModal}
                                    listQuestionsData={quizData?.questionList}
                                    numberOfQuestions={quizData?.numberOfQuestions}
                                />
                            </div>
                            <div className='flex flex-col max-xl:w-full'>
                                <Suggestions />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <PreviewQuestionModal
                isOpenModal={isOpenPreviewModal}
                numberOfQuestions={quizData?.numberOfQuestions || 0}
                QuestionData={currentQuestionModal}
                handleCloseModal={handleCloseModal}
                setCurrentIndexQuestionModal={setCurrentIndexQuestionModal}
            />
        </>
    );
}

export default QuizDetail;
