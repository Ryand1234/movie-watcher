import './home.css';

export default function Home() {
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
				<div className='movie-card'>
					<p>Here are some movie list</p>
				</div>
				<div className='movie-card'>
					<p>Here are some movie list</p>
				</div>
				<div className='movie-card'>
					<p>Here are some movie list</p>
				</div>
				<div className='movie-card'>
					<p>Here are some movie list</p>
				</div>
				<div className='movie-card'>
					<p>Here are some movie list</p>
				</div>
				<div className='movie-card'>
					<p>Here are some movie list</p>
				</div>
				<div className='movie-card'>
					<p>Here are some movie list</p>
				</div>
				<div className='movie-card'>
					<p>Here are some movie list</p>
				</div>
			</div>
		</div>
	)
}
