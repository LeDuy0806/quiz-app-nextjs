'use client';
import { useRef, useEffect, useState } from 'react';

//images
import Image from 'next/image';

import clsx from 'clsx';

//animation
import { motion } from 'framer-motion';
import { studentsImg, teacherImg } from '../../../public/assets/images/auth';

//const
import schools from 'src/constants/school';

interface WorkSpaceProps {
    setShowFormUserType: (state: boolean) => void;
    setShowFormWorkSpace: (state: boolean) => void;
    setShowUploadImage: (state: boolean) => void;
    handleChangeForm: (e: React.ChangeEvent<HTMLInputElement> | any) => void;
    handleSignUp: () => void;
    workspace: any;
}

const FormWorkSpace = (props: WorkSpaceProps) => {
    const mounted = useRef<boolean>(true);
    const [language, setLanguage] = useState('');
    const handleContinue = () => {
        if (props.workspace) {
            props.setShowFormWorkSpace(false);
            props.setShowUploadImage(true);
        }
    };

    const [select, setSelect] = useState<number>(-1);

    useEffect(() => {
        mounted.current = true;
        const value = JSON.parse(localStorage.getItem('language')!);
        setLanguage(value);
        return () => {
            mounted.current = false;
        };
    }, []);

    return (
        <div className='absolute left-[50%] top-[50%] max-h-screen w-[760px] translate-x-[-50%] translate-y-[-50%] overflow-hidden rounded-[50px] bg-bgBlackLight px-[210px]  font-sans mdl:min-h-[600px]'>
            <div className='flex h-full w-full flex-col items-center gap-y-2'>
                <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.2 }} className='text-[2rem]'>
                    👨‍💻
                </motion.div>
                <motion.h1
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className='mb-[15px] break-words px-2 text-center text-[2rem] font-black leading-[1.3em] text-textWhite mdl:w-[560px]'
                >
                    {language === 'en' ? `Where are you working ?` : 'Bạn đang công tác nơi nào ?'}
                </motion.h1>

                {schools.map((school, index) => (
                    <School
                        key={index}
                        workspace={props.workspace}
                        index={index}
                        select={select}
                        setSelect={() => setSelect(index)}
                        language={language}
                        school={school}
                        handleChangeForm={props.handleChangeForm}
                    />
                ))}

                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    className='flex h-[60px] w-full flex-col items-center justify-center'
                >
                    <button
                        className={clsx(
                            `mt-2 flex w-[160px] max-w-[200px] items-center justify-center rounded-[20px] bg-bgBlue py-[12px] text-center text-[16px] text-textWhite`,
                            props.workspace
                                ? 'cursor-pointer bg-bgBlue font-semibold hover:py-[14px] hover:font-bold'
                                : 'cursor-default bg-textGray font-semibold'
                        )}
                        onClick={handleContinue}
                    >
                        {language === 'en' ? 'Continue' : 'Tiếp theo'}
                    </button>
                </motion.div>

                <motion.button
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                    className='block w-full py-4 text-sm font-bold text-textWhite hover:rounded-[18px] hover:text-[15px]'
                    onClick={() => {
                        props.setShowFormWorkSpace(false);
                        props.setShowFormUserType(true);
                    }}
                >
                    {language === 'en' ? 'Back' : 'Trở về'}
                </motion.button>
            </div>
        </div>
    );
};

interface SchoolProps {
    workspace: any;
    index: number;
    handleChangeForm: (e: React.ChangeEvent<HTMLInputElement> | any) => void;
    school: any;
    language: string;
    select: number;
    setSelect: () => void;
}
const School = (props: SchoolProps) => {
    const { workspace, index, select, setSelect, handleChangeForm, school, language } = props;

    return (
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className={clsx(
                `flex min-h-[50px] w-[400px] flex-1 cursor-pointer flex-row items-center justify-between rounded-[20px] bg-bgBlackType px-4 outline-none hover:bg-bgBlackHover mdl:w-[600px]`,
                // select === index && 'border-[2px] border-bgBlue',
                (workspace === school.name.en || workspace === school.name.vn) && 'border-[2px] border-bgBlue'
            )}
            onClick={() => {
                handleChangeForm({
                    target: { name: 'workspace', value: school.name.en }
                });
                setSelect();
            }}
        >
            <div className='flex flex-row items-center justify-center gap-x-2'>
                <Image alt='' src={school.logo} className='h-[30px] w-[30px] rounded-full' width={30} height={30} />
            </div>
            <div className='max-w-[220px] mdl:max-w-full'>
                <p className='text-white'>{language === 'en' ? school.name.en : school.name.vn}</p>
            </div>
        </motion.div>
    );
};

export default FormWorkSpace;
