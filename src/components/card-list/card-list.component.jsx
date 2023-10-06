import { Component } from 'react';

class CardList extends Component {
	render() {
		const { kittens } = this.props;
		return (
			<div className='card-list container'>
				{kittens.map((kitty) => {
					return <h2 key={kitty.id}> {kitty.name} </h2>;
				})}
			</div>
		);
	}
}

export default CardList;
