import QuizType, { InitQuiz } from './quizType';
import UserType, { InitUser } from './userType';
import MessageType, { InitMessage } from './messageType';

type CommunityType = {
    _id: string;
    name: string;
    creator: UserType;
    backgroundImage: string;
    users: UserType[];
    quizzes: QuizType[];
    field: string;
    chatBox: MessageType[];
};

export const InitCommunity = {
    _id: '',
    name: '',
    creator: InitUser,
    backgroundImage: '',
    users: [InitUser],
    quizzes: [InitQuiz],
    field: '',
    chatBox: [InitMessage]
} as CommunityType;

export default CommunityType;
