import React from 'react';
//import CSS for Card List
import './card-list.styles.css';
import Card from '../card/card.component';

/* 

CardList is functional component because it does not need access to internal state or React LifeCycle methods

Gets everything through props passed down to it


CardList component only handles making a list of cards from the Card component and nothing else.
*/

const CardList = props => {
	return (
		<div className='card-list'>
			{/* map over data to get and display API data */}
			{props.kittens.map(kitten => (
				<Card key={kitten.id} kitten={kitten} />
			))}
		</div>
	);
};

export default CardList;
