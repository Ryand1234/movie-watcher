import './watch.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Watch() {

	const { videoId } = useParams();
	const data = useParams();
	const [movieData, setMovieData] = useState({})
	const embedUrl = 'https://vidrc.xyz/embed/movie/' + videoId;
	useEffect(() => {
		console.log(data);
		let movieData = localStorage.getItem('current_movie');
		if(movieData !== undefined || movieData != null)
		{
			let testData = JSON.parse(movieData);
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
		</div>
	);
}
