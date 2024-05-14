import React, { useState } from 'react';
import './MovieCard.css'; // Import your CSS file for styling

interface MovieInterface {
	title: string;
	description: string;
	imageUrl: string;
	imdbId: string;
}

interface MovieCardProps {
  movie: MovieInterface;
}


function MovieCard({movie}: MovieCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };
  const url = "https://vidsrc.xyz/embed/movie/" + movie.imdbId;
  return (
    <div
      className={`movie-card ${isFlipped ? 'flipped' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flipper">
        <div className='front'>
		<img src={movie.imageUrl} alt={movie.title} className='movie-card-images'/>
		<div className='movie-card-title' style={{'display': isFlipped? 'none' : 'block'}}>{movie.title}</div>
	</div>
	<div className="back">
        	<div className='movie-card-back'>
			<div className="movie-card-title">{movie.title}</div>
			<div className="movie-card-description">{movie.description}</div>
			<div className="movie-card-play"><a href={url}>Play</a></div>
		</div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;

