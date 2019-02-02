import React from 'react'
import PropTypes from 'prop-types'
import { pie, arc, ascending } from 'd3'
import Slice from './Slice'
import Label from './Label'

const PIE_INNER_RADIUS = 0
const PIE_OUTER_RADIUS = 150

const Pie = ({ data, labelFormat, colors }) => {
  const height = 400
  const width = 400

  const labelFormatFn = labelFormat || (data => data.label)

  const sliceParams = pie()
    .value(d => d.value)
    .sort((a, b) => {
      return ascending(a.value, b.value)
    })(data)
    .map(d => ({
      innerRadius: PIE_INNER_RADIUS,
      outerRadius: PIE_OUTER_RADIUS,
      startAngle: d.startAngle,
      endAngle: d.endAngle,
      value: d.data.value,
      label: labelFormatFn(d.data),
    }))
    .map(params => ({
      centroid: arc().centroid(params),
      ...params,
    }))

  const slices = sliceParams.map((p, i) => (
    <Slice key={i} params={p} colors={colors} />
  ))

  const labels = sliceParams.map((p, i) => (
    <Label
      key={i}
      centroid={p.centroid}
      label={p.label}
      color={colors.chartText}
    />
  ))

  return (
    <div>
      <svg height={height} width={width}>
        <g transform={`translate(${width / 2}, ${height / 2})`}>
          {slices}
          {labels}
        </g>
      </svg>
    </div>
  )
}

export default Pie

Pie.propTypes = {
  data: PropTypes.array.isRequired,
  labelFormat: PropTypes.func,
  colors: PropTypes.object.isRequired,
}
