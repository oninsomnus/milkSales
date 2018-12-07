import React from 'react';
import './button.css'

function ButtonDate (props) {
	return(
		<div className="pieicon">
			<button onClick={props.handleDateClick}>
				<i class="material-icons">date_range</i>
			</button>
		</div>
	)
}

export default ButtonDate;