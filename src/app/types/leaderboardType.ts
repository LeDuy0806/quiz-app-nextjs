import GameType from "./gameType";
import UserType from "./userType";
import QuizType from "./quizType";
import PlayerResultType from "./playerResultType";

type AnswerQuestionResultType = {
  player: UserType;
  playerPoints: number;
};

type AnswerLeaderBoardResultType = {
  player: UserType;
  playerPoints: number;
};

type QuestionLeaderBoard = {
  questionIndex: number;
  questionResultList: AnswerQuestionResultType[];
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
  questionLeaderBoard: QuestionLeaderBoard[];
  currentLeaderBoard: CurrentLeaderBoard[];
} | null;

export default LeaderBoardType;
