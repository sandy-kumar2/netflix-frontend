import React from 'react';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import { useSelector } from 'react-redux';

const MainContainer = () => {
  const movie = useSelector(store => store.movie?.nowPlayingMovies);
  const movies = useSelector(store=>store.movie);
  if(!movie) return;//early return in react

  const{overview, id, title} = movie[4];

  return (
    <div>
      <VideoTitle title={title} overview={overview} movieId={movies.id}/>
      <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer
