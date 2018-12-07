import React from 'react';
import './button.css'

function ButtonMonth (props) {
	return(
		<div className="d-inline">
			<button className="button col-6" onClick={props.handleMonthClick}>
				Month
			</button>
		</div>
	)
}

export default ButtonMonth;