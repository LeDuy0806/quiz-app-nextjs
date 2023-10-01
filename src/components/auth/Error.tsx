interface ErrorNotifyProps {
    message: string;
}

const ErrorNotify = (props: ErrorNotifyProps) => {
    return (
        <div className='flex bg-bgError px-[15px] py-[7px] my-[5px] rounded-[20px] overflow-hidden mb-3'>
            <span className='w-full text-textError text-center text-sm font-semibold'>
                {props.message}
            </span>
        </div>
    );
};

export default ErrorNotify;
