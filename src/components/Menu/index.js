import React, { Component } from 'react'
import { withRouter, Route, Switch, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import Confirmation from '../Confirmation'
import Map from '../Map'
import Navigation from '../Navigation'
import Section from '../Section'

class Menu extends Component {
  // Depending on the url, render components
  renderStep = (step) => {
    switch (step) {
      case '/1':
        return <Route path='/1' render={() =>
          <Section
            data={this.props.data}
            required={this.props.required}
            update={this.props.update}
            handleRequired={this.props.handleRequired}
            pathname={this.props.history.location.pathname}
            loading={this.props.loading}
            step={this.props.step}
            category={1}
          />} />
      case '/2':
        return <Route path='/2' render={() =>
          <Section
            data={this.props.data}
            required={this.props.required}
            update={this.props.update}
            handleRequired={this.props.handleRequired}
            pathname={this.props.history.location.pathname}
            loading={this.props.loading}
            step={this.props.step}
            category={2}
          />} />
      case '/3':
        return <Route path='/3' render={() =>
          <Section
            data={this.props.data}
            required={this.props.required}
            update={this.props.update}
            handleRequired={this.props.handleRequired}
            pathname={this.props.history.location.pathname}
            loading={this.props.loading}
            step={this.props.step}
            category={3}
          />} />
      case '/4':
        return <Route path='/4' render={() =>
          <Section
            data={this.props.data}
            required={this.props.required}
            update={this.props.update}
            handleRequired={this.props.handleRequired}
            pathname={this.props.history.location.pathname}
            loading={this.props.loading}
            step={this.props.step}
            category={4}
          />} />
      case '/5':
        return <Route path='/5' render={() =>
          <Section
            data={this.props.data}
            update={this.props.update}
            handleRequired={this.props.handleRequired}
            loading={this.props.loading}
            step={this.props.step}
            category={5}
          />} />
      case '/6':
        return <Route path='/6' render={() =>
          <Confirmation
            data={this.props.data}
            update={this.props.update}
            handleRequired={this.props.handleRequired}
            pathname={this.props.history.location.pathname}
            step={this.props.step}
            loading={this.props.loading}
          />} />
      default:
        return <Route path='/0' render={() =>
          <Section
            data={this.props.data}
            required={this.props.required}
            update={this.props.update}
            handleRequired={this.props.handleRequired}
            pathname={this.props.history.location.pathname}
            loading={this.props.loading}
            step={this.props.step}
            category={0}
          />}
        />
    }
  }

  // Check if there is at least one main course selected, if not
  // redirect users to Main Course section
  redirect = () => {
    if ((this.props.step === '/5' || this.props.step === '/6') && this.props.required) {
      return <Redirect to='/4' />
    }
  }
  render () {
    return (
      <div>
        <Map
          history={this.props.history}
          data={this.props.data}
          required={this.props.required}
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

Menu.propTypes = {
  step: PropTypes.string,
  history: PropTypes.object,
  data: PropTypes.array,
  nextStep: PropTypes.func,
  previousStep: PropTypes.func,
  pathname: PropTypes.string,
  required: PropTypes.bool,
  update: PropTypes.func
}

export default withRouter(Menu)
