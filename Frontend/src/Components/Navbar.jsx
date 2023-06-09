import React, { useState } from "react";
import { IoMdSunny, IoMdMoon } from "react-icons/io";
import darkLogo from "../Utils/img/logo_dark.png";
import "../Styles/Style.css";
import "../Styles/Responsive.css";

const Navbar = () => {
  const [Mode, setMode] = useState("Dark");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [isnavopen, setIsnavopen] = useState(false);
  console.log("isnavopen  ", isnavopen);


  function tooglenavbar() {
    setIsnavopen(!isnavopen);
  }

  function handleClick() {
    setIsToggled(!isToggled);
    setMode(isToggled ? "Dark" : "Light");
  }

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <nav className="sm:px-2 mx-auto sm:px-2 container_xxl">
        <div className="navbar flex flex-row items-center justify-between font-medium container mx-auto px-4 sm:px-4 2xl:max-w-8xl">
          <a
            className="nav-logo inline-block pt-1 pb-1 mr-4 whitespace-no-wrap site_logo_light"
            href="a"
          >
            <img src={darkLogo} alt="logo" />
          </a>
          <div
            className="res_nav_main flex items-center justify-between w-full xl:flex-row offcanvas offcanvas_dark offcanvas-end"
            id="navbarSupportedContent"
          >
            <ul className="flex flex-wrap list-reset pl-0 mb-0 navbar_nav2 lg:ml-4 sm:mx-auto mb-2 lg:mb-0 xl:mt-0 mt-5">
              <li className="nav-item">
                <a
                  className="inline-block py-2 px-2 no-underline font-semibold"
                  href="a"
                >
                  Ecosystem
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="inline-block py-2 px-2 no-underline font-semibold"
                  href="a"
                >
                  Team
                </a>
              </li>
              <div className="relative">
                <button
                  className="py-2 bg-transparent border-0 shadow-none font-semibold dropdown-toggle"
                  type="button"
                  onClick={toggleMenu}
                >
                  <span className="font-semibold txt_white py-1 px-4 nav_v">
                    Vision
                    <i className="fa fa-caret-down ml-2" aria-hidden="true"></i>
                  </span>
                </button>
                <div
                  className={`dropdown-menu nav_dropdown2 flex flex-col justify-start items-start absolute right-0 mt-2 py-1 px-4 bg-black shadow-xl ${
                    isMenuOpen ? "" : "hidden"
                  }`}
                >
                  <a
                    className="block dropdown-item text-sm txt_white hover:bg-gray-100"
                    href="a"
                  >
                    Pools
                  </a>
                  <a
                    className="block dropdown-item text-sm txt_white hover:bg-gray-100 hover:text-purple-600"
                    href="a"
                  >
                    My Pools
                  </a>
                  <a
                    className="block dropdown-item text-sm txt_white hover:bg-gray-100"
                    href="a"
                  >
                    Farms NEW
                  </a>
                </div>
              </div>
              <li className="nav-item">
                <a
                  className="inline-block py-2 px-2 no-underline font-semibold"
                  href="a"
                >
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="inline-block py-2 px-2 no-underline font-semibold"
                  href="a"
                >
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="flex flex-wrap items-center">
              <button
                type="button"
                className="relative inline-flex items-center justify-center w-12 mr-3 h-6 bg-gray-400 rounded-full shadow-inner focus:outline-none"
                onClick={handleClick}
              >
                {/* Icon for dark mode */}
                <IoMdMoon
                  className={`absolute top-0 left-0 w-6 h-6 text-gray-200 transition duration-300 ease-in-out ${
                    isToggled
                      ? "opacity-0 translate-x-6"
                      : "opacity-100 translate-x-0"
                  }`}
                />

                {/* Icon for light mode */}
                <IoMdSunny
                  className={`absolute top-0 right-0 w-6 h-6 text-yellow-400 transition duration-300 ease-in-out ${
                    isToggled
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-6"
                  }`}
                />
              </button>
              <ul className="flex flex-wrap list-reset pl-0 mb-0 navbar_nav2 mb-2 lg:mb-0 me-3">
                <li className="nav-item">
                  <a
                    className="inline-block py-2 px-1 no-underline font-semibold"
                    href="a"
                  >
                    Log in
                  </a>
                </li>
              </ul>
              <a
                href="a"
                className="btn_gray text-white px-4 py-2 rounded-lg uppercase text-sm font-medium"
              >
                <span>Register</span>
              </a>
            </div>
          </div>
          <button
            className="res_nav relative py-1 px-2 text-md leading-normal bg-transparent border border-transparent rounded border-0 shadow-none"
            type="button"
            onClick={tooglenavbar}
          >
            <i className="fas fa-bars txt_white"></i>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
