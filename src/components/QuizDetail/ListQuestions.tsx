import { FaPlay, FaRegEye, FaTasks } from 'react-icons/fa';
import QuestionCard from './QuestionCard';
import QuestionType from 'src/app/types/questionType';

function ListQuestions({ listQuestionsData, numberOfQuestions }: { listQuestionsData: QuestionType[] | undefined; numberOfQuestions: number | undefined }) {
    return (
        <div>
            {/* head */}
            <div className='flex justify-between mb-4 mt-7'>
                <div className='flex items-center text-base'>
                    <FaTasks className=' text-slate-500 text-xs flex items-center' />
                    <p className='mx-2 text-xs text-slate-700'>{numberOfQuestions + ' questions'}</p>
                </div>
                <div className='flex'>
                    <button className='transition-colors flex items-center px-3 py-1 sm:mx-1 text-xs justify-center w-6 h-6 bg-slate-100 border border-solid border-slate-200 text-slate-800 hover:bg-slate-100 active:bg-gray-100 rounded relative min-w-max '>
                        <FaRegEye className='flex items-center mr-2 text-xs' />
                        <span title='Show answers'>Show answers</span>
                    </button>
                    <button className='transition-colors flex items-center px-3 py-1 sm:mx-1 text-xs justify-center w-6 h-6 bg-slate-100 border border-solid border-slate-200 text-slate-800 hover:bg-slate-100 active:bg-gray-100 rounded relative min-w-max '>
                        <FaPlay className='flex items-center mr-2 text-xs' />
                        <span title='Preview'>Preview</span>
                    </button>
                </div>
            </div>
            <div className='relative'>
                {listQuestionsData?.map((question, index) => (
                    <QuestionCard key={index} questionData={question} />
                ))}
            </div>
        </div>
    );
}

export default ListQuestions;
