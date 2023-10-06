import { useState, useEffect } from 'react';
import Header from './components/Header/header.component';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';
import './App.css';

const App = () => {
	const [kittens, setKittens] = useState([]); // initial data
	const [searchField, setSearchField] = useState(''); // for searches
	const [filteredKittens, setFilteredKittens] = useState(kittens); // filtered data

	useEffect(() => {
		console.log('runs first time mounted');
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((res) => res.json())
			.then((kittens) => setKittens(kittens));
	}, []);

	useEffect(() => {
		console.log('filtered array change');
		const newFilteredKittens = () =>
			kittens.filter((kitty) => {
				return kitty.name.toLowerCase().includes(searchField);
			});
		setFilteredKittens(newFilteredKittens);
	}, [kittens, searchField]);

	// Search Functionality
	const onSearchChange = (e) => {
		const searchFieldString = e.target.value.toLowerCase();
		setSearchField(searchFieldString);
	};

	return (
		<div className='App'>
			<Header className='app-title' title='Kitten Rolodex' />
			<SearchBox className='search-box' onChangeHandler={onSearchChange} />
			<CardList className='card-list container' kittens={filteredKittens} />
		</div>
	);
};

export default App;
