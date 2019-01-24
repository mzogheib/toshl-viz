import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import D3PieChart from '../D3/Pie'

const Charts = ({ data }) => (
  <div className="charts">
    <div className="charts__chart">
      <div className="charts__chart-title">D3.js</div>
      <D3PieChart data={Object.values(data)} />
    </div>
  </div>
)

export default Charts

Charts.propTypes = {
  data: PropTypes.object,
}
