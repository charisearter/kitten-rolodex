import { Component } from 'react';
import Header from './components/Header/header.component';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';
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

	// Search Functionality
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
				<Header className='header title' title='Kitten Rolodex' />
				<SearchBox onChangeHandler={onSearchChange} />
				<CardList className='card-list container' kittens={filteredKittens} />
			</div>
		);
	}
}

export default App;
