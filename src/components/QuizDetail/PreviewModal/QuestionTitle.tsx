import Image from 'next/image';

function QuestionTitle({ Question, QuestionImage }: { Question: string | undefined; QuestionImage: string | undefined }) {
    return (
        <div className='flex h-[45%]'>
            <div className='flex h-full w-full  items-center rounded-lg p-4'>
                {/* Image */}
                <div className=' flex h-full w-2/5 items-center justify-center bg-white'>
                    <div className='relative h-full w-full'>
                        <Image src={'/assets/images/default_quiz_background.png'} alt='Question Image' fill objectFit='contain' />
                    </div>
                </div>
                {/* Question */}
                <div className='h-full flex-1 pl-4'>
                    <div className=' flex h-full w-full items-center justify-center overflow-auto text-2xl'>
                        <div className=' max-h-full w-full break-words [word-break:break-word]'>
                            <p className='text-center'>{Question ? Question : 'Question Title'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default QuestionTitle;
