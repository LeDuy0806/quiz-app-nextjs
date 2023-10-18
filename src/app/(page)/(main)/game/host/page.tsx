'use client';

import { useState } from 'react';

//component
import WaitingRoom from 'src/components/game/WaitingRoom';
import CountDown from 'src/components/game/CountDown';
import Question from 'src/components/game/Question';
import LeaderBoard from 'src/components/game/LeaderBoard';
import Results from 'src/components/game/Results';

const Player = () => {
    const [showWaitingRoom, setShowWaitingRoom] = useState<boolean>(true);
    const [showCountDown, setShowCountDown] = useState<boolean>(false);
    const [showQuestion, setShowQuestion] = useState<boolean>(false);
    const [showLeaderBoard, setShowLeaderBoard] = useState<boolean>(false);
    const [showResults, setShowResult] = useState<boolean>(false);

    return (
        <>
            {showWaitingRoom && <WaitingRoom />}
            {showCountDown && <CountDown />}
            {showQuestion && <Question />}
            {showLeaderBoard && <LeaderBoard />}
            {showLeaderBoard && <LeaderBoard />}
            {showResults && <Results />}
        </>
    );
};

export default Player;
