import QuestionType, { InitQuestion } from './questionType';
import UserType, { InitUser } from './userType';

export type CreatorType = {
    _id: string;
    userName: string;
    userType: string;
    avatar: string;
    firstName: string;
    lastName: string;
};

type QuizType = {
    _id: string;
    name: string;
    creator: CreatorType | string;
    description: string;
    backgroundImage: string;
    isPublic: boolean;
    field?: string;
    pointsPerQuestion: number;
    numberOfQuestions: number;
    importFrom?: UserType;
    likesCount: UserType[];
    questionList: QuestionType[];
    createdAt?: string;
    updatedAt?: string;
    category?: {
        _id: string;
        name: string;
    };
    grade?: {
        _id: string;
        name: string;
    };
};

export const InitQuiz = {
    _id: '',
    name: '',
    creator: {
        _id: '',
        userName: '',
        userType: '',
        avatar: '',
        firstName: '',
        lastName: ''
    },
    description: '',
    backgroundImage: '',
    isPublic: true,
    pointsPerQuestion: 1,
    field: '',
    importFrom: InitUser,
    likesCount: [InitUser],
    questionList: [InitQuestion],
    createdAt: '',
    updatedAt: ''
} as QuizType;

export default QuizType;
