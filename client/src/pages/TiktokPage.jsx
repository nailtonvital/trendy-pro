import React, { useEffect, useState } from "react";
import Anne from "../assets/anne.webp";
import axios from 'axios'

export default function TiktokPage() {
  axios.defaults.headers.get['Content-Type'] ='application/json;charset=utf-8';
 axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
    const [hashtags, setHashtags] = useState()

    const hashtagData = [
      {
        id: 16,
        hastag: "#worldcup2022",
        position: "5",
        data_criacao: "2022-11-22T23:13:03.707856Z",
      },
      {
        id: 15,
        hastag: "#qatar",
        position: "4",
        data_criacao: "2022-11-22T23:13:03.059116Z",
      },
      {
        id: 14,
        hastag: "#qatar2022",
        position: "3",
        data_criacao: "2022-11-22T23:13:02.355070Z",
      },
      {
        id: 13,
        hastag: "#thanksgiving",
        position: "2",
        data_criacao: "2022-11-22T23:13:01.704292Z",
      },
      {
        id: 12,
        hastag: "#worldcup",
        position: "1",
        data_criacao: "2022-11-22T23:13:01.021929Z",
      },
    ];

    useEffect(() => {
      try {
        fetch(
            "https://trendy-tiktok-api.herokuapp.com/trend-api/wsgeral/hastag"
          )
          .then((response) => {
            setHashtags(response);
          });
      } catch (err) {
        // TODO
        // adicionar tratamento da exceção
        console.error(err);
      }
}, []);

    


//trendy-tiktok-api.herokuapp.com/trend-api/wsgeral/hastag
return (
  <div className="text-white mt-5 bg-[#262631] h-screen">
    <h3 className="font-bold text-4xl">Tiktok</h3>
    <p className="font-bold text-xl ">Trending Now</p>
    {/* Hashtag */}
    <h4 className="font-bold text-xl mt-5 mb-2">Hastags</h4>
    <div className="flex gap-3 overflow-x-auto">
      {console.log(hashtagData)}
      {hashtagData.map((item) => {
        return (
          <div className="flex-col">
            <i className="bx bx-hash"></i>
            <p>{item.hastag}</p>
          </div>
        );
      })}
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
