import React, { Component } from 'react';
import Brand from '../../brands/modal/brand';
import Days from '../../days/components/days.js';


class HomeContainer extends Component {
	render(){
		const data = this.props.data.milk;
		return(
			<div>
				<Brand brandNames={data} key={data.id} />
			</div>

		)
	}
}

export default HomeContainer;