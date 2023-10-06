import { Component } from 'react';
import './header.styles.css';

class Header extends Component {
	render() {
		const { title, className } = this.props;
		return (
			<header>
				<h1 className={className}> {title} </h1>
			</header>
		);
	}
}

export default Header;
