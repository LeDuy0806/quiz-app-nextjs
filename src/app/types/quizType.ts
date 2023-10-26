import QuestionType, { InitQuestion } from './questionType';
import UserType, { InitUser } from './userType';
import MessageType, { InitMessage } from './messageType';

type QuizType = {
    _id: string;
    name: string;
    creator: UserType;
    description: string;
    backgroundImage: string;
    isPublic: boolean;
    field: string;
    pointsPerQuestion: number;
    importFrom?: UserType;
    likesCount: UserType[];
    comments: MessageType[];
    questionList: QuestionType[];
    createdAt?: string;
    updatedAt?: string;
};

export const InitQuiz = {
    _id: '',
    name: '',
    creator: InitUser,
    description: '',
    backgroundImage: '',
    isPublic: true,
    pointsPerQuestion: 1,
    field: '',
    importFrom: InitUser,
    likesCount: [InitUser],
    comments: [InitMessage],
    questionList: [InitQuestion],
    createdAt: '',
    updatedAt: ''
} as QuizType;

export default QuizType;
