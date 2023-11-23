import { InputBase } from '@mui/material';
import { useState } from 'react';
import { BsDiamondFill, BsTriangleFill, BsSquareFill, BsCircleFill } from 'react-icons/bs';
import { FaCheck } from 'react-icons/fa';
import { cn } from 'src/utils/tailwind.util';

function AnswerItem({ type }: { type: string }) {
    const [value, setValue] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);

    return (
        <div
            className={cn('flex w-full items-center justify-between rounded p-2 transition-colors duration-200 max-lg:mb-4', [`${getBgColor(type)}`], {
                'bg-white': !value
            })}
        >
            <div className='flex w-[calc(100%-3.5rem)]'>
                <Icon type={type} className='rounded px-2 py-6 lg:py-12'></Icon>
                <InputBase
                    className={cn('mx-2 w-full text-lg text-white scrollbar-none sml:mx-3', {
                        'text-black': !value
                    })}
                    minRows={1}
                    maxRows={2}
                    multiline
                    placeholder='Add answer'
                    value={value}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') e.preventDefault();
                    }}
                    onChange={(e) => setValue(e.target.value)}
                    inputProps={{
                        maxLength: 120,
                        className: 'scrollbar-none'
                    }}
                />
            </div>
            {value && (
                <div
                    onClick={() => {
                        setIsCorrect(!isCorrect);
                    }}
                    className={cn(
                        'group flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-4 border-white bg-inherit hover:bg-green-600 md:mr-2',
                        {
                            'bg-green-600': isCorrect
                        }
                    )}
                >
                    <FaCheck
                        className={cn('hidden text-2xl text-white group-hover:inline-block', {
                            'inline-block': isCorrect
                        })}
                    />
                </div>
            )}
        </div>
    );
}

const Icon = ({ type, className }: { type: string; className: string }) => {
    switch (type) {
        case 'first':
            return (
                <div className={cn('bg-bgAnswerTriangle', className)}>
                    <BsTriangleFill className='inline-block text-2xl text-white' />
                </div>
            );
        case 'second':
            return (
                <div className={cn('bg-bgAnswerDiamond', className)}>
                    <BsDiamondFill className='inline-block text-2xl text-white' />
                </div>
            );
        case 'third':
            return (
                <div className={cn('bg-bgAnswerSquare', className)}>
                    <BsSquareFill className='inline-block text-2xl text-white' />
                </div>
            );
        case 'fourth':
            return (
                <div className={cn('bg-bgAnswerCircle', className)}>
                    <BsCircleFill className='inline-block text-2xl text-white' />
                </div>
            );
    }
};

const getBgColor = (type: string) => {
    switch (type) {
        case 'first':
            return 'bg-bgAnswerTriangle';
        case 'second':
            return 'bg-bgAnswerDiamond';
        case 'third':
            return 'bg-bgAnswerSquare';
        case 'fourth':
            return 'bg-bgAnswerCircle';
    }
};

export default AnswerItem;
