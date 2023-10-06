import { Component, Fragment } from 'react';

class SearchBox extends Component {
	render() {
		const { onChangeHandler, className } = this.props;
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
	}
}

export default SearchBox;
