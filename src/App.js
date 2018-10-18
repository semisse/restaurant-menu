import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Router } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import Menu from './components/Menu'
import { BodyWrapper } from './styles/global'

const history = createHistory()

class App extends Component {
  state = {
    data: [],
    step: '',
    required: true,
    loading: true
  }

  // Fetch data and listen the history changes
  componentDidMount () {
    const url = `https://api.myjson.com/bins/sf7fw`
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ data, loading: false }))

    this.setState({
      step: history.location.pathname
    })

    history.listen(location => {
      this.setState({
        step: location.pathname
      })
    })
  }

  // Check if there is any selected items in Main Course page
  isMainCourseSelected = () => {
    const MainCourse = this.state.data && this.state.data.map(item => ({
      ...item,
      courseType: item.courseType.filter(x => x === 4) }))
      .filter(x => x.courseType.length > 0 && x.selected === true )
    return MainCourse
  }

  // Next step button with validation to prevent going
  // to confirmation without selecting one main course
  nextStep = (e) => {
    e.preventDefault()
    const noSlashes = history.location.pathname.replace(/\//g, '')
    const newPage = parseInt(noSlashes) + parseInt(1)
    history.push('/' + newPage)
  }

  // Previous step
  previousStep = (e) => {
    e.preventDefault()
    const noSlashes = history.location.pathname.replace(/\//g, '')
    const newPage = parseInt(noSlashes) - parseInt(1)
    return noSlashes > 0 && history.push('/' + newPage)
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
      // if the user is on the Main Course page and has selected one item
      // we set required to false and the next pages are available
      if(history.location.pathname === '/4' && this.isMainCourseSelected().length > 0) {
        this.setState({
          required: false
        })
      } else if (history.location.pathname === '/4' && this.isMainCourseSelected().length === 0) {
        this.setState({
          required: true
        })
      }
    })
  }

  // Alert message to show on the Main Course page if the user
  // has not selected one
  handleRequired = () => {
    if (history.location.pathname === '/4' && this.isMainCourseSelected().length === 0) {
      this.setState({
        required: true
      })
    }
  }
  render () {
    return (
      <BodyWrapper>
        <Router history={history}>
          <Menu
            data={this.state.data}
            step={this.state.step}
            required={this.state.required}
            handleRequired={this.handleRequired}
            update={this.update}
            pathname={history.location.pathname}
            previousStep={this.previousStep}
            nextStep={this.nextStep}
            loading={this.state.loading}
          />
        </Router>
      </BodyWrapper>
    )
  }
}

App.protoTypes = {
  step: PropTypes.string,
  history: PropTypes.object,
  data: PropTypes.array,
  nextStep: PropTypes.func,
  previousStep: PropTypes.func,
  pathname: PropTypes.string,
  required: PropTypes.bool,
  update: PropTypes.func,
  url: PropTypes.string,
  loading: PropTypes.bool
}

export default App
