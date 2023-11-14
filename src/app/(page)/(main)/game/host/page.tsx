'use client';

import { useEffect, useState } from 'react';

//component
import HostWaitingRoom from 'src/components/game/host/HostWaitingRoom';
import CountDown from 'src/components/game/CountDown';
import HostQuestion from 'src/components/game/host/HostQuestion';
import LeaderBoard from 'src/components/game/LeaderBoard';
import HostResult from 'src/components/game/host/HostResult';
import CheckLeaderBoard from 'src/components/game/CheckLeaderBoard';

//type
import QuestionType, { InitQuestion } from 'src/app/types/questionType';
import { TypePlayerWaitingRoom } from 'src/app/variable';
import { CurrentLeaderBoardType } from 'src/app/types/leaderboardType';

//redux
import { useAppSelector } from 'src/app/redux/hooks';
import { useUpdateCurrentLeaderBoardMutation } from 'src/app/redux/services/leaderBoardApi';
import { useDeleteGameMutation } from 'src/app/redux/services/gameApi';
import { useDeleteLeaderBoardMutation } from 'src/app/redux/services/leaderBoardApi';

//router
import { useRouter } from 'next/navigation';
import { AnswerLeaderBoardResultType } from 'src/app/types/leaderboardType';

const Host = () => {
    const router = useRouter();
    const socket = useAppSelector((state) => state.socket.socket);
    const game = useAppSelector((state) => state.game.game);
    const quiz = useAppSelector((state) => state.quiz.quiz);
    const leaderBoard = useAppSelector((state) => state.leaderBoard.leaderBoard);

    const [playerList, setPlayerList] = useState<any>([]);

    const [timer, setTimer] = useState<number>(10);

    const [updateCurrentLeaderBoard] = useUpdateCurrentLeaderBoardMutation();
    const [deleteGame] = useDeleteGameMutation();
    const [deleteLeaderBoard] = useDeleteLeaderBoardMutation();

    const [showWaitingRoomScreen, setShowWaitingRoomScreen] = useState<boolean>(true);
    const [showCountDownScreen, setShowCountDownScreen] = useState<boolean>(false);
    const [showQuestionScreen, setShowQuestionScreen] = useState<boolean>(false);
    const [showLeaderBoardScreen, setShowLeaderBoardScreen] = useState<boolean>(false);
    const [showResultsScreen, setShowResultScreen] = useState<boolean>(false);
    const [showLeaderBoardResult, setShowLeaderBoardResult] = useState<boolean>(false);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [questionData, setQuestionData] = useState<QuestionType>(InitQuestion);
    const [leaderBoardResult, setLeaderBoardResult] = useState<AnswerLeaderBoardResultType[]>([]);
    const [startUpdateLeaderBoard, setStartUpdateLeaderBoard] = useState<boolean>(false);
    const [listOfIndex, setListOfIndex] = useState<number[]>([]);
    const [totalPoint, setTotalPoint] = useState<number>(0);

    const handlePlayerJoin = (playerData: TypePlayerWaitingRoom) => {
        setPlayerList((prevState: TypePlayerWaitingRoom[]) => [...prevState, playerData]);
    };

    useEffect(() => {
        if (startUpdateLeaderBoard) {
            updateCurrentLeaderBoard({ leaderBoardId: leaderBoard._id, questionIndex: questionData.questionIndex, formUpdate: leaderBoardResult });
        }
    }, [startUpdateLeaderBoard]);

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
        socket.on('get-answer-from-player', (leaderBoardId: string, pinGame: string, questionIndex: number, resultPlayer: AnswerLeaderBoardResultType) => {
            handleLeaderBoardResult(resultPlayer);
            socket.emit('send-other-result', pinGame, resultPlayer);
        });

        return () => {
            socket.off('get-answer-from-player');
        };
    }, [socket]);

    const handleLeaderBoardResult = (resultPlayer: AnswerLeaderBoardResultType) => {
        setLeaderBoardResult((prev) => [...prev, resultPlayer]);
    };

    const startGame = () => {
        const totalPoint = quiz.questionList.reduce(
            (total, x) => (x.pointType === 'Standard' ? total + quiz.pointsPerQuestion : total + quiz.pointsPerQuestion * 2),
            0
        );
        setTotalPoint(totalPoint);
        const ListOfIndex = quiz.questionList.map((question: QuestionType) => question?.questionIndex);
        setListOfIndex(ListOfIndex);
        socket?.emit('start-game', leaderBoard?._id);
        socket?.emit('countdown-preview', game?.pin, () => {
            StartCountDownPreview(10, currentQuestionIndex);
        });
        setShowWaitingRoomScreen(false);
        setShowCountDownScreen(true);
    };

    const closeGame = () => {
        socket?.emit('host-leave-room', game?.pin, () => {
            handleCloseGame();
        });
    };

    const handleCloseGame = async () => {
        await deleteGame({ gameId: game._id }).unwrap();
        await deleteLeaderBoard({ leaderBoardId: leaderBoard._id }).unwrap();
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
            socket.emit('start-question-timer', game?.pin, index, () => {
                startQuestionCountdown(time!, index);
            });
        }
    };

    const startQuestionCountdown = (second: number, index: number) => {
        setStartUpdateLeaderBoard(false);
        setLeaderBoardResult([]);
        setShowQuestionScreen(true);
        let time = second;
        let interval = setInterval(() => {
            setTimer(time);
            if (time === 0) {
                clearInterval(interval);
                startQuestionResult(index);
            }
            time--;
        }, 1000);
    };

    const startQuestionResult = (index: number) => {
        socket.emit('start-question-result', game?.pin, index, () => {
            let time = 3;
            let interval = setInterval(() => {
                if (time === 0) {
                    clearInterval(interval);
                    displayLeaderBoardCurrent(index);
                }
                time--;
            }, 1000);
        });
    };

    const displayLeaderBoardCurrent = (index: number) => {
        setStartUpdateLeaderBoard(true);
        socket.emit('show-leaderBoard', game?.pin, index, () => {
            setShowQuestionScreen(false);
            setShowLeaderBoardScreen(true);
            if (index < quiz?.questionList.length - 1) {
                const timerLeaderBoard = setTimeout(() => {
                    setShowLeaderBoardScreen(false);
                    displayQuestion(index + 1);
                    //call api
                }, 4000);
                return () => {
                    clearTimeout(timerLeaderBoard);
                };
            } else {
                const timerLeaderBoard = setTimeout(() => {
                    socket.emit('end-game', game?.pin, () => {
                        setShowLeaderBoardScreen(false);
                        setShowResultScreen(true);
                    });
                }, 4000);
                return () => {
                    clearTimeout(timerLeaderBoard);
                };
            }
        });
    };

    const handleShowLeaderBoardResult = () => {
        setShowResultScreen(false);
        setShowLeaderBoardResult(true);
    };

    const handleBackResult = () => {
        setShowLeaderBoardResult(false);
        setShowResultScreen(true);
    };

    const handleExitGame = () => {
        socket?.emit('host-end-game', game.pin, () => {
            router.back();
        });
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
            {showLeaderBoardScreen && <LeaderBoard questionIndex={questionData.questionIndex} leaderBoardResult={leaderBoardResult} />}
            {showResultsScreen && (
                <HostResult
                    totalPoint={totalPoint}
                    totalPlayer={playerList.length}
                    leaderBoardResult={leaderBoardResult}
                    handleExitGame={handleExitGame}
                    handleShowLeaderBoardResult={handleShowLeaderBoardResult}
                />
            )}
            {showLeaderBoardResult && <CheckLeaderBoard leaderBoardId={leaderBoard._id} handleBack={handleBackResult} listOfIndex={listOfIndex} />}
        </>
    );
};

export default Host;
