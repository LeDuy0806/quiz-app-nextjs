'use client';
import { useEffect } from 'react';
import RowQuizz from 'src/components/discover/RowQuizz';
import SearchBar from 'src/components/discover/SearchBar';

function DiscoverPage() {
    useEffect(() => {
        document.title = 'Discover - Quizzes';
    }, []);

    return (
        <div className='p-4 scrollbar-w-[2px]'>
            <div className='w-full'>
                <div className='w-full flex items-center flex-col'>
                    <SearchBar />
                </div>
                <section className=' flex flex-col justify-between space-y-3.5'>
                    <RowQuizz />
                    <RowQuizz />
                    <RowQuizz />
                    <RowQuizz />
                    <RowQuizz />
                </section>
            </div>
        </div>
    );
}

export default DiscoverPage;
