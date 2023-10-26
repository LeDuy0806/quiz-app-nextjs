import GameType, { InitGame } from './gameType';
import UserType, { InitUser } from './userType';
import QuizType, { InitQuiz } from './quizType';
import PlayerResultType, { InitPlayerResult } from './playerResultType';

type AnswerLeaderBoardResultType = {
    player: UserType;
    playerPoints: number;
};

const InitAnswerLeaderBoard = {
    player: InitUser,
    playerPoints: 0
} as AnswerLeaderBoardResultType;

type CurrentLeaderBoard = {
    questionIndex: number;
    leaderBoardList: AnswerLeaderBoardResultType[];
};

const InitCurrentLeaderBoard = {
    questionIndex: 0,
    leaderBoardList: [InitAnswerLeaderBoard]
} as CurrentLeaderBoard;

type LeaderBoardType = {
    _id: string;
    game: GameType;
    quiz: QuizType;
    pin: string;
    playerResultList: PlayerResultType[];
    currentLeaderBoard: CurrentLeaderBoard[];
};

export const InitLeaderBoard = {
    _id: '',
    game: InitGame,
    quiz: InitQuiz,
    pin: '',
    playerResultList: [InitPlayerResult],
    currentLeaderBoard: [InitCurrentLeaderBoard]
} as LeaderBoardType;

export default LeaderBoardType;
