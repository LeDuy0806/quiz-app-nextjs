'use client';

import { useEffect, useState } from 'react';

//components
import CountDown from 'src/components/game/CountDown';
import PlayerQuestion from 'src/components/game/player/PlayerQuestion';
import QuestionResult from 'src/components/game/QuestionResult';
import PlayerResult from 'src/components/game/player/PlayerResults';
import CheckResult from 'src/components/game/player/CheckResult';

//data
import Quiz from 'src/data';

//type
import QuestionType, { InitQuestion } from 'src/app/types/questionType';
import { TypePlayerResult, TypeAnswer } from 'src/app/variable';

//redux
import { useAppSelector } from 'src/app/redux/hooks';
import { AnswerPlayerType } from 'src/app/types/playerResultType';

let arrayAnswer: string[] = [];

const InitAnswer = {
    questionIndex: 0,
    answered: false,
    answers: [],
    time: 0,
    point: 0
} as AnswerPlayerType;

const InitPlayerResult = {
    correctAnswer: 0,
    noAnswer: 0,
    incorrectAnswer: 0,
    pointSum: 0
} as TypePlayerResult;

const PlaySolo = () => {
    const Quiz = useAppSelector((state) => state.quiz.quiz);

    const [showCountDown, setShowCountDown] = useState<boolean>(true);
    const [showQuestion, setShowQuestion] = useState<boolean>(false);
    const [showQuestionResult, setShowQuestionResult] = useState<boolean>(false);
    const [showResults, setShowResult] = useState<boolean>(false);
    const [showCheckResult, setShowCheckResult] = useState<boolean>(false);

    const [questionData, setQuestionData] = useState<QuestionType>(InitQuestion);
    const [questionPointType, setQuestionPointType] = useState<string>('');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [questionAnswer, setQuestionAnswer] = useState<string[]>();
    const [questionOptionCurrent, setQuestionOptionCurrent] = useState<string>('');

    const [answerQuestion, setAnswerQuestion] = useState<string>('');
    const [listOfIndex, setListOfIndex] = useState<number[]>([]);
    const [answer, setAnswer] = useState<AnswerPlayerType[]>([]);
    const [expireTimeQuestion, setExpireTimeQuestion] = useState<boolean>(false);
    const [timer, setTimer] = useState<number>(5);
    const [playerResult, setPlayerResult] = useState<TypePlayerResult>(InitPlayerResult);

    useEffect(() => {
        const ListOfIndex = Quiz.questionList.map((question: QuestionType) => question?.questionIndex);
        setListOfIndex(ListOfIndex);
        let time = 5;
        let interval = setInterval(() => {
            setTimer(time);
            if (time === 0) {
                clearInterval(interval);
                setShowCountDown(false);
                displayQuestion(currentQuestionIndex);
            }
            time--;
        }, 1000);
    }, []);

    useEffect(() => {
        if (expireTimeQuestion) {
            const answerPlayer = answer[currentQuestionIndex].answers;
            const answerQuestion = questionData?.answerCorrect;

            if (answerPlayer.length === answerQuestion?.length) {
                const containsAll = answerPlayer.every((answer: string) => {
                    return answerQuestion?.includes(answer);
                });

                if (containsAll) {
                    const score = calculatePoint();
                    setPlayerResult({
                        ...playerResult,
                        correctAnswer: playerResult.correctAnswer + 1,
                        pointSum: playerResult.pointSum + score
                    });
                } else {
                    setPlayerResult({
                        ...playerResult,
                        incorrectAnswer: playerResult.incorrectAnswer + 1
                    });
                }
            } else {
                if (answerPlayer.length === 0) {
                    setPlayerResult({
                        ...playerResult,
                        noAnswer: playerResult.noAnswer + 1
                    });
                } else {
                    setPlayerResult({
                        ...playerResult,
                        incorrectAnswer: playerResult.incorrectAnswer + 1
                    });
                }
            }
        }
    }, [expireTimeQuestion]);

    const displayQuestion = (questionIndex: number) => {
        setQuestionData(Quiz.questionList[questionIndex]);
        setCurrentQuestionIndex(questionIndex);
        setQuestionOptionCurrent(Quiz?.questionList[questionIndex]?.optionQuestion);
        setQuestionAnswer(Quiz?.questionList[questionIndex].answerCorrect);
        setQuestionPointType(Quiz?.questionList[questionIndex]?.pointType);
        if (questionIndex < Quiz.questionList.length) {
            setAnswer((prevState: AnswerPlayerType[]) => [...prevState, InitAnswer]);
        }

        const time = Quiz?.questionList[questionIndex]?.answerTime;
        startQuestionCountdown(time, questionIndex);
    };

    const startQuestionCountdown = (second: number, index: number) => {
        arrayAnswer = [];
        setExpireTimeQuestion(false);
        setShowQuestion(true);
        let time = second;
        let interval = setInterval(() => {
            setTimer(time);
            if (time === 0) {
                clearInterval(interval);
                setExpireTimeQuestion(true);
                displayQuestionResult(index);
            }
            time--;
        }, 1000);
    };

    const displayQuestionResult = (index: number) => {
        setShowQuestion(false);
        setShowQuestionResult(true);
        if (index < Quiz?.questionList.length - 1) {
            const timeQuestionResult = setTimeout(() => {
                setShowQuestionResult(false);
                displayQuestion(index + 1);
            }, 3000);
            return () => {
                clearTimeout(timeQuestionResult);
            };
        } else {
            const timeQuestionResult = setTimeout(() => {
                setShowQuestionResult(false);
                setShowResult(true);
            }, 3000);
            return () => {
                clearTimeout(timeQuestionResult);
            };
        }
    };

    const handleAnswer = (key: string) => {
        if (!arrayAnswer.includes(key)) {
            arrayAnswer.push(key);
        } else {
            arrayAnswer = arrayAnswer.filter((item) => item !== key);
        }
        setAnswerQuestion(key);
        setAnswer([
            ...answer.slice(0, currentQuestionIndex),
            {
                answers: questionOptionCurrent === 'Single' ? [key] : arrayAnswer,
                answered: true,
                questionIndex: currentQuestionIndex,
                time: timer,
                point: questionAnswer?.includes(key) ? calculatePoint() : 0
            },
            ...answer.slice(currentQuestionIndex + 1, answer?.length)
        ]);
    };

    const calculatePoint = () => {
        switch (questionPointType) {
            case 'Standard':
                return Quiz.pointsPerQuestion;
            case 'Double':
                return Quiz.pointsPerQuestion * 2;
            default:
                break;
        }
        return 0;
    };

    const checkResult = () => {
        setShowResult(false);
        setShowCheckResult(true);
    };

    const backResult = () => {
        setShowCheckResult(false);
        setShowResult(true);
    };

    return (
        <>
            {showCountDown && <CountDown time={timer} />}
            {showQuestion && (
                <PlayerQuestion
                    timer={questionData?.answerTime}
                    questionData={questionData!}
                    lengthQuiz={Quiz?.questionList?.length!}
                    onClick={(key) => handleAnswer(key)}
                    isAnswerSelect={(key) => answer[currentQuestionIndex]?.answers.includes(key)}
                />
            )}
            {showQuestionResult && <QuestionResult answerQuestion={answerQuestion} questionData={questionData} lengthQuiz={Quiz?.questionList?.length!} />}
            {showResults && (
                <PlayerResult solo={true} result={playerResult} lengthQuiz={Quiz?.questionList?.length!} answer={answer} checkResult={checkResult} />
            )}
            {showCheckResult && <CheckResult quiz={Quiz} handleBack={backResult} answer={answer} listOfIndex={listOfIndex} />}
        </>
    );
};

export default PlaySolo;
