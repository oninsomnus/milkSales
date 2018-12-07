import React, { Component } from 'react';
import Brand from '../../brands/modal/brand';
import Days from '../../days/components/days.js';
import ButtonWeek from '../../buttons/modal/buttonWeek.js'
import ButtonMonth from '../../buttons/modal/buttonMonth.js'
import ButtonPie from '../../buttons/modal/buttonPie.js'
import Piecomponent from '../../piechart/components/piecomponent.js'
import ButtonDate from '../../buttons/modal/buttonDate.js'
import './mainback.css'


class HomeContainer extends Component {
	state = {
		month: false,
		pie: false
	}
	handleMonthClick = event => {
		this.setState({
			month: true
		})
	}
	handleWeekClick = event => {
		this.setState({
			month: false
		})
	}
	handlePieClick = (event) => {
		this.setState({
			pie: !this.state.pie
		})
		console.log(this.state.pie)
	}

	render(){
		const data = this.props.data.milk;
		return(

			<div className="mainback">
				<h1 className="header">Milky Chart</h1>
				<ButtonPie pie={this.state.pie} handlePieClick={this.handlePieClick}/>

				{
					this.state.pie ?
					<Piecomponent yearsale={data} pie={this.state.pie}/>
				:	
					<div>
						<ButtonWeek handleWeekClick={this.handleWeekClick}/>
						<ButtonMonth handleMonthClick={this.handleMonthClick}/>
						<Brand brandNames={data} key={data.id} month={this.state.month} />
					</div>
				}
				
			</div>

		)
	}
}

export default HomeContainer;