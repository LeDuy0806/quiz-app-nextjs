'use client';
import { useParams } from 'next/navigation';

type QuizParams = {
    id: string;
};

function QuizDetail() {
    const { id } = useParams() as QuizParams;

    return <div>QuizDetail {id}</div>;
}

export default QuizDetail;
