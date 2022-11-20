import React, { useState } from "react";
import style from "./style.module.scss";
import Fox from "../assets/Fox.webp";
import Mundo from "../assets/Mundo.webp";
import MapaMundi from "../assets/MapaMundi.webp";
import User from "../assets/User.webp";
import hamburger from "../assets/hamburger.webp";
import rate from "../assets/rate.webp";
import Filmes from "../assets/filmes.webp";
import Michael from "../assets/michael.webp";
import Anne from "../assets/anne.webp";
// import Sarah from "../../assets/sarah.webp";
import Product from "../assets/MacBook-Pro-16.webp";
      
export default function LandingPage() {
  const [sidebar, setSidebar] = useState(false);

  function handleNavbar() {
    setSidebar(!sidebar);
  }

  console.log(style);

  return (
    <>
      <div className={style.body}>
        <div className={style.container}>
          <nav>
            <div className={style.logo}>
              <img src={Fox} alt="imgFox" />
            </div>
            <button className={style.hamburguer} onClick={handleNavbar}>
              <img src={hamburger} alt="hamburger" />
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
              <h3 className={style.titleHeader}>
                Discover trends while it trending
              </h3>
              <p>
                We track every topic across the internet to identify growing
                trends.
              </p>
              <a href="/login">
                <button className="w-2/4 h-16 mt-7 px-2.5 rounded-3xl border-solid border-2 text-lg font-semibold bg-transparent hover:bg-glass"
                type="button">GET STARTED</button>
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
                <svg 
                  width="80" 
                  height="80" 
                  viewBox="0 0 25 15" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg" 
                  style={{ fill: "rgb(255,255,255);" }}>
                  <path d="M14 0C16.1217 0 18.1566 0.842855 19.6569 2.34315C21.1571 3.84344 22 5.87827 22 8C22 10.1217 21.1571 12.1566 19.6569 13.6569C18.1566 15.1571 16.1217 16 14 16C11.8783 16 9.84344 15.1571 8.34315 13.6569C6.84285 12.1566 6 10.1217 6 8C6 5.87827 6.84285 3.84344 8.34315 2.34315C9.84344 0.842855 11.8783 0 14 0M14 2C12.4087 2 10.8826 2.63214 9.75736 3.75736C8.63214 4.88258 8 6.4087 8 8C8 9.5913 8.63214 11.1174 9.75736 12.2426C10.8826 13.3679 12.4087 14 14 14C15.5913 14 17.1174 13.3679 18.2426 12.2426C19.3679 11.1174 20 9.5913 20 8C20 6.4087 19.3679 4.88258 18.2426 3.75736C17.1174 2.63214 15.5913 2 14 2ZM13 4H14.5V7.78L16.83 10.11L15.77 11.17L13 8.4V4ZM1 14C0.734784 14 0.48043 13.8946 0.292893 13.7071C0.105357 13.5196 0 13.2652 0 13C0 12.7348 0.105357 12.4804 0.292893 12.2929C0.48043 12.1054 0.734784 12 1 12H4.83C5.14 12.71 5.54 13.38 6 14H1ZM2 9C1.73478 9 1.48043 8.89464 1.29289 8.70711C1.10536 8.51957 1 8.26522 1 8C1 7.73478 1.10536 7.48043 1.29289 7.29289C1.48043 7.10536 1.73478 7 2 7H4.05L4 8L4.05 9H2ZM3 4C2.73478 4 2.48043 3.89464 2.29289 3.70711C2.10536 3.51957 2 3.26522 2 3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H6C5.54 2.62 5.14 3.29 4.83 4H3Z" fill="white"/>
                </svg>
                <p>Real-time tracking Trends</p>
              </li>
              <li>
                
                <svg 
                  width="80" 
                  height="80" 
                  viewBox="0 0 20 10" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.217 2.243C9.145 0.988 10.171 0 11.483 0C13.96 0 16 3.153 16.001 6.907C16.001 9.197 15.015 10.632 13.244 10.632C11.701 10.632 10.849 9.766 9.32 7.208L8.653 6.085L8.535 5.888C8.36106 5.59403 8.18439 5.30168 8.005 5.011L6.827 7.091C5.154 10.016 4.212 10.632 2.904 10.632C1.086 10.632 0 9.217 0 6.973C0 3.388 1.995 0 4.598 0C4.917 0 5.223 0.039 5.522 0.122C5.832 0.208 6.133 0.342 6.435 0.529C7.012 0.888 7.589 1.444 8.217 2.243ZM9.733 4.467C9.481 4.057 9.239 3.68 9.006 3.334L9 3.326C9.845 2.021 10.543 1.372 11.372 1.372C13.095 1.372 14.474 3.909 14.474 7.025C14.474 8.213 14.084 8.902 13.279 8.902C12.506 8.902 12.137 8.392 10.669 6.032L9.732 4.467H9.733ZM4.846 1.756C5.571 1.856 6.231 2.39 7.186 3.757C6.63497 4.60077 6.08995 5.44846 5.551 6.3C4.194 8.426 3.725 8.903 2.97 8.903C2.193 8.903 1.73 8.221 1.73 7.003C1.73 4.401 3.028 1.739 4.576 1.739C4.667 1.739 4.757 1.745 4.846 1.757V1.756Z" fill="white"/>
                </svg>

                <p>Acesso a todos os interesses do Meta Ads</p>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 24 20"
                  style={{ fill: "rgb(255,255,255);" }}
                >
                  <path d="M18.0682 19.6591L11.7045 13.2955C11.1364 13.75 10.483 14.1098 9.74432 14.375C9.00568 14.6402 8.2197 14.7727 7.38636 14.7727C5.32197 14.7727 3.575 14.058 2.14545 12.6284C0.715152 11.1981 0 9.45076 0 7.38636C0 5.32197 0.715152 3.57462 2.14545 2.14432C3.575 0.714773 5.32197 0 7.38636 0C9.45076 0 11.1981 0.714773 12.6284 2.14432C14.058 3.57462 14.7727 5.32197 14.7727 7.38636C14.7727 8.2197 14.6402 9.00568 14.375 9.74432C14.1098 10.483 13.75 11.1364 13.2955 11.7045L19.6875 18.0966C19.8958 18.3049 20 18.5606 20 18.8636C20 19.1667 19.8864 19.4318 19.6591 19.6591C19.4508 19.8674 19.1856 19.9716 18.8636 19.9716C18.5417 19.9716 18.2765 19.8674 18.0682 19.6591V19.6591ZM7.38636 12.5C8.80682 12.5 10.0144 12.003 11.0091 11.0091C12.003 10.0144 12.5 8.80682 12.5 7.38636C12.5 5.96591 12.003 4.75833 11.0091 3.76364C10.0144 2.7697 8.80682 2.27273 7.38636 2.27273C5.96591 2.27273 4.75833 2.7697 3.76364 3.76364C2.7697 4.75833 2.27273 5.96591 2.27273 7.38636C2.27273 8.80682 2.7697 10.0144 3.76364 11.0091C4.75833 12.003 5.96591 12.5 7.38636 12.5Z" fill="white"/>
                </svg>
                <p>Explorador de palavras-chaves para SEO</p>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 18 10"
                  style={{ fill: "rgb(255,255,255);" }}
                >
                 <path d="M1 6V10M9 3V10M5 2V10M13 1V10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p>Gráficos de interesse</p>
              </li>
            </ul>
          </div>

          <div className={style.item}>
            <div className={style["left-align"]}>
              <h3 className={style.titleHeader}>Know what’s going on around the world</h3>
              <p>
              Acess to all trending topics on the social media
              </p>
              <img src="" alt="" />
            </div>
            <div className={style["right-align"]}>
              <img src={MapaMundi} alt="imgMapaMundi" />
            </div>
          </div>

          <div className={style["center-align"]}>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            <p>
              Nullam lorem elit, faucibus non tellus ut, tempor posuere arcu.
            </p>
            <img src={User} alt="imgUser" />
          </div>

          <div className={style["left-align"]}>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            <p>
              Nullam lorem elit, faucibus non tellus ut, tempor posuere arcu.
            </p>
          </div>

          <div className={style["social-proof"]}>
            <h2>What are people saying?</h2>
            <div className={style["social-cards"]}>
              <div className={style["social-card"]}>
                <img src={rate} alt="rate" />
                <div className={style["social-quote"]}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                    quis quis sem odio ultricies eu maecenas ante ut. Fames
                    luctus tempor eu diam ut quam. Malesuada risus turpis ante
                    rhoncus viverra ipsum vel scelerisque. Arcu urna, aliquam
                    elit amet.
                  </p>
                </div>
                <div className={style.people}>
                  <img src={Anne} alt="" />
                  <div className={style["people-info"]}>
                    <h2>Anne Gorchakov</h2>
                    <p>Digital Marketer</p>
                  </div>
                </div>
              </div>

              <div className={style["social-card"]}>
                <img src={rate} alt="rate" />
                <div className={style["social-quote"]}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                    quis quis sem odio ultricies eu maecenas ante ut. Fames
                    luctus tempor eu diam ut quam. Malesuada risus turpis ante
                    rhoncus viverra ipsum vel scelerisque. Arcu urna, aliquam
                    elit amet.
                  </p>
                </div>
                <div className={style.people}>
                  <img src="img/nana.svg" alt="" />
                  <div className={style["people-info"]}>
                    <h2>Nailton Vital</h2>
                    <p>Full Stack Developer</p>
                  </div>
                </div>
              </div>

              <div className={style["social-card"]}>
                <img src={rate} alt="rate" />
                <div className={style["social-quote"]}>
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
                  <div className={style["people-info"]}>
                    <h2>Michael Turner</h2>
                    <p>Entrepreneur</p>
                  </div>
                </div>
              </div>

              <div className={style["social-card"]}>
                <img src={rate} alt="rate" />
                <div className={style["social-quote"]}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                    quis quis sem odio ultricies eu maecenas ante ut. Fames
                    luctus tempor eu diam ut quam. Malesuada risus turpis ante
                    rhoncus viverra ipsum vel scelerisque. Arcu urna, aliquam
                    elit amet.
                  </p>
                </div>
                <div className={style["social-quote"]}>
                  <img alt="" />
                  <div className={style["people-info"]}>
                    <h2>Sarah Borba</h2>
                    <p>Digital Influencer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.filmes}>
            <div>
              <h1>Acess to all trending topics on the social media</h1>
            </div>
            <img src={Filmes} alt="imgFilmes" />
          </div>
          <div className={style.macpro}>
            <div>
              <h1>Access the most relevant and popular information at the moment</h1>
            </div>
            <div className={style.macpro}>
            <img src={Product} alt="imgProductPresentation" />
            </div>
          </div>
          <footer>© 2022 TrendyPro | All Rights Reserved</footer>
        </div>
      </div>
    </>
  );
}
