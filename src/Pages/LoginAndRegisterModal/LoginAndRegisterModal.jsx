import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import LoginForm from "../Login/LoginForm";
import RegisterForm from "../Register/RegisterForm";
import GoogleLogin from "../../Components/Shared/GoogleLogin";

const LoginAndRegisterModal = ({ isOpen, setIsOpen }) => {
  const [loginOrRegister, setLoginOrRegister] = useState("login");
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white  p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl mb-4 font-bold text-center   leading-6 primaryTextColor"
                  >
                    {loginOrRegister === "login"
                      ? "Login Here"
                      : "Register Now"}
                  </Dialog.Title>
                  {loginOrRegister === "login" ? (
                    <LoginForm closeModal={closeModal}></LoginForm>
                  ) : (
                    <RegisterForm closeModal={closeModal}></RegisterForm>
                  )}
                  <div>
                    {loginOrRegister === "login" ? (
                      <p className="text-md">
                        Have don't Account{" "}
                        <span
                          onClick={() => setLoginOrRegister("register")}
                          className="cursor-pointer font-semibold text-info"
                        >
                          Register
                        </span>
                      </p>
                    ) : (
                      <p className="text-md">
                        Already Have an Account{" "}
                        <span
                          onClick={() => setLoginOrRegister("login")}
                          className="cursor-pointer font-semibold text-info"
                        >
                          Login
                        </span>
                      </p>
                    )}
                    <p className="text-xl font-bold text-center my-2">OR</p>
                    <GoogleLogin closeModal={closeModal}></GoogleLogin>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default LoginAndRegisterModal;
