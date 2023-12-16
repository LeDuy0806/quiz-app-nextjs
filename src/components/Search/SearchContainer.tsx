import { InputAdornment, TextField } from '@mui/material';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { useAppDispatch, useAppSelector } from 'src/app/redux/hooks';
import { setSeacrchTags, setSearchName } from 'src/app/redux/slices/searchSlice';
import { convertStringToArray, flattenArray } from 'src/utils/array.utils';

export default function SearchContainer() {
    const dispath = useAppDispatch();
    const router = useRouter();
    const { searchName, searchTags } = useAppSelector((state) => state.search);

    const handleChangeName = (event: ChangeEvent<HTMLInputElement>) => {
        dispath(setSearchName(event.target.value.replace(/[`~.<>;':"\/\[\]\|{}()=_+-]/, '')));
    };

    const handleChangeTags = (event: ChangeEvent<HTMLInputElement>) => {
        dispath(setSeacrchTags(event.target.value.replace(/[`~.<>;':"\/\[\]\|{}()=_+-]/, '')));
    };

    const handleSearch = () => {
        if (searchName || searchTags) router.push(`/search?name=${searchName}&tags=${flattenArray(convertStringToArray(searchTags)).join(',')}`);
    };

    return (
        <div className='mb-2 flex w-full flex-col max-lgl:mt-2 max-lgl:space-y-4 lgl:flex-row lgl:space-x-2'>
            <TextField
                type='search'
                label='Name'
                placeholder='Let find a quiz...'
                value={searchName}
                onChange={handleChangeName}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSearch();
                }}
                color='success'
                className='w-full'
                InputProps={{
                    endAdornment: (
                        <InputAdornment position='end' className='rounded bg-lilac px-3 py-5'>
                            <IoSearchOutline className='text-white' />
                        </InputAdornment>
                    )
                }}
            />
            <TextField
                type='search'
                label='Tags'
                placeholder={'Examle: Math, English, ...'}
                value={searchTags}
                onChange={handleChangeTags}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSearch();
                }}
                className='w-full'
                // InputProps={{
                //     endAdornment: (
                //         <InputAdornment position='end' className='rounded bg-lilac px-3 py-5'>
                //             <IoSearchOutline className='text-white' />
                //         </InputAdornment>
                //     )
                // }}
            />
            <button
                onClick={() => handleSearch()}
                className=' rounded-full bg-indigo-600 px-6 py-2 text-white duration-150 hover:bg-indigo-500 active:bg-indigo-700 max-lgl:hidden'
            >
                Find
            </button>
        </div>
    );
}
