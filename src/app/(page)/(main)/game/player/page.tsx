'use client';

import { use, useEffect, useState } from 'react';

//router
import { useRouter } from 'next/navigation';

//type
import QuestionType, { InitQuestion } from 'src/app/types/questionType';
import QuizType, { InitQuiz } from 'src/app/types/quizType';
import { TypeAnswer, TypePlayerResult } from 'src/app/variable';
import { AnswerPlayerType } from 'src/app/types/playerResultType';

//component
import PlayerWaitingRoom from 'src/components/game/player/PlayerWaitingRoom';
import CountDown from 'src/components/game/CountDown';
import PlayerQuestion from 'src/components/game/player/PlayerQuestion';
import QuestionResult from 'src/components/game/QuestionResult';
import LeaderBoard from 'src/components/game/LeaderBoard';
import PlayerResult from 'src/components/game/player/PlayerResults';
import CheckResult from 'src/components/game/player/CheckResult';
import CheckLeaderBoard from 'src/components/game/CheckLeaderBoard';
import { ToastContainer, toast } from 'react-toastify';

//redux
import { useAppSelector } from 'src/app/redux/hooks';
import { useGetGameQuery } from 'src/app/redux/services/gameApi';
import { useRemovePlayerMutation } from 'src/app/redux/services/gameApi';
import { useRemovePlayerResultMutation } from 'src/app/redux/services/playerResultApi';
import { useUpdateCurrentLeaderBoardMutation } from 'src/app/redux/services/leaderBoardApi';
import { AnswerLeaderBoardResultType } from 'src/app/types/leaderboardType';
import { useUpdatePlayerResultMutation } from 'src/app/redux/services/playerResultApi';
import { useAddGamePlayerResultMutation } from 'src/app/redux/services/gameApi';
import { useAddLeaderBoardPlayerResultMutation } from 'src/app/redux/services/leaderBoardApi';

interface SearchParams {
    id: string;
}

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

const Player = ({ searchParams }: { searchParams: SearchParams }) => {
    const router = useRouter();
    const authData = useAppSelector((state) => state.auth.authData);
    const socket = useAppSelector((state) => state.socket.socket);
    const playerOfResult = useAppSelector((state) => state.playerResult.playerResult);
    const { data } = useGetGameQuery({ gameId: searchParams.id });

    const [removeUser] = useRemovePlayerMutation();
    const [removePlayerResult] = useRemovePlayerResultMutation();
    const [updatePlayerResult] = useUpdatePlayerResultMutation();
    const [addGamePlayerResult] = useAddGamePlayerResultMutation();
    const [addLeaderBoardPlayerResult] = useAddLeaderBoardPlayerResultMutation();

    const [playerList, setPlayerList] = useState<any>([]);
    const [leaderBoardId, setLeaderBoardId] = useState<string>('');

    const [showWaitingRoom, setShowWaitingRoom] = useState<boolean>(true);
    const [showCountDown, setShowCountDown] = useState<boolean>(false);
    const [showQuestion, setShowQuestion] = useState<boolean>(false);
    const [showQuestionResult, setShowQuestionResult] = useState<boolean>(false);
    const [showLeaderBoard, setShowLeaderBoard] = useState<boolean>(false);
    const [showResults, setShowResult] = useState<boolean>(false);
    const [showCheckResult, setShowCheckResult] = useState<boolean>(false);
    const [showLeaderBoardResult, setShowLeaderBoardResult] = useState<boolean>(false);

    const [quizData, setQuizData] = useState<QuizType>(InitQuiz);
    const [questionData, setQuestionData] = useState<QuestionType>(InitQuestion);
    const [questionPointType, setQuestionPointType] = useState<string>('');
    const [questionAnswer, setQuestionAnswer] = useState<string[]>();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [questionOptionCurrent, setQuestionOptionCurrent] = useState<string>('');

    const [scorePlayer, setScorePlayer] = useState<number[]>([]);
    const [answerQuestion, setAnswerQuestion] = useState<string>('');
    const [listOfIndex, setListOfIndex] = useState<number[]>([]);
    const [answer, setAnswer] = useState<AnswerPlayerType[]>([]);
    const [expireTimeQuestion, setExpireTimeQuestion] = useState<boolean>(false);
    const [timer, setTimer] = useState<number>(10);
    const [playerResult, setPlayerResult] = useState<TypePlayerResult>(InitPlayerResult);
    const [leaderBoardResult, setLeaderBoardResult] = useState<AnswerLeaderBoardResultType[]>([]);
    const [gameEnd, setGameEnd] = useState<boolean>(false);

    useEffect(() => {
        if (data) {
            setPlayerList(data.playerList);
            setQuizData(data?.quiz);
            const ListOfIndex = quizData.questionList.map((question: QuestionType) => question?.questionIndex);
            setListOfIndex(ListOfIndex);
        }
    }, [data, quizData]);

    useEffect(() => {
        if (gameEnd) {
            const PlayerResult = { id: playerOfResult._id, answers: answer, score: playerResult.pointSum };
            updatePlayerResult(PlayerResult);
            addGamePlayerResult({ gameId: searchParams.id, playerResultId: playerOfResult._id });
            addLeaderBoardPlayerResult({ leaderBoardId, playerResultId: playerOfResult._id });
        }
    }, [gameEnd]);

    useEffect(() => {
        socket?.on('host-start-game', (leaderBoardId: string) => {
            setLeaderBoardId(leaderBoardId);
        });

        return () => {
            socket.off('host-start-game');
        };
    }, [socket]);

    useEffect(() => {
        socket?.on('host-leave', (pin: string) => {
            toast.warning('Host leave room');
        });

        return () => {
            socket.off('host-leave');
        };
    }, [socket]);

    useEffect(() => {
        socket?.on('student-leave', (player: any, pin: string) => {
            const newListPlayers = playerList.filter((item: any) => item.playerId !== player.playerId);
            setPlayerList(newListPlayers);
        });
        return () => {
            socket.off('student-leave');
        };
    }, [socket, playerList]);

    useEffect(() => {
        socket?.on('host-end-game', (pin: string) => {
            setGameEnd(true);
            setShowLeaderBoard(false);
            setShowResult(true);
        });

        return () => {
            socket.off('host-end-game');
        };
    }, [socket]);

    useEffect(() => {
        socket?.on('host-countdown-preview', (gamePin: string) => {
            setShowWaitingRoom(false);
            setShowCountDown(true);
            startCountDownPreview(10, 0);
        });

        return () => {
            socket.off('host-countdown-preview');
        };
    }, [socket, playerList]);

    const handlePlayerJoin = (playerData: any) => {
        setPlayerList((prevState: any) => [...prevState, playerData]);
    };

    const playerOutRoom = async () => {
        await removeUser({ gameId: searchParams.id, playerId: authData?.user?._id });
        await removePlayerResult({ playerId: authData?.user?._id });
    };

    const closeGame = () => {
        socket.emit('student-leave-room', data?.pin!, () => {
            playerOutRoom();
            router.back();
        });
    };

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
                    setScorePlayer([...scorePlayer, score]);
                } else {
                    setPlayerResult({
                        ...playerResult,
                        incorrectAnswer: playerResult.incorrectAnswer + 1
                    });
                    setScorePlayer([...scorePlayer, 0]);
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
                setScorePlayer([...scorePlayer, 0]);
            }
        }
    }, [expireTimeQuestion]);

    useEffect(() => {
        if (scorePlayer.length) {
            const result = {
                player: authData.user,
                pointAnswerQuestion: scorePlayer[currentQuestionIndex],
                playerCurrentScore: playerResult.pointSum
            };
            socket.emit('send-answer-to-host', leaderBoardId, data?.pin, currentQuestionIndex, result);
        }
    }, [scorePlayer]);

    const calculatePoint = () => {
        switch (questionPointType) {
            case 'Standard':
                return quizData.pointsPerQuestion;
            case 'Double':
                return quizData.pointsPerQuestion * 2;
            default:
                break;
        }
        return 0;
    };

    const startCountDownPreview = (second: number, index: number) => {
        let time = second;
        let interval = setInterval(() => {
            setTimer(time);
            if (time === 0) {
                clearInterval(interval);
                setShowCountDown(false);
                setShowQuestion(true);
            }
            time--;
        }, 1000);
    };

    useEffect(() => {
        socket?.on('host-start-question-timer', (questionIndex: number) => {
            setQuestionData(quizData?.questionList[questionIndex]!);
            setCurrentQuestionIndex(questionIndex);
            setQuestionOptionCurrent(quizData?.questionList[questionIndex]?.optionQuestion);
            setQuestionAnswer(quizData?.questionList[questionIndex].answerCorrect);
            setQuestionPointType(quizData?.questionList[questionIndex].pointType);

            if (questionIndex < quizData.questionList.length) {
                setAnswer((prevState: AnswerPlayerType[]) => [...prevState, InitAnswer]);
            }
            const time = quizData?.questionList[questionIndex]?.answerTime;
            startQuestionCountdown(time!, questionIndex);
        });

        return () => {
            socket.off('host-start-question-timer');
        };
    }, [socket, quizData?.questionList]);

    const startQuestionCountdown = (second: number, index: number) => {
        setLeaderBoardResult([]);
        arrayAnswer = [];
        setShowLeaderBoard(false);
        setExpireTimeQuestion(false);
        setShowQuestion(true);
        let time = second;
        let interval = setInterval(() => {
            setTimer(time);
            if (time === 0) {
                clearInterval(interval);
                setExpireTimeQuestion(true);
            }
            time--;
        }, 1000);
    };

    useEffect(() => {
        socket?.on('host-start-question-result', (questionIndex: number) => {
            setShowQuestion(false);
            setShowQuestionResult(true);
        });
        return () => {
            socket.off('host-start-question-result');
        };
    }, [socket]);

    useEffect(() => {
        socket?.on('host-show-leaderBoard', (questionIndex: number) => {
            displayLeaderBoardCurrent(questionIndex);
        });
        return () => {
            socket.off('host-show-leaderBoard');
        };
    }, [socket]);

    useEffect(() => {
        socket.on('host-send-other-result', (resultPlayer: AnswerLeaderBoardResultType) => {
            handleLeaderBoardResult(resultPlayer);
        });

        return () => {
            socket.off('host-send-other-result');
        };
    }, [socket]);

    const handleLeaderBoardResult = (resultPlayer: AnswerLeaderBoardResultType) => {
        setLeaderBoardResult((prev) => [...prev, resultPlayer]);
    };

    const displayLeaderBoardCurrent = (index: number) => {
        setShowQuestionResult(false);
        setShowLeaderBoard(true);
    };

    useEffect(() => {
        socket?.on('host-end-game', () => {
            setShowLeaderBoard(false);
            setShowResult(true);
        });
        return () => {
            socket.off('host-end-game');
        };
    }, [socket]);

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
                questionIndex: currentQuestionIndex,
                answered: true,
                answers: questionOptionCurrent === 'Single' ? [key] : arrayAnswer,
                time: timer,
                point: questionAnswer?.includes(key) ? calculatePoint() : 0
            },
            ...answer.slice(currentQuestionIndex + 1, answer.length)
        ]);
    };

    const checkResult = () => {
        setShowResult(false);
        setShowCheckResult(true);
    };

    const handleShowLeaderBoardResult = () => {
        setShowResult(false);
        setShowLeaderBoardResult(true);
    };

    const handleBackResult = () => {
        setShowLeaderBoardResult(false);
        setShowResult(true);
    };

    const backResult = () => {
        setShowCheckResult(false);
        setShowResult(true);
    };

    const handleExitGame = () => {
        socket?.emit('player-end-game', data?.pin!, () => {
            router.back();
        });
    };

    return (
        <>
            {showWaitingRoom && (
                <PlayerWaitingRoom
                    pin={data?.pin!}
                    socket={socket}
                    quiz={data?.quiz!}
                    closeGame={closeGame}
                    handlePlayerJoin={handlePlayerJoin}
                    playerList={playerList}
                />
            )}
            {showCountDown && <CountDown time={timer} />}
            {showQuestion && (
                <PlayerQuestion
                    timer={questionData?.answerTime}
                    questionData={questionData}
                    lengthQuiz={quizData?.questionList?.length!}
                    onClick={(key) => handleAnswer(key)}
                    isAnswerSelect={(key) => answer[currentQuestionIndex]?.answers.includes(key)}
                />
            )}
            {showQuestionResult && <QuestionResult answerQuestion={answerQuestion!} questionData={questionData} lengthQuiz={quizData?.questionList?.length!} />}

            {showLeaderBoard && <LeaderBoard questionIndex={questionData.questionIndex} leaderBoardResult={leaderBoardResult} />}
            {showResults && (
                <PlayerResult
                    solo={false}
                    result={playerResult}
                    lengthQuiz={quizData?.questionList?.length!}
                    answer={answer}
                    checkResult={checkResult}
                    exitGame={handleExitGame}
                    handleShowLeaderBoardResult={handleShowLeaderBoardResult}
                />
            )}
            {showCheckResult && <CheckResult quiz={quizData} handleBack={backResult} answer={answer} listOfIndex={listOfIndex} />}
            {showLeaderBoardResult && <CheckLeaderBoard leaderBoardId={leaderBoardId} handleBack={handleBackResult} listOfIndex={listOfIndex} />}

            <ToastContainer position='top-center' />
        </>
    );
};

export default Player;
