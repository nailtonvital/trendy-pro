import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import api from "../services/api";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function MoviesPage() {
  document.title = "TrendyPro | Movies";

  const [movies, setMovies] = useState([]);
  const [tvs, setTvs] = useState([]);
  const [animes, setAnimes] = useState([]);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4.5,
    slidesToScroll: 1,

  };

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
  }, []);

  return (
    <div className="text-white mt-5 w-full">
      <h3 className="font-bold text-4xl">Entertainament</h3>
      <p className="font-bold text-xl text-[#CBCBCB] -mt-1">Trending Now</p>

      <div className="w-11/12">
        <h4 className="text-lg font-bold mt-5">Movies</h4>
        <div className="mr-7 mt-1.5">
          <Slider {...settings} className="gap-52">
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
          </Slider>
        </div>

        <h4 className="text-lg font-bold mt-5">TV Shows</h4>
        <div className="mr-7 mt-1.5">
          <Slider {...settings}>
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
          </Slider>
        </div>

        <h4 className="text-lg font-bold mt-5">Animes</h4>
        <div className="mr-7 mt-1.5">
          <Slider {...settings}>
            {" "}
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
          </Slider>
        </div>
      </div>
    </div>
  );
}
