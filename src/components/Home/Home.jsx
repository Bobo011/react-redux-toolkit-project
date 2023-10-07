/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react';
import  {MovieListing} from '../../components/index'
import movieApi from '../../common/apis/movieApi'
import {APIKey} from '../../common/apis/MovieApiKey'
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/movieSlice';

const Home = () => {

const movieText = "Harry";
const dispatch = useDispatch();

useEffect(()=>{
  
  const fetchMovies = async () => {
const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)

.catch((err)=>{
  console.log(err);
})
   dispatch(addMovies(response.data)) 

  };
  fetchMovies()
},[]);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
}

export default Home