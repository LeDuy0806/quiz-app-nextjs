'use client';
import RowQuizz from 'src/components/ShowQuiz/RowQuizz';

function DiscoverPage() {
    return (
        <div className='p-4'>
            <section className=' flex flex-col justify-between space-y-3.5'>
                <RowQuizz />
                <RowQuizz />
                <RowQuizz />
                <RowQuizz />
                <RowQuizz />
            </section>
        </div>
    );
}

export default DiscoverPage;
