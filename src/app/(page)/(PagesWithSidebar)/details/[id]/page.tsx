'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import QuizType from 'src/app/types/quizType';
import ListQuestions from 'src/components/QuizDetail/ListQuestions';
import QuizInfo from 'src/components/QuizDetail/QuizInfo';
import Suggestions from 'src/components/QuizDetail/Suggestions';
import Quiz from 'src/data';

type QuizParams = {
    id: string;
};

function QuizDetail() {
    const { id } = useParams() as QuizParams;

    const [quizData, setQuizData] = useState<QuizType | null>(null);

    useEffect(() => {
        setQuizData(Quiz);
    }, []);

    return (
        <div className='flex flex-grow overflow-auto bg-gray-100'>
            <section className='flex flex-col w-full'>
                <div id='quiz-detail-page-container' className='relative flex justify-center w-full p-2 max-xl:flex-col max-xl:items-center'>
                    <div className='lgl:min-w-[40rem] w-[calc(100%-32px)] lgl:max-w-[800px] xl:w-[calc(100%-384px)]'>
                        <QuizInfo quizData={quizData} />
                        <ListQuestions listQuestionsData={quizData?.questionList} numberOfQuestions={quizData?.numberOfQuestions} />
                    </div>
                    <div className='max-xl:w-full flex flex-col'>
                        <Suggestions />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default QuizDetail;
