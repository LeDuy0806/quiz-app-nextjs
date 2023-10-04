import React from 'react';

const ThumbNailActived = () => {
    return (
        <div className='relative flex h-44 min-w-[160px] flex-col items-center justify-start rounded-lg bg-white transition duration-200 ease-out hover:shadow-xl sm:h-52 sm:max-h-56 sm:min-w-[180px] md:hover:scale-105'>
            <div className='flex h-[60vh] w-full flex-col items-start justify-between'>
                <img
                    alt='Image'
                    className='max-h-16 w-full rounded-lg rounded-b-3xl border-inherit object-fill'
                    src='https://cf.quizizz.com/game/img/share/quizizz_share1.png'
                />
                <h2 className='max-h-11  w-full px-2 text-base text-black'>
                    Logic Gates & Truth Tables
                </h2>

                <div className='mt-4 flex flex-row px-2'>
                    <span className='text-[12px] text-gray-500'>By: </span>
                    <span className='text-[12px] text-gray-900'>
                        Mr.Ryan Truong
                    </span>
                </div>
            </div>
            <div className='mt-4 h-14 sm:mt-6 sm:h-12'>Accuracy</div>
        </div>
    );
};

export default ThumbNailActived;
