import React, { Component } from 'react';
import {
  FlexibleWidthXYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  VerticalBarSeries,
  LineSeries
} from 'react-vis';

function Graph (props) {
	console.log(props.dayData.week);
	const days = props.dayData.week.map((item) => {
		return {x: item.day, y: item.sale}
	})
	return(
		<div>
			<FlexibleWidthXYPlot height={200} xType="ordinal">
				<VerticalGridLines style={{stroke: '#000'}}/>
	  			<HorizontalGridLines style={{stroke: '#000'}}/>
				<XAxis title="Sales" />
				<YAxis title="Days" />
				<LineSeries data={days} stroke="black" strokeWidth="3" curve={'curveStepBefore'}/>
			</FlexibleWidthXYPlot>
		</div>
	)
}

export default Graph;