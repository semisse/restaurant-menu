import styled, { css } from 'styled-components'
import Close from '../img/close.svg'
import Chilli from '../img/spice.svg'

// Grid
export const BodyWrapper = styled.div`
  margin: 0 auto;
  max-width: 75rem;
  align-items: center;
  justify-self: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

export const Grid = styled.div`
  display: grid;
  width: 100%;
`

export const Column = styled.div`
  display: grid;
  grid-template-columns: 19rem 19rem 19rem;
  grid-gap: 2.5rem;
  grid-column-gap: 1.25rem;
  justify-content: center;
`

//Buttons
export const Button = styled.a`
  width: 7rem;
  background: #54B46D;
  padding: 1.5rem 3rem;
  margin: calc(2*2rem) 0
  cursor: pointer;
  text-align: center;
  color: white;
  border: 0.1875rem solid white
  transition: border .2s ease, background .2s ease, color .2s ease;
  &.previous{
    float: left
  }
  &.next, &.submit{
    float: right
  }
  &.disabled {
    pointer-events: none;
    opacity: .5
  }
  &:hover {
    border: 0.1875rem solid #54B46D;
    background: white;
    color: #54B46D;
    font-weight: bold;
  }
  &:active {
    background: #54B46D;
    color: white;
  }
`

// Section titles
export const StepTitle = styled.h1`
  background: white;
  border: 0.1875rem solid #54B46D;
  text-align: center;
  color: #54B46D;
  padding: 1rem 3rem;
  display: block;
  margin: 0 auto;
  width: fit-content;
  margin-top: 2rem;
  margin-bottom: 2rem;
`

// Warnings
export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`

export const Warning = styled.div`
  width: 50%;
  height: 100%;
  background: white;
  border: 0.1875rem solid #E0624B;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  & .Icon {
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 1rem;
  }

  &.allergy {
    border: 0 none transparent;
  }
`

// Modal
export const ModalDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  &.display-block {
    display: block;
  }
  &.display-none {
    display: none;
  }
`

export const ModalSection = styled.section`
  position: fixed;
  background: white;
  width: 50%;
  height: calc(100vh - 200px);
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  padding: 4rem 1rem;
  overflow-y: auto;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: white;
  border: 2px solid #B2B2B2;
  text-indent: -99999rem;
  background: white url(${Close}) no-repeat center center;
  background-size: 50%;
  cursor: pointer;
`

// Course Cards
export const CourseImage = styled.div`
  width: 100%;
  height: 10rem;
  background-position: center center;
  background-size: cover;
`

export const Description = styled.p`
  line-height: 1.5rem;
`

export const Spice = styled.span`
  width: 1.25rem;
  height: 1.5625rem;
  background-image: url(${Chilli});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  display: inline-block;
`

export const Card = styled.div`
      height: 28rem;
      transition: all .2s;
      padding: .75rem;
      position: relative;
      transition: outline .1s ease;
      &:hover{
        box-shadow: 0 0.3125rem 0.625rem 0.0625rem rgba(0,0,0,0.20);
      }
      ${({ selected }) => selected && css`
        outline: thick solid #539480;
        &:after{
          position: absolute;
          top: -0.9rem;
          right: -0.8rem;
          width: 1.5rem;
          height: 1.5rem;
          border-radius: 50%;
          background: white url(${Close}) no-repeat center center;
          background-size: 50%;
          border: 0.125rem solid #B2B2B2;
          content: '';
        }
      `}
    `

// Confirmation
export const Type = styled.h3`
  font-size: 1.5rem;
  padding-left: 5rem;
  color: #54B46D;
`

export const List = styled.li`
  list-style: none;
  padding: 0 5rem 1rem 5rem;
  display: flex;
  align-items: center;
`

export const CourseThumbImageCircle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 1rem;
  overflow: hidden;
`

export const CourseThumbImage = styled.img`
  height: 100%;
  display: inline;
  margin: 0 auto;
  margin-right: 1rem;
`

// Allergy
export const AllergyItem = styled.div`
  text-align: left;
  padding: 0 0 3rem 12rem;
`

export const InlineButton = styled.button`
  background: none;
  border: 0;
  font-size: 1em;
  text-decoration: underline;
  color: green;
  cursor: pointer;
`
