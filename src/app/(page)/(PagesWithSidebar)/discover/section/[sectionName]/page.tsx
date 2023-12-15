'use client';

import { useParams } from 'next/navigation';
import { ListQuiz } from 'src/data';
import QuizType, { CreatorType } from 'src/app/types/quizType';
import Image from 'next/image';
import { FaChevronRight } from 'react-icons/fa';
import QuizSectionCard from 'src/components/discover/SectionPage/QuizSectionCard';
import { motion } from 'framer-motion';
import { useState } from 'react';
import useDebounce from 'src/hooks/useDebounce';
import QuizPreviewContainer from 'src/components/discover/SectionPage/QuizPreviewContainer';
import CreateQuizButton from 'src/components/Creator/CreateQuizButton';
import { BsPlusLg } from 'react-icons/bs';
import { useGetPublicQuizesQuery } from 'src/app/redux/services/quizApi';
import Link from 'next/link';

function Page() {
    const { sectionName } = useParams();

    const [paginationOption, setPaginationOption] = useState({
        page: 1,
        pageSize: 10
    });
    const [quizDataPreview, setQuizDataPreview] = useState<QuizType | null>(null);
    const quizDataPreviewdebounceValue = useDebounce(quizDataPreview, 500);

    const { data, isSuccess, isLoading, isError } = useGetPublicQuizesQuery(paginationOption);

    const ListQuizResult = data?.data;

    const handleSetQuizDataPreview = (quizData: QuizType) => {
        setQuizDataPreview(quizData);
    };
    if (isError) return <div className='w-full items-center justify-center text-red-600'>Error</div>;
    if (isLoading) return <div className='w-full items-center justify-center text-blue-600'>Loading...</div>;

    return (
        <div className=' h-[calc(100vh-4rem)] w-full overflow-hidden bg-gray-100'>
            <div className='relative flex h-full w-full flex-col overflow-auto p-4 md:p-8'>
                {/* Page header */}
                <div className='bg-light flex flex-shrink-0 items-center justify-start rounded-bl-lg rounded-br-lg bg-white p-2 shadow'>
                    <div className='mr-2 h-20 w-20 shrink-0 rounded-full'>
                        <div className='relative h-full w-full rounded-full'>
                            <Image src={'https://cf.quizizz.com/img/course-assets/title_imgs/bts_templates.png'} alt='' fill sizes='100%' />
                        </div>
                    </div>
                    <div>
                        <h2 className='mb-1 h-3.5 rounded text-xs text-gray-700 opacity-60'>
                            <span>Discover popular quizzes</span>
                        </h2>
                        <div className='flex items-center rounded text-xl font-bold text-gray-700'>
                            <div className='mr-2 cursor-pointer underline'>
                                <span>Discover</span>
                            </div>
                            <span className='mr-2 '>
                                <FaChevronRight className='text-xs' />
                            </span>
                            <span>{sectionName}</span>
                        </div>
                    </div>
                </div>

                <div className='my-4 flex flex-shrink-0 items-center justify-between rounded bg-lilac/30 px-1 py-2 text-xs mdl:hidden'>
                    <span>Pick the perfect quiz or make your own</span>
                    <CreateQuizButton
                        buttonElement={
                            <button
                                className={
                                    'flex items-center justify-center rounded-lg bg-purple-700 px-1 py-0.5 text-sm font-medium text-white hover:bg-purple-800 focus:outline-none dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'
                                }
                            >
                                <BsPlusLg className='h-3 w-3 rounded-full bg-white text-lilac' />
                                <span className='ml-1'>Create</span>
                            </button>
                        }
                    />
                </div>

                <div className=' flex w-full justify-between mdl:mt-4'>
                    <div className='flex w-full flex-col  gap-1 md:gap-2 xl:w-7/12'>
                        {ListQuizResult &&
                            ListQuizResult.map((quiz, index) => {
                                return (
                                    <motion.div
                                        initial={{ x: 20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{
                                            duration: 0.4,
                                            delay: 0.1 + index * 0.05
                                        }}
                                        key={`${index}`}
                                        className='h-full w-full'
                                    >
                                        <Link href={'/details/' + quiz._id}>
                                            <QuizSectionCard
                                                key={quiz._id + index}
                                                category={quiz.category.name}
                                                grade={quiz.grade.name}
                                                image={quiz.backgroundImage}
                                                numberOfQuestion={quiz.numberOfQuestions}
                                                title={quiz.name}
                                                author={quiz.creator as CreatorType}
                                                onMouseEnter={() => handleSetQuizDataPreview(quiz)}
                                            />
                                        </Link>
                                    </motion.div>
                                );
                            })}
                    </div>
                    <div className='sticky top-0 hidden h-[calc(100vh-10rem)] w-2/5 overflow-hidden rounded border  border-gray-100 px-2 py-3 shadow-md xl:block'>
                        <div className='h-full w-full overflow-auto rounded'>
                            {quizDataPreviewdebounceValue ? (
                                <QuizPreviewContainer quizData={quizDataPreviewdebounceValue} />
                            ) : (
                                <div className='flex h-full w-full items-center justify-center rounded border border-dashed border-l-slate-200 bg-slate-100'>
                                    <span className='text-gray-500'>Hover on a quiz to see the preview</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Page;
