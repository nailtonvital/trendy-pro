import React from "react";
import { Link } from "react-router-dom";

export default function movieHome(props) {
  return (
    <div className="h-72 mb-72  min-w-[180px] max-w-[180px] cursor-pointer transition-transform duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
      <Link
        to={`/dashboard/movie`}
        state={{ id: props.id, title: props.title, type: props.type }}
      >
        {props.anime ? (
          <img
            className="rounded-sm object-cover md:rounded h-96 w-full"
            src={props.poster_img}
            alt={props.title}
          />
        ) : (
          <img
            className="rounded-sm object-cover md:rounded"
            src={" https://image.tmdb.org/t/p/original" + props.poster_img}
            alt={props.title}
          />
        )}
        <h6>{props.title}</h6>
      </Link>
    </div>
  );
}
