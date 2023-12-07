enum QuestionTypeEnum {
    QUIZ = 'Quiz',
    TRUE_FALSE = 'True/false'
}

enum AnswerTimeEnum {
    TEN_SECONDS = 10,
    FIFTEEN_SECONDS = 15,
    TWENTY_SECONDS = 20,
    THIRTY_SECONDS = 30,
    ONE_MINUTE = 60,
    TWO_MINUTES = 120,
    FIVE_MINUTES = 300
}

enum PointTypeEnum {
    STANDARD = 'Standard',
    DOUBLE = 'Double',
    BASED_ON_TIME = 'BasedOnTime'
}

enum OptionQuestionEnum {
    SINGLE = 'Single',
    MULTIPLE = 'Multiple'
}

enum AnswerNameEnum {
    A = 'a',
    B = 'b',
    C = 'c',
    D = 'd'
}

enum CategoryEnum {
    MATH = 'Math',
    ENGLISH = 'English',
    WORLD_LANGUAGE = 'World Language',
    FUN = 'Fun',
    SCIENCE = 'Science',
    PHYSICS = 'Physics',
    CHEMISTRY = 'Chemistry',
    BIOLOGY = 'Biology',
    SOCIAL_SCIENCE = 'Social science',
    GEOGRAPHY = 'Geography',
    HISTORY = 'History',
    ART = 'Art',
    COMPUTER = 'Computer',
    EXERCISE = 'Exercise',
    PROFESSIONAL_DEVELOPMENT = 'Professional development',
    ARCHITECTURE = 'Architecture',
    BUSINESS = 'Business',
    DESIGN = 'Design',
    EDUCATION = 'Education',
    INSTRUCTIONAL_TECHNOLOGY = 'Instructional Technology',
    JOURNALISM = 'Journalism',
    LIFE_SKILLS = 'Life Skills',
    MORAL_SCIENCE = 'Moral Science',
    PHILOSOPHY = 'Philosophy',
    PERFORMING_ARTS = 'Performing Arts',
    SPECIAL_EDUCATION = 'Special Education',
    SPECIALTY = 'Specialty',
    OTHER = 'Other'
}

type AnswerType = {
    name: AnswerNameEnum;
    body: string;
    isCorrect: boolean;
};

type QuestionType = {
    _id: string;
    question: string;
    creator: string;
    backgroundImage: string;
    questionIndex: number;
    questionType: QuestionTypeEnum;
    optionQuestion: OptionQuestionEnum;
    pointType: PointTypeEnum;
    isPublic: boolean;
    answerTime: AnswerTimeEnum;
    maxCorrectAnswer: number;
    answerList: AnswerType[];
    correctAnswerCount: number;
    answerCorrect: AnswerNameEnum[];
};

type QuizType = {
    _id: string;
    name: string;
    creator: string;
    description: string;
    backgroundImage: string;
    isPublic: boolean;
    pointsPerQuestion: number;
    field: string;
    importFrom: string;
    likesCount: string[];
    questionList: QuestionType[];
    numberOfQuestions: number;
    category: {
        _id: string;
        name: string;
    };
    grade: {
        _id: string;
        name: string;
    };
};

const initialQuestion: QuestionType = {
    _id: '',
    question: '',
    creator: '',
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
    creator: '',
    description: '',
    backgroundImage: '',
    isPublic: true,
    pointsPerQuestion: 1,
    field: '',
    importFrom: '',
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
export { OptionQuestionEnum, QuestionTypeEnum, AnswerTimeEnum, PointTypeEnum, AnswerNameEnum, CategoryEnum };
export type { AnswerType, QuestionType, QuizType };
