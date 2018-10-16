import React, { Component } from 'react'
import { withRouter, Route, Switch, Redirect } from 'react-router-dom'

import Horsdoeuvres from '../Horsdoeuvres'
import Soup from '../Soup'
import Fish from '../Fish'
import Salad from '../Salad'
import Maincourse from '../Maincourse'
import Desert from '../Desert'
import Confirmation from '../Confirmation'
import Map from '../Map'
import Navigation from '../Navigation'

class Menu extends Component {
  // Depending on the url, render components
  renderStep = (step) => {
    switch (step) {
      case '/1':
        return <Route path='/1' render={() =>
          <Soup
            data={this.props.data}
            update={this.props.update}
          />} />
      case '/2':
        return <Route path='/2' render={() =>
          <Fish
            data={this.props.data}
            update={this.props.update}
          />} />
      case '/3':
        return <Route path='/3' render={() =>
          <Salad
            data={this.props.data}
            update={this.props.update}
          />} />
      case '/4':
        return <Route path='/4' render={() =>
          <Maincourse
            data={this.props.data}
            required={this.props.required}
            update={this.props.update}
            handleRequired={this.props.handleRequired}
            pathname={this.props.history.location.pathname}
          />} />
      case '/5':
        return <Route path='/5' render={() =>
          <Desert
            data={this.props.data}
            update={this.props.update}
            handleRequired={this.props.handleRequired}
          />} />
      case '/6':
        return <Route path='/6' render={() =>
          <Confirmation
            data={this.props.data}
            update={this.props.update}
            handleRequired={this.props.handleRequired}
            pathname={this.props.history.location.pathname}
            step={this.props.step}
          />} />
      default:
        return <Route path='/0' render={() =>
          <Horsdoeuvres
            data={this.props.data}
            update={this.props.update}
          />} />
    }
  }

  // Check if there is at least one main course selected, if not
  // redirect users to Main Course section
  redirect = () => {
    console.log(this.props.step)
    if ((this.props.step === '/5' || this.props.step === '/6') && this.props.disabled === true) {
      return <Redirect to='/4' />
    }
  }
  render () {
    return (
      <div>
        <Map
          history={this.props.history}
          data={this.props.data}
          disabled={this.props.disabled}
        />
        {this.redirect()}
        <Switch>
          {this.renderStep(this.props.history.location.pathname)}
          <Route path='*' render={() => <Redirect to='/0' /> } />
        </Switch>
        <Navigation
          nextStep={this.props.nextStep}
          previousStep={this.props.previousStep}
          pathname={this.props.pathname}
          required={this.props.required}
        />
      </div>
    )
  }
}

export default withRouter(Menu)
