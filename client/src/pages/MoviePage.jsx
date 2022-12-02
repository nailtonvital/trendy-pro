import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import api from "../services/api";
import { MoonLoader } from "react-spinners";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

Chart.register(CategoryScale);

export default function MoviePage() {
  const location = useLocation();
  console.log(location.state.id);

  document.title = `TrendyPro | ${location.state.title}`;

  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [actors, setActors] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const [queries, setQueries] = useState([]);
  const [topics, setTopics] = useState([]);
  const [error, setError] = useState([]);
  const [chartData, setChartData] = useState("");

  const formatNumber = (n) => {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
    if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4.5,
    slidesToScroll: 1,
  };

  const chart = () => {
    let time = [];
    let valueData = [];
    api
      .get(`/interestOverTime?keyword=${location.state.title}`)
      .then((response) => {
        let interestData = response.data;

        interestData.map((item) => {
          time.push(item.time);
          valueData.push(item.value[0]);
        });
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });

    setChartData({
      labels: time,
      datasets: [
        {
          label: location.state.title,
          lineTension: 0.2,
          data: valueData,
          fill: true,
          backgroundColor: "rgba(103,53,294,0.2)",
          borderColor: "white",
        },
      ],
    });
  };

  var options = {
    scales: {
      xAxis: {
        ticks: {
          maxTicksLimit: 8.1,
        },
      },
    },
  };

  useEffect(() => {
    if (location.state.type == "anime") {
      api
        .get(`/anime/${location.state.id}`)
        .then((response) => {
          setMovie(response.data.data.Media);
        })
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
          setError(err);
        })
        .finally(() => {
          api
            .get(`/relatedQueries?keyword=${location.state.title}`)
            .then((response) => {
              setQueries(response.data), console.log(queries);
            })
            .catch((err) => {
              console.error("ops! ocorreu um erro" + err);
            });

          api
            .get(`/relatedTopics?keyword=${location.state.title}`)
            .then((response) => {
              setTopics(response.data), console.log(queries);
            })
            .catch((err) => {
              console.error("ops! ocorreu um erro" + err);
            });

          chart();
          setIsLoading(!isLoading);
        });
    } else if (location.state.type == "movie") {
      api
        .get(`/movie/${location.state.id}`)
        .then((response) => {
          setMovie(response.data);
        })
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
          setError(err);
        })
        .finally(() => {
          api
            .get(`/moviecredit/${location.state.id}`)
            .then((response) => {
              setActors(response.data);
            })
            .catch((err) => {
              console.error("ops! ocorreu um erro" + err);
              setError(err);
            });
          api
            .get(`/moviekeywords/${location.state.id}`)
            .then((response) => {
              response.data.results
                ? setKeywords(response.data.results)
                : setKeywords(response.data.keywords),
                console.log(response.data.keywords);
            })
            .catch((err) => {
              console.error("ops! ocorreu um erro" + err);
              setError(err);
            });
          api
            .get(`/relatedQueries?keyword=${location.state.title}`)
            .then((response) => {
              setQueries(response.data);
            })
            .catch((err) => {
              console.error("ops! ocorreu um erro" + err);
            });

          api
            .get(`/relatedTopics?keyword=${location.state.title}`)
            .then((response) => {
              setTopics(response.data);
            })
            .catch((err) => {
              console.error("ops! ocorreu um erro" + err);
            });

          chart();

          setIsLoading(!isLoading);
        });
    } else {
      api
        .get(`/TV/${location.state.id}`)
        .then((response) => {
          setMovie(response.data);
        })
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
          setError(err);
        })
        .finally(() => {
          chart();

          api
            .get(`/tvcredit/${location.state.id}`)
            .then((response) => {
              setActors(response.data);
            })
            .catch((err) => {
              console.error("ops! ocorreu um erro" + err);
              setError(err);
            });
          api
            .get(`/tvkeywords/${location.state.id}`)
            .then((response) => {
              response.data.results
                ? setKeywords(response.data.results)
                : setKeywords(response.data.keywords),
                console.log(response.data.keywords);
            })
            .catch((err) => {
              console.error("ops! ocorreu um erro" + err);
              setError(err);
            });
          api
            .get(`/relatedQueries?keyword=${location.state.title}`)
            .then((response) => {
              setQueries(response.data);
            })
            .catch((err) => {
              console.error("ops! ocorreu um erro" + err);
            });

          api
            .get(`/relatedTopics?keyword=${location.state.title}`)
            .then((response) => {
              setTopics(response.data);
            })
            .catch((err) => {
              console.error("ops! ocorreu um erro" + err);
            });

          setIsLoading(!isLoading);
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
    return (
      <div className="">
        <MoonLoader />
      </div>
    );
  }

  return (
    <div>
      {console.log(movie)}

      <div className="grid grid-cols-9 gap-4 text-white">
        <div className="col-span-2">
          {/* Poster */}
          {movie.poster_path ? (
            <img
              className=" w-full p-2 rounded-xl"
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt=""
            />
          ) : movie.coverImage ? (
            <img
              className=" w-full p-2 rounded-xl"
              src={movie.coverImage.extraLarge}
              alt=""
            />
          ) : null}

          {/* Country */}
          <div className="mt-3 w-full">
            {movie.countryOfOrigin ? (
              movie.countryOfOrigin === "JP" ? (
                <>
                  <h6 className="text-xl font-bold">Country of origin</h6>
                  <p className="text-gray-300 font-semibold text-md ">
                    {movie.countryOfOrigin}
                  </p>

                  <h6 className="text-xl font-bold">Original language</h6>
                  <p className="text-gray-300 font-semibold text-md ">
                    Japanese
                  </p>
                </>
              ) : null
            ) : null}

            {/* {movie.title.native 
                ? 
                  <>
                    <h6>Original title</h6>
                    <p>{movie.title.native}</p>
                  </> 
                : null
                }
               */}

            {movie.budget ? (
              <>
                <h6 className="text-xl font-bold">Budget</h6>
                <p className="text-gray-300 font-semibold text-md ">
                  ${formatNumber(movie.budget)}
                </p>
                <h6 className="text-xl font-bold mt-3">Revenue</h6>
                <p className="text-gray-300 font-semibold text-md ">
                  ${formatNumber(movie.revenue)}
                </p>
              </>
            ) : null}

            <h6 className="text-xl font-bold mb-2 mt-3">Keywords</h6>
            {movie.tags
              ? movie.tags.map((item, index) => (
                  <button
                    className="bg-[#36394A] px-4 py-1 mr-1 rounded-full mb-2"
                    key={index}
                  >
                    {item.name}
                  </button>
                ))
              : keywords
              ? keywords.map((item, index) => (
                  <button
                    className="bg-[#36394A] px-4 py-1 mr-1 rounded-full mb-2"
                    key={index}
                  >
                    {item.name}
                  </button>
                ))
              : null}
          </div>
        </div>
        <div className="col-span-7 mt-2">
          {movie.name ? (
            <h2 className="text-3xl font-black">
              {movie.name}{" "}
              <span className="text-3xl font-bold text-slate-400">
                (
                {movie.release_date
                  ? movie.release_date.substr(0, 4)
                  : movie.first_air_date.substr(0, 4)}
                )
              </span>
            </h2>
          ) : movie.title.romaji ? (
            <h2 className="text-3xl font-bold">
              {" "}
              {movie.title.romaji}{" "}
              <span className="font-bold text-slate-400">
                (
                {movie.release_date
                  ? movie.release_date.substr(0, 4)
                  : movie.startDate.year}
                )
              </span>
            </h2>
          ) : movie.title ? (
            <h2 className="text-3xl font-bold">
              {movie.title}{" "}
              <span className="font-bold text-gray-400">
                (
                {movie.release_date
                  ? movie.release_date.substr(0, 4)
                  : movie.startDate.year}
                )
              </span>
            </h2>
          ) : null}
          <div className="flex align-middle mt-2">
            {movie.genres
              ? movie.genres[0].name
                ? movie.genres.map((genre, index) => (
                    <button
                      className="bg-[#36394A] px-4 py-1 mr-1 rounded-full"
                      key={index}
                    >
                      {genre.name}
                    </button>
                  ))
                : movie.genres.map((genre, index) => (
                    <button
                      className="bg-[#36394A] px-3 py-0 mr-1 rounded-full"
                      key={index}
                    >
                      {genre}
                    </button>
                  ))
              : null}
            <p className="text-xl font-bold">
              |{" "}
              {movie.runtime
                ? movie.runtime + " Minutes"
                : movie.number_of_seasons
                ? movie.number_of_seasons +
                  " Seasons " +
                  movie.number_of_episodes +
                  " Episodes"
                : movie.episodes + " Episodes"}
            </p>
          </div>

          <p className="text-gray-300 font-semibold text-md text-justify mt-4 mb-5">
            {movie.overview
              ? movie.overview
              : movie.description.replace(/<\/?[^>]+(>|$)/g, "")}
          </p>

          {actors.length !== 0 ? (
            <>
              <h5 className="text-xl font-bold mb-2">Cast</h5>
              <div className="gap-2">
                <Slider {...settings}>
                  {actors.cast.map((item) => (
                    <div className="min-w-[180px]">
                      <img
                        className="h-72 rounded-xl"
                        src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
                        alt=""
                      />
                      <h6 className="font-semibold">{item.character}</h6>
                      <p className="text-slate-300">{item.original_name}</p>
                    </div>
                  ))}
                </Slider>
              </div>
            </>
          ) : null}

          {queries ? (
            <>
              <h5 className="text-xl font-bold mb-2 mt-5">Related Queries</h5>
              <div className="">
                {queries.map((item, index) => (
                  <button
                    className="bg-[#36394A] px-4 py-1 mr-1 mb-2 rounded-full"
                    key={index}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </>
          ) : null}

          {topics ? (
            <>
              <h5 className="text-xl font-bold mb-2 mt-5">Related Topics</h5>
              <div className="">
                {topics.map((item, index) => (
                  <button
                    className="bg-[#36394A] px-4 py-1 mr-1 mb-2 rounded-full"
                    key={index}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </>
          ) : null}

          <h5 className="text-xl font-bold mb-2 mt-5">Interest Over Time</h5>
          <div className="">
            {chartData.length !== 0 ? (
              <Line id="canvas" data={chartData} options={options} />
            ) : (
              <div className="">
                <MoonLoader />
              </div>
            )}
            {/* <Line data={chartData} options={options} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
