import Image from 'next/image';
import {
    threePeopleImg,
    likeHandImg
} from '../../../../public/assets/images/landing';

const Middle = () => {
    return (
        <div className='relative flex self-center mdl:block pt-10 px-6'>
            <div className='relative z-[5] px-2 max-w-[70em] rounded-[2.5em] mx-auto bg-gradient-middlefooter'>
                <div className='relative z-[1] text-textWhite rounded-[2.5em] flex flex-col justify-center items-end py-[5rem] px-[2em]'>
                    <div className='absolute w-[14em] left-[-4em] mdl:w-[50em] mdl:mt-[2.5rem] mdl:left-[-23em]'>
                        <Image
                            src={likeHandImg}
                            alt=''
                            className='relative w-full h-full max-w-full object-cover inline-block'
                        />
                        <div></div>
                    </div>
                    <div className='relative z-[1] w-full max-w-[44em] flex flex-col gap-y-[2rem]'>
                        <div>
                            <h2 className='text-textWhite font-extrabold leading-[1.3] mx-0 text-[4em] tracking-[-0.025em]'>
                                Join game together
                            </h2>
                        </div>
                        <div className='flex relative items-end'>
                            <Image
                                src={threePeopleImg}
                                alt=''
                                className='w-[140px] h-[30] items-center justify-center'
                            />
                            <h2 className='text-textWhite font-extrabold leading-[1.3] mx-0 text-[4em] tracking-[-0.025em]'>
                                with Quizzes
                            </h2>
                        </div>
                        <p className='my-0 text-[1.38em] leading-[1.4] inline-block'>
                            <strong className='font-bold'>
                                Try it 14 days for free
                            </strong>{' '}
                            - no credit card required.
                        </p>
                        <div className='max-w-[620px]'>
                            <div className='flex flex-row flex-1 max-w-full min-w-[22em] relative bg-white rounded-[1rem] items-center pl-1 py-1 overflow-hidden  border-textPurpleBorder'>
                                <input
                                    className='appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    id='email'
                                    type='text'
                                    placeholder='Enter your email'
                                ></input>
                                <a
                                    className='z-[1] relative w-[7em] min-h-[3.13em] flex gap-x-[0.5rem] text-textWhite bg-bgPurple items-center justify-center font-bold overflow-hidden rounded-2xl px-4 cursor-pointer right-2'
                                    href='mailto:binbin18092003@gmail.com'
                                >
                                    <p>Try now</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='z-[-1] absolute bg-gradient-bgmiddlefooter top-[1px] bottom-[1px] left-[1px] right-[1px] rounded-[40px]'></div>
            </div>
        </div>
    );
};

export default Middle;
