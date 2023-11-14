'use client';
import { useParams } from 'next/navigation';
import ListQuestions from 'src/components/QuizDetail/ListQuestions';
import QuizInfo from 'src/components/QuizDetail/QuizInfo';

type QuizParams = {
    id: string;
};

function QuizDetail() {
    const { id } = useParams() as QuizParams;

    return (
        <div className='flex flex-grow overflow-auto bg-gray-100'>
            <section className='flex flex-col w-full'>
                <div id='quiz-detail-page-container' className='relative flex justify-center w-full p-2'>
                    <div className='lgl:min-w-[40rem] w-[calc(100vw-32px)] lgl:max-w-[800px] xl:w-[calc(100vw-384px)]'>
                        <QuizInfo />
                        <ListQuestions />
                    </div>
                    <div className=''></div>
                </div>
            </section>
        </div>
    );
}

export default QuizDetail;
