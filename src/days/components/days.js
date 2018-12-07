import React, {Component} from 'react';
import Graph from './graph-days.js';

class Days extends Component {
	render() {
		return(
			<div>
				{
					<Graph dayData={this.props.data}/>
				}
			</div>
		)
	}
}

export default Days;