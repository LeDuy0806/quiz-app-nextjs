import QuizType from "./quizType";
import UserType from "./userType";
import MessageType from "./messageType";

type CommunityType = {
  _id: string;
  name: string;
  creator: UserType;
  backgroundImage: string;
  users: UserType[];
  quizzes: QuizType[];
  field: string;
  chatBox: MessageType[];
} | null;

export default CommunityType;
