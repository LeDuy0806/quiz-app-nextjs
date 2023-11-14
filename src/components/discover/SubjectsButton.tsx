import Image from 'next/image';

function SubjectsButton() {
    return (
        <div className='flex flex-col items-center transition duration-300 transform cursor-pointer hover:scale-110'>
            <div className='bg-[#e1cdde] relative border rounded-full w-14 h-14 md:w-16 md:h-16 border-gray-800'>
                <Image src={'https://cf.quizizz.com/img/course-assets/title_imgs/bts_templates.png'} alt='' fill />
            </div>
            <span className='text-xs font-semibold text-center md:text-sm text-dark-3 whitespace-nowrap'>
                <span>Joyful kickoff</span>
            </span>
        </div>
    );
}

export default SubjectsButton;
