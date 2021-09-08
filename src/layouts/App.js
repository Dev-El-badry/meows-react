import React, { Component } from "react";
import SearchBox from "../partials/SearchBox";
import CardList from "../components/cards/CardList";
import './App.css';

export class App extends Component {
  constructor() {
    super();

    this.state = {
      searchField: '',
      cats: []
    }
  }

  componentDidMount() {
    this.fetchRobots();
  }

  fetchRobots() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({cats: users}));
  }

  onSearchChange = (e) => {
    this.setState({searchField: e.target.value});
  }

  render() {
    const {cats, searchField} = this.state;
    const filterCats = cats.filter(cat => {
      return cat.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      cats.length ? <div className='tc'>
        <h1 className='f1'>Meows 😻❤️</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList cats={filterCats} />
      </div> : 'is loading ...'
    );
  }
}

export default App;