import React, { useEffect, useState } from "react";
import stars from "../assets/stars.png";
import minino from "../assets/minino.webp";
import Slider from "react-slick";
import api from "../services/api";
import Axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  document.title = "TrendyPro | Home";

  const [movies, setMovies] = useState([]);
  const [tvs, setTvs] = useState([]);
  const [animes, setAnimes] = useState([]);
  const [posts, setPosts] = useState([]);

  const rssFeeds = ["https://www.vox.com/rss/recode/index.xml"];

  useEffect(() => {
    rssFeeds.map((url) => {
      Axios.get(`https://api.rss2json.com/v1/api.json?rss_url=${url}`).then(
        (data) => {
          setPosts((prev) => [...data.data.items]);
        }
      );
    });
    /*api
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
      });*/
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="bg-[#262631] h-screen">
      <div className="bg-gradient-to-r flex from-purple-800 to-pink-700 h-48 rounded-xl w-full text-white font-sans p-0 pt-1 mt-4">
        <img src={minino} />
        <div className="mt-9 ml-4">
          <p className="text-[#CBCBCB] font-bold">Good Evening</p>
          <h2 className="text-4xl font-bold">Nailton Vital</h2>
        </div>
        <img src={stars} className="h-28" alt="" srcset="" />
      </div>
      <div className="w-full"></div>
      
      <div className="grid grid-cols-3 gap-5">

        <div className="bg-[#1B1A20] w-full px-8 rounded-xl mt-7">
          <p className="text-white  text-2xl font-semibold my-4 mb-4">Latest news</p>
          <Slider {...settings}>
            {posts.map((post) => {
              return (
                <div className="text-white">
                  <a href="../AllNewsPage"><img src={post.thumbnail} className="h-full rounded-xl" alt="" /></a>
                  <h3 className="pt-3">{post.title}</h3>
                </div>
              );
            })}
          </Slider>
        </div>

        <div className="bg-[#1B1A20] w-full rounded-xl mt-7">
          <div className="mx-5 my-5">
            <h1 className="text-white text-start text-2xl font-semibold mt-3 my-1">Movies</h1>
            <div className="flex">
              <img src="https://image.tmdb.org/t/p/original/nwkBJF67diqq1w20Xl5pxBZPAiB.jpg" className="h-36 rounded-md"/>
              <div className="ml-3">
                <h1 className="text-white text-base font-semibold">Black Panther: Wakanda Forever</h1>
                <p className="text-gray-500 my-1">2022 • Action, Adventure, Science Fiction • 2h 42m</p> 
                <p className="text-gray-500">Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect...</p>
                </div>
            </div>
            <div className="flex my-4">
              <img src="https://image.tmdb.org/t/p/original/tnmdUnztAYbfJ0jhjpN6oxwP2sb.jpg" className="h-36 rounded-md"/>
              <div className="ml-3">
                <h1 className="text-white text-base font-semibold">Avatar: The Way of Water</h1>
                <p className="text-gray-500 my-1">2022 • Science Fiction, Action, Adventure • 3h 12m </p> 
                <p className="text-gray-500">Set more than a decade after the events of the first film...</p>
                </div>
            </div>
            <div className="flex">
              <img src="https://image.tmdb.org/t/p/original/iEqhF3dtajbTtNRCztgn0q5gWKG.jpg" className="h-36 rounded-md"/>
              <div className="ml-3">
                <h1 className="text-white text-base font-semibold">Black Adam </h1>
                <p className="text-gray-500 my-1">2022 • Action, Fantasy, Science Fiction • 2h 5m</p> 
                <p className="text-gray-500">After he was bestowed with the almighty powers of the Egyptian gods...</p>
                </div>
            </div>  
          </div>     
        </div>

        <div className="bg-[#1B1A20] w-full rounded-xl mt-7">
          <div className="mx-5 my-5">
            <h1 className="text-white text-start text-2xl font-semibold my-1">Songs</h1>
            <div className="flex">
              <img src="https://i.scdn.co/image/ab67616d0000b2737b2dba12da4b7f8e18cba810" className="h-36 rounded-md"/>
              <div className="ml-3">
                <h1 className="text-white text-base font-semibold">ICARUS</h1>
                <p className="text-gray-500 my-1">BK • Gigantes • JXNV$ • 2022 • 13 tracks, 43min 45s </p> 
                <p className="text-gray-500">My war immortalized on canvas, my work engraved in ink and verse.</p>
                </div>
            </div>
            <div className="flex my-5">
              <img src="https://i.scdn.co/image/ab67616d0000b273a76808aeebe1d33acd737530" className="h-36 rounded-md"/>
              <div className="ml-3">
                <h1 className="text-white text-base font-semibold">O Dono do Lugar</h1>
                <p className="text-gray-500 my-1">Djonga • Coyote Beatz • 2022 • 12 tracks, 4min 45s</p> 
                <p className="text-gray-500">My fight against windmills, against enemies greater than me, or who don't exist.</p>
                </div>
            </div>
            <div className="flex">
              <img src="https://i.scdn.co/image/ab67616d00001e024c19babd4aead8628f89d07b" className="h-36 rounded-md"/>
              <div className="ml-3">
                <h1 className="text-white text-base font-semibold">O Sábio</h1>
                <p className="text-gray-500 my-1">MC Poze do rodo • 2022 • 9 tracks, 29min 17s</p> 
                <p className="text-gray-500">Something that was only possible thanks to you, my fans and my family, who are the reason for my life!</p>
                </div>
            </div>  
          </div>     
        </div>

        <div className="bg-[#1B1A20] w-full rounded-xl mt-7">
          <div className="mx-5 my-5">
            <h1 className="text-white text-start text-2xl font-semibold my-1">Animes</h1>
            <div className="flex">
              <img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx127230-FlochcFsyoF4.png" className="h-36 rounded-md"/>
              <div className="ml-3">
                <h1 className="text-white text-base font-semibold">Chainsaw Man</h1>
                <p className="text-gray-500 my-1">2022 • Comedy Drama Horror Supernatural • 12 Episodes</p> 
                <p className="text-gray-500">Denji is a teenage boy living with a Chainsaw Devil named Pochita...</p>
                </div>
            </div>
            <div className="flex my-4">
              <img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx142838-ECZSqfknAqAT.jpg" className="h-36 rounded-md"/>
              <div className="ml-3">
                <h1 className="text-white text-base font-semibold">SPY×FAMILY</h1>
                <p className="text-gray-500 my-1">2022 • Action Comedy Slice of Life Supernatural • 25 Episodes</p> 
                <p className="text-gray-500">veryone has a part of themselves they cannot show to anyone else.</p>
                </div>
            </div>
            <div className="flex">
              <img src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx139630-oc4l8OtJ4tRQ.jpg" className="h-36 rounded-md"/>
              <div className="ml-3">
                <h1 className="text-white text-base font-semibold">Black Adam </h1>
                <p className="text-gray-500 my-1">2022 • Action Adventure Comedy • 12 Episodes</p> 
                <p className="text-gray-500">Middle school student Izuku Midoriya wants to be a hero more than anything, but he hasn’t got an ounce of power in him.</p>
                </div>
            </div>  
          </div>     
        </div>

        <div className="bg-[#1B1A20] w-full rounded-xl mt-7">
          <div className="mx-5 my-5">
            <h1 className="text-white text-start text-2xl font-semibold my-1">Series</h1>
            <div className="flex">
              <img src="https://image.tmdb.org/t/p/original/58ugmnhnrnWC8tLNvifxlQVFB7K.jpg" className="h-36 rounded-md"/>
              <div className="ml-3">
                <h1 className="text-white text-base font-semibold">RICK AND MORTY</h1>
                <p className="text-gray-500 my-1">2022 • Adventure, Comedy, Sci-Fi, Animation • 6 season</p> 
                <p className="text-gray-500">the adventures and discoveries of a super scientist and his not-so-brilliant grandson.</p>
                </div>
            </div>
            <div className="flex my-4">
              <img src="https://www.themoviedb.org/t/p/original/k4aASwwYQCwZ01YHLOJhvDiHFOf.jpg " className="h-36 rounded-md"/>
              <div className="ml-3">
                <h1 className="text-white text-base font-semibold">1899</h1>
                <p className="text-gray-500 my-1">2022 • Mystery, Horror, Period Work • 1 season </p> 
                <p className="text-gray-500">The year is 1899 and mysterious events have changed the course of an immigrant ship bound for New York.</p>
                </div>
            </div>
            <div className="flex">
              <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/ooBR3qulC40ws0QkYBUAYFKmLRE.jpg" className="h-36 rounded-md"/>
              <div className="ml-3">
                <h1 className="text-white text-base font-semibold">Wandinha</h1>
                <p className="text-gray-500 my-1">2022 • Horror Comedy, Supernatural Fiction • 1 season</p> 
                <p className="text-gray-500">Smart, sarcastic and apathetic, Wandinha Addams may be half dead inside</p>
                </div>
            </div>  
          </div>     
        </div>

        <div className="bg-[#1B1A20] w-full px-8 rounded-xl mt-7">
          <p className="text-white  text-2xl font-semibold my-4 mb-4">Top news</p>
          <Slider {...settings}>
            {posts.map((post) => {
              return (
                <a href="#"><div className="text-white">
                  <img src={post.thumbnail} className="h-full rounded-xl" alt="" />
                  <h3 className="pt-3">{post.title}</h3>
                </div></a>
              );
            })}
          </Slider>
        </div>


      </div>
    </div>
  );
}
