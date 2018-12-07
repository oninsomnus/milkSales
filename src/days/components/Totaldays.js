import React from 'react'
import './total.css'

function Totaldays (props) {
	return(
		<div>
			<p className="Total">Total Sales: </p>
			<p className="TotalN">{props.numbers}</p>
		</div>
	)

}

export default Totaldays;