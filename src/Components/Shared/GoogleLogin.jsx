import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Context/AuthProvider";
import { Navigate } from "react-router-dom";

const GoogleLogin = ({ closeModal }) => {
  const { googleLogin } = useContext(AuthContext);
  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        console.log(res.user);
        closeModal();
        Navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <button
        onClick={handleGoogleLogin}
        className="w-full text-xl btn hover:border-[#4a9b35 hover:bg-[#ccfac0]  flex justify-center border border-[#4a9b35] rounded"
      >
        <FcGoogle></FcGoogle>
      </button>
    </div>
  );
};

export default GoogleLogin;
