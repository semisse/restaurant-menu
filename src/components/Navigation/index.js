import React, { Component } from 'react'
import { Button } from '../../styles/global'

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <Button onClick={e => this.props.previousStep(e)} className={'previous'}>Previous</Button>
        {this.props.pathname === '/6' ?
          <Button className={'submit'}>Submit</Button> :
          <Button onClick={e => this.props.nextStep(e)} className={'next'}> Next</Button>
        }
      </div>
    )
  }
}
