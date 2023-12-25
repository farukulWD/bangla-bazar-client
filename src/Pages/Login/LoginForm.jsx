import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";

const LoginForm = ({ closeModal }) => {
  const { login } = useContext(AuthContext);

  const [showPass, setShowPass] = useState(false);
  const [loginUser, setLoginUser] = useState(false);

  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    setLoginUser(true);
    login(data.email, data.password)
      .then((res) => {
        if (res.user) {
          setLoginUser(false);
          reset();
          closeModal();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Login has been success",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block primaryTextColor font-bold mb-2"
          >
            Email
          </label>

          <input
            name="email"
            id="email"
            placeholder="Type Your Email"
            type="email"
            {...register("email", { required: true })}
            className={`w-full p-2 rounded border ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />

          {errors.email && (
            <p className="text-red-500 mt-2">Email is Required</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block primaryTextColor font-bold mb-2"
          >
            Password
          </label>

          <input
            name="password"
            id="password"
            placeholder="Type Your Password"
            type={showPass ? "text" : "password"}
            {...register("password", { required: true })}
            className={`w-full p-2 relative rounded border ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
          />
          <span
            onClick={() => setShowPass(!showPass)}
            className="absolute right-8 cursor-pointer mt-3"
          >
            {showPass ? <BsEye></BsEye> : <BsEyeSlash></BsEyeSlash>}
          </span>
          {errors.password && (
            <p className="text-red-500 mt-2">Password is Required</p>
          )}
        </div>
        <div className="mb-4">
          <button
            disabled={loginUser}
            type="submit"
            className="w-full bg-primary-color text-white p-2 rounded hover:bg-opacity-80"
          >
            {loginUser ? (
              <span className="loading loading-dots loading-md"></span>
            ) : (
              "Login"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
