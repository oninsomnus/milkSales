import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {RadialChart, Hint} from 'react-vis';

function Piebrands (props) {
  console.log(props.data.year)
  const years = props.data.year.map((item) => {
    return {angle: parseInt(item.yearlysale)}
  })
  return (
    <RadialChart
      colorType={'literal'}
      colorDomain={[0, 100]}
      colorRange={[0, 10]}
      margin={{top: 100}}
      getLabel={d => d.name}
      data={years}
      labelsRadiusMultiplier={1.1}
      labelsStyle={{fontSize: 25, fill: '#222'}}
      showLabels
      style={{stroke: '#fff', strokeWidth: 2}}
      width={900}
      height={900}
    />
  );
}

export default Piebrands;