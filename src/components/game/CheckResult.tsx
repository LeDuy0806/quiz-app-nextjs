'use client';

import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';

//component
import QuestionResult from './QuestionResult';

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
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = props.listOfIndex.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(props.length / props.itemsPerPage);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * props.itemsPerPage) % props.listOfIndex.length;
        console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
        setItemOffset(newOffset);
    };

    return (
        <div className='relative w-screen h-screen flex flex-col '>
            <QuestionResult
                currentItems={currentItems}
                questionData={props.quiz?.questionList[itemOffset]}
                lengthQuiz={props.quiz?.questionList.length}
                answerQuestion={props.arrayAnswer[itemOffset][0]}
            />
            <div className='z-[1] absolute left-[50%] translate-x-[-50%] bottom-[8em]'>
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

export default CheckResult;
