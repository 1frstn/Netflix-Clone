import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { getMovies,getGenres } from '../app/actions/mavieAcyions';
import Hero from '../components/Hero';
import ListMovie from '../components/ListMovie';

export default function MainPage() {
    const state = useSelector((store)=>store.movieReducer)
    const dispatch = useDispatch();

    useEffect(()=>{
      
        dispatch(getMovies());

        dispatch(getGenres())
    },[]);

  return (
    <div>
        <Hero />
        {state.genres.map((genre) => (
           <ListMovie key={genre.id} genre={genre}/>
           ))}
    </div>
  )
}
