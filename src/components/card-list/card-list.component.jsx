import { Component } from 'react';
import Card from '../card/card.component';
import './card-list.styles.css';

class CardList extends Component {
	render() {
		const { kittens, className } = this.props;
		return (
			<div className={className}>
				{kittens.map((kitty) => {
					return <Card key={kitty.id} kitty={kitty} />;
				})}
			</div>
		);
	}
}

export default CardList;
