import React, { Fragment } from "react";
import style from "./style.module.scss";
import face from "./assets/Card_Facebook.svg"
import google from "./assets/Card_Google.svg";
import tiktok from "./assets/Card_TikTok.svg";
import Twitter from "./assets/Card_Twitter.svg";
import youtube from "./assets/Card_Youtube.svg";



export default function SocialMedia() {
  function redirecionar() {
    window.location.href = "../notFound";
  }
  return (
    <>
      <div className="flex bg-slate-900 h-screen w-screen">
        <div className="p-3">
          <h1 className="text-white font-bold text-2xl">Social Networks</h1>
          <ul className="flex items-center scrollbar-hide space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2">
            <li className="h-72 mb-72 min-w-[180px] cursor-pointer transition-transform duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
              <img className="rounded-sm object-cover md:rounded h-96 w-full" src={face}/>
            </li>
            <li className="h-72 mb-72 min-w-[180px] cursor-pointer transition-transform duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
            <img className="rounded-sm object-cover md:rounded h-96 w-full" src={google}/>
            </li>
            <li className="h-72 mb-72 min-w-[180px] cursor-pointer transition-transform duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
            <img className="rounded-sm object-cover md:rounded h-96 w-full" src={tiktok}/>
            </li>
            <li className="h-72 mb-72 min-w-[180px] cursor-pointer transition-transform duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
            <img className="rounded-sm object-cover md:rounded h-96 w-full" src={Twitter}/>
            </li>
            <li className="h-72 mb-72 min-w-[180px] cursor-pointer transition-transform duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
            <img className="rounded-sm object-cover md:rounded h-96 w-full" src={youtube}/>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
