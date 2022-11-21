import React, { useEffect, useState } from "react";
import Anne from "../assets/anne.webp";
import axios from 'axios'

export default function TiktokPage() {
  axios.defaults.headers.get['Content-Type'] ='application/json;charset=utf-8';
 axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
    const [hashtags, setHashtags] = useState([])
    useEffect(() => {
      axios
        .get(
          "https://trendy-tiktok-api.herokuapp.com/trend-api/wsgeral/hastag",
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Headers": "Authorization",
              "Access-Control-Allow-Methods":
                "GET, POST, OPTIONS, PUT, PATCH, DELETE",
              "Content-Type": "application/json;charset=UTF-8",
            }
          }
        )
        .then((response) => {
          setHashtags(response.data), console.log(response.data);
        })
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
     
    }, []);
//trendy-tiktok-api.herokuapp.com/trend-api/wsgeral/hastag
https: return (
  <div className="text-white mt-5">
    <h3 className="font-bold text-4xl">Tiktok</h3>
    <p className="font-bold text-xl https://trendy-tiktok-api.herokuapp.com/trend-api/wsgeral/hastaghttps://trendy-tiktok-api.herokuapp.com/trend-api/wsgeral/hastagtext-[#CBCBCB]">
      Trending Now
    </p>
    {/* Hashtag */}
    <h4 className="font-bold text-xl mt-5 mb-2">Hastags</h4>
    <div className="flex gap-3 overflow-x-auto">
      <div className="flex-col">
        <i className="bx bx-hash"></i>
        <p>hashtag</p>
      </div>
      <div className="flex-col">
        <i className="bx bx-hash"></i>
        <p>hashtag</p>
      </div>
      <div className="flex-col">
        <i className="bx bx-hash"></i>
        <p>hashtag</p>
      </div>
    </div>

    {/* Creators */}
    <h4 className="font-bold text-xl mt-5 mb-2">Creators</h4>
    <div className="flex gap-3 overflow-x-auto">
      <div className="flex-col">
        <img src={Anne} alt="" />
        <p>Anne</p>
      </div>
      <div className="flex-col">
        <img src={Anne} alt="" />
        <p>Anne</p>
      </div>
      <div className="flex-col">
        <img src={Anne} alt="" />
        <p>Anne</p>
      </div>
    </div>

    {/* Videos */}
    <h4 className="font-bold text-xl mt-5 mb-2">Videos</h4>
    <div className="flex gap-3 overflow-x-auto">
      <div className="flex-col">
        <div className="bg-gray-600 h-52 w-36 rounded">.</div>
        <p>Title</p>
      </div>
    </div>

    {/* Songs */}
    <h4 className="font-bold text-xl mt-5 mb-2">Songs</h4>
    <div className="flex gap-3 overflow-x-auto">
      <div className="flex-col">
        <i className="bx bx-hash"></i>
        <p>hashtag</p>
      </div>
      <div className="flex-col">
        <i className="bx bx-hash"></i>
        <p>hashtag</p>
      </div>
      <div className="flex-col">
        <i className="bx bx-hash"></i>
        <p>hashtag</p>
      </div>
    </div>
  </div>
);
}
