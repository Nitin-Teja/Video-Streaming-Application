import React, { useEffect, useState } from 'react';
import axios from './axios';
import requests from "./requests";
import "./Banner.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";


function Banner() {
  const [movie,setMovie] = useState([]);
  const [trailerUrl,setTrailerUrl]  = useState(""); 
    
  useEffect(() => {
  
    async function fetchData(){
        const request = await axios.get(requests.fetchTrending);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length - 1)
          ]
        );
        return request;
     }
     fetchData();
  },[]);

  console.log(movie);
  
  const player = document.getElementById("myPlayer");
  const playButton = document.getElementById("playButton");

  const opts = {
    height: "230",
    width: "100%",
    playerVars: {
      autoplay: 1,
    }
  };

  const handleClick = (movie) => {
    if(trailerUrl){
      setTrailerUrl('');
    } else{
      movieTrailer(movie?.original_title || movie?.name || "")
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get('v'));
      })
      .catch((error) => console.log(error));
    }
  }

  function truncate(str,n){
    return str?.length > n ? str.substr(0,n-1) + "..." : str;
  }
  
  return (
    <header className="banner"
    style={{
      backgroundSize: "cover",
      backgroundImage: `url(
        "https://image.tmdb.org/t/p/original/${movie?.poster_path}"
      )`,
      backgroundPosition: "center center",
    }}
    > {/* <<< Background Image */} 
   
    <div className="banner__contents">
    <h1 className="banner__title">
      {movie?.title || movie?.name || movie?.original_name}
    </h1>
    <div className="banner__buttons">
    <button 
    className="banner__button"
    onClick={() => handleClick(movie)}
    >Play</button>
    <button className="banner__button">My List</button>
    <div>
      <h1 className="banner__description">
        {truncate(movie?.overview,150)}
      </h1>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
    </div>
    </div>
    </div>
    <div className="banner--fadeBottom" />
    </header>
  )
}

export default Banner