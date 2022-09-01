import React, { Fragment } from "react";
import style from "./style.module.scss";

export default function SocialMedia() {
  function redirecionar() {
    window.location.href = "../notFound";
  }
  return (
    <Fragment>
      <div className={style.body}>
        <div className={style["social-media"]}>
          <h1>Social Networks</h1>
          <div className={style.content}>
            <section>
              <ul className={style.cards}>
                <li className={style["btn-google"]}>
                  <button
                    className={style["btn-google"]}
                    onclick={redirecionar}
                  ></button>
                  <button
                    className={style["btn-twitter"]}
                    onclick={redirecionar}
                  ></button>
                  <button
                    className={style["btn-facebook"]}
                    onclick={redirecionar}
                  ></button>
                  <button
                    className={style["btn-tiktok"]}
                    onclick={redirecionar}
                  ></button>
                  <button
                    className={style["btn-youtube"]}
                    onclick={redirecionar}
                  ></button>
                </li>
              </ul>
            </section>
          </div>+
        </div>
      </div>
    </Fragment>
  );
}
