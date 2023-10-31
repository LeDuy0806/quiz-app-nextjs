'use client';

import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

//component
import LeaderBoard from './LeaderBoard';

//icons
import { BiArrowBack } from 'react-icons/bi';
import { TypeAnswer } from 'src/app/variable';

//redux
import { useGetLeaderBoardQuery } from 'src/app/redux/services/leaderBoardApi';
import { AnswerLeaderBoardResultType, CurrentLeaderBoardType } from 'src/app/types/leaderboardType';

interface CheckLeaderBoardProps {
    listOfIndex: number[];
    handleBack: () => void;
    leaderBoardId: string;
}

const CheckLeaderBoard = (props: CheckLeaderBoardProps) => {
    const { data, isSuccess } = useGetLeaderBoardQuery({ leaderBoardId: props.leaderBoardId });

    return (
        isSuccess && (
            <PaginatedItems
                itemsPerPage={1}
                leaderBoardResultList={data?.currentLeaderBoard!}
                length={props.listOfIndex.length}
                listOfIndex={props.listOfIndex}
                handleBack={props.handleBack}
            />
        )
    );
};

interface PaginatedItemsProps {
    itemsPerPage: number;
    leaderBoardResultList: CurrentLeaderBoardType[];
    length: number;
    listOfIndex: number[];
    handleBack: () => void;
}

const PaginatedItems = (props: PaginatedItemsProps) => {
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + props.itemsPerPage;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = props.listOfIndex.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(props.length / props.itemsPerPage);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * props.itemsPerPage) % props.listOfIndex.length;
        // console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
        setItemOffset(newOffset);
    };

    // console.log(props.leaderBoardResultList[currentItems[0]].leaderBoardList);

    return (
        // leaderBoardResult={props.leaderBoardResultList[currentItems[0]]
        <div className='relative w-screen h-screen flex flex-col '>
            <LeaderBoard leaderBoardResult={props.leaderBoardResultList[currentItems[0]].leaderBoardList} questionIndex={0} />
            <div className='z-[1] absolute left-[50%] translate-x-[-50%] bottom-[10em]'>
                <ReactPaginate
                    previousLabel='< prev'
                    nextLabel='Next >'
                    renderOnZeroPageCount={null}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    onPageChange={handlePageClick}
                    containerClassName='w-full h-[40px] style-none flex justify-center item-center gap-3'
                    previousLinkClassName='p-2 rounded-[5px] border border-solid border-bgPurpleLight cursor-pointer text-textPurple hover:text-textWhite hover:bg-bgPurple font-bold'
                    nextLinkClassName='p-2 rounded-[5px] border border-solid border-bgPurpleLight cursor-pointer text-textPurple hover:text-textWhite hover:bg-bgPurple font-bold'
                    activeClassName='h-full text-textWhite bg-bgPurple font-bold'
                    pageClassName='rounded-full px-4 font-bold'
                />
            </div>
            <button
                className='absolute w-[60px] h-[60px] flex items-center justify-center rounded-full bg-bgPurple top-[1em] left-[1em] text-[40px] cursor-pointer'
                onClick={props.handleBack}
            >
                <BiArrowBack />
            </button>
        </div>
    );
};

export default CheckLeaderBoard;
