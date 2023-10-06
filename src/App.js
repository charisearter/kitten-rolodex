import { Component } from 'react';
import './App.css';

class App extends Component {
	constructor() {
		super();

		this.state = {
			kittens: [],
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((res) => res.json())
			.then((kittens) => {
				this.setState(
					() => {
						return { kittens };
					},
					() => {
						console.log(this.state);
					}
				);
			});
	}
	render() {
		return (
			<div className='App'>
				<h1>Hi</h1>
			</div>
		);
	}
}

export default App;
