import React from "react";
import style from "./style.module.scss";

function Login() {
  return (
    <div className={style.login_area} id="login">
      <p className={style.heading}>Welcome Back!</p>
      <h3 className={style.login_title}>Login to your account</h3>
      <form action="">
        <span>Email:</span>
        <input type="text" className="text-black rounded-lg font-medium"/>
        <span>Password:</span>
        <input type="password" className="text-black rounded-lg font-semibold"/>
        <a href="/Dashboard">
          <button type="button" className={style.login_button}>Login Now</button>
        </a>    
      </form>
      <p>Don't have a account yet? 
        <a href="/Dashboard"> <u>Sign Up</u></a>
      </p>
    </div>
  );
}

export default Login;
