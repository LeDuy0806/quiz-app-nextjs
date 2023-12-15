import { InputBase } from '@mui/material';
import { BsDiamondFill, BsTriangleFill, BsSquareFill, BsCircleFill } from 'react-icons/bs';
import { FaCheck } from 'react-icons/fa';

import { useAppDispatch } from 'src/app/redux/hooks';
import { setCorrectAnswer, setQuestionAnswer } from 'src/app/redux/slices/quizCreatorSlice';
import { AnswerType } from 'src/app/types/creator';
import { AnswerNameEnum } from 'src/constants/enum';
import { cn } from 'src/utils/tailwind.util';

interface IProps {
    isTrueFalse: boolean;
    answer: AnswerType;
}

function AnswerItem({ isTrueFalse = false, answer }: IProps) {
    const dispatch = useAppDispatch();

    return (
        <div
            className={cn(
                'flex w-full items-center justify-between rounded p-2 shadow transition-colors duration-200 max-lg:mb-4',
                [`${getBgColor(answer.name)}`],
                {
                    'bg-white': !answer.body
                }
            )}
        >
            <div className='flex w-[calc(100%-3.5rem)]'>
                <Icon answer={answer} className='rounded px-2 py-6 lg:py-12' />
                <InputBase
                    className={cn('mx-2 w-full text-lg text-white scrollbar-none sml:mx-3', {
                        'text-black': !answer.body
                    })}
                    minRows={1}
                    maxRows={2}
                    multiline
                    placeholder='Add answer'
                    value={answer.body}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') e.preventDefault();
                    }}
                    onChange={(e) =>
                        dispatch(
                            setQuestionAnswer({
                                name: answer.name,
                                body: e.target.value
                            })
                        )
                    }
                    inputProps={{
                        maxLength: 120,
                        className: 'scrollbar-none'
                    }}
                    readOnly={isTrueFalse}
                />
            </div>

            {answer.body && (
                <div
                    onClick={() => {
                        dispatch(setCorrectAnswer(answer.name));
                    }}
                    className={cn(
                        'group flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-4 border-white bg-inherit hover:bg-green-400 md:mr-2',
                        {
                            'bg-green-600': answer.isCorrect
                        }
                    )}
                >
                    <FaCheck
                        className={cn('hidden text-2xl text-white group-hover:inline-block', {
                            'inline-block': answer.isCorrect
                        })}
                    />
                </div>
            )}
        </div>
    );
}

const Icon = ({ answer, className }: { answer: AnswerType; className: string }) => {
    switch (answer.name) {
        case AnswerNameEnum.A:
            return (
                <div className={cn('bg-bgAnswerTriangle', className)}>
                    <BsTriangleFill className='inline-block text-2xl text-white' />
                </div>
            );
        case AnswerNameEnum.B:
            return (
                <div className={cn('bg-bgAnswerDiamond', className)}>
                    <BsDiamondFill className='inline-block text-2xl text-white' />
                </div>
            );
        case AnswerNameEnum.C:
            return (
                <div className={cn('bg-bgAnswerSquare', className)}>
                    <BsSquareFill className='inline-block text-2xl text-white' />
                </div>
            );
        case AnswerNameEnum.D:
            return (
                <div className={cn('bg-bgAnswerCircle', className)}>
                    <BsCircleFill className='inline-block text-2xl text-white' />
                </div>
            );
    }
};

const getBgColor = (answer: AnswerNameEnum) => {
    switch (answer) {
        case AnswerNameEnum.A:
            return 'bg-bgAnswerTriangle';
        case AnswerNameEnum.B:
            return 'bg-bgAnswerDiamond';
        case AnswerNameEnum.C:
            return 'bg-bgAnswerSquare';
        case AnswerNameEnum.D:
            return 'bg-bgAnswerCircle';
    }
};

export default AnswerItem;
