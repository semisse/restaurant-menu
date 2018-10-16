import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Course from '../Course'
import { StepTitle } from '../../styles/global'

export default class Horsdoeuvres extends Component {
  render() {
    const filteredCourseType = this.props.data && this.props.data.map(item => ({
      ...item,
      courseType: item.courseType.filter(x => x === 0)}))
      .filter(x => x.courseType.length > 0)
    return (
      <div>
        <StepTitle>Hors d'oeuvres</StepTitle>
        <Course filteredCourseType={filteredCourseType} update={this.props.update} />
      </div>
    )
  }
}

Horsdoeuvres.propTypes = {
  data: PropTypes.array,
  update: PropTypes.func
}