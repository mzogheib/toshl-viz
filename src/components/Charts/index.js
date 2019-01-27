import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import D3PieChart from '../D3/Pie'
import { formatCurrency, formatPercent } from '../../utils'

const Charts = ({ data }) => {
  const totalSpend = data.reduce((total, c) => c.value + total, 0)
  const labelFormat = ({ value }) => {
    const valueLabel = formatCurrency(value)
    const percentLabel = formatPercent(value / totalSpend)
    return `${percentLabel} (${valueLabel})`
  }

  return (
    <div className="charts">
      <div className="charts__chart">
        <div className="charts__chart-title">D3.js</div>
        <D3PieChart data={data} labelFormat={labelFormat} />
      </div>
    </div>
  )
}

export default Charts

Charts.propTypes = {
  data: PropTypes.array,
}
