import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import { ColorsContext } from '../../contexts/colors'
import D3PieChart from '../VendorCharts/D3/Pie'
import VictoryPieChart from '../VendorCharts/Victory/Pie'
import GooglePieChart from '../VendorCharts/Google/Pie'
import { formatCurrency, formatPercent } from '../../utils'

const ChartsComponent = ({ data, colors }) => {
  const totalSpend = data.reduce((total, c) => c.value + total, 0)
  const labelFormat = ({ value }) =>
    `${formatCurrency(value)} (${formatPercent(value / totalSpend)})`

  const googleData = [['Category', 'Spend']].concat(
    data.map(item => [item.category, item.value])
  )

  const charts = [
    { title: 'D3.js', component: D3PieChart },
    { title: 'Victory', component: VictoryPieChart },
    { title: 'Google', component: GooglePieChart, customData: googleData },
  ]

  const renderCharts = charts =>
    charts.map(({ title, component, customData }) => {
      const Chart = component
      return (
        <div key={title} className="charts__chart">
          <div className="charts__chart-title">{title}</div>
          <Chart
            data={customData || data}
            labelFormat={labelFormat}
            colors={colors}
          />
        </div>
      )
    })

  return <div className="charts">{renderCharts(charts)}</div>
}

class Charts extends Component {
  render() {
    const colors = this.context
    const props = {
      ...this.props,
      colors,
    }
    return <ChartsComponent {...props} />
  }
}

export default Charts

Charts.propTypes = {
  data: PropTypes.array,
}

Charts.contextType = ColorsContext
