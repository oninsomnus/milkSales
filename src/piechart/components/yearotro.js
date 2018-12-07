import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Piebrands from './piebrand.js'

class Saleyear extends Component {
	render(){
		return(
			<div>
				<Piebrands data={this.props.yearData}/>
			</div>
		)
	}
}

export default Saleyear;