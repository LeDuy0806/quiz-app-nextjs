'use client';

import { useState, useEffect, useRef } from 'react';

//route
import { useRouter } from 'next/navigation';

//image
import Image from 'next/image';
import bgProfile from '../../../../../public/assets/images/profile/bgProfile.jpg';

//component
import ModalProfile from 'src/components/profile/Modal';

//redux
import { useAppSelector, useAppDispatch } from 'src/app/redux/hooks';

//type
import { EditUserType } from 'src/app/variable';

//toast
import { toast } from 'react-toastify';
import { ToastOptions } from 'src/constants/toast';
import { UpdateProfileMessage } from 'src/constants/messages';

//RTK-query
import { useUpdateUserMutation } from 'src/app/redux/services/userApi';
import { updateAuth } from 'src/app/redux/slices/authSlice';

const Profile = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const mounted = useRef<boolean>(true);

    const auth = useAppSelector((state) => state.auth.authData);
    const user = auth.user;

    const [modal, setModal] = useState<boolean>(false);
    const [file, setFile] = useState();

    const [updateUser] = useUpdateUserMutation();

    const [userEdit, setUserEdit] = useState<EditUserType>({
        userName: user.userName,
        firstName: user.firstName,
        lastName: user.lastName,
        avatar: user.avatar,
        bio: user.bio
    });

    useEffect(() => {
        if (file) {
            setUserEdit({ ...userEdit, avatar: file });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [file]);

    const [language, setLanguage] = useState('');
    useEffect(() => {
        mounted.current = true;
        const value = JSON.parse(localStorage.getItem('language')!);
        setLanguage(value);
        return () => {
            mounted.current = false;
        };
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserEdit({ ...userEdit, [e.target.name]: e.target.value });
    };

    const onCloseModal = () => {
        setModal(false);
        setUserEdit(user);
    };

    const handleUpdate = async () => {
        if (file) {
            const formData = new FormData();
            formData.append('file', userEdit.avatar);
            formData.append('upload_preset', 'imagequizapp');
            formData.append('cloud_name', 'dfl3qnj7z');
            fetch(`https://api.cloudinary.com/v1_1/dfl3qnj7z/image/upload`, {
                method: 'post',
                body: formData
            })
                .then((response) => response.json())
                .then((data) => {
                    const res = updateUser({ userId: user._id, formData: { ...userEdit, avatar: data.secure_url } }).unwrap();
                    res.then((data) => {
                        dispatch(updateAuth(data));
                        setModal(false);
                        toast.success(UpdateProfileMessage.SUCCESS.UPDATE_PROFILE, ToastOptions);
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            const data = await updateUser({ userId: user._id, formData: userEdit }).unwrap();
            if (data) {
                dispatch(updateAuth(data));
                setModal(false);
                toast.success(UpdateProfileMessage.SUCCESS.UPDATE_PROFILE, ToastOptions);
            }
        }
    };

    return (
        <div className='min-w-screen min-h-screen'>
            <Image src={bgProfile} alt='' className='absolute h-2/5 w-full object-cover' />
            <div className='relative mt-16 min-h-full'>
                <div className='container mx-auto px-4'>
                    <div className='relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-xl'>
                        <div className='px-6'>
                            <div className='mt-32 px-3 py-6 sm:mt-0'>
                                <button
                                    onClick={() => router.back()}
                                    className='mb-1 rounded bg-pink-500 px-4 py-2 text-xs font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none active:bg-pink-600 sm:mr-2'
                                >
                                    {language === 'en' ? 'Back' : 'Trở về'}
                                </button>
                            </div>
                            <div className='z-[1] flex flex-wrap justify-center'>
                                <div className='w-full justify-center px-4 md:flex lg:order-2 lg:w-3/12'>
                                    <Image
                                        width={200}
                                        height={200}
                                        alt=''
                                        src={user.avatar ? user.avatar : '/assets/images/default_avatar.png'}
                                        className='-m-16  h-[200px] w-[200px] rounded-full border-none object-cover align-middle shadow-xl lg:-ml-16'
                                    />
                                </div>
                                <div className='w-full px-4 lg:order-3 lg:w-4/12 lg:self-center lg:text-right'>
                                    <div className='mt-32 px-3 py-6 sm:mt-0'>
                                        <button
                                            onClick={() => setModal(true)}
                                            className='mb-1 rounded bg-pink-500 px-4 py-2 text-xs font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-md focus:outline-none active:bg-pink-600 sm:mr-2'
                                        >
                                            {language === 'en' ? 'Edit' : 'Chỉnh sửa'}
                                        </button>
                                    </div>
                                </div>
                                <div className='w-full px-4 lg:order-1 lg:w-4/12'>
                                    <div className='flex justify-center py-4 pt-8 lg:pt-4'>
                                        <div className='mr-4 p-3 text-center'>
                                            <span className='text-blueGray-600 block text-xl font-bold uppercase tracking-wide'>{user.friends.length}</span>
                                            <span className='text-blueGray-400 text-sm'>{language === 'en' ? 'Friends' : 'Bạn bè'}</span>
                                        </div>
                                        <div className='mr-4 p-3 text-center'>
                                            <span className='text-blueGray-600 block text-xl font-bold uppercase tracking-wide'>{user.follows.length}</span>
                                            <span className='text-blueGray-400 text-sm'>{language === 'en' ? 'Follows' : 'Theo dõi'}</span>
                                        </div>
                                        <div className='p-3 text-center lg:mr-4'>
                                            <span className='text-blueGray-600 block text-xl font-bold uppercase tracking-wide'>{user.point}</span>
                                            <span className='text-blueGray-400 text-sm'>{language === 'en' ? 'Point' : 'Điểm'}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-12 text-center'>
                                <h3 className='text-blueGray-700 mb-2 text-4xl font-semibold leading-normal'>{user.userName}</h3>
                                <div className='text-blueGray-600 mb-2'>
                                    <i className='fas fa-university text-blueGray-400 mr-2 text-lg'></i>
                                    {user.userType} in {language === 'en' ? user.workspace.name.en : user.workspace.name.vn}
                                </div>
                            </div>
                            <div className='border-blueGray-200 mt-10 border-t py-10 text-center'>
                                <div className='flex flex-wrap justify-center'>
                                    <div className='w-full px-4 lg:w-9/12'>
                                        {/* <p className='text-blueGray-700 mb-4 text-lg leading-relaxed'>{user.bio}</p> */}
                                        <p className='text-blueGray-700 mb-4 text-lg leading-relaxed'>
                                            {user.bio
                                                ? user.bio
                                                : 'By focusing on making sure Hendrick Motorsports ends up in the winner’s circle at every race, Jerry has been able to put the racing certifications he earned at driver’s school to good use. Over the years, his strengths at Hendrick Motorsports have garnered some recognition for winning several races each year. Jerry may spend his days at the racetrack, but it’s the thrill of the race and the glory of coming in first that gets him up in the morning.'}
                                        </p>

                                        <a href='#pablo' className='font-normal text-pink-500'>
                                            Show more
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {modal && (
                <ModalProfile
                    setFile={setFile}
                    handleUpdate={handleUpdate}
                    handleChange={handleChange}
                    user={userEdit}
                    language={language}
                    onClose={onCloseModal}
                />
            )}
        </div>
    );
};

export default Profile;
