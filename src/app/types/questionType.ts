import UserType from './userType';
import QuizType from './quizType';

type answerType = {
    name: string;
    body: string;
    isCorrect: boolean;
};

type QuestionType = {
    _id?: string;
    name: string;
    creator: UserType | null;
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
    createdAt?: Date;
    updatedAt?: Date;
} | null;

export default QuestionType;
