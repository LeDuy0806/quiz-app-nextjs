import { useEffect, useState } from 'react';

const useWindowDimensions: () => { width: number; height: number } = () => {
    if (typeof window === "undefined") {
       return {
        width: 0,
        height:0
       }
    }
    const [width, setWidth] = useState<number>(window.innerWidth);
    const [height, setHeight] = useState<number>(window.innerHeight);

    const updateWidthAndHeight : () => void = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };

    useEffect(() => {
        window.addEventListener('resize', updateWidthAndHeight);
        return ():void => window.removeEventListener('resize', updateWidthAndHeight);
    },[]);

    return {
        width,
        height
    };
};

export default useWindowDimensions;
