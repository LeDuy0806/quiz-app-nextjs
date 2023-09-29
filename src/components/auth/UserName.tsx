"use client";

//animation
import { motion } from "framer-motion";

interface FormSignUpProps {
  setShowFormSignUp: (state: boolean) => void;
  setShowFormUserName: (state: boolean) => void;
  setShowFormUserType: (state: boolean) => void;
}

const FormUserName = (props: FormSignUpProps) => {
  return (
    <div className="absolute w-[760px] min-h-full mdl:min-h-[600px] rounded-[50px] bg-bgBlackLight top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] overflow-hidden py-[75px] px-[210px]">
      <div className="w-full h-full flex flex-col items-center justify-center gap-y-2">
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-[6rem]"
        >
          👋
        </motion.div>
        <motion.h1
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-[2rem] text-textWhite mb-[15px]"
        >
          What's your name?
        </motion.h1>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="flex flex-row items-center justify-around"
        >
          <div className="w-2/5 relative mb-[7px]">
            <input
              className="w-full block m-0 py-[13.5px] px-5 text-[1rem] leading-normal bg-clip-padding bg-bgInput border border-solid border-textFog rounded-[18px] placeholder:italic text-textWhite font-semibold outline-none focus:border-bgBlue focus:border-[2px]"
              placeholder="firstName"
            />
          </div>
          <div className="w-2/5 relative mb-[7px]">
            <input
              className="w-full block m-0 py-[13.5px] px-5 text-[1rem] leading-normal bg-clip-padding bg-bgInput border border-solid border-textFog rounded-[18px] placeholder:italic text-textWhite font-semibold outline-none focus:border-bgBlue focus:border-[2px]"
              placeholder="lastName"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="w-full relative mb-[7px]"
        >
          <input
            className="w-full block m-0 py-[13.5px] px-5 text-[1rem] leading-normal bg-clip-padding bg-bgInput border border-solid border-textFog rounded-[18px] placeholder:italic text-textWhite font-semibold outline-none focus:border-bgBlue focus:border-[2px]"
            placeholder="userName"
          />
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="w-full h-[60px] flex flex-col items-center justify-center"
        >
          <button
            className="w-full min-w-[300px] text-[16px] rounded-[20px] bg-bgBlue text-textWhite font-semibold hover:font-bold px-20 py-[10px] hover:py-[12px] mt-2"
            onClick={() => {
              props.setShowFormUserName(false);
              props.setShowFormUserType(true);
            }}
          >
            That's me
          </button>
        </motion.div>

        <motion.button
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          className="block w-full text-sm py-4 hover:bg-bgGrayLight hover:rounded-[18px] hover:text-[15px] font-bold text-textWhite"
          onClick={() => {
            props.setShowFormSignUp(true);
            props.setShowFormUserName(false);
          }}
        >
          Back
        </motion.button>
      </div>
    </div>
  );
};

export default FormUserName;
