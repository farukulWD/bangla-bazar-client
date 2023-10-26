import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineFavorite } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="primaryBgColor ">
      <div className="navbar my-container justify-between">
        <div className="">
          <a className="font-bold hidden md:block text-white text-xl mr-5 ">
            BanglaBazar
          </a>
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-full md:w-[400px]"
          />
        </div>
        <div className="gap-2">
          <div className="text-white">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <p className="text-2xl">
                    {" "}
                    <AiOutlineShoppingCart></AiOutlineShoppingCart>
                  </p>
                  <span className="badge badge-sm text-red-600 indicator-item">
                    8
                  </span>
                </div>
              </label>
              <div
                tabIndex={0}
                className="mt-3 z-[100] card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body rounded-md primaryBgColor">
                  <span className="font-bold text-lg">8 Items</span>
                  <span className="text-white">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-white">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <p className="text-2xl">
                    {" "}
                    <MdOutlineFavorite></MdOutlineFavorite>
                  </p>
                  <span className="badge badge-sm text-red-600 indicator-item">
                    8
                  </span>
                </div>
              </label>
              <div
                tabIndex={0}
                className="mt-3 z-[100] card card-compact dropdown-content w-52  shadow"
              >
                <div className="card-body rounded-md primaryBgColor">
                  <span className="text-lg">1. Items</span>
                  <span className="text-lg">2. Items</span>
                  <span className="text-lg">3. Items</span>
                  <span className="text-lg">4. Items</span>

                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View list
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://i.ibb.co/LYcSv6c/myPic.jpg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[50] p-2 text-white shadow menu menu-sm dropdown-content primaryBgColor rounded-box w-52"
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
