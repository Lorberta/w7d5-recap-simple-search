import React, { Component } from 'react';
import logo from '../logo.svg';
import CoolSearch from './CoolSearch'
import jsonStudents from '../students'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: ''
    }
  }
  handleSearch = (newSearch) => {
    this.setState({
      search: newSearch
    })
  }
  render() {
    return (
      <div className="App">
        <h1>
          ReactStudents
        </h1>
        <CoolSearch
          search={this.state.search}
          onSearch={this.handleSearch}
        />
        <ul>
          {jsonStudents
            .filter(name => name.toUpperCase().includes(this.state.search.toUpperCase()))
            .map(name => (
              <li key={name}>{name}</li>
            ))}
        </ul>
      </div>
    );
  }
}

export default App;
