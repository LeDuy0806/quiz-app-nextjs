import GameType from './gameType';
import UserType from './userType';
import QuizType from './quizType';
import PlayerResultType from './playerResultType';

type AnswerLeaderBoardResultType = {
    player: UserType;
    playerPoints: number;
};

type CurrentLeaderBoard = {
    questionIndex: number;
    leaderBoardList: AnswerLeaderBoardResultType[];
};

type LeaderBoardType = {
    _id: string;
    game: GameType;
    quiz: QuizType;
    pin: string;
    playerResultList: PlayerResultType[];
    currentLeaderBoard: CurrentLeaderBoard[];
} | null;

export default LeaderBoardType;
