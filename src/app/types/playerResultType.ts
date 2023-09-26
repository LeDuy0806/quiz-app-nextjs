import UserType from "./userType";
import GameType from "./gameType";

type AnswerPlayerType = {
  questionIndex: number;
  answered: boolean;
  answers: string[];
  points: number;
};

type PlayerResultType = {
  _id: string;
  player: UserType;
  game: GameType;
  score: number;
  answers: AnswerPlayerType[];
} | null;

export default PlayerResultType;
