// Next
import Image from 'next/image';
import Link from 'next/link';

// Icons
import { IoSettingsOutline } from 'react-icons/io5';
import { BiSave } from 'react-icons/bi';
import { RxExit } from 'react-icons/rx';

// Constants
import paths from 'src/constants/paths';

interface IProps {
    handleQuizSubmit: () => void;
    setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
    title: string;
}

function CreatorNavbar({ setIsOpenModal, handleQuizSubmit, title }: IProps) {
    const handleOpenModal = () => {
        setIsOpenModal(true);
    };

    return (
        <div className='fixed left-0 top-0 z-[110] w-full bg-white px-2 py-2.5 shadow dark:bg-gray-900'>
            <div className='flex w-full items-center justify-between'>
                <div className='flex items-center'>
                    {/* Logo */}
                    <Link href={paths.home} className='flex items-center'>
                        <div className='relative mr-1 h-9 w-9 '>
                            <Image src={'/assets/images/logoApp.png'} alt='Quizzes logo' fill />
                        </div>

                        <span className='self-center whitespace-nowrap text-xl font-semibold text-black dark:text-white md:max-lg:hidden'>Quizzes</span>
                    </Link>

                    {/* Quiz Settings */}
                    <button
                        onClick={handleOpenModal}
                        className='ml-4 flex min-w-[360px] items-center justify-between rounded-md md:p-1 md:outline md:outline-1 md:outline-gray-300'
                    >
                        <p className='ml-1 line-clamp-1 hidden w-2/3 overflow-hidden text-ellipsis text-left font-bold text-gray-400 md:inline md:pr-6 lgl:pr-12'>
                            {title || 'Enter your quiz title...'}
                        </p>
                        <div className='flex items-center justify-center rounded bg-gray-300 px-1 py-1 max-md:h-8 max-md:w-8 md:justify-between md:px-2'>
                            <IoSettingsOutline className='h-5 w-5 md:mr-1' />
                            <span className='hidden font-bold md:inline'>Settings</span>
                        </div>
                    </button>
                </div>

                <div className='flex items-center'>
                    {/* Exit Button */}
                    <div className='flex items-center'>
                        <Link
                            href={paths.library}
                            className='mr-2 flex items-center justify-center rounded-lg bg-gray-300 px-2.5 py-2.5 text-sm font-medium text-white hover:bg-gray-400 focus:outline-none md:px-5'
                        >
                            <RxExit className='h-5 w-5 text-black' />
                            <span className='ml-1 font-bold text-black max-md:hidden'>Exit</span>
                        </Link>
                    </div>

                    {/* Create Button */}
                    <button onClick={handleQuizSubmit} className='flex items-center'>
                        <div className='flex items-center justify-center rounded-lg bg-purple-700 px-2.5 py-2.5 text-sm font-medium text-white hover:bg-purple-800 focus:outline-none dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 md:px-5 '>
                            <BiSave className='h-5 w-5' />
                            <span className='ml-1 font-bold max-md:hidden'>Save</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CreatorNavbar;
