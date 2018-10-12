import React, { Component } from 'react'
import Menu from './components/Menu'
// import data from './fe-tech-data.json'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      step: 0
    }
    this.update = this.update.bind(this)
  }

  componentDidMount(){
    const url =`https://api.myjson.com/bins/sf7fw`
    fetch(url)
    .then(response => response.json())
    .then(data => this.setState({ data }))
  }


  update(id, title){
    let data = [...this.state.data]
    let item = {
      ...data[id],
      selected: !data[id].selected
    }
    data[id] = item
    this.setState({data})
  }

  render() {
    return (
      <div className="App">
        <Menu data={this.state.data} update={this.update} />
      </div>
    );
  }
}

export default App;
