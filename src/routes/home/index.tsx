import './home.css';

export default function Home() {
	const movieList = [
		{
			'title': 'SpiderMan',
			'imageUrl': '',
			'description': '',
			'imdbId': '',
		},
		{
			'title': 'SpiderMan',
			'imageUrl': '',
			'description': '',
			'imdbId': '',
		},
		{
			'title': 'SpiderMan',
			'imageUrl': '',
			'description': '',
			'imdbId': '',
		},
		{
			'title': 'SpiderMan',
			'imageUrl': '',
			'description': '',
			'imdbId': '',
		},
		{
			'title': 'SpiderMan',
			'imageUrl': '',
			'description': '',
			'imdbId': '',
		},
		{
			'title': 'SpiderMan',
			'imageUrl': '',
			'description': '',
			'imdbId': '',
		}
	]
	const seriesList = [
		{
			'title': 'Avengers',
			'imageUrl': '',
			'description': '',
			'imdbId': '',
		},
		{
			'title': 'Avengers',
			'imageUrl': '',
			'description': '',
			'imdbId': '',
		},
		{
			'title': 'Avengers',
			'imageUrl': '',
			'description': '',
			'imdbId': '',
		},
		{
			'title': 'Avengers',
			'imageUrl': '',
			'description': '',
			'imdbId': '',
		},
		{
			'title': 'Avengers',
			'imageUrl': '',
			'description': '',
			'imdbId': '',
		},
		{
			'title': 'Avengers',
			'imageUrl': '',
			'description': '',
			'imdbId': '',
		}
	]
	return (
		<div className='home-body'>
			<div className='home-header'>
				<div className='home-header-left-side'>
					<p>Something on left</p>
				</div>
				<div className='home-header-right-side'>
					<p>This is search bar</p>
				</div>
			</div>
			<div className='home-carasoul'>
				<p>This is some sort of carasol</p>
			</div>
			<h2>Latest Movies</h2>
			<div className='movie-list'>
				{movieList.map(movie => (
					<div className='movie-card'>
						<p>Title: {movie.title}</p>		
					</div>	
				))}
			</div>
			<h2>Latest Series</h2>
			<div className='movie-list'>
				{seriesList.map(movie => (
					<div className='movie-card'>
						<p>Title: {movie.title}</p>		
					</div>	
				))}
			</div>
	
		</div>
	)
}
