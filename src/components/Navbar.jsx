import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <button
                className="btn text-white btn-warning my-1 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
                onClick={() => {
                  navigate("/rules");
                }}
              >
                Rules & regulations
              </button>
              <button
                className="btn text-white btn-warning my-1 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
                onClick={() => {
                  navigate("/home");
                }}
              >
                Home
              </button>
              <button
                className="btn text-white btn-warning my-1 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
                onClick={() => {
                  navigate("/register");
                }}
              >
                Register / Login
              </button>
            </ul>
          </div>
          <button
            onClick={() => {
              window.location.href = "https://www.nita.ac.in/";
              // moksha website link here
            }}
          >
            {/* Moksha Image */}
            <img
              className="btn-ghost drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
              src={"/images/nita-logo.png"}
              width="100rem"
            />
          </button>
        </div>
        <div className="navbar-end  ">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 mx-6 ">
              <button
                className="btn text-white btn-ghost text-sm btn-sm hover:text-black hover:bg-white"
                onClick={() => {
                  navigate("/rules");
                }}
              >
                Rules & Regulations
              </button>
              <button
                className="btn btn-ghost text-white text-sm mr-5 btn-sm hover:text-black hover:bg-white"
                onClick={() => {
                  navigate("/home");
                }}
              >
                Home
              </button>
              <button
                className="btn text-white text-sm btn-outline btn-sm hover:text-black hover:bg-white"
                onClick={() => {
                  navigate("/register");
                }}
              >
                Register / Login
              </button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
