import { useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';

export default function Header() {
	const [searchText, setSearchText] = useState('');

	const navigate = useNavigate();
	const handleInputChange = (event) => {
	    setSearchText(event.target.value);
	  };

	const handleSubmit = (event) => {
	    event.preventDefault();
	    // Navigate to a new URL with the search text appended as a query parameter
	    navigate(`/watch/${searchText}`);
	};

	return (
		<div className='home-header'>
			<div className='home-header-left-side'>
				<p>Something on left</p>
			</div>
			<div className='home-header-right-side'>
				<form onSubmit={handleSubmit}>
			        	<input
				          type="text"
				          value={searchText}
				          onChange={handleInputChange}
					  placeholder="Enter your search query"
				      />
			        	<button type="submit">Search</button>
				</form>
			</div>
		</div>
	)
}
