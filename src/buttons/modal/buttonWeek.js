import React from 'react';

function ButtonWeek (props) {
	return(
		<div className="d-inline">
			<button className="button col-6" onClick={props.handleWeekClick}>
				Week
			</button>
		</div>
	)
}

export default ButtonWeek;