import React, { Component } from 'react';
import './App.css';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';
/*

- App is Class Component because app needs access to internal state and React LifeCycle methods

- state is placed here because the components beneath it need access to the state

- place state as high up to where only the components beneath it need to deal with it.

					**** App Tree ****

									App (state passed down to children)
						   /  		 \ 
					SearchBox   CardList 
													|
												Card

* Search box lifts up state when the even handleChange happens, and notifies App.
	- App adjusts and passes down the new state
	- CardList adjusts according to the new state


				
*/
class App extends Component {
	constructor() {
		super();
		this.state = {
			kittens: [], //state of data array
			searchField: '', //state of search array
		};
	}
	// --> LifeCycle method - When the component Mounts (renders) <--
	componentDidMount() {
		// fetch the data from the api link
		fetch('https://jsonplaceholder.typicode.com/users')
			// return the response in json format
			.then(res => res.json())
			// then data sets the state
			.then(data => this.setState({ kittens: data }));
	}

	// my own class method
	handleChange = e => {
		this.setState({ searchField: e.target.value });
	};

	render() {
		// add filter functionality after render as not to modify original state

		//deconstruct state fields instead of typing this.state.kittens or this.state.monsters constantly

		const { kittens, searchField } = this.state;
		// filter function - to LowerCase to avoid case sensitivity

		const filterKittens = kittens.filter(kitten =>
			kitten.name.toLowerCase().includes(searchField.toLowerCase())
		);

		return (
			<div>
				<h1> Kitten Rolodex </h1>
				<SearchBox
					placeholder='Search Kittens'
					handleChange={this.handleChange}
				/>
				{/* CardList component holds Cards component */}
				{/*  added filter functionality so CardList will update when there are changes */}
				<CardList kittens={filterKittens} />
			</div>
		);
	}
}

export default App;
