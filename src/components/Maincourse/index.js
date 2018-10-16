import React, { Component } from 'react'
import Course from '../Course'
import { StepTitle } from '../../styles/global'

export default class Maincourse extends Component {
  componentDidMount() {
    this.props.handleRequired()
  }
  render() {
    const filteredCourseType = this.props.data && this.props.data.map(item => ({
      ...item,
      courseType: item.courseType.filter(x => x === 4)}))
      .filter(x => x.courseType.length > 0)
    return (
      <div>
        <StepTitle>Main Course</StepTitle>
        <Course filteredCourseType={filteredCourseType} data={this.props.data} update={this.props.update} required={this.props.required} pathname={this.props.pathname} />
      </div>
    )
  }
}