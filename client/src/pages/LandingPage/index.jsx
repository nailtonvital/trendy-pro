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
                <i class='bx bx-timer'></i>
                <p>Real-time tracking Trends</p> 
              </li>
              <li>
                <i class='bx bxl-meta'></i>
                <p>Acesso a todos os interesses do Meta Ads</p> 
              </li>
              <li>
                <i class='bx bx-search'></i>
                <p>Explorador de palavras-chaves para SEO</p>
              </li>
              <li>
                <i class='bx bx-bar-chart-square'></i>
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
