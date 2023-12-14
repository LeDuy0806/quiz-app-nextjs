import Image from 'next/image';
import { CarlaImg, LisaImg, PhillipImg } from '../../../../public/assets/images/landing';

//animation
import { motion } from 'framer-motion';

import { useLocalStorage } from 'src/hooks/useLocalStorage';
interface ManageProps {
    language: string;
}
const Manage = (props: ManageProps) => {
    const { language } = props;
    // const [language] = useLocalStorage('language');
    return (
        <motion.section
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.1, delay: 1.2 }}
            id='manager'
            className='mx-auto block w-full max-w-[1440px] rounded bg-transparent px-[3.13rem] pb-[4em] pt-20'
        >
            <div className='relative z-[1] flex flex-col items-center rounded-[2.5em] bg-white px-0 pt-[5.63em]'>
                <div className='absolute left-0 right-0 top-0 my-[-3.13em] flex h-[60em] flex-col justify-center overflow-hidden md:flex-row'>
                    <div className='bottom-20 w-[22.69em] md:absolute'>
                        <Image src={PhillipImg} alt='' className='relative inline-block h-full w-full max-w-full object-contain  md:object-fill' />
                    </div>
                    <div className='left-0  top-[5em] w-[26.88em] md:absolute'>
                        <Image src={LisaImg} alt='' className='relative inline-block h-full w-full max-w-full object-contain  md:object-fill' />
                    </div>
                    <div className='right-0 top-0 w-[26.13em] md:absolute'>
                        <Image src={CarlaImg} alt='' className='relative inline-block h-full w-full max-w-full object-contain  md:object-fill' />
                    </div>
                </div>
                <div className='sticky top-[7.5em] mb-[8em] flex flex-col items-center gap-y-[0.5em] text-center'>
                    <div className='my-0 text-[4em] font-extrabold leading-[1] tracking-tight'>
                        Quizzes is Over Power
                        <br />
                    </div>
                    <div className='rounded-[60px] bg-bgBlueLight px-[30px] pb-[16px] pt-0 text-textBlue'>
                        <div className='my-0 font-sans text-[4em] font-extrabold leading-[1] tracking-tight'>
                            {language === 'en' ? 'project management' : 'quản lý dự án'}
                        </div>
                    </div>
                </div>
                <div className='sticky top-[38vh] z-[5] flex h-[24.8em] w-full items-center'>
                    <div className='absolute left-[1.13em] flex min-w-[16px] flex-col items-center gap-y-[6px]'></div>
                </div>
            </div>
        </motion.section>
    );
};

export default Manage;
