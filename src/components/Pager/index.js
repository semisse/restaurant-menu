import React, { Component } from 'react'
import styled, { css } from 'styled-components'



export default class Pager extends Component {
  
  render() {
    const Step = styled.div`
      width: 200px;
      height: 50px;
      display: inline-block;
      ${({ active }) => active && css`
        background: green;
      `
      }
    `


    const StepName = styled.div`
      color: black;
    `
    const Icon = styled.span`
      width: 20px;
      height: 20px;
      border-radius: 50%;
      display: block;
      background: red;
    `

    return (
      <div>
        <Step active={this.props.step === 0} >
          <Icon />
          <StepName>Hors</StepName>
        </Step>

        <Step active={this.props.step === 1} >
          <Icon />
          <StepName>Soup</StepName>
        </Step>

        <Step active={this.props.step === 2} >
          <Icon />
          <StepName>Fish</StepName>
        </Step>

        <Step active={this.props.step === 3} >
          <Icon />
          <StepName>Salad</StepName>
        </Step>

        <Step active={this.props.step === 4} >
          <Icon />
          <StepName>Main Course</StepName>
        </Step>

        <Step active={this.props.step === 5} >
          <Icon />
          <StepName>Desert</StepName>
        </Step>

        <Step active={this.props.step === 6}>
          <Icon />
          <StepName>Confirmation</StepName>
        </Step>
      </div>
    )
  }
}
