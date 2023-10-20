'use client';

import { useEffect, useState } from 'react';

//component
import WaitingRoom from 'src/components/game/WaitingRoom';
import CountDown from 'src/components/game/CountDown';
import PlayerQuestion from 'src/components/game/player/PlayerQuestion';
import LeaderBoard from 'src/components/game/LeaderBoard';
import PlayerResult from 'src/components/game/player/PlayerResults';

import questionList from 'src/data';

const Player = () => {
    const [timer, setTimer] = useState<number>(10);
    const [showWaitingRoom, setShowWaitingRoom] = useState<boolean>(true);
    const [showCountDown, setShowCountDown] = useState<boolean>(false);
    const [showQuestion, setShowQuestion] = useState<boolean>(false);
    const [showLeaderBoard, setShowLeaderBoard] = useState<boolean>(false);
    const [showResults, setShowResult] = useState<boolean>(false);

    const [timerQuestion, setTimerQuestion] = useState<number>(0);
    console.log(questionList);

    const startGame = () => {
        setShowWaitingRoom(false);
        setShowCountDown(true);
        let time = 10;
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

    const navigation = () => {
        setShowQuestion(false);
        setShowLeaderBoard(true);
    };

    const openResult = () => {
        setShowLeaderBoard(false);
        setShowResult(true);
    };

    const openCheckResult = () => {
        setShowResult(false);
        setShowQuestion(true);
    };

    return (
        <>
            {showWaitingRoom && <WaitingRoom startGame={startGame} />}
            {showCountDown && <CountDown time={timer} />}
            {showQuestion && <PlayerQuestion />}
            {showLeaderBoard && <LeaderBoard />}
            {showResults && <PlayerResult />}
        </>
    );
};

export default Player;
