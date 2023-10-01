"use client";

import React, { useEffect, useState } from "react";

//component
import FormSignUp from "src/components/auth/FormSignUp";
import FormUserName from "src/components/auth/UserName";
import FormUserType from "src/components/auth/UserType";

//animation
import { motion } from "framer-motion";

//type
import { SignUpType } from "src/app/variable";
import UploadAvatar from "src/components/auth/UploadAvatar";

const InitSignUp = {
  avatar: "",
  firstName: "",
  lastName: "",
  userType: "",
  userName: "",
  mail: "",
  password: "",
} as SignUpType;

const SignUp = () => {
  const [showFormSignUp, setShowFormSignUp] = useState<boolean>(true);
  const [showFormUserName, setShowFormUserName] = useState<boolean>(false);
  const [showFormUserType, setShowFormUserType] = useState<boolean>(false);
  const [showUpLoadImage, setShowUploadImage] = useState<boolean>(false);

  const [formData, setFormData] = useState<SignUpType>(InitSignUp);

  const handleChangeForm = (e: React.ChangeEvent<HTMLInputElement> | any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = () => {
    console.log(formData);
  };

  return (
    <motion.div
      initial={!showFormSignUp ? { y: -10, opacity: 0 } : { x: 10, opacity: 0 }}
      animate={!showFormSignUp ? { y: 0, opacity: 1 } : { x: 0, opacity: 1 }}
      transition={{ duration: 0.1 }}
      className="w-full max-w-full min-h-screen z-[100] flex flex-col items-end font-fontFamily bg-bgPink overflow-hidden mx-auto mt-auto"
    >
      {showFormSignUp && (
        <FormSignUp
          setShowFormSignUp={setShowFormSignUp}
          setShowFormUserName={setShowFormUserName}
          handleChangeForm={handleChangeForm}
          mail={formData.mail}
          password={formData.password}
        />
      )}
      {showFormUserName && (
        <FormUserName
          setShowFormSignUp={setShowFormSignUp}
          setShowFormUserName={setShowFormUserName}
          setShowFormUserType={setShowFormUserType}
          handleChangeForm={handleChangeForm}
          firstName={formData.firstName}
          lastName={formData.lastName}
          userName={formData.userName}
        />
      )}
      {showFormUserType && (
        <FormUserType
          setShowFormUserName={setShowFormUserName}
          setShowFormUserType={setShowFormUserType}
          setShowUploadImage={setShowUploadImage}
          handleChangeForm={handleChangeForm}
          userType={formData.userType}
          handleSignUp={handleSignUp}
        />
      )}
      {showUpLoadImage && (
        <UploadAvatar
          setShowFormUserType={setShowFormUserType}
          setShowUploadImage={setShowUploadImage}
          handleChangeForm={handleChangeForm}
          formData={formData}
          avatar={formData.avatar}
        />
      )}
    </motion.div>
  );
};

export default SignUp;
