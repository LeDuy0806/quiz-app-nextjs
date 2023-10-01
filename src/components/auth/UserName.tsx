"use client";

import clsx from "clsx";

//animation
import { motion } from "framer-motion";
import { use, useEffect, useState } from "react";
import { RequireLong, RequireShort } from "src/app/validates";

//images
import Image from "next/image";
import { loadingImg } from "../../../public/assets/images/auth";

//components
import ErrorNotify from "./Error";

//RTKQuery
import { useCheckUserNameExitsMutation } from "src/app/redux/services/authApi";

interface FormSignUpProps {
  setShowFormSignUp: (state: boolean) => void;
  setShowFormUserName: (state: boolean) => void;
  setShowFormUserType: (state: boolean) => void;
  handleChangeForm: (e: React.ChangeEvent<HTMLInputElement>) => void;
  firstName: string;
  lastName: string;
  userName: string;
}

const FormUserName = (props: FormSignUpProps) => {
  const [click, setClick] = useState<boolean>(false);

  const [checkUserName, { data, isError, isSuccess, isLoading }] =
    useCheckUserNameExitsMutation();

  useEffect(() => {
    if (
      !props.firstName ||
      !props.lastName ||
      !props.userName ||
      RequireShort(props.firstName) !== "strong" ||
      RequireShort(props.lastName) !== "strong" ||
      RequireLong(props.userName) !== "strong"
    ) {
      setClick(false);
    } else {
      setClick(true);
    }
  }, [props.firstName, props.lastName, props.userName]);

  const handleContinue = () => {
    if (click) {
      checkUserName({ userName: props.userName });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      props.setShowFormUserName(false);
      props.setShowFormUserType(true);
    }
  }, [isSuccess]);

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
              value={props.firstName}
              type="text"
              name="firstName"
              className={clsx(
                `w-full block m-0 py-[13.5px] px-5 text-[1rem] leading-normal bg-clip-padding bg-bgInput border border-solid border-textFog rounded-[18px] placeholder:italic text-textWhite font-semibold outline-none focus:border-bgBlue focus:border-[2px]`,
                RequireShort(props.firstName) === "weak" &&
                  "border-textError focus:border-textError",
                RequireShort(props.firstName) === "strong" &&
                  "border-textGreen focus:border-textGreen"
              )}
              placeholder="firstName"
              onChange={props.handleChangeForm}
            />
          </div>
          <div className="w-2/5 relative mb-[7px]">
            <input
              value={props.lastName}
              type="text"
              name="lastName"
              className={clsx(
                `w-full block m-0 py-[13.5px] px-5 text-[1rem] leading-normal bg-clip-padding bg-bgInput border border-solid border-textFog rounded-[18px] placeholder:italic text-textWhite font-semibold outline-none focus:border-bgBlue focus:border-[2px]`,
                RequireShort(props.lastName) === "weak" &&
                  "border-textError focus:border-textError",
                RequireShort(props.lastName) === "strong" &&
                  "border-textGreen focus:border-textGreen"
              )}
              placeholder="lastName"
              onChange={props.handleChangeForm}
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
            value={props.userName}
            name="userName"
            className={clsx(
              `w-full block m-0 py-[13.5px] px-5 text-[1rem] leading-normal bg-clip-padding bg-bgInput border border-solid border-textFog rounded-[18px] placeholder:italic text-textWhite font-semibold outline-none focus:border-bgBlue focus:border-[2px]`,
              RequireLong(props.userName) === "weak" &&
                "border-textError focus:border-textError",
              RequireLong(props.userName) === "strong" &&
                "border-textGreen focus:border-textGreen"
            )}
            placeholder="userName"
            onChange={props.handleChangeForm}
          />
        </motion.div>

        {isError && <ErrorNotify message="UserName already exists" />}

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="w-full h-[60px] flex flex-col items-center justify-center"
        >
          <button
            className={clsx(
              `w-full flex items-center justify-center min-w-[300px] text-[16px] rounded-[20px] bg-bgBlue text-textWhite font-semibold px-20 py-[10px] mt-2`,
              click
                ? "bg-bgBlue cursor-pointer hover:py-[12px] hover:font-bold"
                : "bg-textGray cursor-default"
            )}
            onClick={handleContinue}
          >
            {isLoading ? (
              <Image src={loadingImg} alt="" className="w-7 h-7 self-center" />
            ) : (
              "That's me"
            )}
          </button>
        </motion.div>

        <motion.button
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          className="block w-full text-sm py-4 hover:rounded-[18px] hover:text-[15px] font-bold text-textWhite"
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
