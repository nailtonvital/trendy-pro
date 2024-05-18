import React from "react";
import Fox from "../../assets/logo1.webp";
import style from "../../pages/style.module.scss";

export default function Navbar() {
  return (
    <nav>
      <a href="/LandingPage">
        <div className={style.logo}>
          <img src={Fox} alt="imgFox" />
        </div>
      </a>

      <div className="flex space-x-16 text-2xl font-semibold">
        <a href="#Contact">
          <p className="relative group">
            <span>Contact</span>
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gray-200 transition-all group-hover:w-full"></span>
          </p>
        </a>
        <a href="#About Us">
          <p className="relative group">
            <span>About Us</span>
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gray-200 transition-all group-hover:w-full"></span>
          </p>
        </a>
        <a href="/login">
          <p className="relative group">
            <span>Sign In</span>
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gray-200 transition-all group-hover:w-full"></span>
          </p>
        </a>
      </div>
    </nav>
  );
}
