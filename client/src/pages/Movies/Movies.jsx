import React, { useEffect, useState } from 'react'
import MovieCard from '../../components/MovieCard/MovieCard'
import style from './movies.module.scss'
import api from "../../services/api";

function Movies() { 
    const [movies, setMovies] = useState([]);
    const [tvs, setTvs] = useState([]);
    const [animes, setAnimes] = useState([]);

    useEffect(() => {
        api.get("/trendingMovies").then((response) => setMovies(response.data)).catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
        api.get("/trendingTV").then((response) => { setTvs(response.data) }).catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
        api.get("/trendingAnimes").then((response) => { setAnimes(response.data) }).catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
    }, []);
    
  return (
      <>
        <h4>Movies</h4>
        <div className={style.cards}>
            {movies.map((item,index) =>{
                return(
                    <MovieCard
                        key={index}
                        poster_img={item.poster_path}
                        title={item.title}
                    />
                )
            })}
        </div>

        <h4>TV Shows</h4>
        <div className={style.cards}>
              {tvs.map((item,index) => {
                return (
                    <MovieCard
                        key={index}
                        poster_img={item.poster_path}
                        title={item.name}
                    />
                )
            })}
        </div>

        <h4>Animes</h4>
        <div className={style.cards}>
              {animes.map((item,index) => {
                return (
                    <MovieCard
                        key={index}
                        anime={true}
                        poster_img={item.coverImage.extraLarge}
                        title={item.title.romaji}
                    />
                )
            })}
        </div>
    </>
  )
}

export default Movies