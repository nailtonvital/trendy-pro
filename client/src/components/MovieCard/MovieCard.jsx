import React from 'react' 
import style from "./moviecard.module.scss"
import { Link } from "react-router-dom"

function MovieCard(props) {
  return (
      <div className={style.card}>
      <Link to={`/movie`} state={{ id: props.id, title: props.title, type: props.type }} >
            {props.anime ? <img src={props.poster_img} alt={props.title} /> : <img src={" https://image.tmdb.org/t/p/original" + props.poster_img} alt={props.title} />}
            <h6>{props.title}</h6>
          </Link>
      </div>
  )
}

export default MovieCard