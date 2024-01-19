import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="navbar h-[6rem]">
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
                  navigate("/route2");
                }}
              >
                Route 2
              </button>
            </ul>
          </div>
          <button
            onClick={() => {
              window.location.href = "/moksha-website-link";
              // moksha website link here
            }}
          >
            {/* Moksha Image */}
            <img
              className="btn-ghost drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
              src={"../../public/images/moksha-text.png"}
              height="100rem"
              width="225rem"
            />
          </button>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1">
            <button
              className="btn underline text-white btn-ghost text-lg drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
              onClick={() => {
                navigate("/rules");
              }}
            >
              Rules & Regulations
            </button>
            <button
              className="btn underline btn-ghost text-white text-lg drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
              onClick={() => {
                navigate("/home");
              }}
            >
              Home
            </button>
            <button
              className="btn underline btn-ghost text-white text-lg drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
              onClick={() => {
                navigate("/route2");
              }}
            >
              Route 2
            </button>
          </ul>
        </div>
        <div className="navbar-end">
          <button
            className="flex flex-col items-center"
            onClick={() => {
              window.location.href =
                "https://drsksirsbiologyclasses.business.site/";
              // sksir website link
            }}
          >
            {/* Sksir Image */}
            <div className="mb-[-10px] flex-shrink-0">
              <img
                className="btn-ghost p-1 max-w-full"
                src={"/images/sksir-logo-1.png"}
                height="100rem"
                width="95rem"
                alt="Sksir Logo"
              />
            </div>
            <h3 className="text-white text-sm font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              DR S.K. SIR'S BIOLOGY
            </h3>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
