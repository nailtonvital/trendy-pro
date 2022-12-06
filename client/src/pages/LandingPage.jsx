import React, { useState } from "react";
import style from "./style.module.scss";
import Fox from "../assets/logo1.webp";
import Mundo from "../assets/Mundo.webp";
import MapaMundi from "../assets/MapaMundi.webp";
import User from "../assets/User.webp";
import rate from "../assets/rate.webp";
import Filmes from "../assets/filmes.webp";
import nana from "../assets/nana.webp";
import maicon from "../assets/maicon1.webp";
import luccas from "../assets/luccas.webp";
import genu from "../assets/genu2.webp";
import campos from "../assets/Campos.webp";
import vini from "../assets/Vinicius.webp";
import Ilan from "../assets/Ilan.webp";
import goda from "../assets/goda.webp";
import home from "../assets/home1.webp";
import sobe from "../assets/sobe.webp";
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
            <a href="/LandingPage">
            <div className={style.logo}>
              <img src={Fox} alt="imgFox" />
            </div>
            </a>

            <div className="flex space-x-16 text-2xl font-semibold">
              <a href="#Contact">
              <p className="relative group">
                  <span>Contact</span>
                 <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gray-200 transition-all group-hover:w-full"></span>
              </p></a>
              <a href="#About Us">
              <p className="relative group">
                  <span>About Us</span>
                 <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gray-200 transition-all group-hover:w-full"></span>
              </p></a>
              <a href="/login">
              <p className="relative group">
                  <span>Sign In</span>
                 <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gray-200 transition-all group-hover:w-full"></span>
              </p></a>

              </div>
          </nav>
      
  
          <div id="sobe" className={style.hero}>
            <div className={style["left-hero"]}>
              <h3 className={style.titleHeader}>
                Discover trends while it trending
              </h3>
              <p>
                We track every topic across the internet to identify growing
                trends.
              </p>
              <div className="text-3xl py-5 ">
                <a href="/Login" class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group">
                  <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-12 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                  <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-60 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                  <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">Get Started</span>
                  <span class="absolute inset-0 border-2 border-white rounded-full"></span>
                </a>
              </div> 
            </div>

            <div className={style["right-hero"]}>
              <img src={Mundo} alt="imgMundo" />
            </div>
          </div>

          <div className={style.banner}>
            <h3 className="text-xl font-bold">Our Main Features</h3>
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
                <p >Real-time tracking Trends</p>
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
                <p >Acesso a todos os interesses do Meta Ads</p>
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
                <p >Explorador de palavras-chaves para SEO</p>
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
                <p >Gráficos de interesse</p>
              </li>
            </ul>
          </div>

          <div className={style.item}>
            <div className={style["left-align"]}>
              <a id="About Us"></a>
              <h3 className={style.titleHeader}>Know what’s going on around the world</h3>
            </div>
            <div className={style["right-align"]}>
              <img  className="mb-20 mt-80" src={MapaMundi} alt="imgMapaMundi" />
            </div>
          </div>

          <div className="items-stretch flex mb-24 mt-80">  
            <img className="w-1/3" src={User} alt="imgUser" />
                <div className=" pl-60 pt-28 text-end">
                  <p className="text-5xl font-bold pb-6">We at TrendyPro will bring the ease to the user</p>
                  <p className="text-xl font-light">An efficient application that will provide versioning <br></br> and practicality in a single click.</p>
                </div>
          </div>

          <div className="items-stretch flex mb-24 mt-80">  
              <div className="mt-52 text-start">
                <p className="text-5xl font-bold pb-6">Figuring out what the next big trend is tells us what to focus on</p>
              </div> 
              <img className="-mr-44" src={Filmes} alt="imgUser" />
          </div>

          <div className="items-stretch flex mb-24 mt-80">  
              <img className="w-4/6 -ml-52" src={home} alt="imgUser" />
                  <div className=" pl-60 pt-28 text-end w-1/2">
                    <p className="text-5xl font-bold pb-6">Access most relevant information whats popular</p>
                    <p className="text-xl font-light">Acess to all trending topics on the social media</p>
                </div>
            </div>

          <div className={style["social-proof"]}>
            <a id="Contact"></a>
            <p className="text-3xl font-bold mt-80">The Workers</p>
            <div className={style["social-cards"]}>
              <a href="https://www.instagram.com/nailtonvital/" target="_blank">
                <div className={style["social-card"]}>
                  <img src={rate} alt="rate" />
                  <div className={style["social-quote"]}>
                    <p>
                    "Quando se mostra ao mundo e exibe os seus talentos, naturalmente desperta todo tipo de ressentimento,
                     inveja e outras manifestações de insegurança." <br></br>-Robert Greene
                    </p>
                  </div>
                  <div className={style.people}>
                    <img src={nana} alt="" />
                    <div className={style["people-info"]}>
                      <h2>Nailton Vital</h2>
                      <p>Full Stack Developer</p>
                    </div>
                  </div>
                </div>
              </a>

              <a href="https://www.instagram.com/_luccaos_/" target="_blank">
              <div className={style["social-card"]}>
                <img src={rate} alt="rate" />
                <div className={style["social-quote"]}>
                  <p>
                  "Um dia azul, tenho um sonho<br></br>
                  Ir pra Cancún, viver longe<br></br>
                  Todo mal dessa gente<br></br>
                  Plantar um pé, colher e ser feliz<br></br>
                  Hoje eu tenho andado bem distante <br></br>
                  Dessa vida solta, dez mil na roupa <br></br>
                  Vinte na bolsa <br></br>
                  Pra minha moça, deixo ela solta" <br></br>
                  -Teto
                  </p>
                </div>
                <div className={style.people}>
                  <img src={luccas} alt="" />
                  <div className={style["people-info"]}>
                    <h2>Luccas Anjos</h2>
                    <p>Developer</p>
                  </div>
                </div>
              </div>
              </a>

              <a href="https://www.instagram.com/_guizen/" target="_blank">
              <div className={style["social-card"]}>
                <img src={rate} alt="rate" />
                <div className={style["social-quote"]}>
                  <p>
                  "Pra quem tem pensamento forte o impossível é só questão de opinião"<br></br> - Charlie Brown Jr
                  </p>
                </div>
                <div className={style.people}>
                  <img src={campos} alt="" />
                  <div className={style["people-info"]}>
                    <h2>Guilherme Campos</h2>
                    <p>Developer</p>
                  </div>
                </div>
              </div>
              </a>

              <a href="https://www.instagram.com/luh.genu/" target="_blank">
              <div className={style["social-card"]}>
                <img src={rate} alt="rate" />
                <div className={style["social-quote"]}>
                  <p>
                  "Nos sentindo melhor que os outros<br></br>
                  Por ter mais coisas que os outros<br></br>
                  Vê que o inimigo ganhou?<br></br>
                  A gente se tornou tudo<br></br>
                  Aquilo que sempre odiou"<br></br>
                  -BK
                  </p>
                </div>
                <div className={style.people}>
                  <img src={genu} alt="" />
                  <div className={style["people-info"]}>
                    <h2>Lucas Genú</h2>
                    <p>Designer</p>
                  </div>
                </div>
              </div>
              </a>

              <a href="https://www.instagram.com/_maicxn/" target="_blank">
              <div className={style["social-card"]}>
                <img src={rate} alt="rate" />
                <div className={style["social-quote"]}>
                  <p>
                  "Eu sou a continuação de um sonho<br></br>
                  Da minha mãe do meu pai<br></br>
                  De todos que vieram antes de mim<br></br>
                  Eu sou a continuação de um sonho<br></br>
                  Da minha vó, do meu vô<br></br>
                  Quem sangrou pra gente poder sorrir"<br></br>
                  - BK
                  </p>
                </div>
                <div className={style.people}>
                  <img src={maicon} alt="" />
                  <div className={style["people-info"]}>
                    <h2>Maicon Oliveira</h2>
                    <p>Full Stack Developer</p>
                  </div>
                </div>
              </div>
              </a>

              <a href="https://www.instagram.com/viniciussribeir0/" target="_blank">
              <div className={style["social-card"]}>
                <img src={rate} alt="rate" />
                <div className={style["social-quote"]}>
                  <p>
                  "A vida me ensinou a nunca desistir
                  Nem ganhar, nem perder mas procurar evoluir"
                  <br></br>- Charlie Brown Jr
                  </p>
                </div>
                <div className={style.people}>
                  <img src={vini} alt="" />
                  <div className={style["people-info"]}>
                    <h2>Vinicius Ribeiro</h2>
                    <p>Developer</p>
                  </div>
                </div>
              </div>
              </a>

              <a href="https://www.instagram.com/madu_goda/" target="_blank">
              <div className={style["social-card"]}>
                <img src={rate} alt="rate" />
                <div className={style["social-quote"]}>
                  <p>
                  "Não importa o que você seja, quem você seja, ou que deseja na vida, a ousadia em ser di
                  ferente reflete na sua personalidade, no seu caráter, naquilo que você é. E é assim que as pessoas lembrarão de você um dia." <br></br>   - Ayrton Senna
                  </p>
                </div>
                <div className={style.people}>
                  <img src={goda} alt="" />
                  <div className={style["people-info"]}>
                    <h2>Maria Goda</h2>
                    <p>Archivist</p>
                  </div>
                </div>
              </div>
              </a>

              <a href="https://www.instagram.com/ylan_costa/" target="_blank">
              <div className={style["social-card"]}>
                <img src={rate} alt="rate" />
                <div className={style["social-quote"]}>
                  <p>
                  “Os que vencem, não importa como vençam, nunca conquistam a vergonha”. - Nicolau Maquiavel
                  </p>
                </div>
                <div className={style.people}>
                  <img src={Ilan} alt="" />
                  <div className={style["people-info"]}>
                    <h2>Ilan Costa</h2>
                    <p>Full Stack Developer</p>
                  </div>
                </div>
              </div>
              </a>

            </div>
          </div>

            

          <div className="mt-48 mb-4 text-2xl">
              <footer>© 2022 TrendyPro | All Rights Reserved</footer>
          </div>

        </div>
      </div>
    </>
  );
}
