enum QuestionTypeEnum {
    QUIZ = 'Quiz',
    TRUE_FALSE = 'True/False'
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

export { QuestionTypeEnum, AnswerTimeEnum, PointTypeEnum, OptionQuestionEnum, AnswerNameEnum, CategoryEnum, GradeEnum };
