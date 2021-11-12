import React from 'react';
// import css for Card
import './card.styles.css';

/* 
Card is functional component because it does not need access to internal state or React LifeCycle methods

Gets everything through props passed down to it

Card component only deals with making cards from the data passed down to it.

*/

// how to pass props directly and de-constructed
const Card = ({ kitten: { name, username, email, id } }) => {
	// deconstructed props when just passing (props)
	//const { name, username, email } = props.kitten;
	return (
		<div className='card-container'>
			{/* map over card list data to make individual cards */}
			{/* Make sure prop passed is the same as prop name */}
			<img
				alt='kitten'
				src={`https://robohash.org/${id}?set=set4&size=150x150`}
			/>
			<h3> {name} </h3>
			<h4> {email} </h4>
		</div>
	);
};

export default Card;
