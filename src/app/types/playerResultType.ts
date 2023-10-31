import UserType, { InitUser } from './userType';
import GameType, { InitGame } from './gameType';

export type AnswerPlayerType = {
    questionIndex: number;
    answered: boolean;
    answers: string[];
    time: number;
    point: number;
};

const InitAnswerPlayer = {
    questionIndex: 0,
    answered: true,
    answers: [],
    time: 0,
    point: 0
};

type PlayerResultType = {
    _id: string;
    player: UserType;
    game: null | string | GameType;
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
