import Image from 'next/image';
import { threePeopleImg, likeHandImg } from '../../../../public/assets/images/landing';

interface HeaderProps {
    language: string;
}

const Middle = (props: HeaderProps) => {
    const { language } = props;
    return (
        <div className='relative flex self-center px-6 pt-10 font-sans mdl:block'>
            <div className='relative z-[5] mx-auto max-w-[70em] rounded-[2.5em] bg-gradient-middlefooter px-2'>
                <div className='relative z-[1] flex flex-col items-end justify-center rounded-[2.5em] px-[2em] py-[5rem] text-textWhite'>
                    <div className='absolute left-[-4em] w-[14em] mdl:left-[-23em] mdl:mt-[2.5rem] mdl:w-[50em]'>
                        <Image src={likeHandImg} alt='' className='relative inline-block h-full w-full max-w-full object-cover' />
                        <div></div>
                    </div>
                    <div className='relative z-[1] flex w-full max-w-[44em] flex-col gap-y-[2rem]'>
                        <div>
                            <h2 className='mx-0 text-[4em] font-extrabold leading-[1.3] tracking-[-0.025em] text-textWhite'>
                                {/* Join game together */}
                                {language === 'en' ? 'Join game together' : 'Chơi cùng nhau'}
                            </h2>
                        </div>
                        <div className='relative flex items-end'>
                            <Image src={threePeopleImg} alt='' className='h-[30] w-[140px] items-center justify-center' />
                            <h2 className='mx-0 text-[4em] font-extrabold leading-[1.3] tracking-[-0.025em] text-textWhite'>
                                {/* with Quizzes */}
                                {language === 'en' ? 'with Quizzes' : 'với Quizzes'}
                            </h2>
                        </div>
                        <p className='my-0 inline-block text-[1.38em] leading-[1.4]'>
                            <strong className='font-bold'>
                                {/* Try it 14 days for free */}
                                {language === 'en' ? ' Try it 14 days for free' : 'Thử ngay với 14 ngày miễn phí'}
                            </strong>{' '}
                            {language === 'en' ? ' - no credit card required.' : ' - không yêu cầu thẻ'}
                        </p>
                        <div className='max-w-[620px]'>
                            <div className='relative flex min-w-[22em] max-w-full flex-1 flex-row items-center overflow-hidden rounded-[1rem] border-textPurpleBorder bg-white py-1  pl-1'>
                                <input
                                    className='focus:shadow-outline w-full appearance-none rounded px-3 py-2 leading-tight text-gray-700 focus:outline-none'
                                    id='email'
                                    type='text'
                                    placeholder={language === 'en' ? 'Enter your email' : 'Nhập email của bạn'}
                                ></input>
                                <a
                                    className='relative right-2 z-[1] flex min-h-[3.13em] min-w-[9em] cursor-pointer items-center justify-center gap-x-[0.5rem] overflow-hidden rounded-2xl bg-bgPurple px-4 font-bold text-textWhite'
                                    href='mailto:binbin18092003@gmail.com'
                                >
                                    <p> {language === 'en' ? 'Try now' : 'Thử ngay'}</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='absolute bottom-[1px] left-[1px] right-[1px] top-[1px] z-[-1] rounded-[40px] bg-gradient-bgmiddlefooter'></div>
            </div>
        </div>
    );
};

export default Middle;
