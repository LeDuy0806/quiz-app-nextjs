import UserType, { InitUser } from './userType';
import QuizType, { CreatorType, InitQuiz } from './quizType';
import PlayerResultType, { InitPlayerResult } from './playerResultType';

type GameType = {
    _id: string;
    host: CreatorType;
    quiz: QuizType;
    pin: string;
    isLive: boolean;
    playerList: UserType[];
    playerResultList: PlayerResultType[];
    createAt?: string;
    updatedAt?: string;
};

export const InitGame = {
    _id: '',
    host: InitUser,
    quiz: InitQuiz,
    pin: '',
    isLive: true,
    playerList: [InitUser],
    playerResultList: [InitPlayerResult],
    createAt: '',
    updatedAt: ''
} as GameType;

export default GameType;
