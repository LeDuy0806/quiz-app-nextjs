import QuizType, { InitQuiz } from './quizType';
import UserType, { InitUser } from './userType';

type answerType = {
    name: string;
    body: string;
    isCorrect: boolean;
};

const InitAnswer = {
    name: '',
    body: '',
    isCorrect: true
} as answerType;

type QuestionType = {
    _id?: string;
    name: string;
    field: string;
    creator: UserType;
    backgroundImage: string;
    questionIndex: number;
    questionType: string;
    optionQuestion: string;
    pointType: string;
    isPublic: boolean;
    answerTime: number;
    maxCorrectAnswer: number;
    answerList: answerType[];
    correctAnswerCount: number;
    answerCorrect: string[];
    createdAt?: string;
    updatedAt?: string;
};

export const InitQuestion = {
    _id: '',
    field: '',
    name: '',
    creator: InitUser,
    backgroundImage: '',
    questionIndex: 0,
    questionType: 'Quiz',
    optionQuestion: '',
    pointType: 'Standard',
    isPublic: true,
    answerTime: 5,
    maxCorrectAnswer: 1,
    answerList: [InitAnswer],
    correctAnswerCount: 0,
    answerCorrect: [],
    createdAt: '',
    updatedAt: ''
} as QuestionType;

export default QuestionType;
