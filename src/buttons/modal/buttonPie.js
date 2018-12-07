import React from 'react';
import './button.css';
import PropTypes from 'prop-types';

function ButtonPie (props) {
	return(
		<div className="pieicon">
		{
			props.pie ?
			<button onClick={props.handlePieClick}>
				<i className="material-icons">date_range</i>
			</button>
			:
			<button onClick={props.handlePieClick}>
				<i className="material-icons">pie_chart</i>
			</button>
		}
		</div>
	)
}

export default ButtonPie;