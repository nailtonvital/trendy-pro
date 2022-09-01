import React, { Fragment } from "react";
import error from "./assets/404.svg";
import style from "./style.module.scss";

export default function Error() {
  return (
    <Fragment>
      <div className={style.body}>
        <div className={style.erro}>
          <img src={error} className={style["erro-image"]} alt="erro404" />
          <h1>Page not found. Something went Wrong...</h1>
        </div>
      </div>
    </Fragment>
  );
}
