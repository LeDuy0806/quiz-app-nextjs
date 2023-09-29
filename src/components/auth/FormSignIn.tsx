"use client";

import { useState } from "react";
//images
import Image from "next/image";
import {
  logoImg,
  googleImg,
  facebookImg,
} from "../../../public/assets/images/auth";

//routes
import { useRouter } from "next/navigation";

//icons
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";

//animation
import { motion } from "framer-motion";
import Link from "next/link";

const FormSignIn = () => {
  const router = useRouter();

  const [showPassWord, setShowPassWord] = useState<boolean>(false);

  return (
    <motion.main
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.1 }}
      className="w-full max-w-full min-h-screen z-[100] flex flex-col bg-bgPink overflow-hidden mx-auto mt-auto"
    >
      <div className="absolute w-[760px] min-h-full mdl:min-h-[600px] rounded-[50px] bg-textWhite top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] overflow-hidden py-[60px] px-[210px]">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-row items-center justify-center gap-x-4 mb-[30px]"
        >
          <Image src={logoImg} alt="" className="h-[50px] w-[50px]" />
          <p className="text-[36px] text-textBlack font-black">Quizzes</p>
        </motion.div>
        <div className="block h-full">
          <div className="flex flex-col mt-4">
            <div className="">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="relative mb-6"
                data-te-input-wrapper-init
              >
                <input
                  type="email"
                  className="block min-h-[auto] w-full rounded-2xl border-[2px] px-3 py-[0.8rem] font-semibold outline-none focus:border-bgBlue focus:border-[2px] placeholder-gray-400 placeholder:italic"
                  id="exampleInputEmail2"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </motion.div>

              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="relative mb-6"
                data-te-input-wrapper-init
              >
                <input
                  type={showPassWord ? "password" : "text"}
                  className="min-h-[auto] w-full rounded-2xl border-[2px] bg-transparent px-3 py-[0.8rem] font-semibold outline-none focus:border-bgBlue focus:border-[2px] placeholder-gray-400 placeholder:italic"
                  id="exampleInputPassword2"
                  placeholder="Password"
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

              <motion.button
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="w-full bg-bgBlue rounded-2xl py-[0.8rem] text-textWhite font-bold"
              >
                Sign In
              </motion.button>
            </div>
            <div className="flex flex-col w-full gap-y-2 mt-3">
              <motion.button
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                onClick={() => router.push("/signUp")}
                className="block w-full text-sm py-4 font-semibold hover:bg-bgGrayLight hover:rounded-[18px] hover:text-[15px]"
              >
                No account? Sign up for FREE
              </motion.button>
              <motion.button
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="block w-full  text-sm py-4 font-semibold hover:bg-bgGrayLight lue hover:rounded-[18px] hover:text-[15px]"
              >
                I forgot my password
              </motion.button>

              <motion.button
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="w-full flex flex-row items-center justify-around bg-white rounded-2xl py-[0.8rem] text-textGray font-bold border-[2px] border-textPurple hover:bg-textPurpleBorder hover:text-textWhite"
              >
                <Image
                  src={googleImg}
                  alt=""
                  className="block w-[20px] h-[20px]"
                />
                <span className="inline-block"> Sign in with google</span>
                <span />
              </motion.button>

              <motion.button
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="w-full flex flex-row items-center justify-around bg-white rounded-2xl py-[0.8rem] text-textGray font-bold border-[2px] border-textBlue hover:bg-bgBlue hover:text-textWhite"
              >
                <Image
                  src={facebookImg}
                  alt=""
                  className="z-[100] block w-[20px] h-[20px]"
                />
                <span className="inline-block"> Sign in with Facebook</span>
                <span />
              </motion.button>

              <Link href="/">
                <motion.button
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.9 }}
                  className="block w-full text-sm py-4 hover:bg-bgGrayLight hover:rounded-[18px] hover:text-[15px] font-bold"
                >
                  Back
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute w-full text-center min-h-[70px] bottom-0 left-[50%] translate-x-[-50%]">
          <p className="text-textGray font-semibold">
            ©2023 quizzes GmbH -
            <span className="text-textBlack font-bold">
              Imprint & Privacy Policy
            </span>
          </p>
        </div>
      </div>
    </motion.main>
  );
};

export default FormSignIn;
