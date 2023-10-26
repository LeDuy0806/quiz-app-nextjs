import UserType, { InitUser } from './userType';
import GameType, { InitGame } from './gameType';

type AnswerPlayerType = {
    questionIndex: number;
    answered: boolean;
    answers: string[];
    time: number[];
    points: number;
};

const InitAnswerPlayer = {
    questionIndex: 0,
    answered: true,
    answers: [],
    time: [],
    points: 0
};

type PlayerResultType = {
    _id: string;
    player: UserType;
    game: null;
    score: number;
    answers: AnswerPlayerType[];
};

export const InitPlayerResult = {
    _id: '',
    player: InitUser,
    game: null,
    score: 0,
    answers: [InitAnswerPlayer]
} as PlayerResultType;

export default PlayerResultType;
