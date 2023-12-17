import { FaStar } from 'react-icons/fa';
import { cn } from 'src/utils/tailwind.util';

export default function PointContainer({ point, className }: { point: number; className?: string }) {
    return (
        <div
            className={cn(
                'inline-flex items-center justify-center rounded-lg bg-gradient-purple bg-clip-text px-2 py-1 text-transparent outline outline-[2px] outline-bgPurple lgl:text-lg',
                className
            )}
        >
            <span className='line-clamp-1 inline-block max-w-[3.75rem] text-ellipsis whitespace-nowrap font-extrabold lg:max-w-[6rem]'>{point}</span>
            <span className='ml-1 text-[0.8em] text-textPurpleBorder'>
                <FaStar />
            </span>
        </div>
    );
}
