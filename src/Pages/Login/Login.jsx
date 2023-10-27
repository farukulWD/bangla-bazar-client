import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import LoginForm from "./LoginForm";

function Login({ loginIsOpen, setLoginIsOpen }) {
  function closeLoginModal() {
    setLoginIsOpen(false);
  }
  function openRegisterModal() {
    setLoginIsOpen(false);
    setRegisterIsOpen(true);
  }
  return (
    <>
      <Transition appear show={loginIsOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeLoginModal}>
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
                    Login Here
                  </Dialog.Title>
                  <LoginForm openRegisterModal={openRegisterModal}></LoginForm>
                  <p className="text-center text-lg">OR</p>
                  <button>Login With Google</button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
export default Login;
