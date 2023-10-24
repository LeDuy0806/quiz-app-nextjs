'use client';

import { useEffect, useState } from 'react';

//component
import HostWaitingRoom from 'src/components/game/host/HostWaitingRoom';
import CountDown from 'src/components/game/CountDown';
import HostQuestion from 'src/components/game/host/HostQuestion';
import LeaderBoard from 'src/components/game/LeaderBoard';
import HostResult from 'src/components/game/host/HostResult';

//type
import QuestionType from 'src/app/types/questionType';

//redux
import { useAppSelector } from 'src/app/redux/hooks';

//router
import { useRouter } from 'next/navigation';

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
    const router = useRouter();
    const socket = useAppSelector((state) => state.socket.socket);
    const game = useAppSelector((state) => state.game.game);
    const quiz = useAppSelector((state) => state.quiz.quiz);
    const leaderBoard = useAppSelector((state) => state.leaderBoard.leaderBoard);

    const [playerList, setPlayerList] = useState<any>([]);

    const [timer, setTimer] = useState<number>(10);

    const [showWaitingRoomScreen, setShowWaitingRoomScreen] = useState<boolean>(true);
    const [showCountDownScreen, setShowCountDownScreen] = useState<boolean>(false);
    const [showQuestionScreen, setShowQuestionScreen] = useState<boolean>(false);
    const [showLeaderBoardScreen, setShowLeaderBoardScreen] = useState<boolean>(false);
    const [showResultsScreen, setShowResultScreen] = useState<boolean>(false);

    const [timerQuestion, setTimerQuestion] = useState<number>(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [questionData, setQuestionData] = useState<QuestionType>(InitQuestionData);

    const handlePlayerJoin = (playerData: any) => {
        setPlayerList((prevState: any) => [...prevState, playerData]);
    };

    useEffect(() => {
        socket?.on('student-leave', (player: any, pin: string) => {
            // console.log(player, playerList);
            const newListPlayers = playerList.filter((item: any) => item.playerId !== player.playerId);
            console.log(newListPlayers);
            setPlayerList(newListPlayers);
        });
        return () => {
            socket.off('student-leave');
        };
    }, [socket, playerList]);

    const startGame = () => {
        socket?.emit('start-game', leaderBoard?._id);
        socket?.emit('countdown-preview', game?.pin, () => {
            StartCountDownPreview(10, currentQuestionIndex);
        });
        setShowWaitingRoomScreen(false);
        setShowCountDownScreen(true);
    };

    const closeGame = () => {
        socket?.emit('host-leave-room', game?.pin);
        router.back();
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
        if (index === quiz?.questionList.length) {
            displayLeaderBoardCurrent(index);
        } else {
            setQuestionData(quiz?.questionList[index]!);
            setCurrentQuestionIndex((prevState) => prevState + 1);
            let time = quiz?.questionList[index]?.answerTime;
            let question = {
                questionData: quiz?.questionList[index],
                answerList: quiz?.questionList[index]?.answerList,
                questionIndex: quiz?.questionList[index]?.questionIndex,
                correctAnswersCount: quiz?.questionList[index]?.answerList.filter((answer) => answer.isCorrect === true).length
            };
            socket.emit('start-question-timer', game?.pin, index, () => {
                startQuestionCountdown(time!, index);
            });
            // startQuestionCountdown(time!, index);
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
        if (index !== quiz?.questionList.length) {
            const timerLeaderBoard = setTimeout(() => {
                setShowLeaderBoardScreen(false);
                displayQuestion(index + 1);
            }, 4000);
            return () => {
                clearTimeout(timerLeaderBoard);
            };
        } else {
            socket.emit('end-game', game?.pin, () => {
                setShowLeaderBoardScreen(false);
                setShowResultScreen(true);
            });
        }
    };

    return (
        <>
            {showWaitingRoomScreen && (
                <HostWaitingRoom
                    pin={game?.pin}
                    socket={socket}
                    quiz={quiz}
                    startGame={startGame}
                    closeGame={closeGame}
                    handlePlayerJoin={handlePlayerJoin}
                    playerList={playerList}
                />
            )}
            {showCountDownScreen && <CountDown time={timer} />}
            {showQuestionScreen && <HostQuestion timer={questionData?.answerTime} questionData={questionData} lengthQuiz={quiz?.questionList?.length!} />}
            {showLeaderBoardScreen && <LeaderBoard />}
            {showResultsScreen && <HostResult />}
        </>
    );
};

export default Host;
