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
                className="h-5 w-5"
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
                className="btn text-white btn-warning my-1"
                onClick={() => {
                  navigate("/rules");
                }}
              >
                Rules & regulations
              </button>
              <button
                className="btn text-white btn-warning my-1"
                onClick={() => {
                  navigate("/home");
                }}
              >
                Home
              </button>
              <button
                className="btn text-white btn-warning my-1"
                onClick={() => {
                  navigate("/route2");
                }}
              >
                Route 2
              </button>
            </ul>
          </div>
          <button
            onClick={() => {
              navigate("/moksha-website-link"); 
              // moksha website link here
            }}
          > 
          {/* Moksha Image */}
            <img
              className="btn-ghost"
              src={"../../public/images/moksha-text.png"}
              height="200rem"
              width="200rem"
            />
          </button>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1">
            <button
              className="btn text-white btn-ghost "
              onClick={() => {
                navigate("/rules");
              }}
            >
              Rules & Regulations
            </button>
            <button
              className="btn  btn-ghost text-white"
              onClick={() => {
                navigate("/home");
              }}
            >
              Home
            </button>
            <button
              className="btn  btn-ghost text-white"
              onClick={() => {
                navigate("/route2");
              }}
            >
              Route 2
            </button>
          </ul>
        </div>
        <div className="navbar-end"></div>
      </div>
    </div>
  );
};

export default Navbar;
