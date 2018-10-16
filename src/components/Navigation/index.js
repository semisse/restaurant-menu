import React, { Component } from 'react'
import styled from 'styled-components'

const Button = styled.a`
  width: 7rem;
  background: #54B46D;
  padding: 1.5rem 3rem;
  margin: calc(2*2rem) 0
  cursor: pointer;
  text-align: center;
  color: white;
  border: 3px solid white
  transition: border .2s ease, background .2s ease, color .2s ease;
  &.previous{
    float: left
  }
  &.next, &.submit{
    float: right
  }
  &:hover {
    border: 3px solid #54B46D;
    background: white;
    color: #54B46D;
    font-weight: bold;
  }
  &:active {
    background: #54B46D;
    color: white;
  }
`

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <Button onClick={e => this.props.previousStep(e)} className={'previous'}>Previous</Button>
        {this.props.pathname === '/6' ? <Button className={'submit'}>Submit</Button> : <Button onClick={e => this.props.nextStep(e)} className={'next'}> Next</Button>}
      </div>
    )
  }
}
