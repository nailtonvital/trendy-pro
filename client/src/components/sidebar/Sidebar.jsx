import React from 'react'
import logo from '../../img/logo.webp'
import { Link } from 'react-router-dom';
import tools from '../../img/Seo.svg'

function Sidebar() {
    
  return (
    <nav className="bg-black w-20 shadow-md h-screen fixed justify-between flex flex-col ">
      <div className="mt-10 mb-10">
        <div className="">
          <ul>
            {/* Dashboard */}
            <li className="mb-6 w-full">
              <Link to="">
                <span
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="Dashboard"
                >
                  <svg
                    className="fill-current h-5 w-5 text-gray-400 mx-auto hover:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm5 2h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm1-6h4v4h-4V5zM3 20a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6zm2-5h4v4H5v-4zm8 5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6zm2-5h4v4h-4v-4z"></path>
                  </svg>
                </span>
              </Link>
            </li>
            <li className="mb-6">
              <Link to="Movies">
                <span
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="Movies"
                >
                  <svg
                    className="fill-current h-5 w-5 text-gray-400 mx-auto hover:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm.001 6c-.001 0-.001 0 0 0h-.466l-2.667-4H20l.001 4zM9.535 9 6.868 5h2.597l2.667 4H9.535zm5 0-2.667-4h2.597l2.667 4h-2.597zM4 5h.465l2.667 4H4V5zm0 14v-8h16l.002 8H4z"></path>
                  </svg>
                </span>
              </Link>
            </li>

            <li className="mb-6">
              <Link to="Tools">
                <span
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="tools"
                >
                  <img
                    src={tools}
                    title="tools"
                    className="fill-current h-5 w-5 text-gray-400 mx-auto hover:text-white"
                  />
                </span>
              </Link>
            </li>
            <li className="mb-6">
              <Link to="SocialMedia">
                <span
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="SocialMedia"
                >
                  <svg
                    className="fill-current h-5 w-5 text-gray-400 mx-auto hover:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9.5 12c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm1.5 1H8c-3.309 0-6 2.691-6 6v1h15v-1c0-3.309-2.691-6-6-6z"></path>
                    <path d="M16.604 11.048a5.67 5.67 0 0 0 .751-3.44c-.179-1.784-1.175-3.361-2.803-4.44l-1.105 1.666c1.119.742 1.8 1.799 1.918 2.974a3.693 3.693 0 0 1-1.072 2.986l-1.192 1.192 1.618.475C18.951 13.701 19 17.957 19 18h2c0-1.789-.956-5.285-4.396-6.952z"></path>
                  </svg>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mb-4">
        <div className="mb-4"></div>
        {/* Sair */}
        <div className=""></div>
        <img src={logo} className="pl-4 mt-5 w-9/12" alt="" />
      </div>
    </nav>
  );
}

export default Sidebar