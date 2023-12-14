'use client';

//type
import { EditUserType } from 'src/app/variable';

//animation
import { motion } from 'framer-motion';

interface ModalProfileProps {
    setFile: (file: any) => void;
    handleUpdate: () => void;
    user: EditUserType;
    handleChange: (e: any) => void;
    language: string;
    onClose: () => void;
}

const ModalProfile = (props: ModalProfileProps) => {
    const { setFile, handleUpdate, handleChange, user, language, onClose } = props;

    return (
        <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='absolute left-[50%] top-[50%] max-h-full w-full max-w-md translate-x-[-50%] translate-y-[-50%] rounded-sm bg-purple-400 p-2'
        >
            <div className='relative rounded-lg bg-white shadow dark:bg-gray-900'>
                <div className='flex items-center justify-between rounded-t border-b p-4 dark:border-gray-600 md:p-5'>
                    <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>{language === 'en' ? 'Edit Profile' : 'Chỉnh sửa trang cá nhân'}</h3>
                    <button
                        onClick={onClose}
                        className='ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white'
                    >
                        <svg className='h-3 w-3' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 14'>
                            <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6' />
                        </svg>
                        <span className='sr-only'>Close modal</span>
                    </button>
                </div>
                <div className='p-4 md:p-5'>
                    <div className='mb-4 grid grid-cols-2 gap-4'>
                        <div className='col-span-2 sm:col-span-1'>
                            <label className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>First Name</label>
                            <input
                                onChange={(e) => handleChange(e)}
                                value={user.firstName}
                                type='text'
                                name='firstName'
                                id='firstName'
                                className='focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400'
                                placeholder='firstName'
                            />
                        </div>
                        <div className='col-span-2 sm:col-span-1'>
                            <label className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>Last Name</label>
                            <input
                                onChange={(e) => handleChange(e)}
                                value={user.lastName}
                                type='text'
                                name='lastName'
                                id='lastName'
                                className='focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400'
                                placeholder='lastName'
                            />
                        </div>
                        <div className='col-span-2'>
                            <label className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>User Name</label>
                            <input
                                onChange={(e) => handleChange(e)}
                                value={user.userName}
                                type='text'
                                name='userName'
                                id='userName'
                                className='focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400'
                                placeholder='User Name'
                            />
                        </div>
                        <div className='col-span-2'>
                            <label className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>Avatar</label>
                            <input
                                onChange={(e: any) => setFile(e.target.files[0])}
                                type='file'
                                name='avatar'
                                id='avatar'
                                accept='image/png,image/jpeg'
                                className='focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400'
                                placeholder='Avatar'
                            />
                        </div>
                        <div className='col-span-2'>
                            <label className='mb-2 block text-sm font-medium text-gray-900 dark:text-white'>
                                {language === 'en' ? 'Bio Description' : 'Mô tả Bio'}
                            </label>
                            <textarea
                                onChange={(e) => handleChange(e)}
                                value={user.bio}
                                rows={5}
                                id='description'
                                name='bio'
                                className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
                                placeholder='Write Bio description here'
                            ></textarea>
                        </div>
                    </div>
                    <div className='w-full text-right'>
                        <button
                            onClick={handleUpdate}
                            className=' inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-right text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                        >
                            <svg className='-ms-1 me-1 h-5 w-5' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    fill-rule='evenodd'
                                    d='M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z'
                                    clip-rule='evenodd'
                                ></path>
                            </svg>
                            {language === 'en' ? 'Update' : 'Cập nhập'}
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ModalProfile;
