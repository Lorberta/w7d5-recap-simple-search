import React, { Component } from 'react';
import logo from '../logo.svg';
import CoolSearch from './CoolSearch'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          <img src={logo} alt="Logo" style={{height: 50}}/>
          ReactStudents
        </h1>
        <CoolSearch />
      </div>
    );
  }
}

export default App;
