import QuestionType from "../types/questionType";
import UserType from "../types/userType";

type RegisterType = {
  firstName: string;
  lastName: string;
  userType: string;
  userName: string;
  mail: string;
  password: string;
  confirmPassword: string;
};

type ErrorExistRegisterType = {
  userName: boolean;
  mail: boolean;
};

type ErrorUserType = {
  userNameError: boolean;
  emailError: boolean;
  passwordError: boolean;
  confirmPasswordError: boolean;
  requestQuantity: boolean;
  textQuantity: boolean;
};

type LoginType = {
  userName: string;
  password: string;
};

type ErrorExistLoginType = {
  userName: boolean;
  password: boolean;
};

type EditProfileType = {
  avatar: string;
  userName: string;
  firstName: string;
  lastName: string;
  mail: string;
};

type QuestionDataType = {
  questionType: string;
  optionQuestion: string;
  pointType: string;
  answerTime: number;
  backgroundImage: string;
  question: string;
  answerList: [
    { name: string; body: string; isCorrect: boolean },
    { name: string; body: string; isCorrect: boolean },
    { name: string; body: string; isCorrect: boolean },
    { name: string; body: string; isCorrect: boolean }
  ];
  questionIndex: number;
  maxCorrectAnswer: number;
  correctAnswerCount: number;
  answerCorrect: string[];
  isSave: boolean;
};

type QuizDataType = {
  name: string;
  backgroundImage: string;
  description: string;
  pointsPerQuestion: number;
  numberOfQuestions: number;
  isPublic: true;
  tags: string[];
  likesCount: UserType[];
  questionList: QuestionDataType[];
};

export {
  type RegisterType,
  type ErrorExistRegisterType,
  type ErrorUserType,
  type LoginType,
  type ErrorExistLoginType,
  type QuizDataType,
  type QuestionDataType,
};
