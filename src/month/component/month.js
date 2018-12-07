import React, { Component } from 'react';
import Totalmonths from './totalmonths.js';
import {
  FlexibleWidthXYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  VerticalBarSeries,
  LineSeries
} from 'react-vis';

function Month (props) {
	const month = props.data.month.map((item) => {
		return {x: item.day, y: item.sale}
	})

	var totalArray = [];

	const totals = props.data.month.map((item) => {
		totalArray.push(parseInt(item.sale));
	})

	var total = totalArray.reduce(function(a, b){ return a + b; });

	return(
		<div>
			<FlexibleWidthXYPlot height={600} xType="ordinal" margin={{left: 70, bottom: 50}}>
				<VerticalGridLines style={{stroke: '#39bfc1'}}/>
	  			<HorizontalGridLines style={{stroke: '#39bfc1'}}/>
				<XAxis title="Month" />
				<YAxis title="Sales" />
				<LineSeries data={month} stroke="#39bfc1" strokeWidth="5" curve={'curveStepBefore'}/>
			</FlexibleWidthXYPlot>
			<Totalmonths numbers={total}/>
		</div>
	)
}

export default Month;