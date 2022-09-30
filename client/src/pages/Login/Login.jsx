import React, {useState} from 'react'
import Login from '../../components/Login/Login'
import Signup from '../../components/Login/Signup'
import logo from "../../img/logotipo.webp"
import style from "./Login.module.scss"

function LoginPage() {
    const [ login, setLogin] = useState(true)

    function handleLogin(){
        setLogin(!login)
    }

  return (
    <div className={style.login_body}>
        <div className={style.logo_area}>
            <img src={logo} alt="logo"  />
        </div>
        { login ? <Login/> : <Signup/>}
          
    </div>
  )
}

export default LoginPage