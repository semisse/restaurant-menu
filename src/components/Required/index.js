import React, { Component } from 'react'
import { Wrapper, Warning } from '../../styles/global'

export default class Required extends Component {
  render() {
    return (
      <Wrapper>
        <Warning>
          Please select at least one main course! :)
        </Warning>
      </Wrapper>
    )
  }
}

