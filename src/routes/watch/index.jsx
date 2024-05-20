import './watch.css';
import Header from '../header/index';
import { useParams } from 'react-router-dom';
export default function Watch() {
	 const { videoId } = useParams();
	const data = useParams();
	console.log(data);
	const embedUrl = 'https://vidrc.xyz/embed/movie/' + videoId;
	let movieData = localStorage.getItem('current_movie');
	if(movieData == undefined || movieData == null)
	{
		alert('no data for movie');
		movieData = {
			'title': 'no data'
		}
	} else {
		movieData = JSON.parse(movieData);
		console.log(movieData);
	}
	
	return (
		<div className="watch-body">
			<Header />
		      <iframe
			className="watch-player"
        		title="Embedded Video"
		        height="315"
			src={embedUrl}
	        	frameBorder="0"
	        	allowFullScreen
		      ></iframe>
			<img src={movieData.imageUrl} alt={movieData.title} className='movie-card-images'/>

			<div className="watch-movie-title">
				<p>{movieData.title}</p>
			</div>
			<div className="watch-movie-description">
				<p>{movieData.description}</p>
			</div>
		</div>
	);
}
