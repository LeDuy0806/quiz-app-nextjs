import { cn } from 'src/utils/tailwind.util';

interface IProps {
    title: string;
    handleClick: () => void;
    backgroundColor: string;
    textColor?: string;
}

export default function DialogButton({ title, handleClick, backgroundColor, textColor = 'text-white' }: IProps) {
    return (
        <button
            onClick={handleClick}
            className={cn(
                'min-w-[80px] rounded px-4 pb-3 pt-2 shadow-[inset_0_-5px_rgba(0,0,0,0.3)] duration-100 hover:mt-[2px] hover:pb-[10px] hover:shadow-[inset_0_-4px_rgba(0,0,0,0.3)] active:mt-1 active:pb-2 active:shadow-[inset_0_-2px_rgba(0,0,0,0.3)]',
                backgroundColor
            )}
        >
            <span className={(cn('font-semibold'), textColor)}>{title}</span>
        </button>
    );
}
