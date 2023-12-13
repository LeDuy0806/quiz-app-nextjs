import { CreatorType } from '../quizType';

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

enum GradeEnum {
    KINDERGARTEN = 'Kindergarten',
    ELEMENTARY = 'Elementary (1st - 5th)',
    JUNIOR_HIGH_SCHOOL = 'Junior high school (6th - 9th)',
    HIGH_SCHOOL = 'High school (10th - 12th)',
    UNIVERSITY = 'University',
    PROFESSIONAL_DEVELOPMENT = 'Professional development',
    ALL = 'All'
}

type ObjectCategoryType = {
    _id: string;
    name: CategoryEnum | null;
};

type ObjectGradeType = {
    _id: string;
    name: GradeEnum | null;
};

type AnswerType = {
    name: AnswerNameEnum;
    body: string;
    isCorrect: boolean;
};

type QuestionType = {
    _id: string;
    content: string;
    creator: string;
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
    pointsPerQuestion: number;
    tags: string[];
    importFrom: string;
    likesCount: string[];
    questionList: QuestionType[];
    numberOfQuestions: number;
    category: ObjectCategoryType;
    grade: ObjectGradeType;
};

const initialQuestion: QuestionType = {
    _id: '',
    content: '',
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
    importFrom: '',
    likesCount: [],
    questionList: [initialQuestion],
    numberOfQuestions: 1,
    category: {
        _id: '',
        name: null
    },
    grade: {
        _id: '',
        name: null
    }
};

export { initialQuestion, initialQuiz };
export { OptionQuestionEnum, QuestionTypeEnum, AnswerTimeEnum, PointTypeEnum, AnswerNameEnum, CategoryEnum, GradeEnum };
export type { AnswerType, QuestionType, QuizType, ObjectCategoryType, ObjectGradeType };
