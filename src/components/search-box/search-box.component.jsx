import { Fragment } from 'react';
import './search-box.styles.css';

const SearchBox = ({ onChangeHandler, className }) => {
	return (
		<Fragment>
			<input
				className={className}
				type='text'
				placeholder='Search Kittens'
				onChange={onChangeHandler}
			/>
		</Fragment>
	);
};

export default SearchBox;
