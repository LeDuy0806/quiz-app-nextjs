import React from 'react';

const ThumbNailInactived = () => {
    return (
        <div className='flex h-44 min-w-[200px] flex-col items-center justify-start rounded-lg bg-white transition duration-200 ease-out hover:shadow-xl sm:h-52 sm:max-h-56 sm:min-w-[220px] md:hover:scale-105'>
            <div className='flex h-44 w-full flex-col items-start justify-between'>
                <div className='relative'>
                    <img
                        alt='Image'
                        className='max-h-30 w-full rounded-lg rounded-b-3xl border-inherit object-fill'
                        src='https://cf.quizizz.com/game/img/share/quizizz_share1.png'
                    />
                    <div className='absolute bottom-3 z-0'>
                        <div className='flex flex-row justify-between'>
                            <div className='absolute left-2 h-4 w-14  rounded-md bg-[#F2F2F2] text-center text-xs'>
                                18 Qs
                            </div>

                            <div className='absolute right-6 h-4 w-14  rounded-md bg-[#F2F2F2] text-center text-xs'>
                                69k plays
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className='mb-4 max-h-11  w-full px-2 text-lg text-black sm:mb-1'>
                    Logic Gates & Truth Tables
                </h2>
            </div>
        </div>
    );
};

export default ThumbNailInactived;
