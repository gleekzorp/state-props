import React, { Component } from 'react';

import NavBar from './NavBar';
import Welcome from './welcome'
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      name: "Daniel"
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        {this.state.name}
        <Welcome name={this.state.name}/>
        <Welcome name={"Someone Else"}/>
      </div>
    );
  }
}

export default App;
