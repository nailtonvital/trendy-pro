import React, { useState } from "react";
import style from "./style.module.scss";
import Fox from "./assets/Fox.svg";
import Mundo from "./assets/Mundo.svg";
import GoogleLogo from "./assets/GoogleLogo.svg";
import SlackLogo from "./assets/SlackLogo.svg";
import NetflixLogo from "./assets/NetflixLogo.svg";
import AmazonLogo from "./assets/AmazonLogo.svg";
import MapaMundi from "./assets/MapaMundi.svg";
import User from "./assets/User.svg";
import Rate from "./assets/rate.svg";
import Anne from "./assets/anne.svg";
import Michael from "./assets/michael.svg";
import Sarah from "./assets/sarah.svg";
import Product from "./assets/ProductPresentation.svg";
import Mac from "./assets/MacBookPro.svg";
import Filmes from "./assets/Filmes.svg";
import Component from "./assets/Component.svg";


export default function LandingPage() {
  const [sidebar, setSidebar] = useState(false)

  function handleNavbar() {
    setSidebar(!sidebar)
  }

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
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 72 57"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.6862 53.0698H67.9999M3.52942 28.5H67.9999M15.4587 3.93018H67.9999"
                    stroke="white"
                    stroke-width="6.5625"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
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
              <h3>Discover trends while it trending</h3>
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
            <h1>Helping companies around the world</h1>
            <ul>
              <li>
                <img src={GoogleLogo} alt="imgGoogle" />
              </li>
              <li>
                <img src={SlackLogo} alt="imgSlack" />
              </li>
              <li>
                <img src={NetflixLogo} alt="imgNetflix" />
              </li>
              <li>
                <img src={AmazonLogo} alt="imgAmazon" />
              </li>
            </ul>
          </div>

          <div className={style.item}>
            <div className={style["left-align"]}>
              <h3>Know what's going on around the world</h3>
              <p>
                Acess to all trending topics on the social media Acess to all
                trending topics on the social media Acess to all trending topics
                on the social media Acess to all trending topics on the social
                media Acess to all trending topics on the social media Acess to
                all trending topics on the social media
              </p>
              <img src="" alt="" />
            </div>
            <div classname={style["right-align"]}>
              <img src={MapaMundi} alt="imgMapaMundi" />
            </div>
          </div>

          <div classname={style["center-align"]}>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            <p>
              Nullam lorem elit, faucibus non tellus ut, tempor posuere arcu.
            </p>
            <img src={User} alt="imgUser" />
          </div>

          <div classname={style["left-align"]}>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            <p>
              Nullam lorem elit, faucibus non tellus ut, tempor posuere arcu.
            </p>
          </div>

          <div classname={style["social-proof"]}>
            <h2>What are people saying?</h2>
            <div classname={style["social-cards"]}>
              <div classname={style["social-card"]}>
                <img src={Rate} alt="rate" />
                <div classname={style["social-quote"]}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                    quis quis sem odio ultricies eu maecenas ante ut. Fames
                    luctus tempor eu diam ut quam. Malesuada risus turpis ante
                    rhoncus viverra ipsum vel scelerisque. Arcu urna, aliquam
                    elit amet.
                  </p>
                </div>
                <div classname={style.people}>
                  <img src={Anne} alt="" />
                  <div classname={style["people-info"]}>
                    <h2>Anne Gorchakov</h2>
                    <p>Digital Marketer</p>
                  </div>
                </div>
              </div>

              <div classname={style["social-card"]}>
                <img src={Rate} alt="rate" />
                <div classname={style["social-quote"]}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                    quis quis sem odio ultricies eu maecenas ante ut. Fames
                    luctus tempor eu diam ut quam. Malesuada risus turpis ante
                    rhoncus viverra ipsum vel scelerisque. Arcu urna, aliquam
                    elit amet.
                  </p>
                </div>
                <div className={style.people}>
                  <img src={Michael} alt="" />
                  <div classname={style["people-info"]}>
                    <h2>Michael Turner</h2>
                    <p>Entrepreneur</p>
                  </div>
                </div>
              </div>

              <div classname={style["social-card"]}>
                <img src={Rate} alt="rate" />
                <div classname={style["social-quote"]}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                    quis quis sem odio ultricies eu maecenas ante ut. Fames
                    luctus tempor eu diam ut quam. Malesuada risus turpis ante
                    rhoncus viverra ipsum vel scelerisque. Arcu urna, aliquam
                    elit amet.
                  </p>
                </div>
                <div className={style.people}>
                  <img src={Sarah} alt="" />
                  <div classname={style["people-info"]}>
                    <h2>Sarah Borba</h2>
                    <p>Digital Influencer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div classname={style.product}>
            <div>
              <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
              <p>
                Nullam lorem elit, faucibus non tellus ut, tempor posuere arcu.
              </p>
            </div>
            <img src={Product} alt="imgProductPresentation" />
          </div>
          <div classname={style.macpro}>
            <div>
              <h1>Access most relevant information whats popular</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
            <img src={Mac} alt="imgMacBookPro" />
          </div>
          <div className={style.filmes}>
            <div>
              <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
              <p>
                Nullam lorem elit, faucibus non tellus ut, tempor posuere arcu.
              </p>
            </div>
            <img src={Filmes} alt="imgFilmes" />
          </div>
          <footer>© 2022 TrendyPro | All Rights Reserved</footer>
        </div>
      </div>
</>
  );
}
