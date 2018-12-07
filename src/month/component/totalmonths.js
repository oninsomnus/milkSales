import React from 'react'
import '../../days/components/total.css'

function Totalmonths (props) {
	return(
		<div>
			<p className="Total">Total Sales: </p>
			<p className="TotalN">{props.numbers}</p>
		</div>
	)

}

export default Totalmonths;