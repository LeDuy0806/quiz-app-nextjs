import { BsCircleFill, BsDiamondFill, BsSquareFill, BsTriangleFill } from 'react-icons/bs';
import { FaCheck } from 'react-icons/fa';
import { cn } from 'src/utils/tailwind.util';

function AnswerItem({ type, isAnswerCorrect, value, isShowAnswer }: { type: string; isAnswerCorrect: boolean; value: string; isShowAnswer: boolean }) {
    return (
        <div
            className={cn(
                'flex w-full items-center justify-between rounded border-4 border-transparent p-1 transition-all duration-300 max-lg:mb-4',
                [`${getBgColor(type)}`],
                {
                    'opacity-30': isShowAnswer && !isAnswerCorrect,
                    'border-white': isShowAnswer && isAnswerCorrect
                }
            )}
        >
            <div className='flex w-[calc(100%-3.5rem)]'>
                <Icon type={type} className='rounded px-2 py-3 lg:py-6'></Icon>
                <div className='mx-2 flex max-h-full w-full items-center justify-center'>
                    <p>{value}</p>
                </div>
            </div>
            <div
                className={cn(
                    'group flex h-9 w-9 items-center justify-center  rounded-full border-4 border-white bg-inherit transition-all duration-200 md:mr-2 md:h-12  md:w-12',
                    {
                        'bg-green-600': isShowAnswer && isAnswerCorrect
                    }
                )}
            >
                <FaCheck
                    className={cn(' text-xl text-white opacity-0 transition-all duration-300 md:text-2xl ', {
                        'opacity-100': isShowAnswer && isAnswerCorrect
                    })}
                />
            </div>
        </div>
    );
}

const Icon = ({ type, className }: { type: string; className: string }) => {
    type = type.toLowerCase();
    switch (type) {
        case 'a':
            return (
                <div className={cn('bg-bgAnswerTriangle', className)}>
                    <BsTriangleFill className='inline-block text-2xl text-white' />
                </div>
            );
        case 'b':
            return (
                <div className={cn('bg-bgAnswerDiamond', className)}>
                    <BsDiamondFill className='inline-block text-2xl text-white' />
                </div>
            );
        case 'c':
            return (
                <div className={cn('bg-bgAnswerSquare', className)}>
                    <BsSquareFill className='inline-block text-2xl text-white' />
                </div>
            );
        case 'd':
            return (
                <div className={cn('bg-bgAnswerCircle', className)}>
                    <BsCircleFill className='inline-block text-2xl text-white' />
                </div>
            );
    }
};

const getBgColor = (type: string) => {
    type = type.toLowerCase();
    switch (type) {
        case 'a':
            return 'bg-bgAnswerTriangle';
        case 'b':
            return 'bg-bgAnswerDiamond';
        case 'c':
            return 'bg-bgAnswerSquare';
        case 'd':
            return 'bg-bgAnswerCircle';
    }
};
export default AnswerItem;
