import React, { Fragment, useEffect, useState } from "react";
import { BarLoader } from 'react-spinners'
import { Line } from 'react-chartjs-2';
import style from "./movie.module.scss";
import interest from "./assets/interest.png";
import api from "../../services/api";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Movie() {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [actors, setActors] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const [queries, setQueries] = useState([]);
  const [topics, setTopics] = useState([]);
  const [error, setError] = useState([]);
  

  useEffect(() => {
    api.get("/anime/20850")
    .then((response) => {
      setMovie(response.data.data.Media)
    })
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
      setError(err)
    })
    .finally(() => setIsLoading(!isLoading));
    // api.get("/tvcredit/76479").then((response) => { setActors(response.data), console.log(response.data) }).catch((err) => {
    //   console.error("ops! ocorreu um erro" + err);
    //   setError(err)
    // });
    // api.get("/tvkeywords/76479").then((response) => { response.data.results ? setKeywords(response.data.results) : setKeywords(response.data.keywords), console.log(response.data.keywords) }).catch((err) => {
    //   console.error("ops! ocorreu um erro" + err);
    //   setError(err)
    // });
    // if(movie !== undefined){
    //   api.get(`/relatedQueries?keyword=${movie.title.romaji ? movie.title.romaji : movie.title ? movie.title : movie.name}`).then((response) => { setQueries(response.data), console.log(queries) }).catch((err) => {
    //     console.error("ops! ocorreu um erro" + err);
    //   });
    //   api.get(`/relatedTopics?keyword=${movie.title.romaji ? movie.title.romaji : movie.title ? movie.title : movie.name}`).then((response) => { setTopics(response.data), console.log(queries) }).catch((err) => {
    //     console.error("ops! ocorreu um erro" + err);
    //   });
    // }
  }, []);


  if (isLoading) {
    return <BarLoader/>
  }

  return (
    <div >
      <div className={style.container} style={
        movie.backdrop_path 
          ? { backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`}
          : { backgroundImage: `url(${movie.bannerImage})`  }
        }>
        <div className={style.column}>
          <div className={style.cardinfo}>

            {movie.poster_path 
              ? <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" /> 
            : movie.coverImage 
                ? <img src={movie.coverImage.extraLarge} alt="" />  
            : null}
            

            <div className={style.information}>

              {movie.countryOfOrigin
                ? movie.countryOfOrigin === "JP"
                 ?
                  <>
                    <h6>Country of origin</h6>
                    <p>{movie.countryOfOrigin}</p>

                    <h6>Original language</h6>
                    <p>Japanese</p>
                  </>
                  : null
                : null
              }

              {movie.title.native 
                ? 
                  <>
                    <h6>Original title</h6>
                    <p>{movie.title.native}</p>
                  </> 
                : null
                }
              

              {movie.budget ? 
              <>
                <h6>Budget</h6>
                <p>{movie.budget}</p> 
                <h6>Revenue</h6>
                <p>${movie.revenue}</p>
              </> : null}

              <h6>Keywords</h6>
              {
                movie.tags 
                ? movie.tags.map((item, index) => (
                    <button key={index}>{item.name}</button>
                  ))
                : keywords
                ? keywords.map((item, index)=>(
                    <button key={index}>{item.name}</button>
                  ))
                : null
              }
            </div>
          </div>
          <div className={style.movieinfo}>
            {movie.title.romaji !== 0
              ? <h2> {movie.title.romaji} <span className={style.year}>({movie.release_date ? movie.release_date.substr(0, 4) : movie.startDate.year})</span></h2>
            : movie.title 
                ? <h2>{movie.title} <span className={style.year}>({movie.release_date ? movie.release_date.substr(0, 4) : movie.startDate.year})</span></h2>
            : movie.name 
                  ? <h2>{movie.name} <span className={style.year}>({movie.release_date ? movie.release_date.substr(0, 4) : movie.startDate.year})</span></h2>
            : null}
            
            <p>
              {
                movie.genres.name
                ? movie.genres.map((genre,index) => <span key={index}>{genre.name+" "}</span>)
                : movie.genres.map((genre,index) => <span key={index}>{genre + ", "}</span>)
              }
              |  {
                movie.runtime ? movie.runtime + "Minutes" : movie.number_of_seasons ? movie.number_of_seasons + " Seasons " + movie.number_of_episodes + " Episodes" : movie.episodes + " Episodes"
              }
            </p>

            <p>{movie.overview ? movie.overview : movie.description.replace(/<\/?[^>]+(>|$)/g, "")}</p>

            {actors.length !== 0 
            ? 
            <>
                <h5>Cast</h5>
                <div className={style.people}>

                  {actors.cast.map(item => (
                <div className={style.peoplecard}>
                  <img className={style.peoplecardimg} src={`https://image.tmdb.org/t/p/original/${item.profile_path}`} alt="" />
                  <h6>{item.character}</h6>
                  <p>{item.original_name}</p>
                </div>
                ))}

                </div>
            </>
            : null
          }
            

            {
              queries
                ?
                <>
                <h5>Related Queries</h5>
                <div className={style.keywords}>
                  {queries.map((item, index) => (
                    <button key={index}>{item}</button>
                  ))}
                </div>
                </>
                : null
            }

            {
              topics
                ?
                <>
                <h5>Related Topics</h5>
                <div className={style.keywords}>
                  {topics.map((item, index) => (
                    <button key={index}>{item}</button>
                  ))}
                </div>
                </>
                : null
            }

            <h5>Interest Over Time</h5>
            <div className={style.interest}>
              <img src={interest} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
