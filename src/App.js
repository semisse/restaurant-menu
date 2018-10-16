import React, { Component } from 'react'
import { Router } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import Menu from './components/Menu'
import {
  BodyWrapper,
  Grid } from './styles/global'

const history = createHistory()

class App extends Component {
  state = {
    data: [],
    step: '',
    required: false,
    disabled: true,
  }

  // Fetch data and listen the history changes
  componentDidMount () {
    const url = `https://api.myjson.com/bins/sf7fw`
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ data }))

    history.listen(location => {
      this.setState({
        step: location.pathname
      })
    })
  }

  // Next step button with validation to prevent going
  // to confirmation without selecting one main course
  nextStep = (e) => {
    e.preventDefault()
    const noSlashes = history.location.pathname.replace(/\//g, '')
    const newPage = parseInt(noSlashes) + parseInt(1)

    if ((history.location.pathname !== '/4' && this.state.required === false)
        || (history.location.pathname !== '/5' && this.state.required === false)) {
      history.push('/' + newPage)
    }
  }

  // Previous step
  previousStep = (e) => {
    e.preventDefault()
    const noSlashes = history.location.pathname.replace(/\//g, '')
    const newPage = parseInt(noSlashes) - parseInt(1)
    if (noSlashes > 0) {
      history.push('/' + newPage)
    }
    this.setState({
      required: false
    })
  }

  // When a course is selected
  update = (id) => {
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
      // if the user is on the maincourse page and has selected one item
      // we set required and disabled to false and the next pages are available
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

  // Alert message to show on the Main Course page if the user
  // has not selected one
  handleRequired = () => {
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
      <BodyWrapper>
        <Grid>
          <Router history={history}>
            <Menu
              data={this.state.data}
              step={this.state.step}
              required={this.state.required}
              handleRequired={this.handleRequired}
              disabled={this.state.disabled}
              update={this.update}
              pathname={history.location.pathname}
              previousStep={this.previousStep}
              nextStep={this.nextStep}
            />
          </Router>
        </Grid>
      </BodyWrapper>
    )
  }
}

export default App
