import QuestionType from './questionType';
import UserType from './userType';
import MessageType from './messageType';

type QuizType = {
    _id: string;
    name: string;
    creator: UserType | null;
    description: string;
    backgroundImage: string;
    isPublic: boolean;
    pointsPerQuestion: number;
    field: string;
    importFrom?: UserType;
    likesCount: UserType[];
    comments: MessageType[];
    questionList: QuestionType[];
    createdAt: Date | null;
    updatedAt: Date | null;
} | null;

export default QuizType;
