import QuestionType, { InitQuestion } from './questionType';
import UserType, { InitUser } from './userType';

export type CreatorType = Pick<UserType, '_id' | 'userName' | 'userType' | 'avatar' | 'firstName' | 'lastName'>;

type QuizType = {
    _id: string;
    name: string;
    creator: CreatorType | string;
    description: string;
    backgroundImage: string;
    isPublic: boolean;
    tags?: string[];
    pointsPerQuestion: number;
    numberOfQuestions: number;
    importFrom?: UserType;
    likesCount: UserType[];
    questionList: QuestionType[];
    createdAt?: string;
    updatedAt?: string;
    category: {
        _id: string;
        name: string;
    };
    grade: {
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
    numberOfQuestions: 1,

    importFrom: InitUser,
    likesCount: [InitUser],
    questionList: [InitQuestion],
    category: {
        _id: '',
        name: ''
    },
    grade: {
        _id: '',
        name: ''
    },
    createdAt: '',
    updatedAt: ''
} as QuizType;

export default QuizType;
