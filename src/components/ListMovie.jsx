
import { useEffect, useState } from "react"
import { fetchByUrl } from "../app/actions/mavieAcyions"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/sea-green';
import { baseImgUrl } from "./Hero";
import { Link } from "react-router-dom";


export default function ListMovie({genre}) {
    const [movies,setMovies] = useState([]);
    
    useEffect(()=>{
        fetchByUrl(`/discover/movie?with_genres=${genre.id}`)
        .then((res)=>setMovies(res.results));
    },[])
     
    return (
    <div className="bg-dark text-light p-4">
        <h1>{genre.name}</h1>
       <Splide options={{autoWidth:true,pagination:false,
                          gap:10   }}>
        {
            movies.map((movie)=>(
                <SplideSlide>
                  <Link to={`/movie/${movie.id}`}>
                  <img
                       className="film"  
                       src={`${baseImgUrl}${movie.poster_path}`} alt="" 
                    /> 
                  </Link>
                </SplideSlide>
            ))
        }
       </Splide>
    </div>
  )
}
