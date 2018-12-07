import React from 'react';
import PropTypes from 'prop-types';
import Saleyear from './yearotro.js'

function Piecomponent (props) {
	return(
		<div>
			{
				props.yearsale.map((item) =>{
					return(
						<Saleyear yearData={item} />
					)
				})
			}
		</div>
	)
}

export default Piecomponent;