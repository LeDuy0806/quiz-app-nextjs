"use client";

//images
import Image from "next/image";

//animation
import { motion } from "framer-motion";
import { students, teacher } from "../../../public/assets";

interface FormTypeProps {
  setShowFormUserName: (state: boolean) => void;
  setShowFormUserType: (state: boolean) => void;
}

const FormUserType = (props: FormTypeProps) => {
  return (
    <div className="absolute w-[760px] min-h-full mdl:min-h-[600px] rounded-[50px] bg-bgBlackLight top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] overflow-hidden py-[75px] px-[210px]">
      <div className="w-full h-full flex flex-col items-center justify-center gap-y-2">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[6rem]"
        >
          👨‍💻
        </motion.div>
        <motion.h1
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-[560px] text-[2rem] text-textWhite mb-[15px] text-center font-black leading-[1.3em] break-words px-2"
        >
          What kind of customer are you using quizzes for?
        </motion.h1>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-[400px] mdl:w-[600px] min-h-[50px] flex flex-row flex-1 items-center justify-between outline-none bg-bgBlackType rounded-[20px] px-4 hover:bg-bgBlackHover cursor-pointer"
        >
          <div className="flex flex-row gap-x-2 items-center justify-center">
            <Image alt="" src={students} className="w-[30px] h-[30px]" />
            <span className="text-textWhite font-semibold">Student</span>
          </div>
          <div>
            <p className="text-textGray">Join game to play with friends.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-[400px] mdl:w-[600px] min-h-[50px] flex flex-row flex-1 items-center justify-between  outline-none bg-bgBlackType rounded-[20px] px-4 hover:bg-bgBlackHover cursor-pointer"
        >
          <div className="flex flex-row gap-x-2 items-center justify-center">
            <Image alt="" src={teacher} className="w-[30px] h-[30px]" />
            <span className="text-textWhite font-semibold">Teacher</span>
          </div>
          <div className="max-w-[220px] mdl:max-w-full">
            <p className="text-textGray">
              Create, quizzes store , organize for students joining game
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="w-full h-[60px] flex flex-col items-center justify-center"
        >
          <button className="max-w-[200px] text-[16px] rounded-[20px] bg-bgBlue text-textWhite font-semibold hover:font-bold px-10 py-[12px] hover:py-[14px] mt-2 text-center">
            Continue
          </button>
        </motion.div>

        <motion.button
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="block w-full text-sm py-4 hover:bg-bgGrayLight hover:rounded-[18px] hover:text-[15px] font-bold"
          onClick={() => {
            props.setShowFormUserType(false);
            props.setShowFormUserName(true);
          }}
        >
          Back
        </motion.button>
      </div>
    </div>
  );
};

export default FormUserType;
