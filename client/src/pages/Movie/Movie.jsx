import React, { Fragment, useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
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
  const location = useLocation()
  console.log(location.state.id)

  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [actors, setActors] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const [queries, setQueries] = useState([]);
  const [topics, setTopics] = useState([]);
  const [error, setError] = useState([]);
  const [chartData, setChartData] = useState({})

  const chart=()=>{
    let time = []
    let valueData = []
    api.get(`/interestOverTime?keyword=${location.state.title}`).then((response) => { 
      let interestData = response.data

      interestData.map(item=>{
        time.push(item.time)  
        valueData.push(item.value[0])
      })
    
      

     }).catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    })

    setChartData({
      labels: time,
      datasets: [
        {
          label: location.state.title,
          lineTension: 0.2,
          data: valueData,
          fill: true,
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "white",
          
        }
      ]
    })
  }


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
    if (location.state.type == "anime"){
      
      api.get(`/anime/${location.state.id}`)
      .then((response) => {
        setMovie(response.data.data.Media)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
        setError(err)
      })
      .finally(() => {
       
        api.get(`/relatedQueries?keyword=${location.state.title}`).then((response) => { setQueries(response.data), console.log(queries) }).catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        })
  
        api.get(`/relatedTopics?keyword=${location.state.title}`).then((response) => { setTopics(response.data), console.log(queries) }).catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        })
  
        chart()
        setIsLoading(!isLoading)
      });
    } else if (location.state.type == "movie") {
      api.get(`/movie/${location.state.id}`)
        .then((response) => {
          setMovie(response.data)
        })
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
          setError(err)
        })
        .finally(() => {
          
          api.get(`/moviecredit/${location.state.id}`).then((response) => { setActors(response.data) }).catch((err) => {
            console.error("ops! ocorreu um erro" + err);
            setError(err)
          });
          api.get(`/moviekeywords/${location.state.id}`).then((response) => { response.data.results ? setKeywords(response.data.results) : setKeywords(response.data.keywords), console.log(response.data.keywords) }).catch((err) => {
            console.error("ops! ocorreu um erro" + err);
            setError(err)
          });
          api.get(`/relatedQueries?keyword=${location.state.title}`).then((response) => { setQueries(response.data) }).catch((err) => {
              console.error("ops! ocorreu um erro" + err);
            })
            
            api.get(`/relatedTopics?keyword=${location.state.title}`).then((response) => { setTopics(response.data) }).catch((err) => {
                console.error("ops! ocorreu um erro" + err);
              })
              
          chart()

          setIsLoading(!isLoading)
        });
    } else{
      api.get(`/TV/${location.state.id}`)
        .then((response) => {
          setMovie(response.data)
        })
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
          setError(err)
        })
        .finally(() => {
          chart()

          api.get(`/tvcredit/${location.state.id}`).then((response) => { setActors(response.data) }).catch((err) => {
            console.error("ops! ocorreu um erro" + err);
            setError(err)
          });
          api.get(`/tvkeywords/${location.state.id}`).then((response) => { response.data.results ? setKeywords(response.data.results) : setKeywords(response.data.keywords), console.log(response.data.keywords) }).catch((err) => {
            console.error("ops! ocorreu um erro" + err);
            setError(err)
          });
          api.get(`/relatedQueries?keyword=${location.state.title}`).then((response) => { setQueries(response.data) }).catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          })

          api.get(`/relatedTopics?keyword=${location.state.title}`).then((response) => { setTopics(response.data) }).catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          })


          setIsLoading(!isLoading)
        });
    }



    // api.get("/tvcredit/76479").then((response) => { setActors(response.data), console.log(response.data) }).catch((err) => {
    //   console.error("ops! ocorreu um erro" + err);
    //   setError(err)
    // });
    // api.get("/tvkeywords/76479").then((response) => { response.data.results ? setKeywords(response.data.results) : setKeywords(response.data.keywords), console.log(response.data.keywords) }).catch((err) => {
    //   console.error("ops! ocorreu um erro" + err);
    //   setError(err)
    // });
  }, []);


  if (isLoading) {
    return <div className={style.spin}><MoonLoader  /></div> 
  }
  
  return ( 
  <div >
      {console.log(movie)}
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

              {/* {movie.title.native 
                ? 
                  <>
                    <h6>Original title</h6>
                    <p>{movie.title.native}</p>
                  </> 
                : null
                }
               */}

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
            { movie.name 
              ? <h2>{movie.name} <span className={style.year}>({movie.release_date ? movie.release_date.substr(0, 4) : movie.first_air_date.substr(0, 4)})</span></h2>
            :movie.title.romaji 
              ? <h2> {movie.title.romaji} <span className={style.year}>({movie.release_date ? movie.release_date.substr(0, 4) : movie.startDate.year})</span></h2>
            : movie.title 
                ? <h2>{movie.title} <span className={style.year}>({movie.release_date ? movie.release_date.substr(0, 4) : movie.startDate.year})</span></h2>
            : null}
            
            <p>
              {
                movie.genres
                  ? movie.genres[0].name ? movie.genres.map((genre, index) => <span key={index}>{genre.name + " "}</span>) : movie.genres.map((genre, index) => <span key={index}>{genre + ", "}</span>)
                : null
              }
              |  {
                movie.runtime ? movie.runtime + " Minutes" : movie.number_of_seasons ? movie.number_of_seasons + " Seasons " + movie.number_of_episodes + " Episodes" : movie.episodes + " Episodes"
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
              {chartData.length !== 0 ? <Line data={chartData} options={options} /> : <div className={style.spin}><MoonLoader /></div>}
              {/* <Line data={chartData} options={options} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
