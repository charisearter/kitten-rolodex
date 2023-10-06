import { Component } from 'react';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
	constructor() {
		super();

		this.state = {
			kittens: [],
			searchField: '',
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

	onSearchChange = (e) => {
		const searchField = e.target.value.toLocaleLowerCase();

		this.setState(() => {
			return { searchField };
		});
	};

	render() {
		const { kittens, searchField } = this.state;
		const { onSearchChange } = this;

		const filteredKittens = kittens.filter((kitty) => {
			return kitty.name.toLowerCase().includes(searchField);
		});
		return (
			<div className='App'>
        <h1>Hi</h1>
        <SearchBox onChangeHandler={onSearchChange} />
	
				{filteredKittens.map((kitty) => {
					return <h2 key={kitty.id}> {kitty.name} </h2>;
				})}
			</div>
		);
	}
}

export default App;
