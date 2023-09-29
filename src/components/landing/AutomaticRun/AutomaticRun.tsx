//images
import Image from "next/image";
import {
  bigHeartImg,
  gradientPurpleImg,
  likeHandImg,
  quiteHeartImg,
  smallHeartImg,
  imageRunImg,
  raiseHandImg,
} from "../../../../public/assets/images/landing";

//animation
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const AutomaticRun = () => {
  return (
    <motion.section
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.1, delay: 1.2 }}
      id="overview"
      className="w-screen relative pt-6 pb-0 overflow-hidden bg-white"
    >
      <div className="w-full max-w-[1440px] bg-transparent rounded-[4px] mx-auto px-[3.13rem]">
        <div className="relative flex flex-col items-center text-center">
          <Image
            src={gradientPurpleImg}
            alt=""
            className="w-[70em] h-auto absolute inline-block max-w-full z-[1]"
          />
          <div className="flex flex-col gap-y-[2.75em] text-center">
            <div className="flex text-center">
              <Marquee>
                <div className="flex pr-[2.75em] flex-none gap-x-[2.75em]">
                  <div className="w-[35.38em] rounded-xl flex flex-none overflow-hidden">
                    <Image
                      src={imageRunImg}
                      alt=""
                      className="w-full h-full max-w-full relative inline-block object-cover"
                    />
                  </div>
                  <div className="w-[35.38em] rounded-xl flex flex-none overflow-hidden">
                    <Image
                      src={imageRunImg}
                      alt=""
                      className="w-full h-full max-w-full relative inline-block object-cover"
                    />
                  </div>
                  <div className="w-[35.38em] rounded-xl flex flex-none overflow-hidden">
                    <Image
                      src={imageRunImg}
                      alt=""
                      className="w-full h-full max-w-full relative inline-block object-cover"
                    />
                  </div>
                  <div className="w-[35.38em] rounded-xl flex flex-none overflow-hidden">
                    <Image
                      src={imageRunImg}
                      alt=""
                      className="w-full h-full max-w-full relative inline-block object-cover"
                    />
                  </div>
                  <div className="w-[35.38em] rounded-xl flex flex-none overflow-hidden">
                    <Image
                      src={imageRunImg}
                      alt=""
                      className="w-full h-full max-w-full relative inline-block object-cover"
                    />
                  </div>
                </div>
              </Marquee>
              <Marquee>
                <div className="flex pr-[2.75em] flex-none gap-x-[2.75em]">
                  <div className="w-[35.38em] rounded-xl flex flex-none overflow-hidden">
                    <Image
                      src={imageRunImg}
                      alt=""
                      className="w-full h-full max-w-full relative inline-block object-cover"
                    />
                  </div>
                  <div className="w-[35.38em] rounded-xl flex flex-none overflow-hidden">
                    <Image
                      src={imageRunImg}
                      alt=""
                      className="w-full h-full max-w-full relative inline-block object-cover"
                    />
                  </div>
                  <div className="w-[35.38em] rounded-xl flex flex-none overflow-hidden">
                    <Image
                      src={imageRunImg}
                      alt=""
                      className="w-full h-full max-w-full relative inline-block object-cover"
                    />
                  </div>
                  <div className="w-[35.38em] rounded-xl flex flex-none overflow-hidden">
                    <Image
                      src={imageRunImg}
                      alt=""
                      className="w-full h-full max-w-full relative inline-block object-cover"
                    />
                  </div>
                  <div className="w-[35.38em] rounded-xl flex flex-none overflow-hidden">
                    <Image
                      src={imageRunImg}
                      alt=""
                      className="w-full h-full max-w-full relative inline-block object-cover"
                    />
                  </div>
                </div>
              </Marquee>
              <Marquee>
                <div className="flex pr-[2.75em] flex-none gap-x-[2.75em]">
                  <div className="w-[35.38em] rounded-xl flex flex-none overflow-hidden">
                    <Image
                      src={imageRunImg}
                      alt=""
                      className="w-full h-full max-w-full relative inline-block object-cover"
                    />
                  </div>
                  <div className="w-[35.38em] rounded-xl flex flex-none overflow-hidden">
                    <Image
                      src={imageRunImg}
                      alt=""
                      className="w-full h-full max-w-full relative inline-block object-cover"
                    />
                  </div>
                  <div className="w-[35.38em] rounded-xl flex flex-none overflow-hidden">
                    <Image
                      src={imageRunImg}
                      alt=""
                      className="w-full h-full max-w-full relative inline-block object-cover"
                    />
                  </div>
                  <div className="w-[35.38em] rounded-xl flex flex-none overflow-hidden">
                    <Image
                      src={imageRunImg}
                      alt=""
                      className="w-full h-full max-w-full relative inline-block object-cover"
                    />
                  </div>
                  <div className="w-[35.38em] rounded-xl flex flex-none overflow-hidden">
                    <Image
                      src={imageRunImg}
                      alt=""
                      className="w-full h-full max-w-full relative inline-block object-cover"
                    />
                  </div>
                </div>
              </Marquee>
            </div>
            <div className="flex text-center">
              <Marquee direction="right">
                <div className="flex pr-[2.75em] flex-none gap-x-[2.75em]">
                  <div className="w-[35.38em] rounded-xl flex flex-none overflow-hidden">
                    <Image
                      src={imageRunImg}
                      alt=""
                      className="relative w-full h-full max-w-full inline-block  object-cover"
                    />
                  </div>
                  <div className="w-[35.38em] rounded-xl flex flex-none overflow-hidden">
                    <Image
                      src={imageRunImg}
                      alt=""
                      className="relative w-full h-full max-w-full inline-block  object-cover"
                    />
                  </div>
                  <div className="w-[35.38em] rounded-xl flex flex-none overflow-hidden">
                    <Image
                      src={imageRunImg}
                      alt=""
                      className="relative w-full h-full max-w-full inline-block  object-cover"
                    />
                  </div>
                  <div className="w-[35.38em] rounded-xl flex flex-none overflow-hidden">
                    <Image
                      src={imageRunImg}
                      alt=""
                      className="relative w-full h-full max-w-full inline-block  object-cover"
                    />
                  </div>
                  <div className="w-[35.38em] rounded-xl flex flex-none overflow-hidden">
                    <Image
                      src={imageRunImg}
                      alt=""
                      className="relative w-full h-full max-w-full inline-block  object-cover"
                    />
                  </div>
                </div>
              </Marquee>
              <Marquee direction="right">
                <div className="flex pr-[2.75em] flex-none gap-x-[2.75em]">
                  <div className="w-[35.38em] rounded-xl flex flex-none overflow-hidden">
                    <Image
                      src={imageRunImg}
                      alt=""
                      className="relative w-full h-full max-w-full inline-block  object-cover"
                    />
                  </div>
                  <div className="w-[35.38em] rounded-xl flex flex-none overflow-hidden">
                    <Image
                      src={imageRunImg}
                      alt=""
                      className="relative w-full h-full max-w-full inline-block  object-cover"
                    />
                  </div>
                  <div className="w-[35.38em] rounded-xl flex flex-none overflow-hidden">
                    <Image
                      src={imageRunImg}
                      alt=""
                      className="relative w-full h-full max-w-full inline-block  object-cover"
                    />
                  </div>
                  <div className="w-[35.38em] rounded-xl flex flex-none overflow-hidden">
                    <Image
                      src={imageRunImg}
                      alt=""
                      className="relative w-full h-full max-w-full inline-block  object-cover"
                    />
                  </div>
                  <div className="w-[35.38em] rounded-xl flex flex-none overflow-hidden">
                    <Image
                      src={imageRunImg}
                      alt=""
                      className="relative w-full h-full max-w-full inline-block  object-cover"
                    />
                  </div>
                </div>
              </Marquee>
              <Marquee direction="right">
                <div className="flex pr-[2.75em] flex-none gap-x-[2.75em]">
                  <div className="w-[35.38em] rounded-xl flex flex-none overflow-hidden">
                    <Image
                      src={imageRunImg}
                      alt=""
                      className="relative w-full h-full max-w-full inline-block  object-cover"
                    />
                  </div>
                  <div className="w-[35.38em] rounded-xl flex flex-none overflow-hidden">
                    <Image
                      src={imageRunImg}
                      alt=""
                      className="relative w-full h-full max-w-full inline-block  object-cover"
                    />
                  </div>
                  <div className="w-[35.38em] rounded-xl flex flex-none overflow-hidden">
                    <Image
                      src={imageRunImg}
                      alt=""
                      className="relative w-full h-full max-w-full inline-block  object-cover"
                    />
                  </div>
                  <div className="w-[35.38em] rounded-xl flex flex-none overflow-hidden">
                    <Image
                      src={imageRunImg}
                      alt=""
                      className="relative w-full h-full max-w-full inline-block  object-cover"
                    />
                  </div>
                  <div className="w-[35.38em] rounded-xl flex flex-none overflow-hidden">
                    <Image
                      src={imageRunImg}
                      alt=""
                      className="relative w-full h-full max-w-full inline-block  object-cover"
                    />
                  </div>
                </div>
              </Marquee>
            </div>
          </div>
          <div className="z-[2] text-center absolute top-[7.19em] flex flex-col items-center gap-10">
            <div className="text-center block leading-[1] font-bold text-[10em] tracking-[-0.025em]">
              Select my
              <br />
            </div>
            <div className="block mt-[-2.1em]">
              <div className="block text-center leading-[1] font-bold text-[10em] tracking-[-0.025em]">
                Quizzes
              </div>
            </div>
          </div>
          <Image
            src={raiseHandImg}
            alt=""
            className="w-[30.75em] h-[30.75em] max-w-full inline-block absolute bottom-[-4em] object-contain z-[4]"
          />
          <Image
            src={bigHeartImg}
            alt=""
            className="w-[10.25em] h-auto inline-block max-w-full absolute z-[3] bottom-[0] translate-x-[19%] translate-y-[-28em]"
          />
          <Image
            src={quiteHeartImg}
            alt=""
            className="z-[1] bottom-[0] h-auto inline-bock max-w-full align-middle absolute w-[4.81em] translate-x-[-4em] translate-y-[-21em]"
          />
          <Image
            src={smallHeartImg}
            alt=""
            className="z-[1] bottom-[0] h-auto max-w-full inline-bock align-middle absolute w-[2.75em] translate-x-[-3.4em] translate-y-[-34em]"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default AutomaticRun;
