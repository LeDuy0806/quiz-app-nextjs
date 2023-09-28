"use client";
import { useState } from "react";

//images
import Image from "next/image";
import { logo } from "../../../public/assets";

//routes
import { useRouter } from "next/navigation";

//icons
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";

//animation
import { motion } from "framer-motion";

interface FormSignUpProps {
  setShowFormSignUp: (state: boolean) => void;
  setShowFormUserName: (state: boolean) => void;
}

const FormSignUp = (props: FormSignUpProps) => {
  const router = useRouter();

  const [showPassWord, setShowPassWord] = useState<boolean>(false);

  return (
    <div className="absolute w-[760px] min-h-full mdl:min-h-[600px] rounded-[50px] bg-textWhite top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] overflow-hidden py-[75px] px-[210px]">
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-row items-center justify-center gap-x-4 mb-[30px]"
      >
        <Image src={logo} alt="" className="h-[50px] w-[50px]" />
        <p className="text-[36px] text-textBlack font-black">Quizzes</p>
      </motion.div>
      <div className="block h-full">
        <div className="flex flex-col mt-4">
          <div className="flex flex-col">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative mb-6"
              data-te-input-wrapper-init
            >
              <input
                type="email"
                className="block min-h-[auto] w-full rounded-2xl border px-3 py-[0.8rem] outline-none font-semibold focus:border-bgBlue focus:border-[2px] placeholder-gray-400 placeholder:italic"
                id="exampleInputEmail2"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </motion.div>

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative mb-6"
              data-te-input-wrapper-init
            >
              <input
                type={showPassWord ? "password" : "text"}
                className="min-h-[auto] w-full rounded-2xl border bg-transparent px-3 py-[0.8rem] outline-none font-semibold focus:border-bgBlue focus:border-[2px] placeholder-gray-400 placeholder:italic"
                id="exampleInputPassword2"
                placeholder="Set password"
              />
              <button
                className="absolute right-4 translate-y-[-50%] top-[50%] cursor-pointer"
                onClick={() => {
                  setShowPassWord(!showPassWord);
                }}
              >
                {showPassWord ? (
                  <AiFillEyeInvisible className=" w-[20px] h-[20px]" />
                ) : (
                  <AiFillEye className=" w-[20px] h-[20px]" />
                )}
              </button>
            </motion.div>

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-full flex justify-center items-center text-right mb-4"
            >
              <div className="relative flex ml-0 float-none items-center justify-center">
                <label className="relative inline-block text-[13px] h-[30px] w-[52px] bg-bgSwitch leading-[24px] cursor-pointer rounded-[15px] self-center">
                  <span className="absolute inline-block w-1/2 h-[calc(100%-4px)] bg-textWhite rounded-full left-1 shadow-white"></span>
                </label>
              </div>
              <span className="inline-block h-[30px] leading-[30px] ml-[10px] mt-0 font-semibold text-sm">
                {"Accept "}
                <a className="outline-none text-textBlueLight">Terms of use</a>
                {" and "}
                <a className="outline-none text-textBlueLight">
                  Privacy policy
                </a>
              </span>
            </motion.div>

            <motion.button
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="w-full bg-bgBlue rounded-2xl py-[0.8rem] text-textWhite font-bold"
              onClick={() => {
                props.setShowFormSignUp(false);
                props.setShowFormUserName(true);
              }}
            >
              Sign Up
            </motion.button>
          </div>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col w-full gap-y-2 mt-3"
          >
            <button
              onClick={() => router.push("/signIn")}
              className="block w-full text-sm py-4 font-semibold hover:bg-bgGrayLight hover:rounded-[18px] hover:text-[15px]"
            >
              Already have an account? Sign In
            </button>

            <button
              className="block w-full text-sm py-4 hover:bg-bgGrayLight hover:rounded-[18px] hover:text-[15px] font-bold"
              onClick={() => router.back()}
            >
              Back
            </button>
          </motion.div>
        </div>
      </div>
      <motion.div className="absolute w-full text-center min-h-[70px] bottom-0 left-[50%] translate-x-[-50%]">
        <p className="text-textGray font-semibold">
          ©2023 quizzes GmbH -
          <span className="text-textBlack font-bold">
            Imprint & Privacy Policy
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default FormSignUp;
