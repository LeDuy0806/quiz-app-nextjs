// 'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';

//images
import Image from 'next/image';
import { loadingImg } from '../../../public/assets/images/auth';

//routes
import { useRouter } from 'next/navigation';

//animation
import { motion } from 'framer-motion';

//Redux
import { useAppDispatch } from 'src/app/redux/hooks';
import { useRegisterUserMutation } from 'src/app/redux/services/authApi';

//type
import { SignUpType } from 'src/app/variable';
import { MdCloudUpload } from 'react-icons/md';

//icons
import { AiOutlineCheck } from 'react-icons/ai';
import { logIn } from 'src/app/redux/slices/authSlice';

interface FormTypeProps {
    setShowFormUserType: (state: boolean) => void;
    setShowUploadImage: (state: boolean) => void;
    handleChangeForm: (e: React.ChangeEvent<HTMLInputElement> | any) => void;
    formData: SignUpType;
    avatar: string;
    setLoading: () => void;
}

const UploadAvatar = (props: FormTypeProps) => {
    const route = useRouter();
    const dispatch = useAppDispatch();

    const [file, setFile] = useState<string>();
    const [skip, setSkip] = useState<boolean>(false);
    const [loadingUpload, setLoadingUpload] = useState<boolean>(false);

    const [Register, { data, isSuccess, isLoading }] = useRegisterUserMutation();

    const handleSignUp = () => {
        Register(props.formData);
    };

    useEffect(() => {
        if (isSuccess && data) {
            props.setLoading();
            dispatch(logIn(data));
            route.push('/home');
        }
    }, [isSuccess, data]);

    const uploadImage = (file: any) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'imagequizapp');
        formData.append('cloud_name', 'dfl3qnj7z');
        fetch(`https://api.cloudinary.com/v1_1/dfl3qnj7z/image/upload`, {
            method: 'post',
            body: formData
        })
            .then((response) => response.json())
            .then((data) => {
                setLoadingUpload(false);
                props.handleChangeForm({
                    target: { name: 'avatar', value: data?.secure_url }
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className='absolute left-[50%] top-[50%] min-h-full w-[760px] translate-x-[-50%] translate-y-[-50%] overflow-hidden rounded-[50px] bg-bgBlackLight px-[210px] py-[75px] mdl:min-h-[600px]'>
            <div className='flex flex-col items-center gap-8 px-6 text-center'>
                <motion.h2
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className='text-center text-[1.5rem] font-bold leading-8 tracking-tight text-textWhite'
                >
                    Choose your image
                </motion.h2>
                <motion.p
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className='min-w-[400px] text-center text-sm text-textGray'
                >
                    Give your server a personality with a name and an image. You can always change it later.
                </motion.p>
                <motion.div initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.3 }} className='px-6'>
                    <div className='flex items-center justify-center'>
                        <div className='flex flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-textGray px-6 py-10 text-center'>
                            <MdCloudUpload className='m-auto h-12 w-12 text-textWhite' />
                            <label className='relative flex w-[16rem] cursor-pointer flex-col justify-center text-sm font-semibold text-textBlueLight'>
                                Choose files or drag and drop
                                <input
                                    className='absolute m-[-1px] h-[1px] w-[1px] overflow-hidden whitespace-nowrap p-0'
                                    type='file'
                                    id='avatar'
                                    name='avatar'
                                    accept='image/png,image/jpeg'
                                    onChange={(e: any) => {
                                        props.handleChangeForm({
                                            target: {
                                                name: 'avatar',
                                                value: ''
                                            }
                                        });
                                        setFile(e.target.files[0]);
                                    }}
                                />
                            </label>

                            <div className='leading-6 text-textGray'>Image(4MB)</div>
                            {file && (
                                <button
                                    className={clsx(
                                        `flex items-center justify-center rounded-xl  px-6 py-2 text-sm font-bold leading-7 text-textWhite`,
                                        props.avatar ? 'bg-textGreen' : 'bg-bgBlue hover:font-extrabold'
                                    )}
                                    onClick={() => {
                                        setLoadingUpload(true);
                                        uploadImage(file);
                                    }}
                                >
                                    {!props.avatar ? (
                                        loadingUpload ? (
                                            <Image src={loadingImg} alt='' className='h-7 w-7' />
                                        ) : (
                                            'Upload File'
                                        )
                                    ) : (
                                        <AiOutlineCheck className='h-[20px] w-[20px] font-extrabold' />
                                    )}
                                </button>
                            )}
                        </div>
                    </div>
                </motion.div>

                <motion.button
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className='block w-full py-4 text-sm font-bold text-textWhite hover:rounded-[18px] hover:text-[15px]'
                    onClick={() => {
                        setSkip(!skip);
                    }}
                >
                    Skip
                </motion.button>

                <motion.button
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className='mb-4 block w-full py-4 text-sm font-bold text-textWhite hover:rounded-[18px] hover:text-[15px]'
                    onClick={() => {
                        props.setShowFormUserType(true);
                        props.setShowUploadImage(false);
                    }}
                >
                    Back
                </motion.button>
            </div>
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className='absolute bottom-0 left-0 right-0 flex flex-row justify-end bg-bgGrayLight px-6 py-6'
            >
                {/* <motion.button
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    className={clsx(
                        `text-sm bg-textGray px-6 py-2 rounded-xl text-textWhite font-bold cursor-default leading-7`,
                        (props.avatar || skip) &&
                            'hover:font-black bg-textGreen cursor-pointer'
                    )}
                    onClick={handleSignUp}
                >
                    {isLoading ? (
                        <Image
                            src={loadingImg}
                            alt=''
                            className='w-7 h-7 self-center'
                        />
                    ) : (
                        'Finish'
                    )}
                </motion.button> */}
                {(props.avatar || skip) && (
                    <motion.button
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.6 }}
                        className='cursor-pointer  rounded-xl bg-textGreen px-6 py-2 text-sm font-bold leading-7 text-textWhite hover:font-black'
                        onClick={handleSignUp}
                    >
                        {isLoading ? <Image src={loadingImg} alt='' className='h-7 w-7 self-center' /> : 'Finish'}
                    </motion.button>
                )}
            </motion.div>
        </div>
    );
};

export default UploadAvatar;
