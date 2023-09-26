import Image from "next/image";
import { Carla, Lisa, Phillip } from "../../../../public/assets";

const Manage = () => {
  return (
    <section
      id="manager"
      className="w-full max-w-[1440px] block bg-transparent rounded mx-auto px-[3.13rem] pt-20 pb-[4em]"
    >
      <div className="relative flex flex-col z-[1] pt-[5.63em] items-center px-0 bg-white rounded-[2.5em]">
        <div className="h-[60em] absolute flex justify-center my-[-3.13em] top-0 left-0 right-0 overflow-hidden">
          <div className="absolute w-[22.69em] bottom-20 opacity-1">
            <Image
              src={Phillip}
              alt=""
              className="relative w-full h-full max-w-full inline-block object-fill"
            />
          </div>
          <div className="absolute w-[26.88em] left-0 top-[5em]">
            <Image
              src={Lisa}
              alt=""
              className="relative w-full h-full max-w-full inline-block object-fill"
            />
          </div>
          <div className="absolute w-[26.13em]  top-0 right-0 overflow-hidden">
            <Image
              src={Carla}
              alt=""
              className="relative w-full h-full max-w-full inline-block object-fill"
            />
          </div>
        </div>
        <div className="sticky flex flex-col top-[7.5em] mb-[8em] items-center text-center gap-y-[0.5em]">
          <div className="my-0 text-[4em] tracking-tight font-extrabold leading-[1]">
            Quizzes is Over Power
            <br />
          </div>
          <div className="bg-bgBlueLight text-textBlue pt-0 px-[30px] pb-[16px] rounded-[60px]">
            <div className="my-0 text-[4em] font-extrabold tracking-tight leading-[1]">
              project management
            </div>
            {/* <div className="">
              team scheduling
            </div>
            <div className="c-title-2">
              time tracking
            </div> */}
          </div>
        </div>
        <div className="sticky z-[5] w-full h-[24.8em] flex top-[38vh] items-center">
          <div className="absolute flex flex-col min-w-[16px] gap-y-[6px] items-center left-[1.13em]"></div>
        </div>
        {/* <div></div> */}
      </div>
    </section>
  );
};

export default Manage;
