import Link from 'next/link';
import Image from 'next/image';
import { logoImg } from '../../../../public/assets/images/landing';

interface BottomProps {
    language: string;
}
const Bottom = (props: BottomProps) => {
    const { language } = props;

    return (
        <div className='w-full py-[5rem]'>
            <div className='flex w-full flex-col justify-between mdl:flex-row'>
                <div className='flex max-w-[20rem] flex-col items-center self-center text-textGray mdl:items-start mdl:self-start'>
                    <Link href='' className='mb-6 flex h-[2.25rem] flex-row items-center gap-2'>
                        <Image src={logoImg} alt='' className='object-fit h-[40px] w-[40px]' />
                        <span className='text-xl font-extrabold text-textWhite'>Quizzes</span>
                    </Link>
                    <div className='self-center py-4'>
                        <p className='text-center text-[1em] leading-snug mdl:text-left'>
                            {language === 'en'
                                ? 'We are fully compliant with the EU General Data Protection Regulation (GDPR) and guarantee ISO 27001 certified server locations in   Europe.'
                                : 'Chúng tôi hoàn toàn tuân thủ Quy định bảo vệ dữ liệu chung của EU (GDPR) và đảm bảo các vị trí máy chủ được chứng nhận ISO 27001 ở Châu Âu.'}
                        </p>
                    </div>
                    <div className='mt-auto flex flex-col items-start gap-x-[1.25rem] gap-y-[1.25rem]'>
                        <a href='https://apps.apple.com/us/app/awork-organize-your-work/id1466945183?ls=1' target='_blank' className='inline-block max-w-full'>
                            <Image
                                src='https://global-uploads.webflow.com/6418f5bfe5bc0a3438109c1d/641bcd0e5b92d3a0923684eb_iosBadge.svg'
                                loading='lazy'
                                alt=''
                                className='c-image cc-contain'
                                width={200}
                                height={200}
                            />
                        </a>
                        <a href='https://play.google.com/store/apps/details?id=io.awork' target='_blank' className='inline-block max-w-full'>
                            <Image
                                src='https://global-uploads.webflow.com/6418f5bfe5bc0a3438109c1d/641bcd0e86e0191aa861c6e8_iosBadge-1.svg'
                                loading='lazy'
                                alt=''
                                className='c-image cc-contain'
                                width={200}
                                height={200}
                            />
                        </a>
                    </div>
                </div>

                <div className='max-w-screen grid auto-cols-[1fr] grid-cols-auto grid-rows-auto gap-x-[70px] gap-y-[40px] px-3'>
                    <div className='flex flex-1 flex-col items-start gap-y-[1rem]'>
                        <div className='c-footer_label'>
                            <div className='text-[1.13em] font-bold leading-[1.45] text-textWhite'>Quizzes</div>
                        </div>
                        <a href='/' aria-current='page' className='text-textGray'>
                            {language === 'en' ? 'Home' : 'Trang chủ'}
                        </a>
                        <a href='/pricing' className='text-textGray'>
                            {language === 'en' ? 'Pricing' : 'Giá trị'}
                        </a>
                        <a href='/roadmap' className='text-textGray'>
                            {language === 'en' ? 'Roadmap' : 'Biểu đồ'}
                        </a>
                        <div className='c-footer_label cc-sub-label'>
                            <div className='text-[1.13em] font-bold leading-[1.45] text-textWhite'>{language === 'en' ? 'Features' : 'Tính năng'}</div>
                        </div>
                        <a href='/product/project-management' className='text-textGray'>
                            {language === 'en' ? ' Project management' : 'Quản lý dự án'}
                        </a>
                        <a href='/product/team-scheduling' className='text-textGray'>
                            {language === 'en' ? 'Team scheduling' : 'Lịch trình đội'}
                        </a>
                        <a href='/product/time-tracking' className='text-textGray'>
                            {language === 'en' ? 'Time tracking' : 'Thời gian'}
                        </a>
                        <div className='c-footer_label cc-sub-label'>
                            <div className='text-[1.13em] font-bold leading-[1.45] text-textWhite'>{language === 'en' ? 'Solutions' : 'Biện pháp'}</div>
                        </div>
                        <a href='/solutions/agencies' className='text-textGray'>
                            {language === 'en' ? 'Agencies' : 'Bảo mật'}
                        </a>
                        <a href='/solutions/consulting' className='text-textGray'>
                            {language === 'en' ? 'Consultancies' : 'Tiêu thụ'}
                        </a>
                        <a href='/solutions/tech' className='text-textGray'>
                            {language === 'en' ? 'Sotfware' : 'Phần mềm'} &amp; {language === 'en' ? 'IT' : 'Thông tin'}
                        </a>
                        <a href='/solutions/public-services' className='text-textGray'>
                            {language === 'en' ? 'Public Services' : 'Thiết bị cộng đồng'}
                        </a>
                    </div>

                    <div className='flex flex-1 flex-col items-start gap-y-[1rem]'>
                        <div className='c-footer_label'>
                            <div className='text-[1.13em] font-bold leading-[1.45] text-textWhite'> {language === 'en' ? 'About' : 'Thông tin'}</div>
                        </div>
                        <a href='/about-us' className='text-textGray'>
                            {language === 'en' ? 'About us' : 'Về chúng tôi'}
                        </a>
                        <a href='/about-us' className='text-textGray'>
                            {language === 'en' ? 'Job' : 'Công việc'}
                        </a>
                        <a href='/about-us' className='text-textGray'>
                            {language === 'en' ? 'Press' : 'Điểm nhấn'}
                        </a>
                        <a href='/about-us' className='text-textGray'>
                            {language === 'en' ? 'Blog' : 'Sưu tập'}
                        </a>
                        <a href='/work-happiness-report' className='text-textGray'>
                            {language === 'en' ? 'Work Happiness Report' : 'Báo cáo công việc'}
                        </a>
                        <a href='/legal-and-privacy/imprint' className='text-textGray'>
                            {language === 'en' ? 'Imprint' : 'Dấu ấn'}
                        </a>
                        <a href='/legal-and-privacy' className='text-textGray'>
                            {language === 'en' ? 'Legal' : 'Pháp luật'} &amp; {language === 'en' ? 'data privacy' : 'Chính sách'}
                        </a>
                        <a href='/legal-and-privacy/imprint' className='text-textGray'>
                            {language === 'en' ? 'Imprint' : 'Dấu ấn'}
                        </a>
                    </div>

                    <div className='flex flex-1 flex-col items-start gap-y-[1rem]'>
                        <div className='c-footer_label'>
                            <div className='text-[1.13em] font-bold leading-[1.45] text-textWhite'> {language === 'en' ? 'Support' : 'Hỗ trợ'}</div>
                        </div>
                        <a href='/webinars' className='text-textGray'>
                            {language === 'en' ? 'Webinar' : 'Hội thảo'}
                        </a>
                        <a href='http://support.awork.io/en/' target='_blank' className='text-textGray'>
                            {language === 'en' ? 'Help center' : 'Trung tâm hỗ trợ'}
                        </a>
                        <a href='https://developers.awork.com' target='_blank' className='text-textGray'>
                            {language === 'en' ? 'Developer portal' : 'Nhà phát triển'}
                        </a>
                        <a href='http://status.awork.io' target='_blank' className='text-textGray'>
                            {language === 'en' ? 'System status' : 'Trạng thái hệ thống'}
                        </a>
                        <div className='c-footer_contact'>
                            <a href='tel:+4940238312300' className='c-footer_contact-link w-inline-block'>
                                <div className='text-textGray'>+49 40 238 312 300</div>
                            </a>
                            <a href='mailto:binbin18092003@gmail.com' className='c-footer_contact-link w-inline-block'>
                                <div className='text-textGray'>quizuitkq16@gmail.com</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bottom;
