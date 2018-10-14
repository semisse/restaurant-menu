import React, { Component } from 'react'
import { withRouter, Route, Switch, Redirect } from 'react-router-dom'

import Horsdoeuvres from '../Horsdoeuvres'
import Soup from '../Soup'
import Fish from '../Fish'
import Salad from '../Salad'
import Maincourse from '../Maincourse'
import Desert from '../Desert'
import Confirmation from '../Confirmation'
import Pager from '../Pager'

class Menu extends Component {
  renderStep (step) {
    switch (step) {
      case '/1':
        return <Route path='/1' render={() => <Soup data={this.props.data} update={this.props.update} />} />
      case '/2':
        return <Route path='/2' render={() => <Fish data={this.props.data} update={this.props.update} />} />
      case '/3':
        return <Route path='/3' render={() => <Salad data={this.props.data} update={this.props.update} />} />
      case '/4':
        return <Route path='/4' render={() => <Maincourse data={this.props.data} required={this.props.required} update={this.props.update} handleRequired={this.props.handleRequired} pathname={this.props.history.location.pathname} />} />
      case '/5':
        return <Route path='/5' render={() => <Desert data={this.props.data} update={this.props.update} handleRequired={this.props.handleRequired} />} />
      case '/6':
        return <Route path='/6' render={() => <Confirmation data={this.props.data} update={this.props.update} handleRequired={this.props.handleRequired} />} />
      default:
        return <Route path='/0' render={() => <Horsdoeuvres data={this.props.data} update={this.props.update} />} />
    }
  }
  render () {
    return (
      <div>
        <Pager history={this.props.history} data={this.props.data} disabled={this.props.disabled} />
        <Switch>
          {this.renderStep(this.props.history.location.pathname)}
          <Route path='*' render={() => <Redirect to='/0' /> } />
        </Switch>
      </div>
    )
  }
}

export default withRouter(Menu)
