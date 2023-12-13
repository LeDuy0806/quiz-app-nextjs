'use client';

import { Checkbox, MenuItem, OutlinedInput, Select, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import { MdFilterAlt, MdFilterAltOff } from 'react-icons/md';
import { CategoryEnum, GradeEnum } from 'src/app/types/creator';
import { cn } from 'src/utils/tailwind.util';

type FilterDataType = {
    category: CategoryEnum[] | [];
    grade: GradeEnum[] | [];
};
function FilterContainer({
    isOpenFilterSidebar,
    setIsOpenFilterSidebar
}: {
    isOpenFilterSidebar: boolean;
    setIsOpenFilterSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const [filterData, setFilterData] = useState<FilterDataType>({
        category: [],
        grade: []
    });

    function handleChooseCategory(e: SelectChangeEvent<typeof filterData.category>): void {
        const {
            target: { value }
        } = e;

        setFilterData({
            ...filterData,
            category: typeof value === 'string' ? (value.split(',') as CategoryEnum[]) : (value as CategoryEnum[])
        });
    }

    function handleChooseGrade(e: SelectChangeEvent<typeof filterData.grade>): void {
        const {
            target: { value }
        } = e;

        setFilterData({
            ...filterData,
            grade: typeof value === 'string' ? (value.split(',') as GradeEnum[]) : (value as GradeEnum[])
        });
    }

    return (
        <div className='relative '>
            <button
                type='button'
                className='absolute left-4 top-0 mb-2 me-2 ml-2 mt-2 flex items-center rounded-lg border border-blue-700 px-5 py-2.5 text-center text-sm font-medium text-blue-700 hover:bg-blue-800 hover:text-white focus:outline-none  dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-800'
                onClick={() => setIsOpenFilterSidebar(!isOpenFilterSidebar)}
            >
                <MdFilterAlt
                    className={cn('mr-1 text-lg transition-all duration-300', {
                        hidden: isOpenFilterSidebar,
                        'opacity-0': isOpenFilterSidebar,
                        'opacity-100': !isOpenFilterSidebar
                    })}
                />
                <MdFilterAltOff
                    className={cn('mr-1 text-lg transition-all duration-300', {
                        hidden: !isOpenFilterSidebar,
                        'opacity-100': isOpenFilterSidebar,
                        'opacity-0': !isOpenFilterSidebar
                    })}
                />
                Filter
            </button>

            <div
                className={cn('absolute left-0 top-14 h-[calc(100%-3.5rem)] w-60 rounded-lg bg-white p-4 shadow transition-all duration-300', {
                    '-translate-x-full': !isOpenFilterSidebar,
                    'translate-x-0': isOpenFilterSidebar
                })}
            >
                <div className='mt-1'>
                    <h2 className='font-semibold'>Category</h2>
                    <Select
                        className='mt-2 w-full'
                        value={filterData.category}
                        multiple
                        MenuProps={{
                            PaperProps: {
                                style: {
                                    maxHeight: 160,
                                    zIndex: 300,
                                    maxWidth: 208
                                }
                            }
                        }}
                        renderValue={(selected) => selected.join(', ')}
                        onChange={handleChooseCategory}
                    >
                        {Object.values(CategoryEnum).map((categoryName, index) => (
                            <MenuItem key={index} value={categoryName} className='px-0'>
                                <Checkbox size='small' checked={filterData.category.find((item) => item === categoryName) !== undefined} />
                                {categoryName}
                            </MenuItem>
                        ))}
                    </Select>
                </div>

                <hr className='mt-2 bg-slate-700' />

                <div className='mt-1'>
                    <h2 className='font-semibold'>Grade</h2>
                    <Select
                        className='mt-2 w-full'
                        value={filterData.grade}
                        multiple
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={{
                            PaperProps: {
                                style: {
                                    maxHeight: 160,
                                    zIndex: 300,
                                    maxWidth: 208
                                }
                            }
                        }}
                        onChange={handleChooseGrade}
                    >
                        {Object.values(GradeEnum).map((grade, index) => (
                            <MenuItem key={index} value={grade} className='px-0'>
                                <Checkbox size='small' checked={filterData.grade.find((item) => item === grade) !== undefined} />
                                {grade}
                            </MenuItem>
                        ))}
                    </Select>
                </div>
            </div>
        </div>
    );
}

export default FilterContainer;
