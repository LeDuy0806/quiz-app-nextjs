'use client';

import { useAppSelector } from 'src/app/redux/hooks';

function HomePage() {
    const state = useAppSelector((state) => state.game);
    // console.log(state);

    return <div></div>;
}

export default HomePage;
