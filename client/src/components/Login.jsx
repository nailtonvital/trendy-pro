import React from "react";
import style from "./style.module.scss";

function Login() {
  return (
    <div className={style.login_area} id="login">
      <p className={style.heading}>Welcome Back!</p>
      <h3 className={style.login_title}>Login to your account</h3>
      <form action="">
        <span>Email:</span>
        <input type="text" />
        <span>Password:</span>
        <input type="password" />
        <button className={style.login_button}>Login Now</button>
      </form>
      <p>Don't have a account yet? Sign Up</p>
    </div>
  );
}

export default Login;
