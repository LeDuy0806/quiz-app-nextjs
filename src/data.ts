import { InitUser } from './app/types/userType';

const Quiz = {
    _id: '647ce2dbaf09f3b01a814925',
    name: 'Cấu trúc dữ liệu và giải thuật',
    description: 'Môn học mở mang trí tuệ ha',
    backgroundImage: '',
    pointsPerQuestion: 1,
    numberOfQuestions: 3,
    isPublic: true,
    tags: ['Science', 'Math'],
    likesCount: [],
    comments: [],
    dateCreated: '2023-06-09T12:24:23.802Z',
    questionList: [
        {
            _id: '647d4109ec2aeb4204caa5e2',
            creatorId: '645669996e2607839bc293eb',
            quizId: '647d555eec2aeb4204cab642',
            tags: [''],
            questionType: 'True/False',
            optionQuestion: 'Single',
            isPublic: true,
            pointType: 'Standard',
            answerTime: 5,
            backgroundImage: 'https://res.cloudinary.com/dfl3qnj7z/image/upload/v1686314376/k60awx2gstidqsrzktvh.jpg',
            question: 'Có nên học môn cấu trúc dữ liệu và giải thuật không ?',
            answerList: [
                {
                    name: 'a',
                    body: 'True',
                    isCorrect: true,
                    _id: '647d4157ec2aeb4204caa5fe'
                },
                {
                    name: 'b',
                    body: 'False',
                    isCorrect: false,
                    _id: '647d4157ec2aeb4204caa5ff'
                }
            ],
            questionIndex: 1,
            maxCorrectAnswer: 1,
            correctAnswerCount: 1,
            answerCorrect: ['A'],
            createdAt: '2023-06-05T01:57:29.256Z',
            updatedAt: '2023-06-09T12:49:54.395Z',
            __v: 0
        },
        {
            _id: '647d4170ec2aeb4204caa62b',
            creatorId: '645669996e2607839bc293eb',
            quizId: '647d555eec2aeb4204cab642',
            tags: [''],
            questionType: 'Quiz',
            optionQuestion: 'Single',
            isPublic: true,
            pointType: 'Standard',
            answerTime: 10,
            backgroundImage: 'https://res.cloudinary.com/dfl3qnj7z/image/upload/v1686315027/oftibctcr8e1dtfiwuaz.jpg',
            question: 'Giữa 2 thuật toán merge và Qick thì cái nào có đôi phức tạp cao',
            answerList: [
                {
                    name: 'A',
                    body: 'Qick',
                    isCorrect: false,
                    _id: '647d41dfec2aeb4204caa653'
                },
                {
                    name: 'B',
                    body: 'Merge',
                    isCorrect: true,
                    _id: '647d41dfec2aeb4204caa654'
                },
                {
                    name: 'C',
                    body: 'Cả hai',
                    isCorrect: false,
                    _id: '647d41dfec2aeb4204caa655'
                },
                {
                    name: 'D',
                    body: 'Không có',
                    isCorrect: false,
                    _id: '647d41dfec2aeb4204caa656'
                }
            ],
            questionIndex: 2,
            maxCorrectAnswer: 1,
            correctAnswerCount: 1,
            answerCorrect: ['B'],
            createdAt: '2023-06-05T01:59:12.106Z',
            updatedAt: '2023-06-09T12:50:21.351Z',
            __v: 0
        },
        {
            _id: '647d4202ec2aeb4204caa668',
            creatorId: '645669996e2607839bc293eb',
            quizId: '647d555eec2aeb4204cab642',
            tags: [''],
            questionType: 'Quiz',
            optionQuestion: 'Single',
            isPublic: true,
            pointType: 'Standard',
            answerTime: 5,
            backgroundImage: 'https://res.cloudinary.com/dfl3qnj7z/image/upload/v1686315078/l3lz2hvnis1zchqjhhv5.jpg',
            question: 'Cây nhị phân tương đồng thuật toán nào',
            answerList: [
                {
                    name: 'A',
                    body: 'Select sort',
                    isCorrect: false,
                    _id: '647d427fec2aeb4204caa69a'
                },
                {
                    name: 'B',
                    body: 'Tree sort',
                    isCorrect: false,
                    _id: '647d427fec2aeb4204caa69b'
                },
                {
                    name: 'C',
                    body: 'Merge sort',
                    isCorrect: false,
                    _id: '647d427fec2aeb4204caa69c'
                },
                {
                    name: 'D',
                    body: 'Head sort',
                    isCorrect: true,
                    _id: '647d427fec2aeb4204caa69d'
                }
            ],
            questionIndex: 3,
            maxCorrectAnswer: 1,
            correctAnswerCount: 1,
            answerCorrect: ['D'],
            createdAt: '2023-06-05T02:01:38.513Z',
            updatedAt: '2023-06-09T12:51:11.933Z',
            __v: 0
        }
    ],
    createdAt: '2023-06-04T19:15:39.123Z',
    updatedAt: '2023-11-20T09:28:41.297Z',
    __v: 6,
    creator: {
        _id: '645663106e2607839bc293a0',
        avatar: '',
        userType: 'Teacher',
        firstName: 'Thu',
        lastName: 'Hien',
        userName: 'ThuHien'
    },
    category: {
        _id: '655468e0a290596784bc9764',
        name: 'Other'
    },
    grade: {
        _id: '655b1d3fcde7744d26347070',
        name: 'All'
    }
};

// const Quiz = {
//     _id: '647ce2dbaf09f3b01a814926',
//     name: 'Lập trình hướng đối tượng',
//     description: 'Lập trình hướng đối tượng là một trong những môn học quan trọng ',
//     backgroundImage: 'https://res.cloudinary.com/dfl3qnj7z/image/upload/v1686313469/ypif1asizikuluavrixb.png',
//     pointsPerQuestion: 1,
//     numberOfQuestions: 3,
//     isPublic: true,
//     likesCount: [],
//     comments: [],
//     questionList: [
//         {
//             _id: '647d4301ec2aeb4204caa6fa',
//             tags: [''],
//             questionType: 'Quiz',
//             optionQuestion: 'Mutiple',
//             isPublic: true,
//             pointType: 'Standard',
//             answerTime: 5,
//             backgroundImage: 'https://res.cloudinary.com/dfl3qnj7z/image/upload/v1686312916/vjxrhedqyhiqzho8gumi.jpg',
//             answerList: [
//                 {
//                     name: 'A',
//                     body: 'public',
//                     isCorrect: true,
//                     _id: '647d435dec2aeb4204caa72c'
//                 },
//                 {
//                     name: 'B',
//                     body: 'Private',
//                     isCorrect: true,
//                     _id: '647d435dec2aeb4204caa72d'
//                 },
//                 {
//                     name: 'C',
//                     body: 'Protected',
//                     isCorrect: true,
//                     _id: '647d435dec2aeb4204caa72e'
//                 },
//                 {
//                     name: 'D',
//                     body: 'Secret',
//                     isCorrect: false,
//                     _id: '647d435dec2aeb4204caa72f'
//                 }
//             ],
//             questionIndex: 3,
//             maxCorrectAnswer: 4,
//             correctAnswerCount: 3,
//             answerCorrect: ['A', 'C', 'B'],
//             createdAt: '2023-06-05T02:05:53.068Z',
//             updatedAt: '2023-06-09T12:21:38.835Z',
//             __v: 0,
//             creator: '65290c06387e86b3a4d1eb6f',
//             name: 'Đâu là kiểu kế thừa trong OoP'
//         }
//     ],
//     createdAt: '2023-06-04T19:15:39.123Z',
//     updatedAt: '2023-07-12T07:15:38.337Z',
//     __v: 9,
//     field: 'Math',
//     creator: '65290c06387e86b3a4d1eb6f'
// };

export default Quiz;
