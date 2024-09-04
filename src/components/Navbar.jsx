"use client";

import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  // TO-DO: add this feature in the upcoming
  // transition-all ease-in duration-500 -> add this ul to get back smooth transition

  return (
    <>
      <header>
        <nav className="p-5 bg-white shadow  lg:flex lg:items-center lg:justify-between z-50">
          <div className="flex flex-row lg:flex-row justify-between items-center ">
            <a
              href="/"
              className="text-2xl font-sans cursor-pointer flex items-center"
            >
              <img alt="logo" className="lg:h-14 h-10 inline" src="/favicon.svg" />
              <p className="font-extrabold text-2xl">Digi Covai</p>
            </a>

            <span className="text-3xl cursor-pointer mx-2  block lg:hidden">
              <button onClick={toggleMenu}>
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128L50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8M40 72h176a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16m176 112H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16"
                    ></path>
                  </svg>
                )}
              </button>
            </span>
          </div>

          <ul
            id="nava"
            className={`menu ${
              isOpen ? "top-[80px] opacity-100" : ""
            }  lg:flex lg:ml-5 lg:items-center  lg:z-auto lg:mx-2 lg:static absolute w-full left-0 lg:w-fit lg:gap-3 xl:gap-10 lg:flex-row lg:py-0 py-4 lg:pl-0 pl-7 lg:opacity-100 opacity-0 top-[-400px] font-sans bg-slate-100 lg:bg-white z-50 transition-all ease-in duration-500`}
          >
            <li className="mx-4 my-6 lg:m-0">
              <a href="/" className="text-xl hover:text-cyan-500 duration-500">
                Home
              </a>
            </li>
            <li className="mx-4 my-6 lg:m-0">
              <a
                href="#services"
                className="text-xl hover:text-cyan-500 duration-500"
              >
                Our Services
              </a>
            </li>
            <li className="mx-4 my-6 lg:m-0">
              <a
                href="#whyus"
                className="text-xl hover:text-cyan-500 duration-500"
              >
                Why Choose Us
              </a>
            </li>
            <li className="mx-4 my-6 lg:m-0">
              <a
                href="#industry"
                className="text-xl hover:text-cyan-500 duration-500"
              >
                Industry
              </a>
            </li>
            <li className="mx-4 my-6 lg:m-0">
              <a
                href="#testimonial"
                className="text-xl hover:text-cyan-500 duration-500"
              >
                Testimonials
              </a>
            </li>
            <li className="mx-4 my-6 lg:m-0">
              <a
                href="#contact"
                className="text-xl hover:text-cyan-500 duration-500"
              >
                Contact Us
              </a>
            </li>

            <li className="mx-4 my-6 lg:my-0 lg:hidden">
              <button className="bg-[#BD54FF] text-white font-sans duration-500 px-5 py-4  hover:bg-blue-500 rounded-full text-nowrap ">
                Let's Talk
              </button>
            </li>
          </ul>
          <li className="mx-4 my-6 lg:m-0 hidden lg:block font-bold">
            <button className="bg-[#BD54FF] text-white font-sans duration-500 px-5 py-3  hover:bg-slate-500 rounded-full text-nowrap ">
              Let's Talk
            </button>
          </li>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
