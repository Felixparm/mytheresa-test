import React from 'react';
import './MoviePoster.scss';

interface MoviePosterProps {
  url: string;
  alt: string;
}

const MoviePoster: React.FC<MoviePosterProps> = ({ url, alt }) => {
  return (
    <div className="movie-poster">
      <img src={url} alt={alt} />
    </div>
  );
};

export default MoviePoster;