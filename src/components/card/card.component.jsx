import './card.styles.css';

const Card = ({ kitty: { name, email, id } }) => {
	return (
		<div className='card-container'>
			<div className='card'>
				<img
					src={`https://robohash.org/${id}?set=set4&size=180x180`}
					alt={`${name} Kitty`}
				/>
				<div className='card-content'>
					<h2>{name}</h2>
					<p>{email}</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
