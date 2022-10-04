import React, { Fragment, useEffect, useState } from "react";
import { MoonLoader } from 'react-spinners'
import style from "./movie.module.scss";
import interest from "./assets/interest.png";
import api from "../../services/api";
import Sidebar from "../../components/sidebar/Sidebar";

import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';

Chart.register(CategoryScale);
export default function Movie() {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [actors, setActors] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const [queries, setQueries] = useState([]);
  const [topics, setTopics] = useState([]);
  const [error, setError] = useState([]);

  const interestData = [{ "time": "Jan 2 – 8, 2022", "value": [88] }, { "time": "Jan 9 – 15, 2022", "value": [82] }, { "time": "Jan 16 – 22, 2022", "value": [78] }, { "time": "Jan 23 – 29, 2022", "value": [88] }, { "time": "Jan 30 – Feb 5, 2022", "value": [76] }, { "time": "Feb 6 – 12, 2022", "value": [77] }, { "time": "Feb 13 – 19, 2022", "value": [76] }, { "time": "Feb 20 – 26, 2022", "value": [83] }, { "time": "Feb 27 – Mar 5, 2022", "value": [76] }, { "time": "Mar 6 – 12, 2022", "value": [77] }, { "time": "Mar 13 – 19, 2022", "value": [90] }, { "time": "Mar 20 – 26, 2022", "value": [85] }, { "time": "Mar 27 – Apr 2, 2022", "value": [87] }, { "time": "Apr 3 – 9, 2022", "value": [87] }, { "time": "Apr 10 – 16, 2022", "value": [86] }, { "time": "Apr 17 – 23, 2022", "value": [84] }, { "time": "Apr 24 – 30, 2022", "value": [86] }, { "time": "May 1 – 7, 2022", "value": [82] }, { "time": "May 8 – 14, 2022", "value": [100] }, { "time": "May 15 – 21, 2022", "value": [88] }, { "time": "May 22 – 28, 2022", "value": [78] }, { "time": "May 29 – Jun 4, 2022", "value": [74] }, { "time": "Jun 5 – 11, 2022", "value": [68] }, { "time": "Jun 12 – 18, 2022", "value": [65] }, { "time": "Jun 19 – 25, 2022", "value": [69] }, { "time": "Jun 26 – Jul 2, 2022", "value": [65] }, { "time": "Jul 3 – 9, 2022", "value": [96] }, { "time": "Jul 10 – 16, 2022", "value": [75] }, { "time": "Jul 17 – 23, 2022", "value": [67] }, { "time": "Jul 24 – 30, 2022", "value": [72] }, { "time": "Jul 31 – Aug 6, 2022", "value": [68] }, { "time": "Aug 7 – 13, 2022", "value": [99] }, { "time": "Aug 14 – 20, 2022", "value": [85] }, { "time": "Aug 21 – 27, 2022", "value": [77] }, { "time": "Aug 28 – Sep 3, 2022", "value": [79] }, { "time": "Sep 4 – 10, 2022", "value": [89] }, { "time": "Sep 11 – 17, 2022", "value": [81] }, { "time": "Sep 18 – 24, 2022", "value": [94] }, { "time": "Sep 25 – Oct 1, 2022", "value": [97] }]

  const time = interestData.map(item=>{
    return item.time
  })

  const valueData = interestData.map(item => {
    return item.value[0]
  })

  const data = {
    labels: time,
    datasets: [
      {
        label: "Mob Psycho 100",
        lineTension: 0.2,
        data: valueData,
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "white",
        
      }
    ]
  };

  var options = {
    scales: {
      xAxis: {
        ticks: {
          maxTicksLimit: 8.1
        }
      }
    }
  }
  

  useEffect(() => {
    api.get("/anime/140439")
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
    return <div className={style.spin}><MoonLoader  /></div> 
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
              <Line data={data} options={options} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
