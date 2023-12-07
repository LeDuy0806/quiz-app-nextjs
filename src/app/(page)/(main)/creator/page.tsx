'use client';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';

import ContentEditor from 'src/components/Creator/ContentEditor';
import CreatorNavbar from 'src/components/Creator/CreatorNavbar';
import CreatorSidebar from 'src/components/Creator/CreatorSidebar';
import QuizSettingModal from 'src/components/Creator/QuizSettingModal';

import {
    QuestionType,
    QuizType,
    AnswerNameEnum,
    OptionQuestionEnum,
    PointTypeEnum,
    QuestionTypeEnum,
    AnswerTimeEnum,
    initialQuiz
} from 'src/app/types/creator';
import { useAppDispatch, useAppSelector } from 'src/app/redux/hooks';
import { RootState } from 'src/app/redux/store';

function CreatorPage() {
    const { quiz: quizState, activeQuestion: activeQuestionState } = useAppSelector((state: RootState) => state.quizCreator);
    const dispatch = useAppDispatch();

    // useState
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [quiz, setQuiz] = useState<QuizType>(initialQuiz);
    const [activeQuestion, setActiveQuestion] = useState<QuestionType>(quiz.questionList[0]);

    // useEffect
    useEffect(() => {
        document.title = 'Quizzes Creator';
    }, []);
    Modal.setAppElement('body');

    useEffect(() => {
        setQuiz((prev) => ({
            ...prev,
            questionList: [
                ...prev.questionList.slice(0, activeQuestion.questionIndex - 1),
                activeQuestion,
                ...prev.questionList.slice(activeQuestion.questionIndex)
            ]
        }));
    }, [activeQuestion, quiz]);

    const handleQuizSubmit = () => {
        console.log(quiz);
    };

    const handleDeleteCurrentQuestion = () => {
        // Check if there is only one question left
        if (quiz.questionList.length === 1) return alert('You cannot delete the last question');
    };

    return (
        <>
            <main>
                <CreatorNavbar handleQuizSubmit={handleQuizSubmit} setIsOpenModal={setIsOpenModal} title={quiz.name} />
                <CreatorSidebar activeQuestion={activeQuestion} setActiveQuestion={setActiveQuestion} questionList={quiz.questionList} setQuiz={setQuiz} />
                <ContentEditor question={activeQuestion} setQuestion={setActiveQuestion} handleDeleteCurrentQuestion={handleDeleteCurrentQuestion} />
            </main>
            <QuizSettingModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} quiz={quiz} setQuiz={setQuiz} />
        </>
    );
}

export default CreatorPage;
