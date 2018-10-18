import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Course from '../Course'
import { StepTitle } from '../../styles/global'

export default class Section extends Component {
  render () {
    // Grab each item from data and filter through the courseType.
    // The Category prop will feed the number
    const filteredCourseType = this.props.data && this.props.data.map(item => ({
      ...item,
      courseType: item.courseType.filter(x => x === this.props.category)}))
      .filter(item => item.courseType.length > 0)
    const Titles = ['Hors d\'oeuvres', 'Soup', 'Fish', 'Salad', 'Main Course', 'Dessert']
    return (
      <div>
        <StepTitle>{Titles[this.props.category]}</StepTitle>
        <Course
          filteredCourseType={filteredCourseType}
          update={this.props.update}
          loading={this.props.loading}
          required={this.props.required}
          pathname={this.props.pathname}
          data={this.props.data}
          handleRequired={this.props.handleRequired}
          step={this.props.step}
        />
      </div>
    )
  }
}

Section.propTypes = {
  data: PropTypes.array,
  update: PropTypes.func,
  loading: PropTypes.bool,
  category: PropTypes.number
}