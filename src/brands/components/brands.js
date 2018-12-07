import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Days from '../../days/components/days.js'

class Brand extends Component {
	render(){
		return(
			<div className="back">
				<h2>{this.props.brands}</h2>
				<Days data={this.props.dayData}/>
			</div>
		)
	}
}

export default Brand;