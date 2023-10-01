"use client";
import React, { useEffect, useState } from "react";
import Switch from "react-switch";

//images
import Image from "next/image";
import { logoImg } from "../../../public/assets/images/auth";
import { loadingImg } from "../../../public/assets/images/auth";

//routes
import { useRouter } from "next/navigation";

//icons
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";

//animation
import { motion } from "framer-motion";
import clsx from "clsx";

import { EmailFormat, RequirePassword } from "src/app/validates";
import ErrorNotify from "./Error";

//RTKQuery
import { useCheckMailExistsMutation } from "src/app/redux/services/authApi";

interface FormSignUpProps {
  setShowFormSignUp: (state: boolean) => void;
  setShowFormUserName: (state: boolean) => void;
  handleChangeForm: (e: React.ChangeEvent<HTMLInputElement>) => void;
  mail: string;
  password: string;
}

const FormSignUp = (props: FormSignUpProps) => {
  const router = useRouter();

  const [click, setClick] = useState<boolean>(false);
  const [check, setCheck] = useState<boolean>(false);
  const [showPassWord, setShowPassWord] = useState<boolean>(false);

  const [checkMail, { data, isError, isLoading, isSuccess }] =
    useCheckMailExistsMutation();

  useEffect(() => {
    if (
      !props.mail ||
      !props.password ||
      !check ||
      RequirePassword(props.password) !== "strong" ||
      !EmailFormat(props.mail)
    ) {
      setClick(false);
    } else {
      setClick(true);
    }
  }, [props.mail, props.password, check]);

  const handleContinue = () => {
    if (click) {
      // props.setShowFormSignUp(false);
      // props.setShowFormUserName(true);
      checkMail({ mail: props.mail });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      props.setShowFormSignUp(false);
      props.setShowFormUserName(true);
    }
  }, [isSuccess]);

  return (
    <div className="absolute w-[760px] min-h-full mdl:min-h-[600px] rounded-[50px] bg-textWhite top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] overflow-hidden py-[75px] px-[210px]">
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
          <div className="flex flex-col">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="relative mb-6"
              data-te-input-wrapper-init
            >
              <input
                value={props.mail}
                type="email"
                name="mail"
                className={clsx(
                  `block min-h-[auto] w-full rounded-2xl border-[2px] px-3 py-[0.8rem] font-semibold outline-none focus:border-bgBlue focus:border-[2px] placeholder-gray-400 placeholder:italic`,
                  EmailFormat(props.mail) === false &&
                    "focus:border-textError border-textError",
                  EmailFormat(props.mail) === true &&
                    "focus:border-textGreen border-textGreen"
                )}
                placeholder="Enter email"
                onChange={props.handleChangeForm}
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
                value={props.password}
                type={showPassWord ? "text" : "password"}
                name="password"
                className={clsx(
                  `min-h-[auto] w-full rounded-2xl border bg-transparent px-3 py-[0.8rem] outline-none font-semibold focus:border-bgBlue focus:border-[2px] placeholder-gray-400 placeholder:italic`,
                  RequirePassword(props.password) === "strong" &&
                    "border-textGreen focus:border-textGreen",
                  RequirePassword(props.password) === "weak" &&
                    "border-textError focus:border-textError",
                  RequirePassword(props.password) === "medium" &&
                    "border-textYellow focus:border-textYellow"
                )}
                placeholder="Set password"
                onChange={props.handleChangeForm}
              />
              <button
                className="absolute right-4 translate-y-[-50%] top-[50%] cursor-pointer"
                onClick={() => {
                  setShowPassWord(!showPassWord);
                }}
              >
                {showPassWord ? (
                  <AiFillEye className=" w-[20px] h-[20px]" />
                ) : (
                  <AiFillEyeInvisible className=" w-[20px] h-[20px]" />
                )}
              </button>
            </motion.div>

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="w-full flex justify-center items-center text-right mb-4"
            >
              {/* <div className="relative flex ml-0 float-none items-center justify-center">
                <label className="relative inline-block text-[13px] h-[30px] w-[52px] bg-bgSwitch leading-[24px] cursor-pointer rounded-[15px] self-center">
                  <span className="absolute inline-block w-1/2 h-[calc(100%-4px)] bg-textWhite rounded-full left-1 shadow-white"></span>
                </label>
              </div> */}
              <Switch
                onChange={() => {
                  setCheck(!check);
                }}
                checked={check}
              />
              <span className="inline-block h-[30px] leading-[30px] ml-[10px] mt-0 font-semibold text-sm">
                {"Accept "}
                <a className="outline-none text-textBlueLight">Terms of use</a>
                {" and "}
                <a className="outline-none text-textBlueLight">
                  Privacy policy
                </a>
              </span>
            </motion.div>

            {isError && <ErrorNotify message="Email already exists" />}

            <motion.button
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className={clsx(
                `w-full flex items-center justify-center bg-bgBlue rounded-2xl py-[0.6rem] text-textWhite font-bold leading-7`,
                click
                  ? "bg-bgBlue cursor-pointer"
                  : "bg-textGray cursor-default"
              )}
              onClick={handleContinue}
            >
              {isLoading ? (
                <Image
                  src={loadingImg}
                  alt=""
                  className="w-7 h-7 self-center"
                />
              ) : (
                "Sign Up"
              )}
            </motion.button>
          </div>

          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.7 }}
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
