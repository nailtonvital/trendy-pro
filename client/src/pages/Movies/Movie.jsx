import React, { Fragment } from "react";
import style from "./style.module.scss";
import interest from "./assets/interest.png";
import api from "../../services/api";
import { useEffect } from "react";
import { useState } from "react";

export default function Movie() {
  const [movie, setMovie] = useState([]);
  const [actors, setActors] = useState([]);
  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
    api.get("/tv/60574").then((response) => setMovie(response.data), console.log(movie)).catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
    api.get("/moviecredit/634649").then((response) => { setActors(response.data), console.log(response.data) }).catch((err) => {
      console.error("ops! ocorreu um erro" + err);

    });
    api.get("/moviekeywords/634649").then((response) => { setKeywords(response.data), console.log(response.data) }).catch((err) => {
      console.error("ops! ocorreu um erro" + err);

    });
  }, []);

  return (
    <Fragment>
      <div className={style.container} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})` }}>
        <div className={style.column}>
          <div className={style.cardinfo}>
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt=""
            />
            <div className={style.information}>
              <h5>Original Language</h5>
              <p>{movie.original_language}</p>

              <h5>Budget</h5>
              <p>$200,000,000.00</p>

              <h5>Revenue</h5>
              <p>$1,901,000,000.00</p>

              <h5>Tags</h5>
              <p>
                new york city, loss of loved one, showdown, secret identity,
                hero, magic, villain, vigilante, portal, sequel, superhero,
                based on comic, alternate reality, masked vigilante,
                aftercreditsstinger, duringcreditsstinger, marvel cinematic
                universe (mcu), teenage hero, multiverse, alternate universe,
                superhero teamup, returning hero, crossover, teamwork
              </p>
            </div>
          </div>
          <div className={style.movieinfo}>
            <h1>{movie.title ? movie.title : movie.name}</h1>
            <p>
              {movie.release_date} (BR) Ação, Aventura, Ficção científica 2h 29m
            </p>
            <h3>Sinopsys</h3>
            <p>{movie.overview}</p>

            <h3>Cast</h3>
            <div className={style.people}>
              {/* {actors.cast.map(item => (
                    console.log(item)
                ))} */}
              <div className={style.peoplecard}></div>
              <div className={style.peoplecard}></div>
              <div className={style.peoplecard}></div>
              <div className={style.peoplecard}></div>
              <div className={style.peoplecard}></div>
            </div>

            <h3>Related Queries</h3>
            <div className={style.keywords}>
              <button>fesdfdsfg</button>
              <button>fesdfdsfg</button>
              <button>fesdfdsfg</button>
            </div>

            <h3>Topics</h3>
            <div className={style.keywords}>
              <button>fesdfdsfg</button>
              <button>fesdfdsfg</button>
              <button>fesdfdsfg</button>
              <button>fesdfdsfg</button>
            </div>

            <h3>Interest Over Time</h3>
            <div className={style.interest}>
              <img src={interest} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
