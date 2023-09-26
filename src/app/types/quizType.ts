import QuestionType from "./questionType";
import UserType from "./userType";
import MessageType from "./messageType";

type QuizType = {
  _id: string;
  name: string;
  creator: UserType;
  description: string;
  backgroundImage: string;
  isPublic: boolean;
  pointsPerQuestion: number;
  field: string;
  importFrom?: UserType;
  likesCount: UserType[];
  comments: MessageType[];
  questionList: QuestionType[];
  createdAt: Date;
  updatedAt: Date;
} | null;

export default QuizType;
