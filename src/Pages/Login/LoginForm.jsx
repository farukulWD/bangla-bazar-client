import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Register from "../Register/Register";

const LoginForm = ({ openRegisterModal }) => {
  let [registerIsOpen, setRegisterIsOpen] = useState(false);
  function openRegisterModal() {
    setRegisterIsOpen(true);
  }
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
            placeholder="Type Your Email"
            type="password"
            {...register("password", { required: true })}
            className={`w-full p-2 rounded border ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
          />

          {errors.password && (
            <p className="text-red-500 mt-2">Password is Required</p>
          )}
        </div>

        <div className="mb-4">
          <button
            type="submit"
            className="w-full primaryBgColor text-white p-2 rounded hover:bg-opacity-80"
          >
            Login
          </button>
        </div>
      </form>
      <p className="text-md">
        Have don't Account{" "}
        <span
          className="cursor-pointer font-semibold text-info"
          onClick={openRegisterModal}
        >
          Register
        </span>
      </p>
      <Register
        registerIsOpen={registerIsOpen}
        setRegisterIsOpen={setRegisterIsOpen}
      ></Register>
    </div>
  );
};

export default LoginForm;
