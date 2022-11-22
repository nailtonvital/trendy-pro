import React from 'react'
import { useParams, useLocation } from "react-router-dom";

export default function NewsPage() {
      const location = useLocation();
      console.log(location);
  return (
    <div className="text-white mt-5">
      <h1 className="font-bold text-3xl text-center ">
        {location.state.title}
      </h1>
      <p className="font-light text-md text-center mt-2">
        Author: {location.state.author}
      </p>
      <div className="img mt-5">
        <img src={location.state.img} className="rounded-xl w-full" alt="" />
      </div>
      <p className="mt-5">
        {location.state.content.replace(/<\/?[^>]+(>|$)/g, "")}
      </p>
    </div>
  );
}
