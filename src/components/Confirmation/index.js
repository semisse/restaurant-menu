import React, { Component } from 'react'
import styled from 'styled-components'
import { StepTitle } from '../../styles/global'

const Type = styled.h3`
  font-size: 1.5rem;
  padding-left: 5rem;
  color: #54B46D;
`

const List = styled.li`
  list-style: none;
  padding: 0 5rem 1rem 5rem;
  display: flex;
  align-items: center;
`

const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 1rem;
`

const Title = styled.li`
`

export default class Confirmation extends Component {
  constructor (props) {
    super (props)
    this.coursesByType = this.coursesByType.bind(this)
  }

  coursesByType(Type) {
    const courses = this.props.data.filter(item => item.selected && item.courseType[0] === Type)
    return courses
  }

  render() {
    return (
      <div>
        <StepTitle>Confirmation</StepTitle>

        {this.coursesByType(0).length > 0 && <Type>Hors d'oeuvres</Type>}
        {this.coursesByType(0).map(item =>
          <div key={item.id}>
            <List key={item.id}>
              <Image src={item.image} alt={item.title} />
              {item.title}
            </List>
          </div>
        )}
        {this.coursesByType(1).length > 0 && <Type>Soup</Type>}
        {this.coursesByType(1).map(item =>
          <div key={item.id}>
            <List key={item.id}>
              <Image src={item.image} alt={item.title} />
              {item.title}
            </List>
          </div>
        )}
        {this.coursesByType(2).length > 0 && <Type>Fish</Type>}
        {this.coursesByType(2).map(item =>
          <div key={item.id}>
            <List key={item.id}>
              <Image src={item.image} alt={item.title} />
              {item.title}
            </List>
          </div>
        )}
        {this.coursesByType(3).length > 0 && <Type>Salad</Type>}
        {this.coursesByType(3).map(item =>
          <div key={item.id}>
            <List key={item.id}>
              <Image src={item.image} alt={item.title} />
              {item.title}
            </List>
          </div>
        )}

        {this.coursesByType(4).length > 0 && <Type>Main Course</Type>}
        {this.coursesByType(4).map(item =>
          <div key={item.id}>
            <List key={item.id}>
              <Image src={item.image} alt={item.title} />
              {item.title}
            </List>
          </div>
        )}

        {this.coursesByType(5).length > 0 && <Type>Dessert</Type>}
        {this.coursesByType(5).map(item =>
          <div key={item.id}>
            <List key={item.id}>
              <Image src={item.image} alt={item.title} />
              {item.title}
            </List>
          </div>
        )}
      </div>
    )
  }
}