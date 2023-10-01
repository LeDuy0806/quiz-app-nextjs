"use client";

//images
import Image from "next/image";
import { loadingImg } from "../../../public/assets/images/auth";

//animation
import { motion } from "framer-motion";
import { studentsImg, teacherImg } from "../../../public/assets/images/auth";
import clsx from "clsx";

interface FormTypeProps {
  setShowFormUserName: (state: boolean) => void;
  setShowFormUserType: (state: boolean) => void;
  setShowUploadImage: (state: boolean) => void;
  handleChangeForm: (e: React.ChangeEvent<HTMLInputElement> | any) => void;
  handleSignUp: () => void;
  userType: string;
}

const FormUserType = (props: FormTypeProps) => {
  const handleContinue = () => {
    if (props.userType) {
      props.setShowFormUserType(false);
      props.setShowUploadImage(true);
    }
  };

  return (
    <div className="absolute w-[760px] min-h-full mdl:min-h-[600px] rounded-[50px] bg-bgBlackLight top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] overflow-hidden py-[75px] px-[210px]">
      <div className="w-full h-full flex flex-col items-center justify-center gap-y-2">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-[6rem]"
        >
          👨‍💻
        </motion.div>
        <motion.h1
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mdl:w-[560px] text-[2rem] text-textWhite mb-[15px] text-center font-black leading-[1.3em] break-words px-2"
        >
          What kind of customer are you using quizzes for?
        </motion.h1>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className={clsx(
            `w-[400px] mdl:w-[600px] min-h-[50px] flex flex-row flex-1 items-center justify-between outline-none bg-bgBlackType rounded-[20px] px-4 hover:bg-bgBlackHover cursor-pointer`,
            props.userType === "Student" && "border-[2px] border-bgBlue"
          )}
          onClick={() => {
            props.handleChangeForm({
              target: { name: "userType", value: "Student" },
            });
          }}
        >
          <div className="flex flex-row gap-x-2 items-center justify-center">
            <Image alt="" src={studentsImg} className="w-[30px] h-[30px]" />
            <span className="text-textWhite font-semibold">Student</span>
          </div>
          <div>
            <p className="text-textGray">Join game to play with friends.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className={clsx(
            `w-[400px] mdl:w-[600px] min-h-[50px] flex flex-row flex-1 items-center justify-between outline-none bg-bgBlackType rounded-[20px] px-4 hover:bg-bgBlackHover cursor-pointer`,
            props.userType === "Teacher" && "border-[2px] border-bgBlue"
          )}
          onClick={() => {
            props.handleChangeForm({
              target: { name: "userType", value: "Teacher" },
            });
          }}
        >
          <div className="flex flex-row gap-x-2 items-center justify-center">
            <Image alt="" src={teacherImg} className="w-[30px] h-[30px]" />
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
          transition={{ duration: 0.4, delay: 0.6 }}
          className="w-full h-[60px] flex flex-col items-center justify-center"
        >
          <button
            className={clsx(
              `max-w-[200px] w-[160px] flex items-center justify-center text-[16px] rounded-[20px] bg-bgBlue text-textWhite py-[12px] mt-2 text-center`,
              props.userType
                ? "bg-bgBlue font-semibold cursor-pointer hover:font-bold hover:py-[14px]"
                : "bg-textGray font-semibold cursor-default",
              false &&
                "bg-textGreen font-semibold cursor-default hover:py-[12px]"
            )}
            onClick={handleContinue}
          >
            Continue
          </button>
        </motion.div>

        <motion.button
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          className="block w-full text-textWhite text-sm py-4  hover:rounded-[18px] hover:text-[15px] font-bold"
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
