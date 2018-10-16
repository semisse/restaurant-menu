import React, { Component } from 'react'
import Course from '../Course'
import { StepTitle } from '../../styles/global'

export default class Desert extends Component {
  componentDidMount() {
    this.props.handleRequired()
  }
  render() {
    const filteredCourseType = this.props.data && this.props.data.map(item => ({
      ...item,
      courseType: item.courseType.filter(x => x === 5)}))
      .filter(x => x.courseType.length > 0)
    return (
      <div>
        <StepTitle>Desert</StepTitle>
        <Course filteredCourseType={filteredCourseType} update={this.props.update} />
      </div>
    )
  }
}
