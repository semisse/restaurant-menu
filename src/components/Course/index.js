import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import Chilli from '../../img/spice.svg'

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
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id, title) {
    this.props.update(id, title)
  }

  render() {
    const Card = styled.div`
      width: 18rem;
      height: 26rem;
      transition: all .2s;
      padding: .75rem;
      position: relative;
      &:hover{
        box-shadow: 0 5px 10px 1px rgba(0,0,0,0.20);
      }
      ${({ selected }) => selected && css`
        background: blue;
        &:after{
          position: absolute;
          top: -5px;
          right: -5px;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: red;
          content: '';
        }
      `}
    `
    return (
      <div>
        <Column>
        {this.props.filteredCourseType && this.props.filteredCourseType.map(course => 
          <Card key={course.id} onClick={(id, title) => this.handleClick(course.id, course.title)} selected={course.selected && course.selected}>
            <div>
              <CourseImage style={{backgroundImage: `url(${course.image})`}} alt={course.title} />
            </div>
            <Title>{course.title}</Title>
            <Description>{course.description}</Description>
            {Array.apply(null, {length: course.spiceLevel}).map((e, i) => (
              <Spice key={i} />
            ))}
          </Card>
        )}
        </Column>
      </div>
    )
  }
}
