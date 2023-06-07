import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchByUrl } from '../app/actions/mavieAcyions';
import { baseImgUrl } from '../components/Hero';

export default function MovieDetail() {
  const {movieId} = useParams();
  const [movieDetail,setMovieDetail] = useState(null);
  useEffect(()=>{
    fetchByUrl(`/movie/${movieId}`)
    .then((res)=>setMovieDetail(res))
  },[])
  if(movieDetail === null ) return "Loading..."
  return (
    <div className='movie-detail row bg-dark text-light  p-5 d-flex align-items-center justify-content-center '>
      <div className='col-md-6 d-flex align-items-center justify-content-center '> <img 
          src={`${baseImgUrl}${movieDetail.poster_path}`} alt="Poster" 
          className='img-fluid detail-img' /></div>
      <div className='col-md-6 d-flex flex-column justify-content-center '>
        <h1>{movieDetail.title}</h1>
        <p>{movieDetail.overview}</p>
        <div className='row row-cols-2 '>
          <div className='d-flex flex-column justify-content-center'>
            <p>Budegt : {movieDetail.budget}</p>
            <p>Revunue : {movieDetail.revenue}</p>
            <p>Profit : {movieDetail.revenue - movieDetail.budget}</p>
          </div>
          <div className='d-flex flex-column justify-content-center'>
          <div className=' d-flex flex-row gap-2'>
          Categories:
            {movieDetail.genres.map((genre)=> 
              <p className='badge mt-1 bg-gradient'>{genre.name}</p> )}
          </div>
          <div className='d-flex flex-row  gap-2'>
          Languages : 
            {movieDetail.spoken_languages.map((i)=>(
              <p className='badge mt-1 bg-danger'> {i.name}</p>
            ))}
          </div>
          <div className='d-flex flex-row'></div>
          Producers : 
            {movieDetail.production_companies.map((i)=>(
              <p className='badge mt-1 bg-black'> {i.name}</p>
            ))}
          
          </div>
          

        </div>
      </div>
        
    </div>
  )
}
