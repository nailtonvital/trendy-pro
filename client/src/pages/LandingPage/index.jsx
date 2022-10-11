import React, { useState } from "react";
import style from "./style.module.scss";
import Fox from "./assets/Fox.webp";
import Mundo from "./assets/Mundo.webp";
import MapaMundi from "./assets/MapaMundi.webp";
import User from "./assets/User.webp";
import hamburger from "./assets/hamburger.webp"



export default function LandingPage() {
  const [sidebar, setSidebar] = useState(false)

  function handleNavbar() {
    setSidebar(!sidebar)
  }

  console.log(style)

  return (
    <>
      <div className={style.body}>
        <div className={style.container}>
          <nav>
            <div className={style.logo}>
              <img src={Fox} alt="imgFox" />
              {/* <img src="img/TrendyPro.svg" alt="imgTrendyPro"/> */}
            </div>

              <button className={style.hamburguer} onClick={handleNavbar}>
                <img src={hamburger} alt="hamburger"/>
              </button>
          </nav>
          <div className={sidebar ? style.navbar : style.navbarClosed}>
              <ul>
                <li>Features</li>
                <li>About Us</li>
              </ul>
            </div>

          <div className={style.hero}>
            <div className={style["left-hero"]}>
              <h3 className={style.titleHeader}>Discover trends while it trending</h3>
              <p>
                We track every topic across the internet to identify growing
                trends.
              </p>
              <a>
                <button type="button" className={style.getStarted}>
                  <b>Get Started</b>
                </button>
              </a>
            </div>

            <div className={style["right-hero"]}>
              <img src={Mundo} alt="imgMundo" />
            </div>
          </div>

          <div className={style.banner}>
            <h3>Our Main Features</h3>
            <ul>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" style={{fill: "rgb(255,255,255);"}}><path d="m20.145 8.27 1.563-1.563-1.414-1.414L18.586 7c-1.05-.63-2.274-1-3.586-1-3.859 0-7 3.14-7 7s3.141 7 7 7 7-3.14 7-7a6.966 6.966 0 0 0-1.855-4.73zM15 18c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path><path d="M14 10h2v4h-2zm-1-7h4v2h-4zM3 8h4v2H3zm0 8h4v2H3zm-1-4h3.99v2H2z"></path></svg>
                <p>Real-time tracking Trends</p> 
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" style={{fill: "rgb(255,255,255);"}}><path d="M20.26 7.8a4.82 4.82 0 0 0-3.93-2.44 3.91 3.91 0 0 0-2.54 1.09 10.58 10.58 0 0 0-1.52 1.71 11 11 0 0 0-1.63-1.72 4.39 4.39 0 0 0-2.88-1.08A5 5 0 0 0 3.7 8 11.49 11.49 0 0 0 2 14a7 7 0 0 0 .18 1.64A4.44 4.44 0 0 0 2.71 17a3.23 3.23 0 0 0 3 1.6c1.25 0 2.19-.56 3.3-2a26.4 26.4 0 0 0 2.21-3.6l.63-1.12c.06-.09.11-.18.16-.27l.15.25 1.79 3A14.77 14.77 0 0 0 16 17.63a3.38 3.38 0 0 0 2.55 1 3 3 0 0 0 2.54-1.23 2.2 2.2 0 0 0 .18-.28 4.1 4.1 0 0 0 .31-.63l.12-.35A6.53 6.53 0 0 0 22 15a9 9 0 0 0 0-1 11.15 11.15 0 0 0-1.74-6.2zm-10.12 3.56c-.64 1-1.57 2.51-2.37 3.61-1 1.37-1.51 1.51-2.07 1.51a1.29 1.29 0 0 1-1.15-.66 3.3 3.3 0 0 1-.39-1.7A9.74 9.74 0 0 1 5.54 9a2.8 2.8 0 0 1 2.19-1.47A3 3 0 0 1 10 8.74a14.07 14.07 0 0 1 1 1.31zm8.42 5.12c-.48 0-.85-.19-1.38-.83A34.87 34.87 0 0 1 14.82 12l-.52-.86c-.36-.61-.71-1.16-1-1.65a2.46 2.46 0 0 1 .17-.27c.94-1.39 1.77-2.17 2.8-2.17a3.12 3.12 0 0 1 2.49 1.66 10.17 10.17 0 0 1 1.37 5.34c-.04 1.31-.34 2.43-1.57 2.43z"></path></svg>
                <p>Acesso a todos os interesses do Meta Ads</p> 
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" style={{fill: "rgb(255,255,255);"}}><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path></svg>
                <p>Explorador de palavras-chaves para SEO</p>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" style={{fill: "rgb(255,255,255);"}}><path d="M3 5v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2zm16.001 14H5V5h14l.001 14z"></path><path d="M11 7h2v10h-2zm4 3h2v7h-2zm-8 2h2v5H7z"></path></svg>
                <p>Gráficos de interesse</p>
              </li>
            </ul>
          </div>

          <div className={style.item}>
            <div className={style["left-align"]}>
              <h3 className={style.titleHeader}>Know what's going on around the world</h3>
              <p className={style.subtitle}>
                We provide an overview of what is happening in the world
              </p>
              <img src="" alt="" />
            </div>
            <div className={style["right-align"]}>
              <img src={MapaMundi} alt="imgMapaMundi" />
            </div>
          </div>

          <div className={style.item}>
            <div className={style["right-align"]}>
              <h3 className={style.titleHeader}>Acess to all trending topics on the social media</h3>
              <p className={style.subtitle}>
                Nullam lorem elit, faucibus non tellus ut, tempor posuere arcu.
              </p>
            </div>
            <div className={style["left-align"]}>
              <img src={User} alt="imgUser" />
            </div>
          </div>

          <div classname={style["left-align"]}>
            <h3 className={style.titleHeader}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            <p className={style.subtitle}>
              Nullam lorem elit, faucibus non tellus ut, tempor posuere arcu.
            </p>
          </div>

         
          <div classname={style.product}>
            <div>
              <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
              <p>
                Nullam lorem elit, faucibus non tellus ut, tempor posuere arcu.
              </p>
            </div>

          </div>
          <div classname={style.macpro}>
            <div>
              <h1>Access most relevant information whats popular</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>

          </div>
          <div className={style.filmes}>
            <div>
              <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
              <p>
                Nullam lorem elit, faucibus non tellus ut, tempor posuere arcu.
              </p>
            </div>

          </div>
          <footer>© 2022 TrendyPro | All Rights Reserved</footer>
        </div>
      </div>
</>
  );
}
