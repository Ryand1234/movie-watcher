import './watch.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MovieCard from '../movie-card/movieCard';

export default function Watch() {

	const { videoId } = useParams();
	const data = useParams();
	const [movieData, setMovieData] = useState({});
	const [movieList, setMovieList] = useState([]);
	const embedUrl = 'https://vidrc.xyz/embed/movie/' + videoId;
	useEffect(() => {
		console.log(data);
		let movieData = localStorage.getItem('current_movie');
		let allGenre = [];
		if(movieData !== undefined || movieData != null)
		{
			let testData = JSON.parse(movieData);
			console.log(testData, movieData);
			if(testData.imdbId !== videoId)
			{
				movieData = null;
			}
		}
		if(movieData === undefined || movieData === null)
		{

			let url = ""
			if(videoId.startsWith('tt')) {
				url = `https://streaming-availability.p.rapidapi.com/shows/${videoId}?series_granularity=episode&output_language=en`
			} else {
				url = `https://streaming-availability.p.rapidapi.com/shows/search/title?country=us&title=${videoId}&series_granularity=show&output_language=en`;
			}
			const options = {
				  method: 'GET',
				  headers: {
					    'X-RapidAPI-Key': '17a65cb54dmshca80a66dfb2a456p12de5djsne82fc68f903b',
					    'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
					  }
			};
	
			try {
				(async() => {
					const response = await fetch(url, options);
					const result = await response.json();
					const imageUrl = result.imageSet ? result.imageSet.verticalPoster.w600 : 'https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg';

        				setMovieData({
				            'title': result.title || 'No Title',
				            'description': result.overview || 'No Description',
				            'imageUrl': imageUrl,
				            'imdbId': result.imdbId || videoId
				        });
					console.log(movieData)
					localStorage.setItem('current_movie', JSON.stringify({
				            'title': result.title || 'No Title',
				            'description': result.overview || 'No Description',
				            'imageUrl': imageUrl,
				            'imdbId': result.imdbId || videoId
				        }));
					console.log(result.genres)
					result.genres.forEach(genre => {
						allGenre.push(genre.id);
					})
					console.log(allGenre);
				})();
			} catch (error) {
				console.error(error);
				setMovieData({
					'title': 'No Title',
					'description': 'No Description',
					'imageUrl': 'https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg',
					'imdbId': videoId
				})
			}
		} else {
			setMovieData(JSON.parse(movieData));
			console.log(movieData);
		}
		let allRelatedMovies = []
		if(allGenre.length == 0)
		{
			console.log("NO DATA");
			allGenre.push('action');
		}
		console.log(allGenre);
		for(let gen of allGenre) {
			let relatedMovies = localStorage.getItem(`${gen}`);
			console.log(gen);
			if(relatedMovies === null || relatedMovies === undefined) {
				relatedMovies = [];
				const url = `https://streaming-availability.p.rapidapi.com/shows/search/filters?country=us&series_granularity=show&genres=${gen}&order_direction=desc&order_by=original_title&genres_relation=and&output_language=en`;
				const options = {
					  method: 'GET',
					  headers: {
					    'X-RapidAPI-Key': '17a65cb54dmshca80a66dfb2a456p12de5djsne82fc68f903b',
					    'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
					  }
				};

				try {
					(async() => {
						const response = await fetch(url, options);
						const result = await response.json();
						console.log(result);
						result.shows.forEach(result => {
							const imageUrl = result.imageSet ? result.imageSet.verticalPoster.w600 : 'https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg';
		        				relatedMovies.push({
						            'title': result.title || 'No Title',
						            'description': result.overview || 'No Description',
						            'imageUrl': imageUrl,
						            'imdbId': result.imdbId || videoId
				        		});
						})
						localStorage.setItem(`${gen}`, JSON.stringify({"data": relatedMovies}));
					})()
				} catch (error) {
					console.error(error);
				}
			} else {
				let data = JSON.parse(relatedMovies);
				console.log(data);
				data.data.forEach((movie:any) => {
					allRelatedMovies.push({
						"imdbId": movie.id,
						"title": movie.titleText,
						"description": movie.description,
						"imageUrl": movie.imageUrl
					})
				})
			}
		}
		setMovieList(allRelatedMovies);
		console.log(movieList);
	}, [data, videoId]);
	
	return (
		<div className="watch-body">
		      <iframe
			className="watch-player"
        		title="Embedded Video"
		        height="315"
			src={embedUrl}
	        	frameBorder="0"
	        	allowFullScreen
		      ></iframe>
			<div className="watch-movie-desc">
				<img src={movieData.imageUrl} alt={movieData.title} className='movie-card-images'/>
				<div className="watch-movie-info">
					<div className="watch-movie-title">
						<p>{movieData.title}</p>
					</div>
					<div className="watch-movie-description">
						<p>{movieData.description}</p>
					</div>
				</div>
			</div>
			<div className="watch-movie-list">
				<h2>Similar Movies</h2>
				<div className='movie-list'>
					{movieList.map(movie => (
						<MovieCard movie={movie} />
					))}
				</div>
			</div>
		</div>
	);
}
