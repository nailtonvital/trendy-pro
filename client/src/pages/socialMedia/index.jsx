import React, { Fragment } from "react";
import style from "./style.module.scss";
import face from "./assets/Card_Facebook.svg"

export default function SocialMedia() {
  function redirecionar() {
    window.location.href = "../notFound";
  }
  return (
    <>
      <div className="flex bg-slate-900 h-screen ">
        <div className="p-3">
          <h1 className="text-white font-bold text-2xl">Social Networks</h1>
          <ul className="flex items-center mt-10 h-60">
            <li className="w-32 bg-slate-300">
              <img src={face}/>
            </li>
            <li>
              <button className="" onclick={redirecionar}></button>
            </li>
            <li>
              <button
                className={style["btn-facebook"]}
                onclick={redirecionar}
              ></button>
            </li>
            <li>
              <button
                className={style["btn-tiktok"]}
                onclick={redirecionar}
              ></button>
            </li>
            <li>
              <button
                className={style["btn-youtube"]}
                onclick={redirecionar}
              ></button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
