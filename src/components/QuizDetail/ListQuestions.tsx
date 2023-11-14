import { FaPlay, FaRegEye, FaTasks } from 'react-icons/fa';
import QuestionCard from './QuestionCard';

function ListQuestions() {
    return (
        <div>
            {/* head */}
            <div className='flex justify-between mb-4 mt-7'>
                <div className='flex items-center text-base'>
                    <FaTasks className=' text-slate-500 text-xs flex items-center' />
                    <p className='mx-2 text-slate-700'> 10 questions</p>
                </div>
                <div className='flex'>
                    <button className='transition-colors flex items-center px-3 py-1 mx-1 text-xs justify-center w-6 h-6 bg-slate-100 border border-solid border-slate-200 text-slate-800 hover:bg-slate-100 active:bg-gray-100 rounded relative min-w-max '>
                        <FaRegEye className='flex items-center mr-2 text-xs' />
                        <span title='Show answers'>Show answers</span>
                    </button>
                    <button className='transition-colors flex items-center px-3 py-1 mx-1 text-xs justify-center w-6 h-6 bg-slate-100 border border-solid border-slate-200 text-slate-800 hover:bg-slate-100 active:bg-gray-100 rounded relative min-w-max '>
                        <FaPlay className='flex items-center mr-2 text-xs' />
                        <span title='Preview'>Preview</span>
                    </button>
                </div>
            </div>
            <div className='relative'>
                <QuestionCard />
                <QuestionCard />
                <QuestionCard />
                <QuestionCard />
                <QuestionCard />
                <QuestionCard />
                <QuestionCard />
            </div>
        </div>
    );
}

export default ListQuestions;
