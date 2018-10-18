import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import Checked from '../../img/checked.svg'

export const NavlinkWrapper = styled.div`
  display: flex;
`
export const Navlink = styled(NavLink)`
  width: 14%;
  height: 3.125rem;
  display: flex;
  align-content: top;
  margin: 0;
  margin-top: 2.5rem;
  position: relative;
  text-align: center;
  text-decoration: none;
  font-size: .6rem;
  @media only screen  and (min-width : 1224px) {
    font-size: .8rem
  }
  /* if one course is selected, we will show a checkmark */
  &.completed > div > span {
    background: url(${Checked}) no-repeat center center;
    background-size: 0.4rem 0.4rem;
    @media only screen  and (min-width : 1224px) {
      background-size: 0.625rem 0.625rem;
    }
  }
  /* to disable next button on Main Course page if
     there is no course selected. &[disabled] IE compatible
  */
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
  /* on hover, fill the circle with green */
  &:hover {
    cursor: pointer;
    & > div > span:before {
      content: '';
      position: absolute;
      width: 0.2rem;
      height: 0.2rem;
      background: green;
      border-radius: 50%;
      top: 50%;
      left: 50%;
      margin-top: -0.1rem;
      margin-left: -0.1rem;
      transition: all .2s ease;
      @media only screen  and (min-width : 800px) {
        width: 0.375rem;
        height: 0.375rem;
        margin-top: -0.1875rem;
        margin-left: -0.1875rem;
      }
    }
    &.completed {
      & > div > span:before {
        display: none
      }
    }
  }
  /* Decorating lines that connect each step */
  &:before {
    position: absolute;
    top: .55rem;
    left: 0;
    width: 2.5rem;
    height: 0.0625rem;
    background: olive;
    content: '';
    display: none;
    @media only screen  and (min-width : 800px) {
      display: block;
    }
  }
  &:after {
    position: absolute;
    top: .55rem;
    right: 0;
    width: 2.5rem;
    height: 0.0625rem;
    background: olive;
    content: '';
    display: none;
    @media only screen  and (min-width : 800px) {
      display: block;
    }
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
  width: .7rem;
  height: .7rem;
  border-radius: 50%;
  display: block;
  margin: 0 auto;
  position: relative;
  border: 0.0625rem solid grey;
  transition: all .2s ease;
  @media only screen  and (min-width : 800px) {
    width: 1.25rem;
    height: 1.25rem;
  }
`