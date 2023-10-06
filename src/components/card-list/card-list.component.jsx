import { Component } from 'react';

class CardList extends Component {
	render() {
		const { kittens, className } = this.props;
		return (
			<div className={className}>
				{kittens.map((kitty) => {
					return <h2 key={kitty.id}> {kitty.name} </h2>;
				})}
			</div>
		);
	}
}

export default CardList;
