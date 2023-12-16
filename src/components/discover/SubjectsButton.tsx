import Image from 'next/image';

function SubjectsButton({ name }: { name?: string }) {
    return (
        <div className='flex transform cursor-pointer flex-col items-center transition duration-300 hover:scale-110'>
            <div className='relative h-14 w-14 rounded-full border border-gray-800 bg-[#e1cdde] md:h-16 md:w-16'>
                <Image src={'https://cf.quizizz.com/img/course-assets/title_imgs/bts_templates.png'} alt='' fill />
            </div>
            <span className='text-dark-3 whitespace-nowrap text-center text-xs font-semibold md:text-sm'>
                <span>{name || 'Joyful kickoff'}</span>
            </span>
        </div>
    );
}

export default SubjectsButton;
