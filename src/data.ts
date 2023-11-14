import { InitUser } from './app/types/userType';

const Quiz = {
    _id: '647ce2dbaf09f3b01a814925',
    name: 'Cấu trúc dữ liệu và giải thuật',
    description: 'Môn học mở mang trí tuệ ha',
    backgroundImage: 'https://res.cloudinary.com/dfl3qnj7z/image/upload/v1686313469/ypif1asizikuluavrixb.png',
    creatorName: 'ThuHien',
    pointsPerQuestion: 1,
    numberOfQuestions: 3,
    isPublic: true,
    likesCount: [],
    comments: [],
    questionList: [
        {
            _id: '647d4109ec2aeb4204caa5e2',
            questionType: 'True/False',
            optionQuestion: 'Single',
            isPublic: true,
            pointType: 'Standard',
            answerTime: 5,
            backgroundImage: 'https://res.cloudinary.com/dfl3qnj7z/image/upload/v1686313167/o0utbhprtgtgo9xyxspy.jpg',
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
            questionIndex: 0,
            maxCorrectAnswer: 1,
            correctAnswerCount: 1,
            answerCorrect: ['A'],
            field: 'Tech',
            creator: InitUser,
            name: 'Có nên học môn cấu trúc dữ liệu và giải thuật không ?'
        },
        {
            _id: '647d4170ec2aeb4204caa62b',
            questionType: 'Quiz',
            optionQuestion: 'Single',
            isPublic: true,
            pointType: 'Standard',
            answerTime: 10,
            backgroundImage: 'https://res.cloudinary.com/dfl3qnj7z/image/upload/v1686313281/ovcyk7rwriuapkfviwbh.jpg',
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
            questionIndex: 1,
            maxCorrectAnswer: 1,
            correctAnswerCount: 1,
            answerCorrect: ['B'],
            creator: InitUser,
            field: 'Tech',
            name: 'Giữa 2 thuật toán merge và Qick thì cái nào có đôi phức tạp cao'
        },
        {
            _id: '647d4202ec2aeb4204caa668',
            questionType: 'Quiz',
            optionQuestion: 'Single',
            isPublic: true,
            pointType: 'Standard',
            answerTime: 5,
            backgroundImage: 'https://res.cloudinary.com/dfl3qnj7z/image/upload/v1686313584/nvj3wnq7ojpot4vgfj0p.jpg',
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
            questionIndex: 2,
            maxCorrectAnswer: 1,
            correctAnswerCount: 1,
            answerCorrect: ['D'],
            creator: InitUser,
            field: 'Tech',
            name: 'Cây nhị phân tương đồng thuật toán nào'
        }
    ],
    createdAt: '2023-06-04T19:15:39.123Z',
    updatedAt: '2023-07-12T07:15:38.337Z',
    __v: 9,
    field: 'Math',
    creator: InitUser
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