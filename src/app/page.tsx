'use client';

//components
import Navbar from 'src/components/landing/Header/Navbar';
import Intro from 'src/components/landing/Intro/Intro';
import Footer from 'src/components/landing/Footer/Footer';
import AutomaticRun from 'src/components/landing/AutomaticRun/AutomaticRun';
import Manage from 'src/components/landing/Manage/Manage';

export default function Home() {
    return (
        <main className='font-fontFamily z-[100] mx-auto mt-auto flex min-h-screen w-full max-w-full flex-col items-end overflow-hidden bg-bgGray'>
            <Navbar />
            <Intro />
            <Manage />
            <AutomaticRun />
            <Footer />
        </main>
    );
}
