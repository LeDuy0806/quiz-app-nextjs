// Next
import Image from 'next/image';
import Link from 'next/link';

// Icons
import { IoSettingsOutline } from 'react-icons/io5';
import { BiSave } from 'react-icons/bi';
import { RxExit } from 'react-icons/rx';

// Constants
import paths from 'src/constants/paths';

function CreatorNavbar() {
    return (
        <div className='bg-white w-full px-2 py-2.5 dark:bg-gray-900 shadow z-[110] fixed top-0 left-0'>
            <div className='flex w-full items-center justify-between'>
                <div className='flex items-center'>
                    {/* Logo */}
                    <Link href={paths.home} className='flex items-center'>
                        <div className='mr-1 h-9 w-9 relative '>
                            <Image src={'/assets/images/logoApp.png'} alt='Quizzes logo' fill />
                        </div>

                        <span className='md:max-lg:hidden text-black self-center whitespace-nowrap text-xl font-semibold dark:text-white'>Quizzes</span>
                    </Link>

                    {/* Quiz Settings */}
                    <button className=' flex items-center md:outline md:outline-1 md:outline-gray-300 rounded-md md:p-1 ml-4'>
                        <p className='hidden md:inline w-2/3 text-ellipsis overflow-hidden line-clamp-1 text-gray-400 font-bold ml-1 md:pr-6 lgl:pr-12'>
                            Enter your quiz title...
                        </p>
                        <div className='max-md:h-8 max-md:w-8 flex items-center justify-center md:justify-between bg-gray-300 px-1 md:px-2 py-1 rounded'>
                            <IoSettingsOutline className='h-5 w-5 md:mr-1' />
                            <span className='font-bold hidden md:inline'>Settings</span>
                        </div>
                    </button>
                </div>

                <div className='flex items-center'>
                    {/* Exit Button */}
                    <div className='flex items-center'>
                        <Link
                            href={paths.library}
                            className='mr-2 px-2.5 md:px-5 py-2.5 flex items-center justify-center rounded-lg bg-gray-300 text-sm font-medium text-white hover:bg-gray-400 focus:outline-none'
                        >
                            <RxExit className='h-5 w-5 text-black' />
                            <span className='ml-1 max-md:hidden font-bold text-black'>Exit</span>
                        </Link>
                    </div>

                    {/* Create Button */}
                    <div className='flex items-center'>
                        <Link
                            href={paths.home}
                            className='px-2.5 md:px-5 py-2.5 flex items-center justify-center rounded-lg bg-purple-700 text-sm font-medium text-white hover:bg-purple-800 focus:outline-none dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 '
                        >
                            <BiSave className='h-5 w-5' />
                            <span className='ml-1 max-md:hidden font-bold'>Save</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreatorNavbar;
