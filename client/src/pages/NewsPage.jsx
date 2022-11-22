import React from 'react'
import { useParams, useLocation } from "react-router-dom";

export default function NewsPage() {
      const location = useLocation();
      console.log(location);
      const { title, author, content, img } = useParams();
  return (
    <div>
        gdfg
      <h1>{title}</h1>
      <p className="">Author: {author}</p>
      <div className="">
        <img src={img} alt="" />
      </div>
      <p className="">
        {content.replace(/<\/?[^>]+(>|$)/g, "")}
      </p>
    </div>
  );
}
