import React, { Component } from 'react'
import styled from 'styled-components'

const Step = styled.div`
  width: 200px;
  height: 50px;
  display: inline-block;
`

const IconActive = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: green;
  display: block;
`

const StepName = styled.div`
  color: black;
`

export default class Pager extends Component {
  
  render() {
    const Icon = styled.span`
      width: 20px;
      height: 20px;
      border-radius: 50%;
      display: block;
      background: ${props => this.props.step === props.sam ? "green" : "red"};
    `

    return (
      <div>
        

        <Step sam={0}>
          <Icon />
          <StepName>Hors</StepName>
        </Step>

        <Step sam={1}>
          <Icon />
          <StepName>Soup</StepName>
        </Step>

        <Step sam={2}>
          <Icon />
          <StepName>Fish</StepName>
        </Step>

        <Step sam={3}>
          <Icon />
          <StepName>Salad</StepName>
        </Step>

        <Step sam={4}>
          <Icon />
          <StepName>Main Course</StepName>
        </Step>

        <Step sam={5}>
          <Icon />
          <StepName>Desert</StepName>
        </Step>

        <Step sam={6}>
          <Icon />
          <StepName>Confirmation</StepName>
        </Step>
      </div>
    )
  }
}
