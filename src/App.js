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
				this.setState(() => {
					return { kittens };
				});
			});
	}
	render() {
		const { kittens } = this.state;
		return (
			<div className='App'>
				<h1>Hi</h1>
				<input
					className='search-box'
					type='text'
					placeholder='Search Kittens'
					onChange={(e) => {
						const searchField = e.target.value.toLocaleLowerCase();

						const filteredKittens = kittens.filter((kitty) => {
							return kitty.name.toLowerCase().includes(searchField);
            })
            
            this.setState(() => {
              return { kittens: filteredKittens }
            })
					}}
				/>
				{kittens.map((kitty) => {
					return <h2 key={kitty.id}> {kitty.name} </h2>;
				})}
			</div>
		);
	}
}

export default App;
