'use client';

import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

//component
import QuestionResult from '../QuestionResult';

//icons
import { BiArrowBack } from 'react-icons/bi';
import { TypeAnswer } from 'src/app/variable';

interface CheckResultProps {
    quiz: any;
    answer: TypeAnswer[];
    listOfIndex: number[];
    handleBack: () => void;
}

const CheckResult = (props: CheckResultProps) => {
    const arrayAnswer = props.answer.map((item: any) => item.answers);

    return (
        <PaginatedItems
            itemsPerPage={1}
            quiz={props.quiz}
            length={props.quiz.questionList.length}
            handleBack={props.handleBack}
            arrayAnswer={arrayAnswer}
            listOfIndex={props.listOfIndex}
        />
    );
};

interface PaginatedItemsProps {
    itemsPerPage: number;
    quiz: any;
    length: number;
    arrayAnswer: any;
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

    return (
        <div className='relative flex h-screen w-screen flex-col '>
            <QuestionResult
                currentItems={currentItems}
                questionData={props.quiz?.questionList[itemOffset]}
                lengthQuiz={props.quiz?.questionList.length}
                answerQuestion={props.arrayAnswer[itemOffset][0]}
            />
            <div className='absolute bottom-[8em] left-[50%] z-[1] translate-x-[-50%]'>
                <ReactPaginate
                    previousLabel='< Prev'
                    nextLabel='Next >'
                    renderOnZeroPageCount={null}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    onPageChange={handlePageClick}
                    containerClassName='w-full h-[40px] style-none flex justify-center items-center gap-3'
                    previousLinkClassName='p-2 rounded-[5px] border border-solid border-bgPurple/40 cursor-pointer text-textPurple hover:text-textWhite hover:bg-bgPurple font-bold'
                    nextLinkClassName='p-2 rounded-[5px] border border-solid border-bgPurple/40 cursor-pointer text-textPurple hover:text-textWhite hover:bg-bgPurple font-bold'
                    activeClassName='h-full text-textWhite bg-bgPurple font-bold'
                    pageClassName='rounded-full px-4 font-bold flex items-center justify-center'
                />
            </div>
            <button
                className='absolute left-[1em] top-[1em] flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-full bg-bgPurple text-[40px]'
                onClick={props.handleBack}
            >
                <BiArrowBack />
            </button>
        </div>
    );
};

export default CheckResult;
