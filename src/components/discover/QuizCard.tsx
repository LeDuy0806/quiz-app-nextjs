import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import QuizType, { CreatorType } from 'src/app/types/quizType';

const QuizCard = ({ QuizData }: { QuizData: QuizType }) => {
    const router = useRouter();

    const handleClickQuizCard = () => {
        router.push(`/details/${QuizData._id}`);
    };

    return (
        <div
            onClick={handleClickQuizCard}
            className='quiz-card mb-4 h-60 max-w-[11rem] flex-shrink-0 cursor-pointer rounded-lg bg-white text-left ring-1 ring-gray-300 hover:shadow-lg md:mb-8 md:h-72 md:max-w-[15rem] md:hover:scale-[1.02]'
        >
            <div className='h-full overflow-hidden rounded-t-lg'>
                <div>
                    <div className='relative h-28 w-44 object-cover md:h-40 md:w-60'>
                        <Image
                            src={QuizData.backgroundImage ? QuizData.backgroundImage : 'https://cf.quizizz.com/game/img/share/quizizz_share1.png'}
                            alt='Image'
                            className='h-full w-full'
                            fill
                            objectFit='cover'
                        />
                    </div>
                </div>

                <div className='flex h-30 flex-col px-2.5 pb-3.5 pt-2.5'>
                    <div className='flex items-center'>
                        <div className='inline-flex items-center rounded-full bg-gray-100 px-1.5 text-[10px] font-thin '>
                            <span>QUIZ</span>
                        </div>
                    </div>
                    <div className='mb-2 mt-2 text-sm md:text-base '>
                        <h2 className='line-clamp-1 max-h-12 w-full text-ellipsis text-base font-semibold text-black '>{QuizData.name}</h2>

                        <div className=' flex flex-row '>
                            <span className='text-[12px] text-gray-500'>By: </span>
                            <span className='text-[12px] text-gray-900'>
                                {(QuizData.creator as CreatorType).firstName + ' ' + (QuizData.creator as CreatorType).lastName}
                            </span>
                        </div>
                    </div>

                    <div className='mt-auto flex text-[10px] md:text-xs'>
                        <div className='mr-1.5'>{QuizData.numberOfQuestions + ' Questions'}</div>
                        {/* <div className='ml-1.5 mr-1.5'>300 plays</div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizCard;
