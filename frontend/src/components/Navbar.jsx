import React from "react";
import git from "../assets/icons/github.svg";

const Navbar = () => {
  return (
    <nav className="text-white bg-indigo-950 md:mycontainer md:py-1">
      <div className="mycontainer flex justify-between items-center px-4 py-5 h-14 ">
        <div className="logo font-bold text-2xl ">
          <span className="text-green-700">&lt;</span>
          Pass
          <span className="text-green-700">OP/&gt;</span>
        </div>
        {/* <ul>
          <li className="flex gap-4">
            <a className="hover:font-bold" href="/">
              Home
            </a>
            <a className="hover:font-bold" href="#">
              About
            </a>
            <a className="hover:font-bold" href="#">
              Contact
            </a>
          </li>
        </ul> */}
        <button
          className="text-white my-5 mx-2 rounded-3xl flex justify-between text-center items-center border
      hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300 ring-white ring-1 bg-black"
        >
          <img className="invert w-10 p-1" src={git} alt="github" />
          <span className="font-bold pr-2">GitHub</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
