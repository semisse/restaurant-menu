import React, { Component } from 'react'

export default class Confirmation extends Component {
  render() {
    return (
      <div>
        <h1>Confirmation</h1>
        {this.props.data.filter(item => item.selected === true).map(item => <li key={item.id}>{item.title}</li>)}
      </div>
    )
  }
}