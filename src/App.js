import React, { Component } from 'react'
import Horsdoeuvres from './components/Horsdoeuvres';
import Soup from './components/Soup';
import Fish from './components/Fish';
import Salad from './components/Salad';
import Maincourse from './components/Maincourse';
import Desert from './components/Desert';
import Confirmation from './components/Confirmation';
import Pager from './components/Pager'
import styled from 'styled-components'

const Grid = styled.div`
  display: grid;
`

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      step: 0,
      required: false
    }
    this.nextStep = this.nextStep.bind(this);
    this.previousStep = this.previousStep.bind(this);
    this.update = this.update.bind(this)
  }

  componentDidMount(){
    const url =`https://api.myjson.com/bins/sf7fw`
    fetch(url)
    .then(response => response.json())
    .then(data => this.setState({ data }))
  }

  nextStep() {
    if (this.state.step < 6) {
      this.setState({
        step: this.state.step + 1
      });
    }

    //Checking if we are on the Main Course section, where it is required
    //to select at least one course.
    const MainCourse = this.state.data && this.state.data.map(item => ({
      ...item,
      courseType: item.courseType.filter(x => x === 4)}))
      .filter(x => x.courseType.length > 0)

    const MainCourseSelected = MainCourse.filter(item => item.selected === true)

    if(this.state.step === 4 && MainCourseSelected.length === 0 ) {
      this.setState({
        step: this.state.step,
        required: true
      });
    }
  }

  previousStep() {
    if (this.state.step > 0) {
      this.setState({
        step: this.state.step - 1
      });
    }
  }

  update(id){
    let data = [...this.state.data]
    let item = {
      ...data[id],
      selected: !data[id].selected
    }
    data[id] = item
    this.setState({data, required: !this.state.required})
  }

  renderStep(step) {
    switch (step) {
      case 1:
        return <Soup data={this.state.data} update={this.update} />;
      case 2:
        return <Fish data={this.state.data} update={this.update} />;
      case 3:
        return <Salad data={this.state.data} update={this.update} />;
      case 4:
        return <Maincourse data={this.state.data} required={this.state.required} update={this.update} />;
      case 5:
        return <Desert data={this.state.data} update={this.update} />;
      case 6:
        return <Confirmation data={this.state.data} update={this.update} />;
      default:
        return <Horsdoeuvres data={this.state.data} update={this.update} />;
    }
  }

  render() {
    return (
      <div>
        <Grid>
          <Pager step={this.state.step} />
          <div>
            <button onClick={this.previousStep}>Previous</button>
            <button onClick={this.nextStep}>Next</button>
          </div>
          {this.renderStep(this.state.step)}
          <div>
            <button onClick={this.previousStep}>Previous</button>
            <button onClick={this.nextStep}>Next</button>
          </div>
        </Grid>
      </div>
    );
  }
}

export default App;
