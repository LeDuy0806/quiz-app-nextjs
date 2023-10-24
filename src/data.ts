const Quiz = {
    _id: '647ce337af09f3b01a81494f',
    name: 'Lập trình hướng đối tượng',
    creator: null,
    description: 'Hướng đối tượng tuy yếu nhưng hướng về em thì mạnh',
    backgroundImage:
        'https://res.cloudinary.com/dfl3qnj7z/image/upload/v1686313081/gcozpo8f4vcacojseih6.png',
    isPublic: true,
    pointsPerQuestion: 2,
    field: 'Tech',
    likesCount: [],
    comments: [],
    createdAt: null,
    updatedAt: null,

    questionList: [
        {
            _id: '647ce337af09f3b01a81494f',
            name: 'Con gì có mấy chân',
            creator: null,
            backgroundImage:
                'https://res.cloudinary.com/dfl3qnj7z/image/upload/v1686313167/o0utbhprtgtgo9xyxspy.jpg',
            questionIndex: 0,
            questionType: 'Quiz',
            optionQuestion: 'Single',
            pointType: 'Standard',
            isPublic: true,
            answerTime: 5,
            maxCorrectAnswer: 1,
            answerList: [
                {
                    name: 'A',
                    body: '4 chân',
                    isCorrect: true
                },
                {
                    name: 'B',
                    body: '6 chân',
                    isCorrect: false
                },
                {
                    name: 'C',
                    body: '2 chân',
                    isCorrect: false
                },
                {
                    name: 'D',
                    body: '8 chân',
                    isCorrect: false
                }
            ],
            correctAnswerCount: 1,
            answerCorrect: ['A']
        },
        {
            _id: '647ce337af09f3b01a81494f',
            name: 'Con gì có mấy tay',
            creator: null,
            backgroundImage:
                'https://res.cloudinary.com/dfl3qnj7z/image/upload/v1686313167/o0utbhprtgtgo9xyxspy.jpg',
            questionIndex: 1,
            questionType: 'Quiz',
            optionQuestion: 'Single',
            pointType: 'Standard',
            isPublic: true,
            answerTime: 10,
            maxCorrectAnswer: 1,
            answerList: [
                {
                    name: 'A',
                    body: '4 tay',
                    isCorrect: true
                },
                {
                    name: 'B',
                    body: '6 tay',
                    isCorrect: false
                },
                {
                    name: 'C',
                    body: '2 tay',
                    isCorrect: false
                },
                {
                    name: 'D',
                    body: '8 tay',
                    isCorrect: false
                }
            ],
            correctAnswerCount: 1,
            answerCorrect: ['A']
        },
        {
            _id: '647ce337af09f3b01a81494f',
            name: 'Con gì có mấy dau',
            creator: null,
            backgroundImage:
                'https://res.cloudinary.com/dfl3qnj7z/image/upload/v1686313167/o0utbhprtgtgo9xyxspy.jpg',
            questionIndex: 2,
            questionType: 'Quiz',
            optionQuestion: 'Single',
            pointType: 'Standard',
            isPublic: true,
            answerTime: 5,
            maxCorrectAnswer: 1,
            answerList: [
                {
                    name: 'A',
                    body: '4 dau',
                    isCorrect: true
                },
                {
                    name: 'B',
                    body: '6 dau',
                    isCorrect: false
                },
                {
                    name: 'C',
                    body: '2 dau',
                    isCorrect: false
                },
                {
                    name: 'D',
                    body: '8 dau',
                    isCorrect: false
                }
            ],
            correctAnswerCount: 1,
            answerCorrect: ['A']
        }
    ]
};

export default Quiz;
