'use client';
import { useEffect, useState } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { motion } from 'framer-motion';

// component
import QuizCard from 'src/components/library/QuizCard';

// redux
import { useAppDispatch, useAppSelector } from 'src/app/redux/hooks';
import { useGetTeacherQuizzesQuery } from 'src/app/redux/services/quizApi';
import QuizType from 'src/app/types/quizType';
import { fetchPrivateQuizzes, fetchPublicQuizzes, fetchTeacherQuizzes, filterTeacherQuizzesByName } from 'src/app/redux/slices/quizSlice';

// utils
import { cn } from 'src/utils/tailwind.util';

enum FilterEnum {
    ALL = 'all',
    PUBLIC = 'public',
    PRIVATE = 'private'
}

function LibraryPage() {
    useEffect(() => {
        document.title = 'Library - Quizzes';
    }, []);

    const dispatch = useAppDispatch();

    const authData = useAppSelector((state) => state.auth.authData);

    const filterQuizzes = useAppSelector((state) => state.quiz.FilteredTeacherQuizzes);

    const teachQuizzes = useAppSelector((state) => state.quiz.TeacherQuizzes);

    const teacherId = authData?.user?._id;

    const { data, isLoading, isSuccess, refetch } = useGetTeacherQuizzesQuery({ teacherId });

    const [filter, setFilter] = useState(FilterEnum.ALL);

    useEffect(() => {
        refetch();
        if (isSuccess && data && teachQuizzes.length === 0) {
            dispatch(fetchTeacherQuizzes(data));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, isSuccess, teachQuizzes.length]);

    if (isLoading) return <div>Loading...</div>;

    const handleChangeFilter = (event: React.MouseEvent<HTMLElement, MouseEvent>, newFilter: FilterEnum) => {
        setFilter(newFilter);

        if (newFilter === FilterEnum.ALL) {
            dispatch(fetchTeacherQuizzes(data as QuizType[]));
            return;
        }

        if (newFilter === FilterEnum.PUBLIC) {
            dispatch(fetchPublicQuizzes(data as QuizType[]));
            return;
        }

        if (newFilter === FilterEnum.PRIVATE) {
            dispatch(fetchPrivateQuizzes(data as QuizType[]));
            return;
        }
    };

    return (
        <div className='px-4 py-6'>
            <div className='w-full md:flex'>
                {/* Setting Visibility and Search Bar */}
                <ToggleButtonGroup className='mr-4 max-md:w-full' value={filter}>
                    <ToggleButton
                        color='standard'
                        value={FilterEnum.ALL}
                        className={cn('inline-block w-full rounded-l-lg md:w-20', {
                            'font-semibold': filter === FilterEnum.ALL
                        })}
                        onClick={handleChangeFilter}
                    >
                        All
                    </ToggleButton>
                    <ToggleButton
                        color='success'
                        value={FilterEnum.PUBLIC}
                        className={cn('inline-block w-full md:w-20', {
                            'font-semibold': filter === FilterEnum.PUBLIC
                        })}
                        onClick={handleChangeFilter}
                    >
                        Public
                    </ToggleButton>
                    <ToggleButton
                        color='error'
                        value={FilterEnum.PRIVATE}
                        className={cn('inline-block w-full rounded-r-lg md:w-20', {
                            'font-semibold': filter === FilterEnum.PRIVATE
                        })}
                        onClick={handleChangeFilter}
                    >
                        Private
                    </ToggleButton>
                </ToggleButtonGroup>

                {/* Search Bar */}
                <div className='w-full max-md:mt-4'>
                    <form>
                        <label htmlFor='default-search' className='sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                            Search
                        </label>
                        <div className='relative w-full'>
                            <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                                <svg
                                    aria-hidden='true'
                                    className='h-5 w-5 text-gray-500 dark:text-gray-400'
                                    fill='none'
                                    stroke='currentColor'
                                    viewBox='0 0 24 24'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
                                </svg>
                            </div>
                            <input
                                type='search'
                                id='default-search'
                                className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                                placeholder='Search Quiz...'
                                onChange={(e) => {
                                    dispatch(filterTeacherQuizzesByName(e.target.value));
                                }}
                            />
                        </div>
                    </form>
                </div>
            </div>

            {/* List Quiz Card */}
            <ul className='mt-4 flex flex-wrap items-center justify-between gap-6 max-xl:gap-4'>
                {filterQuizzes.map((quiz, i) => (
                    <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 0.4,
                            delay: 0.1 + i * 0.075
                        }}
                        key={`${i}`}
                        className='w-full'
                    >
                        <QuizCard key={quiz._id} quiz={quiz} />
                    </motion.div>
                ))}
            </ul>
        </div>
    );
}

export default LibraryPage;
