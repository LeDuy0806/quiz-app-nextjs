'use client';
import { useState } from 'react';
import FilterContainer from 'src/components/Search/FilterContainer';
import SearchResults from 'src/components/Search/SearchResults';
import { cn } from 'src/utils/tailwind.util';

function SearchPage() {
    const [isOpenFilterSidebar, setIsOpenFilterSidebar] = useState(false);

    return (
        <div className='relative flex h-[calc(100vh-4rem)] bg-slate-100 '>
            <FilterContainer isOpenFilterSidebar={isOpenFilterSidebar} setIsOpenFilterSidebar={setIsOpenFilterSidebar} />
            <div
                className={cn(' h-full w-full transition-all duration-300 xl:py-6 xl:pr-6', {
                    'ml-64': isOpenFilterSidebar,
                    'ml-36': !isOpenFilterSidebar
                })}
            >
                <SearchResults />
            </div>
        </div>
    );
}

export default SearchPage;
