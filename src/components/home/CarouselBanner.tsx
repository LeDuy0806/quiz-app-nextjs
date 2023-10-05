import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import Image from 'next/image';

const images = [
    '/assets/images/home/banner-make-quiz.png',
    '/assets/images/home/banner-welcome.png',
    '/assets/images/home/banner-make-quiz.png',
    '/assets/images/home/banner-welcome.png',
    '/assets/images/home/banner-make-quiz.png',
    '/assets/images/home/banner-welcome.png',
    '/assets/images/home/banner-make-quiz.png',
    '/assets/images/home/banner-welcome.png'
];

const variants = {
    initial: (direction: number) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
            // scale: 0.5,
        };
    },
    animate: {
        x: 0,
        opacity: 1,
        // scale: 1,
        // transition: 'ease-in',
        transition: {
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
        }
    },
    exit: (direction: number) => {
        return {
            x: direction > 0 ? -1000 : 1000,
            opacity: 0,
            // scale: 0.5,
            // transition: 'ease-in',
            transition: {
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
            }
        };
    }
};

function CarouselBanner({
    autoSlide = false,
    autoSlideInterval = 3000
}: {
    autoSlide?: boolean;
    autoSlideInterval?: number;
}) {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    function nextStep() {
        setDirection(1);
        if (index === images.length - 1) {
            setIndex(0);
            return;
        }
        setIndex(index + 1);
    }

    function prevStep() {
        setDirection(-1);
        if (index === 0) {
            setIndex(images.length - 1);
            return;
        }
        setIndex(index - 1);
    }
    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(nextStep, autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, [index]);

    return (
        <motion.div
            initial={{ scale: 0.9, y: -20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className='group flex h-40 md:h-60 lg:h-96 min-w-full'
        >
            <div className=' relative overflow-hidden rounded-2xl w-full'>
                <AnimatePresence initial={false} custom={direction}>
                    {/* <motion.img
                        variants={variants}
                        animate='animate'
                        initial='initial'
                        exit='exit'
                        src={images[index]}
                        alt='slides'
                        className='absolute top-0 left-0 h-full w-full object-cover object-center'
                        key={images[index]}
                        custom={direction}
                    /> */}
                    <motion.div
                        variants={variants}
                        animate='animate'
                        initial='initial'
                        exit='exit'
                        className='absolute top-0 left-0 h-full w-full object-cover object-center'
                        key={images[index]}
                        custom={direction}
                    >
                        <Image
                            src={images[index]}
                            alt=''
                            fill
                            quality={100}
                            className='w-full'
                        />
                    </motion.div>
                </AnimatePresence>
                <div className='absolute inset-0 flex items-center justify-between p-4 opacity-0 hover:opacity-100'>
                    <button
                        onClick={prevStep}
                        className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'
                    >
                        <BiChevronLeft size={40} />
                    </button>
                    <button
                        onClick={nextStep}
                        className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'
                    >
                        <BiChevronRight size={40} />
                    </button>
                </div>
                <div className='absolute bottom-4 right-0 left-0'>
                    <div className='flex items-center justify-center gap-2'>
                        {images.map((_, i) => (
                            <div
                                key={i}
                                className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${index === i ? 'p-2' : 'bg-opacity-50'}
            `}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default CarouselBanner;
