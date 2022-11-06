import React, { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import gordao from "./movies.module.scss";
import api from "../../services/api";
import style from "./movies.module.scss";
import { MoonLoader } from 'react-spinners'


function Movies() {
const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [tvs, setTvs] = useState([]);
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    api
      .get("/trendingMovies")
      .then((response) => setMovies(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
    api
      .get("/trendingTV")
      .then((response) => {
        setTvs(response.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
    api
      .get("/trendingAnimes")
      .then((response) => {
        setAnimes(response.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });

      setIsLoading(!isLoading)
  }, []);

  if (isLoading) {
    return <div className={style.spin}><MoonLoader  /></div> 
  }

  return (
    <>
      <div className="bg-gray-900 text-white">
        <h4 className="text-white font-bold text-2xl">Movies</h4>
          <div className="flex items-center scrollbar-hide space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2">
            {movies.map((item, index) => {
              return (
                <MovieCard
                  key={index}
                  poster_img={item.poster_path}
                  title={item.title}
                  id={item.id}
                  type="movie"
                />
              );
            })}
          </div>
          <h4 className="text-white font-bold text-2xl">TV Shows</h4>
          <div className="flex items-center scrollbar-hide space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2">
            {tvs.map((item, index) => {
              return (
                <MovieCard
                  key={index}
                  poster_img={item.poster_path}
                  title={item.name}
                  id={item.id}
                  type="tv"
                  />
                  );
                })}
                </div>

          <h4 className="text-white font-bold text-2xl">Animes</h4>
          <div className="flex items-center scrollbar-hide space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2">
            {animes.map((item, index) => {
              return (
                <MovieCard
                  key={index}
                  anime={true}
                  poster_img={item.coverImage.extraLarge}
                  title={item.title.romaji}
                  id={item.id}
                  type="anime"
                />
              );
            })}
          </div>
      </div>
    </>
  );
}

export default Movies;
