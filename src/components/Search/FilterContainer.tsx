'use client';

import { Checkbox, MenuItem, OutlinedInput, Select, SelectChangeEvent } from '@mui/material';
import { useState } from 'react';
import { MdFilterAlt, MdFilterAltOff } from 'react-icons/md';
import { CategoryEnum, GradeEnum } from 'src/constants/enum';
import { cn } from 'src/utils/tailwind.util';
import Modal from 'react-modal';
import useWindowDimensions from 'src/hooks/useWindowDimensions';
import { FaTimes } from 'react-icons/fa';
import { useAppSelector } from 'src/app/redux/hooks';
import { convertStringToArray, flattenArray } from 'src/utils/array.utils';
import { useRouter } from 'next/navigation';

const customStylesModal: any = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        zIndex: 298,
        cursor: ''
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        borderRadius: '10px',
        padding: '0',
        border: 'none',
        outline: 'none',
        zIndex: 299
    }
};
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
    const router = useRouter();
    const { searchName, searchTags } = useAppSelector((state) => state.search);

    const { width } = useWindowDimensions();

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

    const handleSearch = () => {
        if (searchName || searchTags) router.push(`/search?name=${searchName}&tags=${flattenArray(convertStringToArray(searchTags)).join(',')}`);
    };

    const handleCloseModal = () => {
        setIsOpenFilterSidebar(false);
    };

    return (
        <div className='relative flex items-center justify-between max-lgl:w-full lgl:items-start'>
            <button
                type='button'
                className=' mb-2 me-2 ml-4 mt-2 flex items-center rounded-lg border border-blue-700 px-4 py-2.5 text-center text-base text-blue-700 hover:bg-blue-800 hover:text-white focus:outline-none dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white   md:ml-8  lgl:ml-2 lgl:px-5'
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

            <div className='flex w-full items-center justify-center'>
                <button
                    onClick={() => {
                        handleSearch();
                    }}
                    className='-translate-x-1/2 rounded-full bg-indigo-600 px-6 py-3.5 text-white duration-150 hover:bg-indigo-500 active:bg-indigo-700 lgl:hidden'
                >
                    Find
                </button>
            </div>

            <div
                className={cn('absolute left-0 top-16 z-50 w-60 rounded-lg bg-white p-4 pb-8 shadow transition-all duration-300 max-lgl:hidden', {
                    '-translate-x-full': !isOpenFilterSidebar,
                    'translate-x-4': isOpenFilterSidebar,
                    'scale-50': !isOpenFilterSidebar,
                    'scale-100': isOpenFilterSidebar
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

            <Modal isOpen={width < 1025 && isOpenFilterSidebar} style={customStylesModal} onRequestClose={handleCloseModal}>
                <div className='w-screen sml:w-[80vw] mdl:w-[66vw] '>
                    <div className='flex w-full items-center justify-between p-4'>
                        <h1 className='text-3xl font-bold'>Filter</h1>

                        <div className='flex items-center justify-center rounded-lg bg-gray-300 p-3'>
                            <FaTimes className='text-2xl' onClick={handleCloseModal} />
                        </div>
                    </div>
                    <div className='px-6'>
                        <button className='rounded-lg bg-indigo-600 px-3 py-1.5 text-sm text-white duration-150 hover:bg-indigo-700 active:shadow-lg'>
                            <FaTimes className='mr-1 inline-block' />
                            <span>Clear All</span>
                        </button>
                    </div>
                    <div className='h-full w-full p-6'>
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
                                            zIndex: 300
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
                                            zIndex: 300
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
            </Modal>
        </div>
    );
}

export default FilterContainer;
