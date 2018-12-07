import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Days from '../../days/components/days.js'
import Month from '../../month/component/month.js'
import './brands.css'

class Brand extends Component {
	render(){
		return(
			<div className="back">
				<div className="text-center">
					<img className="image" src={this.props.image} width={300}/>
				</div>
				{
					this.props.month ?
				<Month data={this.props.dayData} /> 
				:
				<Days data={this.props.dayData}/>

				}
			</div>
		)
	}
}

export default Brand;