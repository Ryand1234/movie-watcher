import './watch.css';
import { useParams } from 'react-router-dom';

export default function Watch() {
	 const { videoId } = useParams();
	const data = useParams();
	console.log(data);
	const embedUrl = 'https://vidsrc.xyz/embed/movie/' + videoId;
console.log(embedUrl);
	return (
		<div className="watch-body">
		      <iframe
        		title="Embedded Video"
		        width="560"
        		height="315"
		        src={embedUrl}
	        	frameBorder="0"
	        	allowFullScreen
		      ></iframe>
		</div>
	);
}
