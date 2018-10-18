import React, { Component } from 'react'
import AllergyIcon from '../../img/allergy-warning.svg'
import {
  Wrapper,
  Warning,
  ModalDiv,
  ModalSection,
  List,
  CourseThumbImageCircle,
  CourseThumbImage,
  CourseName,
  AllergyItem,
  CloseButton,
  InlineButton } from '../../styles/global'


export default class Allergy extends Component {
  state = {
    show: false
  }
  showModal = () => {
    this.setState({
      show: true
    })
  }
  hideModal = () => {
    this.setState({
      show: false
    })
  }
  escFunction = (e) => {
    e.keyCode === 27 && this.setState({ show: false })
  }
  componentDidMount() {
    document.addEventListener('keydown', this.escFunction, false)
  }

  render() {
    return (
      <Wrapper>
        <Warning className={'allergy'}>
          <img src={AllergyIcon} className={'Icon'} alt={'allergenic ingredients'} />
          <p>Some courses in your order may contain allergenic ingredients. </p>
          <InlineButton onClick={this.showModal}>More details</InlineButton>

          <Modal show={this.state.show} handleClose={this.hideModal}>
            {this.props.data && this.props.data.filter(item => item.selected && item.allery.length !== 0).map((item) => {
              return (
                <div key={item.id}>
                  <List key={item.id}>
                    <CourseThumbImageCircle>
                      <CourseThumbImage src={item.image} alt={item.title} />
                    </CourseThumbImageCircle>
                    <CourseName>{item.title}</CourseName>
                  </List>
                  <AllergyItem>
                      It contains:
                      {item.allery.map((item, i) => <li key={i}>{item}</li>)}
                    </AllergyItem>
                </div>
              )
            })}
          </Modal>
        </Warning>
      </Wrapper>
    )
  }
}

const Modal = ({ handleClose, show, children }) => {
  return (
    <ModalDiv className={show ? "display-block" : "display-none"}>
      <ModalSection>
        <h1>Courses containing allergenic ingredients</h1>
        {children}
        <CloseButton onClick={handleClose}>close</CloseButton>
      </ModalSection>
    </ModalDiv>
  );
};