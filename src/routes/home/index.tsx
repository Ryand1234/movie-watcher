import './home.css';
import { useState, useEffect } from 'react';


interface TopSevenData {
    data: any; // You can replace 'any' with the actual type of your data
}

export default function Home() {
	const [movieList, setMovieList] = useState([
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
	])
	const [serieslist, setSeriesList] = useState([
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
	])
	useEffect(() => {
		(async() => {
		let top_seven = localStorage.getItem("movies")
		console.log(top_seven);
		if(top_seven == null) {
			const url = 'https://imdb188.p.rapidapi.com/api/v1/getWeekTop10';
			const options = {
			  method: 'GET',
			  headers: {
			    'X-RapidAPI-Key': '17a65cb54dmshca80a66dfb2a456p12de5djsne82fc68f903b',
			    'X-RapidAPI-Host': 'imdb188.p.rapidapi.com'
			  }
			};

			try {
				const response = await fetch(url, options);
				const result = await response.json();
				console.log(result);
				localStorage.setItem("movies", result);
			} catch (error) {
				console.error(error);
			}
		} else {
			console.log(top_seven);
		}
		let top_seven_parsed: TopSevenData | null= JSON.parse(top_seven!);
		let top_seven_data;
		if (top_seven_parsed !== null && typeof top_seven_parsed !== 'undefined') {
    // Now TypeScript should recognize top_seven_parsed as an object with a 'data' property
    top_seven_data = top_seven_parsed.data;
    console.log(top_seven_data);
} else {
    console.error("top_seven_parsed is null or undefined");
}
		console.log(top_seven);
		let movies: any = [];
		let series: any = [];
		let carasoul: any = [];
		top_seven_data.map((movie:any) => {
			const curData = {
					"imdbId": movie.id,
					"title": movie.titleText.text,
					"description": movie.plot.plotText.plainText,
					"imageUrl": movie.primaryImage.imageUrl
				}
			console.log(curData);
			if(movie.titleType.id == "movie") {
				movies.push(curData);
			} else {
				series.push(curData);
			}
		})
		setMovieList(movies);
		setSeriesList(series);
		})();
	}, []);	

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
						<img src={movie.imageUrl} className='movie-card-images'/>
						<p>{movie.title}</p>
					</div>	
				))}
			</div>
			<h2>Latest Series</h2>
			<div className='movie-list'>
				{serieslist.map(movie => (
					<div className='movie-card'>
						<img src={movie.imageUrl} className='movie-card-images' />
						<p>{movie.title}</p>
					</div>	
				))}
			</div>
	
		</div>
	)
}
