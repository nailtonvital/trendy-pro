import React from "react";
import style from "./style.module.scss";

function Login() {
  return (
    <div className={style.login_area} id="login">
      <div className="mb-2 font-light">
        <p className={style.heading}>Welcome Back!</p>
       </div>
       <div className="mb-10 text-4xl font-semibold">
      <h3 className={style.login_title}>Login to your account</h3>
      </div>
      <form action="">

        <div className="text-xl font-light mb-1">
          <p><span>Email:</span>
          </p></div>

        <input type="text" placeholder="TrendyPro.com.br" className="rounded-lg font-medium bg-glass border-white border-2 text-slate-100 placeholder-white"/>

        <div className="text-xl font-light mb-1 my-4">
          <p><span>Password:</span>
          </p></div>

        <input type="password" placeholder="**********" className="rounded-lg font-medium bg-glass border-white border-2 text-slate-100 placeholder-white"/>

        <div className="text-right text-base font-light mr-1 ">
          <a href="#">
            <p className="underline decoration-3">Forgot password?</p>
          </a>
        </div>

        <div className="my-4">
          <a href="/Dashboard">
            <button type="button" className={style.login_button}>Login Now</button>
          </a>
        </div>

      </form>

      <div>
        <p>Dont have an account? 
          <a href="#"> <u>Join free today</u></a>
        </p>
      </div>

    </div>
  );
}

export default Login;