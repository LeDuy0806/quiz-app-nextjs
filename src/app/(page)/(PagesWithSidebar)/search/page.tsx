'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useGetQuizzesBySearchQuery } from 'src/app/redux/services/quizApi';
import QuizType from 'src/app/types/quizType';
import LiquidLoading from 'src/components/LiquidLoading';
import FilterContainer from 'src/components/Search/FilterContainer';
import SearchContainer from 'src/components/Search/SearchContainer';
import SearchResults from 'src/components/Search/SearchResults';
import { cn } from 'src/utils/tailwind.util';

function SearchPage() {
    const searchParams = useSearchParams();

    const searchName = searchParams.get('name');
    const searchTags = searchParams.get('tags');
    useEffect(() => {
        document.title = `${searchName || 'Quizzes'} | Search Result`;
    }, [searchName, searchTags]);

    const { data, isLoading, isSuccess } = useGetQuizzesBySearchQuery({ searchName: searchName || '', tags: searchTags || '' });

    const [isOpenFilterSidebar, setIsOpenFilterSidebar] = useState(false);

    return (
        <div className='relative flex h-[calc(100vh-4rem)] bg-slate-100 max-lgl:flex-col '>
            <div className='mt-4 px-8 md:px-24 lgl:hidden'>
                <SearchContainer />
            </div>

            <FilterContainer isOpenFilterSidebar={isOpenFilterSidebar} setIsOpenFilterSidebar={setIsOpenFilterSidebar} />

            <div
                className={cn('h-[calc(100%-14rem)] w-full p-4 transition-all duration-300 lgl:h-full xl:pb-6 xl:pr-6', {
                    'lgl:ml-36': isOpenFilterSidebar
                    // 'lgl:ml-36': !isOpenFilterSidebar
                })}
            >
                <div className='w-2/3 px-8 max-lgl:hidden'>
                    <SearchContainer />
                </div>
                {isLoading && (
                    <div className='flex items-center justify-center'>
                        <LiquidLoading />
                    </div>
                )}
                <SearchResults quizzes={data as QuizType[]} />
            </div>
        </div>
    );
}

export default SearchPage;
