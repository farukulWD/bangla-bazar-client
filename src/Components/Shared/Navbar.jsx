import React from "react";

const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <a className="hover:text-[#4a9b35] text-sm font-semibold hover:rounded-lg hover:bg-white transition-all delay-75">
          Home
        </a>
      </li>
      <li>
        <a className="hover:text-[#4a9b35] text-sm font-semibold hover:rounded-lg hover:bg-white transition-all delay-75">
          Products
        </a>
      </li>
      <li>
        <a className="hover:text-[#4a9b35] text-sm font-semibold hover:rounded-lg hover:bg-white transition-all delay-75">
          About us
        </a>
      </li>
    </>
  );
  return (
    <div className="primaryBgColor ">
      <div className="navbar my-container justify-between">
        <div className="">
          <a className="font-bold hidden md:block text-white text-xl mr-5 ">
            BanglaBazar
          </a>
          <div className="dropdown md:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow primaryBgColor rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-full md:w-[400px]"
            />
          </div>
        </div>
        <div className="hidden lg:block">
          <ul className="menu menu-horizontal px-1 text-white">{menuItems}</ul>
        </div>
        <div className="gap-2">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://i.ibb.co/LYcSv6c/myPic.jpg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[50] p-2 shadow menu menu-sm dropdown-content primaryBgColor rounded-box w-52"
            >
              <li>
                <a className="hover:text-[#4a9b35] text-sm font-semibold hover:rounded-lg hover:bg-white transition-all delay-75">
                  Profile
                </a>
              </li>
              <li>
                <a className="hover:text-[#4a9b35] text-sm font-semibold hover:rounded-lg hover:bg-white transition-all delay-75">
                  Settings
                </a>
              </li>
              <li>
                <a className="hover:text-[#4a9b35] text-sm font-semibold hover:rounded-lg hover:bg-white transition-all delay-75">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
