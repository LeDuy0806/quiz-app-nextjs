import { TbAdjustmentsQuestion, TbClock } from 'react-icons/tb';
import { IoMedalOutline } from 'react-icons/io5';
import { BsUiChecksGrid } from 'react-icons/bs';

export default function QuestionSettingSidebar() {
    return (
        <div className='fixed right-0 top-0 z-50 mt-15 w-60 p-4 text-left'>
            {/* Question Type */}
            <div className=''>
                <div className='flex items-center'>
                    <TbAdjustmentsQuestion className='mr-2 text-2xl' />
                    <span className='font-semibold'>Question Type</span>
                </div>

                <select className='mt-4 w-full rounded px-4 py-3 outline outline-1'>
                    <option value='' className='p-10'>
                        <span className='text-2xl'>Quiz</span>
                    </option>
                    <option value='' className=''>
                        <span>True or False</span>
                    </option>
                </select>
            </div>

            <div className='mt-8 w-full outline outline-1 outline-gray-300'></div>

            {/* Time Limit */}
            <div className='mt-12'>
                <div className='flex items-center'>
                    <TbClock className='mr-2 text-2xl' />
                    <span className='font-semibold'>Time Limit</span>
                </div>
                <select className='mt-4 w-full rounded px-4 py-3 outline outline-1'>
                    <option value='' className='p-10'>
                        <span>5 seconds</span>
                    </option>
                    <option value='' className=''>
                        <span>10 seconds</span>
                    </option>
                </select>
            </div>

            {/* Points */}
            <div className='mt-8'>
                <div className='flex items-center'>
                    <IoMedalOutline className='mr-2 text-2xl' />
                    <span className='font-semibold'>Points</span>
                </div>
                <select className='mt-4 w-full rounded px-4 py-3 outline outline-1'>
                    <option value='' className='p-10'>
                        <span>Standard</span>
                    </option>
                    <option value='' className=''>
                        <span>Double</span>
                    </option>
                </select>
            </div>

            {/* Answer Options */}
            <div className='mt-8'>
                <div className='flex items-center'>
                    <BsUiChecksGrid className='mr-2 text-2xl' />
                    <span className='font-semibold'>Answer Options</span>
                </div>
                <select className='mt-4 w-full rounded px-4 py-3 outline outline-1'>
                    <option value='' className='p-10'>
                        <span>Single answer</span>
                    </option>
                    <option value='' className=''>
                        <span>Multi answer</span>
                    </option>
                </select>
            </div>
        </div>
    );
}
