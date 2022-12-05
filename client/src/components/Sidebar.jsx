import React from 'react'
import { Link } from "react-router-dom";
import logo from "../assets/logo1.webp";

export default function Sidebar() {
  return (
    <nav className="bg-[#1B1A20] flex flex-col h-screen justify-between rounded-full p-5 ml-2 mt-1 fixed">
      <div className="text-center text-3xl text-[#9A9A9A]">
        <ul className="">
          <Link to="/dashboard">
            <li className="mb-2 hover:text-[#F47E02] transition duration-300 ease-in-out">
              <i className="bx bx-grid-alt"></i>
              {/* <p className='text-sm font-sans'>Dashboard</p> */}
            </li>
          </Link>
          <Link to="movies">
            <li className="mb-2 hover:text-[#F47E02] transition duration-300 ease-in-out">
              <i className="bx bx-movie"></i>
              {/* <p className='text-sm font-sans'>Entertainment</p> */}
            </li>
          </Link>
          <Link to="songs">
            <li className="mb-2 hover:text-[#F47E02] transition duration-300 ease-in-out">
              <i className="bx bx-equalizer"></i>
              {/* <p className='text-sm font-sans'>Songs</p> */}
            </li>
          </Link>
          <Link to="social-media/twitter">
            <li className="mb-2 hover:text-[#F47E02] transition duration-300 ease-in-out">
              <svg
                className="fill-gray-400 stroke-2 ml-1 hover:fill-[#F47E02]"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
              </svg>
              {/* <p className='text-sm font-sans'>Social Media</p> */}
            </li>
          </Link>
          <Link to="seo-tools">
            <li className="mb-2 hover:text-[#F47E02] transition duration-300 ease-in-out">
              <i className="bx bx-code-block"></i>
            </li>
          </Link>
          <Link to="rss-feed">
            <li className="mb-2 hover:text-[#F47E02] transition duration-300 ease-in-out">
              <i class="bx bx-rss"></i>
            </li>
          </Link>
        </ul>
      </div>
      <div className="text-center text-3xl text-[#9A9A9A]">
        <ul>
          <Link to="/login">
            <li className="hover:text-[#F47E02] transition duration-300 ease-in-out">
              <img className="w-8" src={logo} alt="logo" />
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
