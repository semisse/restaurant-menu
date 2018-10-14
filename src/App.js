import React, { Component } from 'react'
import { Router } from 'react-router-dom'
import styled from 'styled-components'
import createHistory from 'history/createBrowserHistory'

import Menu from './components/Menu'

const Grid = styled.div`
  display: grid;
`

const history = createHistory()

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      step: 0,
      required: false,
      disabled: true
    }
    this.nextStep = this.nextStep.bind(this)
    this.previousStep = this.previousStep.bind(this)
    this.update = this.update.bind(this)
    this.handleRequired = this.handleRequired.bind(this)
  }

  componentDidMount () {
    const url = `https://api.myjson.com/bins/sf7fw`
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ data }))
  }

  nextStep () {
    const noSlashes = history.location.pathname.replace(/\//g, '')
    const newPage = parseInt(noSlashes) + parseInt(1)

    if (noSlashes <= 5 && this.state.required === false) {
      history.push('/' + newPage)
    }
  }

  previousStep () {
    const noSlashes = history.location.pathname.replace(/\//g, '')
    const newPage = parseInt(noSlashes) - parseInt(1)
    if (noSlashes > 0) {
      history.push('/' + newPage)
    }
    this.setState({
      required: false
    })
  }

  update (id) {
    let data = [...this.state.data]
    let item = {
      ...data[id],
      selected: !data[id].selected
    }
    data[id] = item

    this.setState({
      data,
    }, () => {
      const MainCourse = this.state.data && this.state.data.map(item => ({
        ...item,
        courseType: item.courseType.filter(x => x === 4) }))
        .filter(x => x.courseType.length > 0 && x.selected === true )
        
      if(history.location.pathname === '/4' && MainCourse.length > 0) {
        this.setState({
          required: false,
          disabled: false
        })
      } else if (history.location.pathname === '/4' && MainCourse.length === 0) {
        this.setState({
          required: true,
          disabled: true
        })
      }
    })
  }

  handleRequired (){
    const MainCourse = this.state.data && this.state.data.map(item => ({
      ...item,
      courseType: item.courseType.filter(x => x === 4) }))
      .filter(x => x.courseType.length > 0 && x.selected === true )

    if (history.location.pathname === '/4' && MainCourse.length === 0) {
      this.setState({
        required: true
      })
    }
  }

  render () {
    return (
      <div>
        <Grid>
          <Router history={history}>
            <div>
              <button onClick={this.previousStep}>Previous</button>
              <button onClick={this.nextStep}>Next</button>
              <Menu data={this.state.data} required={this.state.required} handleRequired={this.handleRequired} disabled={this.state.disabled} update={this.update} />
            </div>
          </Router>
          <div>
            <button onClick={this.previousStep}>Previous</button>
            <button onClick={this.nextStep}>Next</button>
          </div>
        </Grid>
      </div>
    )
  }
}

export default App
