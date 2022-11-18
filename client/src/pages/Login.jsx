import React, { useState } from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";
import style from "./login.module.scss";
import logo from "../assets/logotipo.webp"

function LoginPage() {
  const [login, setLogin] = useState(true);

  function handleLogin() {
    setLogin(!login);
  }

  return (
    <div className={style.login_body}>
      <div className={style.logo_area}>
        <img src={logo} alt="logo" />
      </div>
      {login ? <Login /> : <Signup />}
    </div>
  );
}

export default LoginPage;
