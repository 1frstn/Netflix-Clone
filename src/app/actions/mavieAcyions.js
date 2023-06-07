import axios from "axios";
import { ActionTypes } from "../ActionTypes";

const options = {
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDcyNzY3N2UzY2NiNWU1NGFjY2FhNWVhOGEwZTU4NSIsInN1YiI6IjY0N2Q0ZmJkZTMyM2YzMDEwNjE1ZWRjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.B90oQgovHBL9W5TlJKpks1Rgc4gKGIFIsm4kpyUps0Y'
    }
  };

axios.defaults.baseURL = 'https://api.themoviedb.org/3'

export const getMovies= () => (dispatch) => {
    
    axios
    .get("/person/popular",options)
    .then((res) => dispatch({
        type:ActionTypes.SET_MOVIES,
        payload:res.data.results
    }))
};

export const getGenres = () => (dispatch) => {
  axios
  .get('/genre/movie/list',options)
  .then((res) => dispatch({
    type:ActionTypes.SET_GENRES,
    payload:res.data.genres
  }));
};


export const fetchByUrl = async (url) => {
  const res = await axios.get(url,options)

  return res.data;
}

/* function getMovies(){
    return async function(dispatch){
        dispatch({

        })
    }
} */