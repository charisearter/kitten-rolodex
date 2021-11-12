import React from 'react';
import './search-box.styles.css';

/* 
Search is functional component because it does not need access to internal state or React LifeCycle methods

Gets everything through props passed down to it

Search component only handles the search functionality using the data passed in from the searchField

placeholder, handleChange destructured to make more dynamic and allow it to be a reusable chunk of code


Search doesn't have state because, the Search component does not need it.
  - Search doesn't change when a user searches, the CardList component does.

  - CardList is the child of the class component App
  - App has the state and has access to lifecycle methods
*/

const SearchBox = ({ placeholder, handleChange }) => {
	return (
		<div className='search'>
			<input type='search' placeholder={placeholder} onChange={handleChange} />
		</div>
	);
};

export default SearchBox;
