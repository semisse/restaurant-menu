import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Navlink,
  Step,
  StepName,
  Icon } from './styles'

export default class Map extends Component {

  // Check if the section has already some courses selected,
  // and add a check mark
  select = (page) => {
    const pageSelected = this.props.data && this.props.data.map(item => ({
      ...item,
      courseType: item.courseType.filter(x => x === page) }))
      .filter(x => x.courseType.length > 0 && x.selected === true)
    return pageSelected
  }
  render() {
    return (
      <div>
        <Navlink to='/0' className={this.select(0).length > 0 && 'completed'} >
          <Step>
            <Icon />
            <StepName>
              Hors d'oeuvres
            </StepName>
          </Step>
        </Navlink>

        <Navlink to='/1' className={this.select(1).length > 0 && 'completed'}>
          <Step>
            <Icon />
            <StepName>
              Soup
            </StepName>
          </Step>
        </Navlink>

        <Navlink to='/2' className={this.select(2).length > 0 && 'completed'}>
          <Step>
            <Icon />
            <StepName>
              Fish
            </StepName>
          </Step>
        </Navlink>

        <Navlink to='/3' className={this.select(3).length > 0 && 'completed'}>
          <Step>
            <Icon />
            <StepName>
              Salad
            </StepName>
          </Step>
        </Navlink>

        <Navlink to='/4' className={this.select(4).length > 0 && 'completed'}>
          <Step>
            <Icon />
            <StepName>
              Main Course
            </StepName>
          </Step>
        </Navlink>

        <Navlink to='/5' className={this.props.required ? 'disabled' : this.select(5).length > 0 && 'completed'} >
          <Step>
            <Icon />
            <StepName>
              Desert
            </StepName>
          </Step>
        </Navlink>

        <Navlink to='/6' className={this.props.required ? 'disabled' : this.select(6).length > 0 && 'completed'} >
          <Step>
            <Icon />
            <StepName>
              Confirmation
            </StepName>
          </Step>
        </Navlink>
      </div>
    )
  }
}

Map.propTypes = {
  data: PropTypes.array,
  disabled: PropTypes.bool
}
