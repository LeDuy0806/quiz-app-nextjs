'use client';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';

import ContentEditor from 'src/components/Creator/ContentEditor';
import CreatorNavbar from 'src/components/Creator/CreatorNavbar';
import CreatorSidebar from 'src/components/Creator/CreatorSidebar';
import QuizSettingModal from 'src/components/Creator/QuizSettingModal';

import { QuestionType, QuizType, AnswerNameEnum, OptionQuestionEnum, PointTypeEnum, QuestionTypeEnum, AnswerTimeEnum } from 'src/app/types/creator';

export const initialQuestion: QuestionType = {
    _id: '',
    question: '',
    creator: '',
    backgroundImage: '',
    questionIndex: 1,
    questionType: QuestionTypeEnum.QUIZ,
    optionQuestion: OptionQuestionEnum.SINGLE,
    pointType: PointTypeEnum.STANDARD,
    isPublic: true,
    answerTime: AnswerTimeEnum.TEN_SECONDS,
    maxCorrectAnswer: 0,
    answerList: [
        {
            name: AnswerNameEnum.A,
            body: '',
            isCorrect: false
        },
        {
            name: AnswerNameEnum.B,
            body: '',
            isCorrect: false
        },
        {
            name: AnswerNameEnum.C,
            body: '',
            isCorrect: false
        },
        {
            name: AnswerNameEnum.D,
            body: '',
            isCorrect: false
        }
    ],
    correctAnswerCount: 0,
    answerCorrect: []
};

const initialQuiz: QuizType = {
    _id: '',
    name: '',
    creator: '',
    description: '',
    backgroundImage: '',
    isPublic: true,
    pointsPerQuestion: 1,
    field: '',
    importFrom: '',
    likesCount: [],
    questionList: [initialQuestion],
    numberOfQuestions: 1,
    category: {
        _id: '',
        name: ''
    },
    grade: {
        _id: '',
        name: ''
    }
};

function CreatorPage() {
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
