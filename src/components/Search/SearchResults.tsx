import QuizCardResult from './QuizCardResult';
import { useEffect, useState } from 'react';
import QuizType, { CreatorType } from 'src/app/types/quizType';
import useDebounce from 'src/hooks/useDebounce';
import QuizPreviewContainer from './QuizPreviewContainer';

function SearchResults({ quizzes }: { quizzes: QuizType[] }) {
    const [quizDataPreview, setQuizDataPreview] = useState<QuizType | null>(null);

    const quizDataPreviewdebounceValue = useDebounce(quizDataPreview, 500);

    const handleSetQuizDataPreview = (quizData: QuizType) => {
        setQuizDataPreview(quizData);
    };

    useEffect(() => {
        setQuizDataPreview(null);
    }, [quizzes]);

    return (
        <div className='flex h-full w-full lgl:h-[92%]'>
            <div className='mr-2 flex w-full flex-col gap-2 lgl:w-1/2'>
                <div className='w-full rounded-t border-x border-t border-slate-200 bg-white p-2 text-xl font-semibold shadow'>Resulst:</div>
                <div className='flex h-full flex-col gap-2 overflow-auto px-0.5 transition-all'>
                    {quizzes && quizzes.length !== 0 ? (
                        quizzes.map((item, index) => (
                            <QuizCardResult
                                key={index}
                                id={item._id}
                                title={item.name}
                                numberOfQuestion={item.numberOfQuestions}
                                image={item.backgroundImage}
                                category={item.category.name}
                                grade={item.grade.name}
                                author={(item.creator as CreatorType).firstName + ' ' + (item.creator as CreatorType).lastName}
                                onMouseEnter={() => handleSetQuizDataPreview(item)}
                            />
                        ))
                    ) : (
                        <div className='flex h-full w-full items-center justify-center rounded border border-dashed border-l-slate-200 bg-slate-100'>
                            <span className='text-gray-500'>No result</span>
                        </div>
                    )}
                </div>
            </div>
            <div className='flex w-1/2 flex-col rounded-none border border-slate-200 bg-white p-2 max-lgl:hidden'>
                {quizDataPreviewdebounceValue ? (
                    <QuizPreviewContainer quizData={quizDataPreviewdebounceValue} />
                ) : (
                    <div className='flex h-full w-full items-center justify-center rounded border border-dashed border-l-slate-200 bg-slate-100'>
                        <span className='text-gray-500'>Hover on a quiz to see the preview</span>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SearchResults;
