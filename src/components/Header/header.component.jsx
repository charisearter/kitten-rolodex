import './header.styles.css';

const Header = ({ title, className }) => {
	return (
		<header>
			<h1 className={className}> {title} </h1>
		</header>
	);
};

export default Header;
