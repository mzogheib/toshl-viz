import React from 'react'
import PropTypes from 'prop-types'
import Chart from 'react-google-charts'

const Pie = ({ data, colors }) => (
  <Chart
    width={400}
    height={400}
    chartType="PieChart"
    loader={<div>Loading Chart</div>}
    data={data}
    options={{
      legend: 'none',
      chartArea: {
        width: '75%',
        height: '75%',
      },
      colors: [colors.pieFill],
      pieSliceBorderColor: colors.pieStroke,
      pieSliceTextStyle: {
        color: colors.chartText,
      },
    }}
  />
)

export default Pie

Pie.propTypes = {
  data: PropTypes.array.isRequired,
  colors: PropTypes.object.isRequired,
}
