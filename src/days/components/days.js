import React, { Component } from 'react';
import Totaldays from './Totaldays.js'
import {
  FlexibleXYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  VerticalBarSeries,
  LineSeries
} from 'react-vis';

function Days (props) {
	console.log(props.data.week)
	const days = props.data.week.map((item) => {
		return {x: item.day, y: item.sale}
	})

	var totalArray = [];

	const totals = props.data.week.map((item) => {
		totalArray.push(parseInt(item.sale));
	})

	var total = totalArray.reduce(function(a, b){ return a + b; });


	return(
		<div className="chart">
			<FlexibleXYPlot height={700} xType="ordinal" margin={{left: 70, bottom: 50, top: 50}}>
				<VerticalGridLines style={{stroke: '#39bfc1'}}/>
	  			<HorizontalGridLines style={{stroke: '#39bfc1'}}/>
				<XAxis title="Days" />
				<YAxis title="Sales" />
				<LineSeries data={days} stroke="#39bfc1" strokeWidth="5" curve={'curveStepBefore'}/>
			</FlexibleXYPlot>
			<Totaldays numbers={total}/>
		</div>
	)
}

export default Days;