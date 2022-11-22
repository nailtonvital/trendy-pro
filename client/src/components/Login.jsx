import React from "react";
import style from "./style.module.scss";

function Login() {
  return (
    <div className={style.login_area} id="login">
      <p className={style.heading}>Welcome Back!</p>
      <h3 className={style.login_title}>Login to your account</h3>
     

      <label for="helper-text" class="block mb-2 text-sm font-medium text-white">Your email</label>
<input type="email" id="helper-text" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@trendyro.com" />
<label for="website-admin" class="block mb-2 text-sm font-medium text-white">Password</label>
<div class="flex">
  <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required/></div>


      <p>Don't have a account yet? 
        <a href="/Dashboard"> <u>Sign Up</u></a>
      </p>
    </div>
  );
}

export default Login;
