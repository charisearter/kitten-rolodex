import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = ({ kittens, className }) => {
	return (
		<div className={className}>
			{kittens.map((kitty) => {
				return <Card key={kitty.id} kitty={kitty} />;
			})}
		</div>
	);
};

export default CardList;
