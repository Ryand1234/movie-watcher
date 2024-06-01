import { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import './header.css';

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

	const handleHome = (e) => {
		e.preventDefault();
		navigate("/");
	};

	return (
		<div className='home-header'>
			<div onClick={handleHome} className='home-header-left-side'>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 77.7 89.7">
    <path d="M2 23.6L38.9 2.3l36.9 21.3v42.6L38.9 87.4 2 66.2V23.6zm46.1-16L11.2 28.9v32l-9.3 5.4m27.7 15.8l36.9-21.3v-32l9.3-5.4m-9.3 5.5L48.1 18.3 11.2 39.6m0 21.3l18.4 10.6 36.9-21.3m0-10.6L48.1 28.9 11.2 50.2m0 0l18.4 10.6 36.9-21.3m-9.2 5.4L38.9 34.2m0 21.3L20.6 45m9 5.2l18.5-10.7" fill="white" stroke="#333" stroke-width="4" stroke-miterlimit="10"/>
</svg>
				<span>home</span>
			</div>
			<div className='home-header-right-side'>
				<form onSubmit={handleSubmit}>
			        	<input
					  className="search-bar"
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
