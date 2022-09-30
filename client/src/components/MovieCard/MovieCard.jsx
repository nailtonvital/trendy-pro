import React from 'react' 
import style from "./moviecard.module.scss"

function MovieCard(props) {
  return (
      <div className={style.card}>
          {props.anime ? <img src={props.poster_img} alt={props.title} /> : <img src={" https://image.tmdb.org/t/p/original" + props.poster_img} alt={props.title} />}
          <h6>{props.title}</h6>
      </div>
  )
}

export default MovieCard