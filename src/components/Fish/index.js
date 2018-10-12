import React, { Component } from 'react'
import Course from '../Course'

export default class Fish extends Component {
  render() {
    const filteredCourseType = this.props.data.map(item => ({
      ...item, 
      courseType: item.courseType.filter(x => x === 2)}))
      .filter(x => x.courseType.length > 0)
    return (
      <div>
        <h1>Fish</h1>
        <Course filteredCourseType={filteredCourseType} />
      </div>
    )
  }
}
