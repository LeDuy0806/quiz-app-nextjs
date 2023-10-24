'use client';
import { useEffect } from 'react';
import RowQuizz from 'src/components/ShowQuiz/RowQuizz';
import SearchBar from 'src/components/discover/SearchBar';

function DiscoverPage() {
    useEffect(() => {
        document.title = 'Discover - Quizzes';
    }, []);

    return (
        <div className='p-4'>
            <div className='w-full'>
                <SearchBar />
            </div>
            <section className=' flex flex-col justify-between space-y-3.5'>
                <RowQuizz />
                {/* <RowQuizz />
                <RowQuizz />
                <RowQuizz />
                <RowQuizz /> */}
            </section>
        </div>
    );
}

export default DiscoverPage;
