import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
export const baseImgUrl = 'https://image.tmdb.org/t/p/original'

export default function Hero() {
   const state = useSelector((store) => store.movieReducer )
   const index = Math.floor(Math.random()*20)
   
   const film = state.popularFilms[index]?.known_for[1]
   
   
   return (
    
    <div className='row p-4 bg-dark text-light'>
      <div className='col-md-6 mb-3 d-flex flex-column justify-content-center gap-3'>
        <h1>{film?.title}</h1>
        <p>{film?.overview}</p>
        <p>IMDB: <span style={{color:"goldenrod"}}>{film?.vote_average}</span></p>
        <div className='d-flex justify-content-center gap-3'>
          <button className='btn btn-primary'>
            <Link to={`/movie/${film?.id}`} className='text-light text-decoration-none'>Watch Movie</Link>
          </button>
          <button className='btn btn-danger'>Add Your List</button>
        </div>
      </div>
      <div className='col-md-6 d-flex align-items-center'>
        <img src={`${baseImgUrl}${film?.backdrop_path}`} alt="poster" 
             className='img-fluid rounded shadow'/>
      </div>
    </div>
  )
}
