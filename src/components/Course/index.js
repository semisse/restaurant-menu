import React, { Component } from 'react'
import styled from 'styled-components'

const Peppers = styled.span`
  width: 20px;
  height: 40px;
  background: red;
  display: inline-block;
  margin: 5px;
`

export default class Course extends Component {
  render() {
    return (
      <div>
        {this.props.filteredCourseType.map(course => 
          <div key={course.id}>
            <div>
              <img src={course.image} alt={course.title} />
            </div>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            {Array.apply(null, {length: course.spiceLevel}).map((e, i) => (
              <Peppers key={i} />
            ))}
          </div>
        )}
      </div>
    )
  }
}
