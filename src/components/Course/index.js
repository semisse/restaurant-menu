import React, { Component } from 'react'
import Required from '../Required'
import {
  Column,
  CourseImage,
  Description,
  Spice,
  Card,
  LdsRipple } from '../../styles/global'

import Default from '../../img/default.svg'

export default class Course extends Component {
  handleClick = (id) => {
    this.props.update(id)
  }

  renderRequired = () => {
    const pageSelected = this.props.data && this.props.data.map(item => ({
      ...item,
      courseType: item.courseType.filter(x => x === 4) }))
      .filter(x => x.courseType.length > 0 && x.selected === true)

    if (this.props.pathname === '/4' && this.props.required && pageSelected.length === 0) {
      return <Required />
    }
  }

  render () {
    if ( this.props.loading === true) {
      return(
        <LdsRipple className='ldsRipple'>
          <div></div>
          <div></div>
          {console.log(this.props.loading)}
        </LdsRipple>
      )
    } else {
    return (
      <div>
        {this.renderRequired()}
        <Column>
          {this.props.filteredCourseType && this.props.filteredCourseType.map(course =>
            <Card key={course.id} onClick={() => this.handleClick(course.id)} selected={course.selected && course.selected}>
              <div>
                <CourseImage style={{ backgroundImage: course.image === null ? `url(${Default})` : `url(${course.image})` }} alt={course.title} />
              </div>
              <h2>{course.title}</h2>
              <Description>{course.description}</Description>
              {Array.apply(null, { length: course.spiceLevel }).map((e, i) => (
                <Spice key={i} />
              ))}
            </Card>
          )}
        </Column>
      </div>
    )}
  }
}
