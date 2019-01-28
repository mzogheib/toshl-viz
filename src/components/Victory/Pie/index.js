import React from 'react'
import PropTypes from 'prop-types'
import { VictoryPie, VictoryLabel } from 'victory'

const Pie = ({ data, labelFormat }) => (
  <VictoryPie
    data={data}
    x="category"
    y="value"
    sortKey="value"
    labelComponent={<VictoryLabel text={labelFormat} />}
  />
)

export default Pie

Pie.propTypes = {
  data: PropTypes.array.isRequired,
  labelFormat: PropTypes.func,
}
