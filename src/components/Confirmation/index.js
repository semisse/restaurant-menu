import React, { Component } from 'react'
import styled from 'styled-components'
import {
  StepTitle,
  Type,
  List,
  CourseThumbImageCircle,
  CourseThumbImage,
  Column } from '../../styles/global'
import Allergy from '../Allergy'

const ColumnConfirmation = styled(Column)`
  grid-template-columns: auto;
`

export default class Confirmation extends Component {
  coursesByType = (Type) => {
    const courses = this.props.data.filter(item => item.selected && item.courseType[0] === Type)
    return courses
  }

  allergyInfo = () => {
    const allergy = this.props.data.filter(item => item.selected && item.allery.length !== 0)
    if (allergy.length !== 0){
      return true
    }
  }

  render() {
    return (
      <div>
        <StepTitle>Confirmation</StepTitle>
        {this.allergyInfo() && <Allergy data={this.props.data} />}
        <ColumnConfirmation>
          {this.coursesByType(0).length > 0 && <Type>Hors d'oeuvres</Type>}
          {this.coursesByType(0).map(item =>
            <div key={item.id}>
              <List key={item.id}>
                <CourseThumbImageCircle>
                  <CourseThumbImage src={item.image} alt={item.title} />
                </CourseThumbImageCircle>
                {item.title}
              </List>
            </div>
          )}
          {this.coursesByType(1).length > 0 && <Type>Soup</Type>}
          {this.coursesByType(1).map(item =>
            <div key={item.id}>
              <List key={item.id}>
                <CourseThumbImageCircle>
                  <CourseThumbImage src={item.image} alt={item.title} />
                </CourseThumbImageCircle>
                {item.title}
              </List>
            </div>
          )}
          {this.coursesByType(2).length > 0 && <Type>Fish</Type>}
          {this.coursesByType(2).map(item =>
            <div key={item.id}>
              <List key={item.id}>
                <CourseThumbImageCircle>
                  <CourseThumbImage src={item.image} alt={item.title} />
                </CourseThumbImageCircle>
                {item.title}
              </List>
            </div>
          )}
          {this.coursesByType(3).length > 0 && <Type>Salad</Type>}
          {this.coursesByType(3).map(item =>
            <div key={item.id}>
              <List key={item.id}>
                <CourseThumbImageCircle>
                  <CourseThumbImage src={item.image} alt={item.title} />
                </CourseThumbImageCircle>
                {item.title}
              </List>
            </div>
          )}
          {this.coursesByType(4).length > 0 && <Type>Main Course</Type>}
          {this.coursesByType(4).map(item =>
            <div key={item.id}>
              <List key={item.id}>
                <CourseThumbImageCircle>
                  <CourseThumbImage src={item.image} alt={item.title} />
                </CourseThumbImageCircle>
                {item.title}
              </List>
            </div>
          )}
          {this.coursesByType(5).length > 0 && <Type>Dessert</Type>}
          {this.coursesByType(5).map(item =>
            <div key={item.id}>
              <List key={item.id}>
                <CourseThumbImageCircle>
                  <CourseThumbImage src={item.image} alt={item.title} />
                </CourseThumbImageCircle>
                {item.title}
              </List>
            </div>
          )}
        </ColumnConfirmation>
      </div>
    )
  }
}