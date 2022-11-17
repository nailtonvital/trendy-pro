import React from 'react'
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <nav className='bg-[#1B1A20] flex flex-col h-screen justify-between rounded-full p-5 ml-4'>
        <div className="text-center text-3xl text-[#9A9A9A]">
            <ul className=''>
                <Link to='/dashboard'>
                <li className='mb-2 hover:text-[#6B36FF] transition duration-300 ease-in-out'>
                    <i className='bx bx-grid-alt'></i>
                    {/* <p className='text-sm font-sans'>Dashboard</p> */}
                </li>
                </Link>
                <Link to='movies'>
                <li className='mb-2 hover:text-[#6B36FF] transition duration-300 ease-in-out'>
                    <i className='bx bx-movie'></i>
                    {/* <p className='text-sm font-sans'>Entertainment</p> */}
                </li>
                </Link>
                <Link to='songs'>
                <li className='mb-2 hover:text-[#6B36FF] transition duration-300 ease-in-out'>
                    <i className='bx bx-equalizer'></i>
                    {/* <p className='text-sm font-sans'>Songs</p> */}
                </li>
                </Link>
                <Link to='social-media'>
                <li className='mb-2 hover:text-[#6B36FF] transition duration-300 ease-in-out'>
                    <i className='bx bx-group'></i>
                    {/* <p className='text-sm font-sans'>Social Media</p> */}
                </li>
                </Link>
                <Link to='seo-tools'>
                <li className='mb-2 hover:text-[#6B36FF] transition duration-300 ease-in-out'>
                    <i className='bx bx-code-block'></i>
                </li>
                </Link>
                <Link to='rss-feed'>
                    <li className='mb-2 hover:text-[#6B36FF] transition duration-300 ease-in-out'>
                        <i class='bx bx-rss'></i>
                    </li>
                </Link>
            </ul>
        </div>
        <div className="text-center text-3xl text-[#9A9A9A]">
            <ul>
                <Link to='preferences'>
                <li className='mb-2 hover:text-[#6B36FF] transition duration-300 ease-in-out'>
                    <i className='bx bx-cog'></i>
                </li>
                </Link>
                <Link to='/login'>
                <li className='mb-2 hover:text-[#6B36FF] transition duration-300 ease-in-out'>
                    <i className='bx bx-exit' ></i>
                </li>
                </Link>

              </ul>
        </div>
    </nav>
  )
}