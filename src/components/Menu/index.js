import React, { Component } from 'react';
import Horsdoeuvres from '../Horsdoeuvres';
import Soup from '../Soup';
import Fish from '../Fish';
import Salad from '../Salad';
import Maincourse from '../Maincourse';
import Desert from '../Desert';
import Confirmation from '../Confirmation';
import Pager from '../Pager'

export default class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			step: 0
		};

		this.nextStep = this.nextStep.bind(this);
		this.previousStep = this.previousStep.bind(this);
	}

	nextStep() {
        if (this.state.step < 6) {
            this.setState({
                step: this.state.step + 1
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

	renderStep(step) {
		switch (step) {
			case 1:
                return <Soup data={this.props.data}/>;
			case 2:
				return <Fish data={this.props.data} />;
			case 3:
				return <Salad data={this.props.data} />;
			case 4:
				return <Maincourse data={this.props.data} />;
			case 5:
				return <Desert data={this.props.data} />;
			case 6:
				return <Confirmation data={this.props.data} />;
			default:
                return <Horsdoeuvres data={this.props.data} />;
		}
	}
	render() {
		return (
			<div>
                <Pager step={this.state.step} />
                <button onClick={this.previousStep}>Previous</button>
				<button onClick={this.nextStep}>Next</button>
				{this.renderStep(this.state.step)}
				<button onClick={this.previousStep}>Previous</button>
				<button onClick={this.nextStep}>Next</button>
			</div>
		);
	}
}