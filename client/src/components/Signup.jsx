import React from "react";
import style from "./style.module.scss";

function Signup() {
  return (
    <div className={style.login_area} id="signin">
      <h3 className={style.login_title}>Sign Up</h3>
      <form action="">
        <span>Name:</span>
        <input type="text" required />
        <span>Occupation:</span>
        <input type="text" />
        <span>Email:</span>
        <input type="email" required />
        <span>Password:</span>
        <input type="password" required />
        <button className={style.login_button}>Login Now</button>
      </form>
      <p>Alredy have a account? Login</p>
    </div>
  );
}

export default Signup;
