'use client';

import { useEffect } from 'react';

//components
import Navbar from 'src/components/landing/Header/Navbar';
import Intro from 'src/components/landing/Intro/Intro';
import Footer from 'src/components/landing/Footer/Footer';
import AutomaticRun from 'src/components/landing/AutomaticRun/AutomaticRun';
import Manage from 'src/components/landing/Manage/Manage';

//redux
import { useLocalStorage } from 'src/hooks/useLocalStorage';

export default function Landing() {
    useEffect(() => {
        const check = localStorage.getItem('language');
        if (!check) {
            localStorage.setItem('language', JSON.stringify('en'));
        }
    }, []);
    const [language, setLanguage] = useLocalStorage('language');

    return (
        <main className='bg-bgGray'>
            <Navbar language={language} setLanguage={setLanguage} />
            <Intro language={language} />
            <Manage language={language} />
            <AutomaticRun />
            <Footer language={language} />
        </main>
    );
}
