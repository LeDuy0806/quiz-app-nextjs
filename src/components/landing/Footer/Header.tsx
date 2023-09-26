import Image from "next/image";
import {
  fourpeople,
  texticonsub,
  profile,
  bgpurple,
  UITLogo,
  joyofwork,
  thuhien,
  phuoctri,
  minhnhat,
  vanduy,
  phuoclong,
} from "../../../../public/assets";

const Header = () => {
  return (
    <div className="flex flex-col relative text-center items-center">
      <div className="w-full">
        <Image
          src={joyofwork}
          alt=""
          className="w-full h-full relative object-contain"
        />
      </div>
      <div className="relative flex flex-col items-center text-center justify-center gap-y-10">
        <h2 className="text-textWhite my-0 text-[4em] font-extrabold leading-[1px] tracking-[-0.025em]">
          Trusted by more than
        </h2>
        <div className="flex flex-row items-center gap-4">
          <span className="text-center relative text-[3em] font-bold bg-gradient-titleheaderfooter text-transparent bg-clip-text">
            2,500 membership&nbsp;
          </span>
          <span className="">
            <Image
              src={fourpeople}
              alt=""
              className="inline-block mb-[-0.25em] rounded-[200px] bg-contain bg-no-repeat object-contain overflow-hidden"
            />
          </span>
        </div>
      </div>
      <div className="z-[1] relative flex mt-[7em] justify-between px-20 gap-x-5 ">
        <div className="flex items-center justify-between flex-wrap gap-5">
          <div className="max-w-[32%]">
            <div className="relative flex flex-col gap-y-[1.5em] text-left p-[1.5em] shadow-boxheaderfooter bg-bgDark rounded-[2.5em]">
              <div className="flex gap-x-[1em]">
                <Image
                  src={thuhien}
                  alt=""
                  className="w-[3.75em] h-[3.75em] max-w-full inline-block rounded-full object-cover"
                />
                <div className="block text-left">
                  <div className="inline-block text-textWhite font-bold my-0 text-[1.38em] leading-[1.45]">
                    Lê Thị Thu Hiền
                  </div>
                  <div className=" text-textWhite my-0 text-[0.88] leading-[1.45]">
                    University of Social Sciences and Humanities
                  </div>
                </div>
                <Image
                  src={UITLogo}
                  alt=""
                  className="w-auto h-[2.5em] object-contain absolute top-[1em] right-[1.25em] text-white"
                />
              </div>
              <p className="text-left text-white">
                Quiz offers an outstanding user experience, with its intuitive
                interface and smooth navigation.
              </p>
            </div>
          </div>

          <div className="max-w-[32%]">
            <div className="relative flex flex-col gap-y-[1.5em] text-left p-[1.5em] shadow-boxheaderfooter bg-bgDark rounded-[2.5em]">
              <div className="flex gap-x-[1em]">
                <Image
                  src={profile}
                  alt=""
                  className="w-[3.75em] h-[3.75em] max-w-full inline-block rounded-full object-cover    "
                />
                <div className="block text-left">
                  <div className="inline-block text-textWhite font-bold my-0 text-[1.38em] leading-[1.45]">
                    Trần Phước Anh Quốc
                  </div>
                  <div className=" text-textWhite my-0 text-[0.88] leading-[1.45]">
                    University Of Information Technology
                  </div>
                </div>
                <Image
                  src={UITLogo}
                  alt=""
                  className="w-auto h-[2.5em] object-contain absolute top-[1em] right-[1.25em] text-white"
                />
              </div>
              <p className="text-left text-white">
                Quiz impresses with its robust feature set. From customizable
                quizzes to detailed analytics, it covers everything needed for
                effective learning and assessment. 💪
              </p>
            </div>
          </div>

          <div className="max-w-[32%]">
            <div className="relative flex flex-col gap-y-[1.5em] text-left p-[1.5em] shadow-boxheaderfooter bg-bgDark rounded-[2.5em]">
              <div className="flex gap-x-[1em]">
                <Image
                  src={phuoctri}
                  alt=""
                  className="w-[3.75em] h-[3.75em] max-w-full inline-block rounded-full"
                />
                <div className="block text-left">
                  <div className="inline-block text-textWhite font-bold my-0 text-[1.38em] leading-[1.45]">
                    Nguyễn Phước Trí
                  </div>
                  <div className="text-textWhite my-0 text-[0.88] leading-[1.45]">
                    University Of Information Technology
                  </div>
                </div>
                <Image
                  src={UITLogo}
                  alt=""
                  className="w-auto h-[2.5em] object-contain absolute top-[1em] right-[1.25em] text-white"
                />
              </div>
              <p className="text-left text-white">
                This software is not only engaging but also highly educational.
                It's a fantastic tool for learning and testing one's knowledge.
              </p>
            </div>
          </div>

          <div className="max-w-[32%]">
            <div className="relative flex flex-col gap-y-[1.5em] text-left p-[1.5em] shadow-boxheaderfooter bg-bgDark rounded-[2.5em]">
              <div className="flex gap-x-[1em]">
                <Image
                  src={vanduy}
                  alt=""
                  className="w-[3.75em] h-[3.75em] max-w-full inline-block rounded-full"
                />
                <div className="block text-left">
                  <div className="inline-block text-textWhite font-bold my-0 text-[1.38em] leading-[1.45]">
                    Lê Văn Duy
                  </div>
                  <div className="text-textWhite my-0 text-[0.88] leading-[1.45]">
                    University Of Information Technology
                  </div>
                </div>
                <Image
                  src={UITLogo}
                  alt=""
                  className="w-auto h-[2.5em] object-contain absolute top-[1em] right-[1.25em] text-white"
                />
              </div>
              <p className="text-left text-white">
                The ability to customize quizzes to align with specific
                educational goals and branding is a standout feature.
              </p>
            </div>
          </div>

          <div className="max-w-[32%]">
            <div className="relative flex flex-col gap-y-[1.5em] text-left p-[1.5em] shadow-boxheaderfooter bg-bgDark rounded-[2.5em]">
              <div className="flex gap-x-[1em]">
                <Image
                  src={phuoclong}
                  alt=""
                  className="w-[3.75em] h-[3.75em] max-w-full inline-block rounded-full"
                />
                <div className="block text-left">
                  <div className="inline-block text-textWhite font-bold my-0 text-[1.38em] leading-[1.45]">
                    Trần Phước Long
                  </div>
                  <div className="text-textWhite my-0 text-[0.88] leading-[1.45]">
                    University Of Information Technology
                  </div>
                </div>
                <Image
                  src={UITLogo}
                  alt=""
                  className="w-auto h-[2.5em] object-contain absolute top-[1em] right-[1.25em] text-white"
                />
              </div>
              <p className="text-left text-white">
                The support for various media types, such as images and videos,
                adds a dynamic element to the quizzes, making learning more
                engaging. 💪
              </p>
            </div>
          </div>
          <div className="max-w-[32%]">
            <div className="relative flex flex-col gap-y-[1.5em] text-left p-[1.5em] shadow-boxheaderfooter bg-bgDark rounded-[2.5em]">
              <div className="flex gap-x-[1em]">
                <Image
                  src={minhnhat}
                  alt=""
                  className="w-[3.75em] h-[3.75em] max-w-full inline-block rounded-full"
                />
                <div className="block text-left">
                  <div className="inline-block text-textWhite font-bold my-0 text-[1.38em] leading-[1.45]">
                    Nguyễn Minh Nhật
                  </div>
                  <div className=" text-textWhite my-0 text-[0.88] leading-[1.45]">
                    University Of Information Technology
                  </div>
                </div>
                <Image
                  src={UITLogo}
                  alt=""
                  className="w-auto h-[2.5em] object-contain absolute top-[1em] right-[1.25em] text-white"
                />
              </div>
              <p className="text-left text-white">
                Incorporating gamification elements in quizzes adds an element
                of fun and motivation to the learning process.
              </p>
            </div>
          </div>
        </div>
        <Image
          src={bgpurple}
          alt=""
          className="max-w-full inline-block w-[47em] h-auto opacity-[0.65] absolute bottom-[-20%]"
        />
      </div>
    </div>
  );
};

export default Header;
