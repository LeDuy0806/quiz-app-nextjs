import Image from 'next/image';
import {
    fourPeopleImg,
    textIconSubImg,
    profileImg,
    bgPurpleImg,
    uitLogoImg,
    joyWorkImg,
    thuhienImg,
    phuoctriImg,
    minhnhatImg,
    vanduyImg,
    phuoclongImg
} from '../../../../public/assets/images/landing';

interface HeaderProps {
    language: string;
}
const Header = (props: HeaderProps) => {
    const { language } = props;
    return (
        <div className='relative flex flex-col items-center text-center'>
            <div className='w-full'>
                <Image src={joyWorkImg} alt='' className='relative h-full w-full object-contain' />
            </div>
            <div className='relative flex flex-col items-center justify-center gap-y-10 text-center'>
                <h2 className='my-0 font-sans text-[2em] font-extrabold leading-[1px] tracking-[-0.025em] text-textWhite mdl:text-[4em]'>
                    {language === 'en' ? 'Trusted by more than' : 'Được sự tin tưởng hơn'}
                </h2>
                <div className='flex flex-col items-center gap-4 mdl:flex-row'>
                    <span className='relative bg-gradient-titleheaderfooter bg-clip-text text-center font-sans text-[3em] font-bold text-transparent'>
                        {language === 'en' ? `2,500 membership` : '2500 thành viên'}
                    </span>
                    <span className=''>
                        <Image
                            src={fourPeopleImg}
                            alt=''
                            className='mb-[-0.25em] inline-block overflow-hidden rounded-[200px] bg-contain bg-no-repeat object-contain'
                        />
                    </span>
                </div>
            </div>
            <div className='relative z-[1] mt-[7em] flex justify-between gap-x-5 px-20 mdl:flex-row '>
                <div className='flex flex-col flex-wrap items-center justify-center gap-5 mdl:flex-row'>
                    <div className='min-w-[400px] mdl:max-w-[32%]'>
                        <div className='relative flex flex-col gap-y-[1.5em] rounded-[2.5em] bg-bgDark p-[1.5em] text-left shadow-boxheaderfooter'>
                            <div className='flex gap-x-[1em]'>
                                <Image src={thuhienImg} alt='' className='inline-block h-[3.75em] w-[3.75em] max-w-full rounded-full object-cover' />
                                <div className='block text-left'>
                                    <div className='my-0 inline-block text-[1.38em] font-bold leading-[1.45] text-textWhite'>Lê Thị Thu Hiền</div>
                                    <div className=' my-0 font-sans leading-[1.45] text-[0.88] text-textWhite'>
                                        {language === 'en' ? `University of Social Sciences and Humanities` : 'Đại học khoa học xã hội và nhân văn'}
                                    </div>
                                </div>
                                <Image src={uitLogoImg} alt='' className='absolute right-[1.25em] top-[1em] h-[2.5em] w-auto object-contain text-white' />
                            </div>
                            <p className='text-left text-white'>
                                {language === 'en'
                                    ? `Quiz offers an outstanding user experience, with its intuitive interface and smooth navigation.`
                                    : 'Quiz mang đến trải nghiệm người dùng vượt trội với giao diện trực quan và điều hướng mượt mà.'}
                            </p>
                        </div>
                    </div>

                    <div className='min-w-[400px] mdl:max-w-[32%]'>
                        <div className='relative flex flex-col gap-y-[1.5em] rounded-[2.5em] bg-bgDark p-[1.5em] text-left shadow-boxheaderfooter'>
                            <div className='flex gap-x-[1em]'>
                                <Image src={profileImg} alt='' className='inline-block h-[3.75em] w-[3.75em] max-w-full rounded-full object-cover    ' />
                                <div className='block text-left'>
                                    <div className='my-0 inline-block text-[1.38em] font-bold leading-[1.45] text-textWhite'>Trần Phước Anh Quốc</div>
                                    <div className=' my-0 font-sans leading-[1.45] text-[0.88] text-textWhite'>
                                        {language === 'en' ? `University Of Information Technology` : 'Đại học Công nghệ thông tin'}
                                    </div>
                                </div>
                                <Image src={uitLogoImg} alt='' className='absolute right-[1.25em] top-[1em] h-[2.5em] w-auto object-contain text-white' />
                            </div>
                            <p className='text-left text-white'>
                                {language === 'en'
                                    ? `Quiz impresses with its robust feature set. From customizable quizzes to detailed analytics, it covers everything needed for
                                    effective learning and assessment. 💪`
                                    : 'Quiz gây ấn tượng với bộ tính năng mạnh mẽ. Từ các câu đố tùy chỉnh đến phân tích chi tiết, nó bao gồm mọi thứ cần thiết để học tập và đánh giá hiệu quả. 💪'}
                            </p>
                        </div>
                    </div>

                    <div className='min-w-[400px] mdl:max-w-[32%]'>
                        <div className='relative flex flex-col gap-y-[1.5em] rounded-[2.5em] bg-bgDark p-[1.5em] text-left shadow-boxheaderfooter'>
                            <div className='flex gap-x-[1em]'>
                                <Image src={phuoctriImg} alt='' className='inline-block h-[3.75em] w-[3.75em] max-w-full rounded-full' />
                                <div className='block text-left'>
                                    <div className='my-0 inline-block text-[1.38em] font-bold leading-[1.45] text-textWhite'>Nguyễn Phước Trí</div>
                                    <div className='my-0 font-sans leading-[1.45] text-[0.88] text-textWhite'>
                                        {language === 'en' ? `University Of Information Technology` : 'Đại học Công nghệ thông tin'}
                                    </div>
                                </div>
                                <Image src={uitLogoImg} alt='' className='absolute right-[1.25em] top-[1em] h-[2.5em] w-auto object-contain text-white' />
                            </div>
                            <p className='text-left text-white'>
                                {language === 'en'
                                    ? `This software is not only engaging but also highly educational. It's a fantastic tool for learning and testing one's knowledge.`
                                    : 'Phần mềm này không chỉ hấp dẫn mà còn mang tính giáo dục cao. Đó là một công cụ tuyệt vời để học tập và kiểm tra kiến ​​thức của một người.'}
                            </p>
                        </div>
                    </div>

                    <div className='min-w-[400px] mdl:max-w-[32%]'>
                        <div className='relative flex flex-col gap-y-[1.5em] rounded-[2.5em] bg-bgDark p-[1.5em] text-left shadow-boxheaderfooter'>
                            <div className='flex gap-x-[1em]'>
                                <Image src={vanduyImg} alt='' className='inline-block h-[3.75em] w-[3.75em] max-w-full rounded-full' />
                                <div className='block text-left'>
                                    <div className='my-0 inline-block text-[1.38em] font-bold leading-[1.45] text-textWhite'>Lê Văn Duy</div>
                                    <div className='my-0 font-sans leading-[1.45] text-[0.88] text-textWhite'>
                                        {language === 'en' ? `University Of Information Technology` : 'Đại học Công nghệ thông tin'}
                                    </div>
                                </div>
                                <Image src={uitLogoImg} alt='' className='absolute right-[1.25em] top-[1em] h-[2.5em] w-auto object-contain text-white' />
                            </div>
                            <p className='text-left text-white'>
                                {language === 'en'
                                    ? `The ability to customize quizzes to align with specific educational goals and branding is a standout feature.`
                                    : 'Khả năng tùy chỉnh các câu đố để phù hợp với mục tiêu giáo dục và thương hiệu cụ thể là một tính năng nổi bật.'}
                            </p>
                        </div>
                    </div>

                    <div className='min-w-[400px] mdl:max-w-[32%]'>
                        <div className='relative flex flex-col gap-y-[1.5em] rounded-[2.5em] bg-bgDark p-[1.5em] text-left shadow-boxheaderfooter'>
                            <div className='flex gap-x-[1em]'>
                                <Image src={phuoclongImg} alt='' className='inline-block h-[3.75em] w-[3.75em] max-w-full rounded-full' />
                                <div className='block text-left'>
                                    <div className='my-0 inline-block text-[1.38em] font-bold leading-[1.45] text-textWhite'>Trần Phước Long</div>
                                    <div className='my-0 font-sans leading-[1.45] text-[0.88] text-textWhite'>
                                        {language === 'en' ? `University Of Information Technology ` : 'Đại học Công nghệ thông tin'}
                                    </div>
                                </div>
                                <Image src={uitLogoImg} alt='' className='absolute right-[1.25em] top-[1em] h-[2.5em] w-auto object-contain text-white' />
                            </div>
                            <p className='text-left text-white'>
                                {language === 'en'
                                    ? `The support for various media types, such as images and videos, adds a dynamic element to the quizzes, making learning more
                                    engaging. 💪`
                                    : 'Việc hỗ trợ nhiều loại phương tiện khác nhau, chẳng hạn như hình ảnh và video, sẽ thêm yếu tố động vào các câu đố, khiến việc học trở nên hấp dẫn hơn. 💪'}
                            </p>
                        </div>
                    </div>
                    <div className='min-w-[400px] mdl:max-w-[32%]'>
                        <div className='relative flex flex-col gap-y-[1.5em] rounded-[2.5em] bg-bgDark p-[1.5em] text-left shadow-boxheaderfooter'>
                            <div className='flex gap-x-[1em]'>
                                <Image src={minhnhatImg} alt='' className='inline-block h-[3.75em] w-[3.75em] max-w-full rounded-full' />
                                <div className='block text-left'>
                                    <div className='my-0 inline-block text-[1.38em] font-bold leading-[1.45] text-textWhite'>Nguyễn Minh Nhật</div>
                                    <div className=' my-0 font-sans leading-[1.45] text-[0.88] text-textWhite'>
                                        {language === 'en' ? `University Of Information Technology` : 'Đại học Công nghệ thông tin'}
                                    </div>
                                </div>
                                <Image src={uitLogoImg} alt='' className='absolute right-[1.25em] top-[1em] h-[2.5em] w-auto object-contain text-white' />
                            </div>
                            <p className='text-left text-white'>
                                {language === 'en'
                                    ? `Incorporating gamification elements in quizzes adds an element of fun and motivation to the learning process.`
                                    : 'Việc kết hợp các yếu tố gamification trong các câu đố sẽ tạo thêm yếu tố thú vị và động lực cho quá trình học tập.'}
                            </p>
                        </div>
                    </div>
                </div>
                <Image src={bgPurpleImg} alt='' className='absolute bottom-[-20%] inline-block h-auto w-[47em] max-w-full opacity-[0.65]' />
            </div>
        </div>
    );
};

export default Header;
