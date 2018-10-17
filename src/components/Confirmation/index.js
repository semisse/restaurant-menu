import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  StepTitle,
  Type,
  List,
  CourseThumbImageCircle,
  CourseThumbImage,
  CourseName,
  Column } from '../../styles/global'
import Allergy from '../Allergy'

const ColumnConfirmation = styled(Column)`
  grid-template-columns: auto;
`

export default class Confirmation extends Component {
  // Check if there is any allergenic ingridient
  // in the selected courses
  allergyInfo = () => {
    const allergy = this.props.data.filter(item => item.selected && item.allery.length !== 0)
    if (allergy.length !== 0){
      return true
    }
  }

  // Check if there are any selected courses and list them
  SelectedCourses = (section) => {
    const Selection = this.props.data.filter(item => item.selected && item.courseType[0] === section).map(item => {
      return (
          <div key={item.id}>
            <List key={item.id}>
              <CourseThumbImageCircle>
                <CourseThumbImage src={item.image} alt={item.title} />
              </CourseThumbImageCircle>
              <CourseName>{item.title}</CourseName>
            </List>
          </div>
        )
      })
    return Selection
  }

  // Grab the results from SelectedCourses() and separate
  // them through sections
  Results = () => {
    const Titles = ['Hors d\'oeuvres', 'Soup', 'Fish', 'Salad', 'Main Course', 'Dessert']
    const TitlesAndCourses = Titles.map((item, i) => {
      if(this.SelectedCourses(i).length > 0){
          return (
            <div key={i}>
              <Type>{item}</Type>
              {this.SelectedCourses(i)}
            </div>
          )
        }
      }
    )
    return TitlesAndCourses
  }
  render() {
    return (
      <div>
        <StepTitle>Confirmation</StepTitle>
        {this.allergyInfo() && <Allergy data={this.props.data} />}
        <ColumnConfirmation>
        {this.Results()}
        </ColumnConfirmation>
      </div>
    )
  }
}

Confirmation.propTypes = {
  data: PropTypes.array
}