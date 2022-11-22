import { useState, useEffect } from "react";
import stars from '../assets/stars.png'
import minino from '../assets/minino.webp'
import Slider from "react-slick";
import Axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  document.title = 'TrendyPro | Home'

  const [posts, setPosts] = useState([]);

  const rssFeeds = ["https://www.vox.com/rss/recode/index.xml"];

  useEffect(() => {
    rssFeeds.map((url) => {
      Axios.get(`https://api.rss2json.com/v1/api.json?rss_url=${url}`).then(
        (data) => {
          setPosts((prev) => [ ...data.data.items]);
        }
      );
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className="bg-gradient-to-r flex from-purple-800 to-pink-700 h-48 rounded-xl w-full text-white font-sans p-0 pt-1 mt-4">
        <img src={minino} />
        <div className="mt-9 ml-4">
          <p className="text-[#CBCBCB] font-bold">Good Evening</p>
          <h2 className="text-4xl font-bold">Nailton Vital</h2>
        </div>
        <img src={stars} className="h-28" alt="" srcset="" />
      </div>
      <div className="w-full"></div>
      <div className="items-stretch flex gap-5">
        <div className="bg-[#1B1A20] w-96 rounded-xl mt-7">
          <Slider {...settings}>
            {posts.map(post=>{
              return (
                <div className="text-white">
                  <img src={post.thumbnail} className="h-25" alt="" />
                  <h3 className="">{post.title}</h3>
                </div>
              );
            })}
            
          </Slider>
        </div>

        <div className="bg-[#1B1A20] h-96 rounded-xl w-1/4 mt-7">
          <p className="text-white text-center ">Movies</p>
        </div>

        <div className="bg-[#1B1A20] h-96 rounded-xl w-1/4 mt-7">
          <p className="text-white text-center ">Songs</p>
        </div>
      </div>
      <div className="items-stretch flex space-x-10">
        <div className="bg-[#1B1A20] h-96 rounded-xl w-1/4 mt-7">
          <p className="text-white text-center ">My Watchlist</p>
        </div>

        <div className="bg-[#1B1A20] h-96 rounded-xl w-1/4 mt-7">
          <p className="text-white text-center ">Animes</p>
        </div>

        <div className="bg-[#1B1A20] h-96 rounded-xl w-1/2 mt-7">
          <p className="text-white text-center ">CAROUSEL</p>
          <p className="text-white text-center ">
            Affiliate marketing Trends for 2023
          </p>
        </div>
      </div>
    </div>
  );
}
