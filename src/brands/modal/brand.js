import React from 'react';
import Brand from '../components/brands.js';
import PropTypes from 'prop-types';

function Brands (props) {
	return(
		<div>
			{
				props.brandNames.map((item) =>{
					return(
						<Brand brands={item.name} {...item} key={item.id} dayData={item} month={props.month}/>
					)
				})
			}
		</div>
	)
}

export default Brands;