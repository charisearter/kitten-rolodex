import { Component, Fragment } from 'react';

class SearchBox extends Component {
	render() {
		const { onChangeHandler } = this.props;
		return (
			<Fragment>
				<input
					className='search-box'
					type='text'
					placeholder='Search Kittens'
					onChange={onChangeHandler}
				/>
			</Fragment>
		);
	}
}

export default SearchBox;
