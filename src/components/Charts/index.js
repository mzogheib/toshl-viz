import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import D3PieChart from '../VendorCharts/D3/Pie'
import VictoryPieChart from '../VendorCharts/Victory/Pie'
import { formatCurrency, formatPercent } from '../../utils'

const Charts = ({ data }) => {
  const totalSpend = data.reduce((total, c) => c.value + total, 0)
  const labelFormat = ({ value }) =>
    `${formatCurrency(value)} (${formatPercent(value / totalSpend)})`

  const charts = [
    { title: 'D3.js', component: D3PieChart },
    { title: 'Victory', component: VictoryPieChart },
  ]

  const renderCharts = charts =>
    charts.map(({ title, component }) => {
      const Chart = component
      return (
        <div key={title} className="charts__chart">
          <div className="charts__chart-title">{title}</div>
          <Chart data={data} labelFormat={labelFormat} />
        </div>
      )
    })

  return <div className="charts">{renderCharts(charts)}</div>
}

export default Charts

Charts.propTypes = {
  data: PropTypes.array,
}
