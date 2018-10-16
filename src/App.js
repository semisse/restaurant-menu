import React, { Component } from 'react'
import { Router } from 'react-router-dom'
import styled from 'styled-components'
import createHistory from 'history/createBrowserHistory'

import Menu from './components/Menu'

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 75rem;
  align-items: center;
  justify-self: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`
const Grid = styled.div`
  display: grid;
  width: 100%;
`

const history = createHistory()

class App extends Component {
  state = {
    data: [],
    step: history.location.pathname,
    required: false,
    disabled: true,
  }

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

  nextStep = (e) => {
    e.preventDefault()
    const noSlashes = history.location.pathname.replace(/\//g, '')
    const newPage = parseInt(noSlashes) + parseInt(1)

    if ((history.location.pathname !== '/4' && this.state.required === false)
        || (history.location.pathname !== '/5' && this.state.required === false)) {
      history.push('/' + newPage)
    }
  }

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
      <Wrapper>
        {console.log(this.state.step)}
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
      </Wrapper>
    )
  }
}

export default App
