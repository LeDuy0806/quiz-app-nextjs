import Image from 'next/image';
import rolling from '../../public/assets/images/rolling.svg';

const LoadingRoute = () => {
    return (
        <div className='h-screen w-screen fixed flex justify-center items-center top-0 left-0 bg-bgModel z-10'>
            <Image src={rolling} alt='' className='w-[180px] h-[180px]' />
        </div>
    );
};

export default LoadingRoute;
