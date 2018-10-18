import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from '../../styles/global'

export default class Navigation extends Component {
  // Check if there state is required and if we are on Main Course page
  // and enable or disable the button accordingly
  isDisabled = () => {
    if (this.props.required  && this.props.pathname === '/4') {
      return 'next disabled'
    } else {
      return 'next'
    }
  }
  render() {
    return (
      <div>
        {this.props.pathname !== '/0' &&
          <Button
            onClick={e => this.props.previousStep(e)}
            className={'previous'}>
            Previous
          </Button>
        }
        {this.props.pathname === '/6' ?
          <Button className={'submit'}>Submit</Button> :
          <Button
            onClick={e => this.props.nextStep(e)}
            className={this.isDisabled()}>
              Next
          </Button>
        }
        {console.log(this.props.required)}
      </div>
    )
  }
}

Navigation.propTypes = {
  data: PropTypes.array,
  pathname: PropTypes.string,
  previousStep: PropTypes.func,
  nextStep: PropTypes.func,
  required: PropTypes.bool
}