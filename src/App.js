import React, { Component } from 'react'
import Menu from './components/Menu'
import data from './fe-tech-data.json'
import './App.css'

class App extends Component {
  constructor(){
    super();
    this.state = {
      data
    }
  }

  render() {
    return (
      <div className="App">
        <Menu data={this.state.data} />
      </div>
    );
  }
}

export default App;
