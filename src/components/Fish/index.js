import React, { Component } from 'react'
import Course from '../Course'
import { StepTitle } from '../../styles/global'

export default class Fish extends Component {
  render() {
    const filteredCourseType = this.props.data && this.props.data.map(item => ({
      ...item,
      courseType: item.courseType.filter(x => x === 2)}))
      .filter(x => x.courseType.length > 0)
    return (
      <div>
        <StepTitle>Fish</StepTitle>
        <Course filteredCourseType={filteredCourseType} update={this.props.update} />
      </div>
    )
  }
}
