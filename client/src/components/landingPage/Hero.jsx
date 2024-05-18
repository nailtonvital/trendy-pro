import React from "react";
import style from "../../pages/style.module.scss";
import Mundo from "../../assets/Mundo.webp";

export default function Hero() {
  return (
    <div id="hero" className={style.hero}>
      <div className={style["left-hero"]}>
        <h3 className={style.titleHeader}>
          Descubra o que é tendência em tempo real
        </h3>
        <p>
          Rastreamos todos os tópicos na Internet para identificar tendências
          crescentes.
        </p>
        <div className="text-3xl py-5 ">
          <a
            href="/Login"
            className="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-full group"
          >
            <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-12 absolute left-0 top-0 bg-white opacity-[3%]"></span>
            <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-60 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
              Comece agora
            </span>
            <span className="absolute inset-0 border-2 border-white rounded-full"></span>
          </a>
        </div>
      </div>

      <div className="w-3/4">
        <img loading="lazy" src={Mundo} alt="imgMundo" />
      </div>
    </div>
  );
}
