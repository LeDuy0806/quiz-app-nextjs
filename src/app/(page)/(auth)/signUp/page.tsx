"use client";

import { useState } from "react";

//component
import FormSignUp from "src/components/auth/FormSignUp";
import FormUserName from "src/components/auth/UserName";
import FormUserType from "src/components/auth/UserType";

//animation
import { motion } from "framer-motion";

const SignUp = () => {
  const [showFormSignUp, setShowFormSignUp] = useState<boolean>(true);
  const [showFormUserName, setShowFormUserName] = useState<boolean>(false);
  const [showFormUserType, setShowFormUserType] = useState<boolean>(false);

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
        />
      )}
      {showFormUserName && (
        <FormUserName
          setShowFormSignUp={setShowFormSignUp}
          setShowFormUserName={setShowFormUserName}
          setShowFormUserType={setShowFormUserType}
        />
      )}
      {showFormUserType && (
        <FormUserType
          setShowFormUserName={setShowFormUserName}
          setShowFormUserType={setShowFormUserType}
        />
      )}
    </motion.div>
  );
};

export default SignUp;
