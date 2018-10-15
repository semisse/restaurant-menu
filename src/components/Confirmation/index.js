import React, { Component } from 'react'
import styled from 'styled-components'

const Image = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: inline-block;
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
        <h1>Confirmation</h1>

        {this.coursesByType(0).map(item =>
          <div key={item.id}>
            <h3>Hors d'oeuvres</h3>
            <li key={item.id}>
              <Image src={item.image} alt={item.title} />
              {item.title}
            </li>
          </div>
        )}

        {this.coursesByType(1).map(item =>
          <div key={item.id}>
            <h3>Soup</h3>
            <Image src={item.image} alt={item.title} />
            <li key={item.id}>{item.title}</li>
          </div>
        )}

        {this.coursesByType(2).map(item =>
          <div key={item.id}>
            <h3>Fish</h3>
            <Image src={item.image} alt={item.title} />
            <li key={item.id}>{item.title}</li>
          </div>
        )}

        {this.coursesByType(3).map(item =>
          <div key={item.id}>
            <h3>Salad</h3>
            <Image src={item.image} alt={item.title} />
            <li key={item.id}>{item.title}</li>
          </div>
        )}

        {this.coursesByType(4).map(item =>
          <div key={item.id}>
            <h3>Main Course</h3>
            <Image src={item.image} alt={item.title} />
            <li key={item.id}>{item.title}</li>
          </div>
        )}

        {this.coursesByType(5).map(item =>
          <div key={item.id}>
            <h3>Desert</h3>
            <li key={item.id}>
              <Image src={item.image} alt={item.title} />
              {item.title}
            </li>
          </div>
        )}
      </div>
    )
  }
}