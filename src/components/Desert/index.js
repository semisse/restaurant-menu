import React, { Component } from 'react'
import Course from '../Course'

export default class Desert extends Component {
  render() {
    const filteredCourseType = this.props.data.map(item => ({
      ...item, 
      courseType: item.courseType.filter(x => x === 5)}))
      .filter(x => x.courseType.length > 0)
    return (
      <div>
        <h1>Desert</h1>
        <Course filteredCourseType={filteredCourseType} />
      </div>
    )
  }
}
