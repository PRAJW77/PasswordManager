import React from "react";
import insta from "../assets/icons/instagram.png";
import linked from "../assets/icons/linkedin.png";
import git from "../assets/icons/github.svg";

const Footer = () => {
  return (
    <div className="mycontainer flex justify-between items-center py-5 h-14 text-white bg-black fixed bottom-0">
      <div className="logo font-bold text-2xl ">
        <span className="text-green-700">&lt;</span>
        Pass
        <span className="text-green-700">OP/&gt;</span>
      </div>
      <div className="copyright">
        <h3>&#169; 2024 PassOP. All rights reserved.</h3>
      </div>

      <div>
        {/* <button className="">
            <a target="_blank" href="www.instagram.com">
          <img  src={insta} alt="" />
            </a>
        </button> */}
        <ul className="flex text-white justify-between items-center gap-7 ">
          <li className="hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300">
            <a target="_blank" href="https://www.instagram.com/____prakash____28/">
              <img className="w-5 invert" src={insta} alt="instagram" />
            </a>
          </li>
          <li className="hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300">
            <a target="_blank" href="https://github.com/prakashwaddar628">
              <img className="w-5 invert" src={git} alt="github" />
            </a>
          </li>
          <li className="hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300">
            <a target="_blank" href="https://www.linkedin.com/in/prakash-l-waddar-422760203/">
              <img className="w-5 invert" src={linked} alt="linkedIn" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
