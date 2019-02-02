import React from 'react'
import PropTypes from 'prop-types'
import { VictoryPie, VictoryLabel } from 'victory'

const Pie = ({ data, labelFormat, colors }) => (
  <VictoryPie
    data={data}
    x="category"
    y="value"
    sortKey="value"
    labelComponent={<VictoryLabel text={labelFormat} />}
    style={{
      data: {
        fill: colors.pieFill,
        stroke: colors.pieStroke,
      },
      labels: {
        fill: colors.chartText,
      },
    }}
  />
)

export default Pie

Pie.propTypes = {
  data: PropTypes.array.isRequired,
  labelFormat: PropTypes.func,
  colors: PropTypes.object.isRequired,
}
