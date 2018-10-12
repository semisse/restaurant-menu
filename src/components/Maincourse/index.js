import React, { Component } from 'react'
import Course from '../Course'

export default class Maincourse extends Component {
  render() {
    const filteredCourseType = this.props.data && this.props.data.map(item => ({
      ...item,
      courseType: item.courseType.filter(x => x === 4)}))
      .filter(x => x.courseType.length > 0)
    return (
      <div>
        <h1>Main Course</h1>
        <Course filteredCourseType={filteredCourseType} update={this.props.update} />
      </div>
    )
  }
}
