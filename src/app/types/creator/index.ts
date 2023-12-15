import { AnswerNameEnum, AnswerTimeEnum, OptionQuestionEnum, PointTypeEnum, QuestionTypeEnum } from 'src/constants/enum';
import { CreatorType } from '../quizType';

// type ObjectCategoryType = {
//     _id: string;
//     name: string | null;
// };

// type ObjectGradeType = {
//     _id: string;
//     name: string | null;
// };

type AnswerType = {
    name: AnswerNameEnum;
    body: string;
    isCorrect: boolean;
};

type QuestionType = {
    _id: string;
    content: string;
    creator: string;
    tags: string[];
    backgroundImage: string;
    questionIndex: number;
    questionType: QuestionTypeEnum;
    optionQuestion: OptionQuestionEnum;
    pointType: PointTypeEnum;
    isPublic: boolean;
    answerTime: AnswerTimeEnum;
    maxCorrectAnswer: number;
    correctAnswerCount: number;
    answerList: AnswerType[];
    answerCorrect: AnswerNameEnum[];
};

type QuizType = {
    _id: string;
    name: string;
    creator: CreatorType;
    description: string;
    backgroundImage: string;
    isPublic: boolean;
    category: {
        _id: string;
        name: string;
    };
    grade: {
        _id: string;
        name: string;
    };
    tags: string[];
    numberOfQuestions: number;
    pointsPerQuestion: number;
    likesCount: string[];
    questionList: QuestionType[];
};

const initialQuestion: QuestionType = {
    _id: '',
    content: '',
    creator: '',
    tags: [],
    backgroundImage: '',
    questionIndex: 1,
    questionType: QuestionTypeEnum.QUIZ,
    optionQuestion: OptionQuestionEnum.SINGLE,
    pointType: PointTypeEnum.STANDARD,
    isPublic: true,
    answerTime: AnswerTimeEnum.TEN_SECONDS,
    maxCorrectAnswer: 0,
    answerList: [
        {
            name: AnswerNameEnum.A,
            body: '',
            isCorrect: false
        },
        {
            name: AnswerNameEnum.B,
            body: '',
            isCorrect: false
        },
        {
            name: AnswerNameEnum.C,
            body: '',
            isCorrect: false
        },
        {
            name: AnswerNameEnum.D,
            body: '',
            isCorrect: false
        }
    ],
    correctAnswerCount: 0,
    answerCorrect: []
};

const initialQuiz: QuizType = {
    _id: '',
    name: '',
    creator: {
        _id: '',
        userName: '',
        userType: '',
        avatar: '',
        firstName: '',
        lastName: ''
    },
    description: '',
    backgroundImage: '',
    isPublic: true,
    pointsPerQuestion: 1,
    tags: [],
    likesCount: [],
    questionList: [initialQuestion],
    numberOfQuestions: 1,
    category: {
        _id: '',
        name: ''
    },
    grade: {
        _id: '',
        name: ''
    }
};

export { initialQuestion, initialQuiz };
export type { AnswerType, QuestionType, QuizType };
