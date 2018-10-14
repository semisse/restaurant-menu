import React, { Component } from 'react'
import styled, { css } from 'styled-components'

import Chilli from '../../img/spice.svg'
import Close from '../../img/close.svg'

const Column = styled.div`
  display: grid;
  grid-template-columns: 19rem 19rem 19rem;
  grid-gap: 2.5rem;
  grid-column-gap: 20px;
  justify-content: center;
`

const CourseImage = styled.div`
  width: 100%;
  height: 10rem;
  background-position: center center;
  background-size: cover;
`

const Title = styled.h2`
`

const Description = styled.p`
  line-height: 1.5rem;
`

const Spice = styled.span`
  width: 20px;
  height: 25px;
  background-image: url(${Chilli});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  display: inline-block;
`

export default class Course extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (id) {
    this.props.update(id)
  }

  render () {
    const Card = styled.div`
      width: 18rem;
      height: 26rem;
      transition: all .2s;
      padding: .75rem;
      position: relative;
      transition: all .2s ease;
      &:hover{
        box-shadow: 0 5px 10px 1px rgba(0,0,0,0.20);
      }
      ${({ selected }) => selected && css`
        border: 5px solid #ff6e59;
        &:after{
          position: absolute;
          top: -8px;
          right: -8px;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: white url(${Close}) no-repeat center center;
          background-size: 50%;
          border: 2px solid black;
          content: '';
        }
      `}
    `
    return (
      <div>
        {this.props.required === true ? 'required' : 'not required'}
        <Column>
          {this.props.filteredCourseType && this.props.filteredCourseType.map(course =>
            <Card key={course.id} onClick={() => this.handleClick(course.id)} selected={course.selected && course.selected}>
              <div>
                <CourseImage style={{ backgroundImage: `url(${course.image})` }} alt={course.title} />
              </div>
              <Title>{course.title}</Title>
              <Description>{course.description}</Description>
              {Array.apply(null, { length: course.spiceLevel }).map((e, i) => (
                <Spice key={i} />
              ))}
            </Card>
          )}
        </Column>
      </div>
    )
  }
}
