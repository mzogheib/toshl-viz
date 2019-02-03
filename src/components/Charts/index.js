import React from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import { mapContextToProps } from '../../contexts/colors'
import D3PieChart from '../VendorCharts/D3/Pie'
import VictoryPieChart from '../VendorCharts/Victory/Pie'
import GooglePieChart from '../VendorCharts/Google/Pie'
import { formatCurrency, formatPercent, sumBy } from '../../utils'

const transformGoogleData = items =>
  [['Category', 'Spend']].concat(items.map(item => [item.category, item.value]))
const chartsConfig = [
  { title: 'D3.js', component: D3PieChart },
  { title: 'Victory', component: VictoryPieChart },
  {
    title: 'Google',
    component: GooglePieChart,
    dataTransform: transformGoogleData,
  },
]

const Charts = ({ data, colors }) => {
  const totalSpend = sumBy(data, 'value')
  const labelFormat = ({ value }) =>
    `${formatCurrency(value)} (${formatPercent(value / totalSpend)})`

  const renderCharts = ({ chartsConfig, data }) =>
    chartsConfig.map(({ title, component, dataTransform }) => {
      const Chart = component
      return (
        <div key={title} className="charts__chart">
          <div className="charts__chart-title">{title}</div>
          <Chart
            data={dataTransform ? dataTransform(data) : data}
            labelFormat={labelFormat}
            colors={colors}
          />
        </div>
      )
    })

  return <div className="charts">{renderCharts({ chartsConfig, data })}</div>
}

export default mapContextToProps(Charts)

Charts.propTypes = {
  data: PropTypes.array.isRequired,
  colors: PropTypes.object.isRequired,
}
