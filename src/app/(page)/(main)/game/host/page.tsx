'use client';

import { useEffect, useState } from 'react';

//component
import WaitingRoom from 'src/components/game/WaitingRoom';
import CountDown from 'src/components/game/CountDown';
import HostQuestion from 'src/components/game/host/HostQuestion';
import LeaderBoard from 'src/components/game/LeaderBoard';
import HostResult from 'src/components/game/host/HostResult';

import Quiz from 'src/data';
import QuestionType from 'src/app/types/questionType';

const InitQuestionData = {
    name: '',
    creator: null,
    backgroundImage: '',
    questionIndex: 0,
    questionType: 'Quiz',
    optionQuestion: '',
    isPublic: true,
    pointType: 'Standard',
    answerTime: 5,
    answerList: [
        { name: 'a', body: '', isCorrect: false },
        { name: 'b', body: '', isCorrect: false },
        { name: 'c', body: '', isCorrect: false },
        { name: 'd', body: '', isCorrect: false }
    ],
    maxCorrectAnswer: 1,
    correctAnswerCount: 0,
    answerCorrect: []
} as QuestionType;

const Host = () => {
    const [correct, setCorrect] = useState();
    const [timer, setTimer] = useState<number>(10);

    const [showWaitingRoomScreen, setShowWaitingRoomScreen] = useState<boolean>(true);
    const [showCountDownScreen, setShowCountDownScreen] = useState<boolean>(false);
    const [showQuestionScreen, setShowQuestionScreen] = useState<boolean>(false);
    const [showLeaderBoardScreen, setShowLeaderBoardScreen] = useState<boolean>(false);
    const [showResultsScreen, setShowResultScreen] = useState<boolean>(false);

    const [timerQuestion, setTimerQuestion] = useState<number>(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [questionData, setQuestionData] = useState<QuestionType>(InitQuestionData);

    const startGame = () => {
        // socket?.emit(
        //     'start-game',
        //     game,
        //     leaderboard,
        //     length,
        //     playerList,
        //     quiz.pointsPerQuestion,
        // );
        // socket?.emit('countdown-preview', game?.pin, () => {
        //     StartCountDownPreview(10, currentQuestionIndex);
        // });
        StartCountDownPreview(10, currentQuestionIndex);
        setShowWaitingRoomScreen(false);
        setShowCountDownScreen(true);
    };

    const StartCountDownPreview = (second: number, index: number) => {
        let time = second;
        let interval = setInterval(() => {
            setTimer(time);
            if (time === 0) {
                clearInterval(interval);
                displayQuestion(index);
                setShowCountDownScreen(false);
                setShowQuestionScreen(true);
            }
            time--;
        }, 1000);
    };

    const displayQuestion = (index: number) => {
        if (index === Quiz?.questionList.length) {
            // displayCurrentLeaderBoard(index);
            displayLeaderBoardCurrent(index);
        } else {
            setQuestionData(Quiz.questionList[index]);
            setCurrentQuestionIndex((prevState) => prevState + 1);
            let time = Quiz.questionList[index]?.answerTime;
            let question = {
                questionData: Quiz.questionList[index],
                answerList: Quiz.questionList[index].answerList,
                questionIndex: Quiz.questionList[index].questionIndex,
                correctAnswersCount: Quiz.questionList[index].answerList.filter(
                    (answer) => answer.isCorrect === true
                ).length
            };
            // socket.emit('start-question-timer', game.pin, time, question, () => {
            //     startQuestionCountdownScreen(time, index);
            // });
            startQuestionCountdown(time, index);
        }
    };

    const startQuestionCountdown = (second: number, index: number) => {
        setShowQuestionScreen(true);
        let time = second;
        let interval = setInterval(() => {
            setTimer(time);
            if (time === 0) {
                clearInterval(interval);
                displayLeaderBoardCurrent(index);
            }
            time--;
        }, 1000);
    };

    const displayLeaderBoardCurrent = (index: number) => {
        setShowQuestionScreen(false);
        setShowLeaderBoardScreen(true);
        if (index !== Quiz?.questionList.length) {
            const timerLeaderBoard = setTimeout(() => {
                setShowLeaderBoardScreen(false);
                displayQuestion(index + 1);
            }, 4000);
            return () => {
                clearTimeout(timerLeaderBoard);
            };
        } else {
            setShowLeaderBoardScreen(false);
            setShowResultScreen(true);
        }
    };

    return (
        <>
            {showWaitingRoomScreen && <WaitingRoom startGame={startGame} quiz={Quiz} />}
            {showCountDownScreen && <CountDown time={timer} />}
            {showQuestionScreen && (
                <HostQuestion
                    timer={questionData?.answerTime}
                    questionData={questionData}
                    lengthQuiz={Quiz?.questionList.length}
                />
            )}
            {showLeaderBoardScreen && <LeaderBoard />}
            {showResultsScreen && <HostResult />}
        </>
    );
};

export default Host;
