import UserType from './userType';
import QuizType from './quizType';
import PlayerResultType from './playerResultType';

type GameType = {
    _id: string;
    host: UserType;
    quiz: QuizType;
    pin: string;
    isLive: boolean;
    playerList: UserType[];
    playerResultList: PlayerResultType[];
    createAt?: Date;
    updatedAt?: Date;
} | null;

export default GameType;
