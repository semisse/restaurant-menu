import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import Checked from '../../img/checked.svg'

export const Navlink = styled(NavLink)`
  width: 14%;
  height: 3.125rem;
  display: inline-block;
  margin: 0;
  margin-top: 2.5rem;
  position: relative;
  text-align: center;
  text-decoration: none;
  font-size: .8rem;
  &.completed > div > span {
    background: url(${Checked}) no-repeat center center;
    background-size: 0.625rem 0.625rem;
  }
  &.disabled, &[disabled] {
    pointer-events: none;
    & div > span, & div > div {
      opacity: .3
    }
  }
  &.active > div > span {
    background: green;
  }
  &.active > div > div {
    color: green
  }
  &:hover {
    cursor: pointer;
    & > div > span:before {
      content: '';
      position: absolute;
      width: 0.375rem;
      height: 0.375rem;
      background: green;
      border-radius: 50%;
      top: 50%;
      left: 50%;
      margin-top: -0.1875rem;
      margin-left: -0.1875rem;
      transition: all .2s ease;
    }
    &.completed {
      & > div > span:before {
        display: none
      }
    }
  }
  &:before {
    position: absolute;
    top: 0.625rem;
    left: 0;
    width: 2.5rem;
    height: 0.0625rem;
    background: olive;
    content: ''
  }
  &:after {
    position: absolute;
    top: 0.625rem;
    right: 0;
    width: 2.5rem;
    height: 0.0625rem;
    background: olive;
    content: ''
  }
  &:first-child {
    &:before {
      display: none
    }
  }
  &:last-child {
    &:after {
      display: none
    }
  }
`

export const Step = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  position: relative;
  transition: all .2s ease;
`

export const StepName = styled.div`
  color: grey;
  margin-top: 0.625rem;
`
export const Icon = styled.span`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  display: block;
  margin: 0 auto;
  position: relative;
  border: 0.0625rem solid grey;
  transition: all .2s ease;
`