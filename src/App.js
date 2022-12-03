import React, { useState,useEffect } from 'react'

//components
import MovieCard from './MovieCard';
import './App.css';
import SearchIcon from './search.svg'
//7e4badd3 apikey

const API_URL='http://www.omdbapi.com?apikey=7e4badd3';

const movie1={
  "Title": "Spiderman in Cannes",
  "Year": "2016",
  "imdbID": "tt5978586",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BZDlmMGQwYmItNTNmOS00OTNkLTkxNTYtNDM3ZWVlMWUyZDIzXkEyXkFqcGdeQXVyMTA5Mzk5Mw@@._V1_SX300.jpg"
}

function App() {

const [movies, setmovies] = useState([])
const [searchTerm, setsearchTerm] = useState('')

//fetch data function
const searchMovies=async(title)=>{
const response= await fetch(`${API_URL}&s=${title}`);
const data= await response.json();

setmovies(data.Search);
}

//fetch data hook
  useEffect(() => {
    searchMovies('Spiderman');
  }, [ ])
  
  return (
    <div className='app'>
      <h1>MovieLand</h1>

      <div className='search'>
        <input
        placeholder='Search movies'
        value={searchTerm}
        onChange={(e)=>setsearchTerm(e.target.value)}
        />
       <img
       src={SearchIcon}
       alt='search'
       onClick={()=> searchMovies(searchTerm)}
       />
      </div>

{/* //container */}
{movies?.length>0
   ?(
    <div className='container'>
      {
        movies.map((movie)=>(
          <MovieCard movie={movie}/>
        ))
      }
       </div>
  ):(
    <div className='empty'>
      <h2>No movies found</h2>
    </div>
  )

}
       

    </div>
  );
}

export default App;
