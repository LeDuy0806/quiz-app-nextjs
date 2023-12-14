'use client';

import React, { useState, useEffect, useRef } from 'react';

//components bootstrap
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";

//TensorFlow
import * as tf from '@tensorflow/tfjs';
import * as qna from '@tensorflow-models/qna'; //BERT

export default function Home() {
    const passageRef = useRef<any>(null);
    const questionRef = useRef<any>(null);

    const [answer, setAnswer] = useState<any>([]);
    const [model, setModel] = useState<any>(null);

    //Load TensorFlow Model
    // const loadModel = async () => {
    //     await tf.getBackend();
    //     const loadedModel = await qna.load();
    //     setModel(loadedModel);
    //     console.log('Model');
    // };

    // useEffect(() => {
    //     loadModel();
    // }, []);

    // const handleClick = async (e: any) => {
    // if (e.which === 13 && model !== null) console.log('Question submitted');
    // const passage = passageRef.current.value;
    // const question = questionRef.current.value;

    // const answer = await model.findAnswers(question, passage);
    // setAnswer(answer);
    // console.log(passage, question);
    // };

    return (
        <main className='flex min-h-screen flex-col items-center justify-between'>
            <div className='h-full w-full'>
                {false === null ? (
                    <div>Model Loading</div>
                ) : (
                    <div className='flex items-center gap-4'>
                        <div className='flex h-[500px] w-3/5 flex-col items-center gap-4 py-24 pl-10'>
                            <div className='w-full'>
                                <label className='mb-2 block text-xl font-bold text-gray-900 dark:text-white'>Your Context</label>
                                <textarea
                                    ref={passageRef}
                                    id='message'
                                    rows={20}
                                    className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                                    placeholder='Write your context here...'
                                />
                            </div>

                            <div className='w-full'>
                                <label className='sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white'>Search</label>
                                <div className='relative'>
                                    <div className='pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3'>
                                        <svg
                                            className='h-4 w-4 text-gray-500 dark:text-gray-400'
                                            aria-hidden='true'
                                            xmlns='http://www.w3.org/2000/svg'
                                            fill='none'
                                            viewBox='0 0 20 20'
                                        >
                                            <path
                                                stroke='currentColor'
                                                stroke-linecap='round'
                                                stroke-linejoin='round'
                                                stroke-width='2'
                                                d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                                            />
                                        </svg>
                                    </div>
                                    <input
                                        ref={questionRef}
                                        type='search'
                                        id='default-search'
                                        className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                                        placeholder='Enter your question...'
                                        required
                                    />
                                    <button
                                        // onClick={handleClick}
                                        className='absolute bottom-2.5 end-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                                    >
                                        Answer
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='w-2/5'>
                            <label className='mb-2 block text-xl font-bold text-gray-900 dark:text-white'>Result:</label>
                            {answer
                                ? answer?.map((ans: any, index: any) => (
                                      <div key={index}>
                                          <b>Answer {index + 1} - </b>
                                          {ans.text} {ans.core}
                                      </div>
                                  ))
                                : ''}
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
