import React, { Fragment } from 'react';
import style from "./style.module.scss";
import interest from "./assets/interest.png";
import api from '../../services/api';
import { useEffect } from 'react';

export default function Movie() {
    useEffect(() => {
        api.get("movies")
    }, [])

  return (
<Fragment>
    <div className={style.container}>
        <div className={style.column}>
            <div className={style.cardinfo}>
                <img src="https://image.tmdb.org/t/p/original/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg" alt=""/>
                <div className={style.information}>
                    <h5>Original Language</h5>
                    <p>English</p>

                    <h5>Budget</h5>
                    <p>$200,000,000.00</p>

                    <h5>Revenue</h5>
                    <p>$1,901,000,000.00</p>

                    <h5>Tags</h5>
                    <p>new york city,
                        loss of loved one,
                        showdown,
                        secret identity,
                        hero,
                        magic,
                        villain,
                        vigilante,
                        portal,
                        sequel,
                        superhero,
                        based on comic,
                        alternate reality,
                        masked vigilante,
                        aftercreditsstinger,
                        duringcreditsstinger,
                        marvel cinematic universe (mcu),
                        teenage hero,
                        multiverse,
                        alternate universe,
                        superhero teamup,
                        returning hero,
                        crossover,
                        teamwork</p>
                </div>
            </div>
            <div className={style.movieinfo}>
                <h2>Spider-Man: No Way Home (2021)</h2>
                <p>12 16/12/2021 (BR) Ação, Aventura, Ficção científica 2h 29m</p>
                <h3>Sinopsys</h3>
                <p>Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being
                    a super-hero. When
                    he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover
                    what it truly means
                    to be Spider-Man.</p>

                <h3>Cast</h3>
                <div className={style.people}>
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
                    <img src={interest} alt="" srcset=""/>
                </div>
            </div>

        </div>
    </div>
</Fragment>
  )
}
