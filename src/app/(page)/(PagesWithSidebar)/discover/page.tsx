'use client';
import { useEffect, useState } from 'react';
import { useGetDiscoverQuizzesQuery } from 'src/app/redux/services/quizApi';
import QuizType from 'src/app/types/quizType';
import RowQuizz from 'src/components/discover/RowQuizz';
import SearchBar from 'src/components/discover/SearchBar';

function DiscoverPage() {
    const [data, setData] = useState<any | null>(null);

    useEffect(() => {
        document.title = 'Discover - Quizzes';
    }, []);

    const { data: result, isSuccess } = useGetDiscoverQuizzesQuery();

    useEffect(() => {
        if (isSuccess && result) {
            setData(result);
        }
    }, [result, isSuccess]);

    return (
        <div className='p-4 scrollbar-w-[2px]'>
            <div className='w-full'>
                <div className='flex w-full flex-col items-center'>
                    <SearchBar />
                </div>
                <section className=' flex flex-col justify-between space-y-3.5'>
                    {result && Object.keys(result).map((key) => <RowQuizz key={key} CategoryName={key} ListQuiz={result[key]} />)}
                </section>
            </div>
        </div>
    );
}

export default DiscoverPage;
