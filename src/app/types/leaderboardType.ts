import GameType, { InitGame } from './gameType';
import UserType, { InitUser } from './userType';
import QuizType, { InitQuiz } from './quizType';
import PlayerResultType, { InitPlayerResult } from './playerResultType';

export type AnswerLeaderBoardResultType = {
    player: UserType;
    pointAnswerQuestion: number;
    playerCurrentScore: number;
};

const InitAnswerLeaderBoard = {
    player: InitUser,
    pointAnswerQuestion: 0,
    playerCurrentScore: 0
} as AnswerLeaderBoardResultType;

export type CurrentLeaderBoardType = {
    questionIndex: number;
    leaderBoardList: AnswerLeaderBoardResultType[];
};

const InitCurrentLeaderBoard = {
    questionIndex: 0,
    leaderBoardList: [InitAnswerLeaderBoard]
} as CurrentLeaderBoardType;

type LeaderBoardType = {
    _id: string;
    game: GameType;
    quiz: QuizType;
    pin: string;
    playerResultList: PlayerResultType[];
    currentLeaderBoard: CurrentLeaderBoardType[];
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
