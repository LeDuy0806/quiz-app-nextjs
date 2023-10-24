'use client';

import { useEffect, useState } from 'react';

//router
import { useRouter } from 'next/navigation';

//type
import QuestionType from 'src/app/types/questionType';
import QuizType from 'src/app/types/quizType';

//component
import PlayerWaitingRoom from 'src/components/game/player/PlayerWaitingRoom';
import CountDown from 'src/components/game/CountDown';
import PlayerQuestion from 'src/components/game/player/PlayerQuestion';
import LeaderBoard from 'src/components/game/LeaderBoard';
import PlayerResult from 'src/components/game/player/PlayerResults';
import { ToastContainer, toast } from 'react-toastify';

//redux
import { useAppSelector } from 'src/app/redux/hooks';
import { useGetGameQuery } from 'src/app/redux/services/gameApi';
import { useRemovePlayerMutation } from 'src/app/redux/services/gameApi';
import { useRemovePlayerResultMutation } from 'src/app/redux/services/playerResultApi';

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

interface SearchParams {
    id: string;
}

const Player = ({ searchParams }: { searchParams: SearchParams }) => {
    const router = useRouter();
    const authData = useAppSelector((state) => state.auth.authData);
    const socket = useAppSelector((state) => state.socket.socket);

    const [removeUser] = useRemovePlayerMutation();
    const [removePlayerResult] = useRemovePlayerResultMutation();

    const [playerList, setPlayerList] = useState<any>([]);
    const [leaderBoard, setLeaderBoard] = useState<string>();

    const { data } = useGetGameQuery({ gameId: searchParams.id });
    const [timer, setTimer] = useState<number>(10);
    const [showWaitingRoom, setShowWaitingRoom] = useState<boolean>(true);
    const [showCountDown, setShowCountDown] = useState<boolean>(false);
    const [showQuestion, setShowQuestion] = useState<boolean>(false);
    const [showLeaderBoard, setShowLeaderBoard] = useState<boolean>(false);
    const [showResults, setShowResult] = useState<boolean>(false);

    const [quizData, setQuizData] = useState<QuizType>();
    const [questionData, setQuestionData] = useState<QuestionType>(InitQuestionData);

    const [timerQuestion, setTimerQuestion] = useState<number>(0);

    useEffect(() => {
        if (data) {
            setPlayerList(data.playerList);
            setQuizData(data.quiz);
        }
    }, [data]);

    useEffect(() => {
        socket?.on('host-start-game', (leaderBoardId: string) => {
            console.log('StartGame');
            setLeaderBoard(leaderBoardId);
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
            setShowLeaderBoard(false);
            setShowResult(true);
        });

        return () => {
            socket.off('host-end-game');
        };
    }, [socket]);

    useEffect(() => {
        socket?.on('host-countdown-preview', (gamePin: string) => {
            console.log('StartCountDown', gamePin);
            setShowWaitingRoom(false);
            setShowCountDown(true);
            startCountDownPreview(10, 0);
        });

        return () => {
            socket.off('host-countdown-preview');
        };
    }, [socket, playerList]);

    const startCountDownPreview = (second: number, index: number) => {
        let time = second;
        let interval = setInterval(() => {
            setTimer(time);
            if (time === 0) {
                clearInterval(interval);
                // displayQuestion(index);
                setShowCountDown(false);
                setShowQuestion(true);
            }
            time--;
        }, 1000);
    };

    useEffect(() => {
        socket?.on('host-start-question-timer', (questionIndex: number) => {
            console.log('Run question' + questionIndex);
            setQuestionData(quizData?.questionList[questionIndex]!);
            const time = quizData?.questionList[questionIndex]?.answerTime;
            startQuestionCountdown(time!, questionIndex);
        });

        return () => {
            socket.off('host-start-question-timer');
        };
    }, [socket, quizData?.questionList]);

    const startQuestionCountdown = (second: number, index: number) => {
        setShowQuestion(true);
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
        setShowQuestion(false);
        setShowLeaderBoard(true);
        if (index !== quizData?.questionList.length) {
            const timerLeaderBoard = setTimeout(() => {
                setShowLeaderBoard(false);
            }, 4000);
            return () => {
                clearTimeout(timerLeaderBoard);
            };
        } else {
            setShowLeaderBoard(false);
            setShowResult(true);
        }
    };

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
        });
        router.back();
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
            {showQuestion && <PlayerQuestion timer={questionData?.answerTime} questionData={questionData} lengthQuiz={quizData?.questionList?.length!} />}
            {showLeaderBoard && <LeaderBoard />}
            {showResults && <PlayerResult />}
            <ToastContainer position='top-center' />
        </>
    );
};

export default Player;
