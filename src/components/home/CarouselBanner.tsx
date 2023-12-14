import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import Image from 'next/image';

const images = [
    'https://res.cloudinary.com/dfoiuc0jw/image/upload/v1702574719/quiz-app/banner/banner-make-quiz_pjbso7.png',
    'https://res.cloudinary.com/dfoiuc0jw/image/upload/v1702574717/quiz-app/banner/banner-welcome_f96upq.png'
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

function CarouselBanner({ autoSlide = false, autoSlideInterval = 3000 }: { autoSlide?: boolean; autoSlideInterval?: number }) {
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
            className='group flex h-40 min-w-full md:h-60 lg:h-96'
        >
            <div className=' relative w-full overflow-hidden rounded-2xl'>
                <AnimatePresence initial={false} custom={direction}>
                    <motion.img
                        variants={variants}
                        animate='animate'
                        initial='initial'
                        exit='exit'
                        src={images[index]}
                        alt='slides'
                        className='absolute left-0 top-0 h-full w-full object-cover'
                        // key={images[index]}
                        custom={direction}
                    />
                    {/* <motion.div
                        variants={variants}
                        animate='animate'
                        initial='initial'
                        exit='exit'
                        className='relative h-full w-full rounded-lg bg-slate-300'
                        key={images[index]}
                        custom={direction}
                    >
                        <Image src={images[index]} alt='' fill objectFit='cover' />
                    </motion.div> */}
                </AnimatePresence>
                <div className='absolute inset-0 flex items-center justify-between p-4 opacity-0 hover:opacity-100'>
                    <button onClick={prevStep} className='rounded-full bg-white/80 p-1 text-gray-800 shadow hover:bg-white'>
                        <BiChevronLeft size={40} />
                    </button>
                    <button onClick={nextStep} className='rounded-full bg-white/80 p-1 text-gray-800 shadow hover:bg-white'>
                        <BiChevronRight size={40} />
                    </button>
                </div>
                <div className='absolute bottom-4 left-0 right-0'>
                    <div className='flex items-center justify-center gap-2'>
                        {images.map((_, i) => (
                            <div
                                onClick={() => setIndex(i)}
                                key={i}
                                className={`
              h-3 w-3 cursor-pointer rounded-full bg-white transition-all
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
