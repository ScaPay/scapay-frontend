/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Scapay from "../assets/Scapay.png"


export default () => {
const [navbarOpen, setNavbarOpen] = useState(false);

const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

 return (
    <nav className=" pt-6 lg:pt-2 ">
    <div className="first-nav flex justify-between    ">
      <div className="logo items-center flex ">
        <img src={Scapay} alt="" className="object-contain h-52 absolute pt-4"></img>
        {/* <img class="block h-8 w-auto mr-2" src={glogo} alt="Workflow" /> */}
        {/* <img class="block w-8 h-8 " src={logo} alt="Workflow" /> */}

        {/* <h1 className="font-bold  md:block text-primary items-center text-lg md:text-4xl   ">
        $<span className="border-r-2 border-gray-300 pl-1"></span>
          <span className="text-primary text-center mt-auto md:text-4xl pl-1">
            sca<span className="text-secondary">pay</span>
          </span>
        </h1> */}
      </div>
      <Link to="" onClick={handleToggle}>
        <div class="lg:hidden flex items-center ">
          <button class="outline-none mobile-menu-button">
            <svg
              class="w-6 h-6 text-gray-500"
              x-show="!showMenu"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </Link>

      <div className={` hidden lg:block   sm:ml-6 pt-1 pl-3" `}>
        <div class="flex space-x-12 items-baseline item-center">
          <Link to="/sign-up">
            <a
              href="#"
              class=" hover:underline hover:underline-offset-8 text-secondary3    text-sm font-semibold  hover:text-primary px-3 py-2 rounded-md "
            >
              Create Account
            </a>
          </Link>

          <Link to="/feeds">
            <a
              href="#"
              class=" hover:underline hover:underline-offset-8 text-secondary3   text-sm font-semibold  hover:text-primary px-3 py-2 rounded-md "
            >
              Our Solutions
            </a>
          </Link>

          <Link to="/">
            <a
              href="#"
              class=" hover:underline hover:underline-offset-8 text-secondary3   text-sm font-semibold  hover:text-primary px-3 py-2 rounded-md "
            >
              Developers
            </a>
          </Link>
          
          <Link to="/">
            <a
              href="#"
              class=" hover:underline hover:underline-offset-8 text-secondary3   text-sm font-semibold  hover:text-primary px-3 py-2 rounded-md "
            >
              Pricing
            </a>
          </Link>

         
            <Link
              to="/auth"
              class="bg-primary text-white capitalize  text-sm font-extrabold  hover:text-white  px-12 py-3 rounded-md "
            >
              Sign In
            </Link>
          
        </div>
      </div>
    </div>

    <div
      className={`lg:hidden ${
        navbarOpen ? "  relative block w-full   " : "hidden"
      }`}
    >
      <div class="w-full space-y-8 item-center bg-white  shadow-xl pt-8 px-4 pb-20 h-screen">
      <div class=" space-y-12 items-baseline item-center">
        <div>
        <Link to="/feeds">
            <a
              href="#"
              class=" hover:underline hover:underline-offset-8 text-secondary3    text-sm font-semibold  hover:text-primary px-3 py-2 rounded-md "
            >
              Create Account
            </a>
          </Link>
        </div>

         <div>
         <Link to="/feeds">
            <a
              href="#"
              class=" hover:underline hover:underline-offset-8 text-secondary3   text-sm font-semibold  hover:text-primary px-3 py-2 rounded-md "
            >
              Our Solutions
            </a>
          </Link>
         </div>

       <div>
       <Link to="/">
            <a
              href="#"
              class=" hover:underline hover:underline-offset-8 text-secondary3   text-sm font-semibold  hover:text-primary px-3 py-2 rounded-md "
            >
              Developers
            </a>
          </Link>
       </div>
          
         <div>
         <Link to="/">
            <a
              href="#"
              class=" hover:underline hover:underline-offset-8 text-secondary3   text-sm font-semibold  hover:text-primary px-3 py-2 rounded-md "
            >
              Pricing
            </a>
          </Link>
         </div>

         
            <div>
            <Link
              to="/auth"
              class="bg-primary text-white capitalize  text-sm font-extrabold  hover:text-white  px-12 py-3 rounded-md "
            >
              Sign In
            </Link>
            </div>
          
        </div>

    </div>
    </div>

  </nav>
 )
}